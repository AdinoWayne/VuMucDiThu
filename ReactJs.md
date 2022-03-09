### 1. Tính chiều cao với Ref.

```
export default function App() {
  const [rect, ref] = useClientRect();
  return (
    <>
      <h1 ref={ref}>Hello, world</h1>
      {rect !== null &&
        <h2>The above header is {Math.round(rect.height)}px tall</h2>
      }
    </>
  );
}

function useClientRect() {
  const [rect, setRect] = useState(null);
  const ref = useCallback(node => {
    if (node !== null) {
      setRect(node.getBoundingClientRect());
    }
  }, []);
  return [rect, ref];
}
```

### 2. Lưu state Prev.

```
export default function Counter() {
  const [count, setCount] = useState(0);
  const prevCount = usePrevious(count);
  return <h1>Now: {count}, before: {prevCount}</h1>;
}

function usePrevious(value) {
  const ref = useRef();
  useEffect(() => {
    ref.current = value;
  });
  return ref.current;
}
```

### 3. Force Update.

```
const [ignored, forceUpdate] = useReducer(x => x + 1, 0);

  function handleClick() {
    forceUpdate();
  }
```
### 4. Vấn đề Omit function từ các dependency.  
không nên  
```
function ProductPage({ productId }) {
  const [product, setProduct] = useState(null);

  async function fetchProduct() {
    const response = await fetch('http://myapi/product' + productId); // Uses productId prop
    const json = await response.json();
    setProduct(json);
  }

  useEffect(() => {
    fetchProduct();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []); // 🔴 Không hợp lệ vì `fetchProduct` sử dụng `productId`
  // ...
}
```
nên  
```
function ProductPage({ productId }) {
  const [product, setProduct] = useState(null);

  useEffect(() => {
    // Bằng cách chuyển hàm vào bên trong effect, chúng ta dễ dàng thay được các giá trị đang sử dụng.
    async function fetchProduct() {
      const response = await fetch('http://myapi/product' + productId);
      const json = await response.json();
      setProduct(json);
    }

    fetchProduct();
  }, [productId]); // ✅ Hợp lệ vì effect chỉ sử dụng productId
  // ...
}
```
```
useEffect(() => {
    let ignore = false;
    async function fetchProduct() {
      const response = await fetch('http://myapi/product/' + productId);
      const json = await response.json();
      if (!ignore) setProduct(json);
    }

    fetchProduct();
    return () => { ignore = true };
  }, [productId]);
```
Nếu vì lý do nào đó bạn không thể chuyển hàm vào trong effect, còn một vài cách khác:

- Bạn có thể chuyển hàm ra khỏi component. Trong trường hợp đó, hàm cần đảm bảo không sử dụng bất kỳ prop và state, và không cần nằm trong dependency Trong trường hợp đó, hàm được đảm bảo không tham chiếu đến bất kỳ prop hoặc state nào, và nó cũng không cần nằm trong danh sách phụ thuộc.
- Nếu hàm bạn gọi làm một hàm thuần tính toán và an toàn để gọi trong lúc render, bạn có thể gọi nó bên ngoài của effect, và để effect phụ thuộc vào giá trị trả về.
- Như là cách cuối cùng, bạn có thể **thêm một hàm vào danh sách phụ thuộc của effect nhưng wrap phần khai báo của nó ** bên trong useCallback Hook. Việc này đảm bảo nó không thay đổi trong tất cả các lần render trừ khi danh sách phụ thuộc của chính nó cũng thay đổi:
```
function ProductPage({ productId }) {
  // ✅ Wrap trong useCallback để tránh thay đổi trên tất cả các lần render
  const fetchProduct = useCallback(() => {
    // ... làm gì đó với productId ...
  }, [productId]); // ✅ Tất cả phụ thuộc của useCallback được chỉ định

  return <ProductDetails fetchProduct={fetchProduct} />;
}

function ProductDetails({ fetchProduct }) {
  useEffect(() => {
    fetchProduct();
  }, [fetchProduct]); // ✅ All useEffect dependencies are specified
  // ...
}
```
Lưu ý trong ví dụ trên, chúng ta cần đưa function vào trong danh sách phụ thuộc. Để đảm bảo những thay đổi trên prop productId của ProductPage tự động làm phát sinh re-fetch trong component ProductDetails  

### 5. Sửa lỗi Either include it or remove the dependency array  react-hooks/exhaustive-deps  

- Sử dụng chức năng useEffectgọi lại (như trên)
```
useEffect(fetchBusinesses, [])
```
- Khai báo hàm bên trong useEffect()
```
useEffect(() => {
  function fetchBusinesses() {
    ...
  }
  fetchBusinesses()
}, [])
```
- Ghi nhớ với useCallback()
```
const fetchBusinesses = useCallback(() => {
  ...
}, [])
useEffect(() => {
  fetchBusinesses()
}, [fetchBusinesses])
```
- Vô hiệu hóa cảnh báo của eslint
```
useEffect(() => {
  fetchBusinesses()
}, []) // eslint-disable-line react-hooks/exhaustive-deps
```

### 6. sử dụng setInterval với count
```
function Counter() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setCount(c => c + 1); // ✅ Không phụ thuộc vào biến `count` bên ngoài
    }, 1000);
    return () => clearInterval(id);
  }, []); // ✅ effect của chúng ta không sử dụng bất kỳ biến nào trong phạm vi component

  return <h1>{count}</h1>;
}
// another way
export default function App() {
  const [count, setCount] = useState("1");
  const incrementCount = useCallback(() => {
    setCount(+count + 1);
  }, [count]);
  useEffect(() => {
    const timer = setTimeout(() => {
      incrementCount();
    }, 1000);
    return () => {
      clearTimeout(timer);
    };
  }, [incrementCount]);
  return <div>{`Timer started: ${count}`}</div>;
}
```

### 7. Viết shouldComponentUpdate
Nó không phải là một Hook vì nó không được viết như Hook. React.memo tương tự như PureComponent, nhưng nó chỉ so sánh các prop
```
const Button = React.memo((props) => {
  // component của bạn
});
```

### 8. Lưu trữ một tính toán
Hook useMemo cho phép bạn cache những tính toán tốn kém giữa các lần render bằng cách ghi nhớ lần tính toán trước
```
const memoizedValue = useMemo(() => computeExpensiveValue(a, b), [a, b]);
```
### 9. tạo object lớn một cách lazy
- khởi tạo state có giá trị phức tạp
```
function Table(props) {
  // ⚠️ createRows() được gọi ở tất cả các lần render
  const [rows, setRows] = useState(createRows(props.count));
  // ...
}
function Table(props) {
  // ✅ createRows() chỉ được gọi 1 lần
  const [rows, setRows] = useState(() => createRows(props.count));
  // ...
}
```
- tránh re-create giá trị khởi tạo useRef()
```
function Image(props) {
  // ⚠️ IntersectionObserver được tạo trong tất cả các lần render
  const ref = useRef(new IntersectionObserver(onIntersect));
  // ...
}

```
### 10. custom hook context:
```
import React, { createContext, useMemo } from 'react';
import { Permissions, usePermissions } from '@hooks/permissions';

export const PermissionsContext = createContext({});

export const IsPermittedProvider: React.FC = ({ children }) => {
  const permissions = usePermissions();
  const permissionsDictionary = useMemo(() => ({
    isEditPermitted: permissions.includes(Permissions.EDIT_SITE_PERMISSION),
  }), [permissions]);
  
  return (
    <PermissionsContext.Provider
      value={permissionsDictionary}
    >
      {children}
    </PermissionsContext.Provider>
  );
};
<!--  -->
import React, { useContext } from 'react';
import { PermissionsContext } from '@contexts/permissions';

export const useIsPermitted = () => useContext(PermissionsContext);
<!--  -->
import React from 'react';
import { App } from './app';

<PermissionsProvider>
  <App />
</PermissionsProvider> 
```

## 11. useful HOC

HOCs are absolutely useful, but they're useful in the same way any "higher order" function is.

Consider the following component:
```
let Button = props => <button style={{ color: props.color }} />
```
You could make another component called BlueButton:
```
let BlueButton = props => <Button color="blue" />
```
There's nothing wrong with that, but maybe you want any component to be able to be blue, not just a button. Instead we can make a generic HOC that "blueifies" the passed component:
```
let blueify = Component => props => <Component {...props} style={{ color: 'blue' }} />
```
Then you can make blue buttons, blue divs, blue anything!
```
let BlueButton = blueify(Button)
let BlueDiv = blueify(props => <div {...props} />)
```

HOC can be used for many use cases:

Code reuse, logic and bootstrap abstraction.
Render hijacking.
State abstraction and manipulation.
Props manipulation.
