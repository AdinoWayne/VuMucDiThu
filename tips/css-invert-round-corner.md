## CSS  
```
.wrapper {
  width: 200px;
  height: 200px;
  filter:drop-shadow(17px 13px 7px rgba(0,0,0,0.75));
}

.b {
  width: 200px;
  height: 200px;
  box-shadow: 6px 6px blue inset, 0px 0px 6px 6px green inset;
  background-color: yellow;
  border: 2px solid black;


  
  -webkit-mask:  
  radial-gradient(
    circle at right center,
    transparent 30px,
    black 31px
  ) right bottom / 51% 100%, 
  radial-gradient(
    circle at left center,
    transparent 30px,
    black 31px
  ) left bottom / 51% 100%;
  
  -webkit-mask-repeat: no-repeat;
}
```
## HTML  
```
<!DOCTYPE html>
<html>
<head>
<meta charset=utf-8 />
<title>JS Bin</title>
</head>
<body>
<div class="wrapper">
  <div class="b"></div>
</div>
</body>
</html>
```
