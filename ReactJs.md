1. Tính chiều cao với Ref.

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

2. Lưu state Prev.

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

3. Force Update.

```
const [ignored, forceUpdate] = useReducer(x => x + 1, 0);

  function handleClick() {
    forceUpdate();
  }
```
4. Vấn đề Omit function từ các dependency.  
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



