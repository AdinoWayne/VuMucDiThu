## HTML  
```
<script src="https://unpkg.com/konva@^3/konva.min.js"></script>
<p>
  <button id = 'reset'>Reset</button> <br \>
  <button id = 'rotate'>Rotate +10 degrees</button> <br \>
  <button id = 'originMove'>Move origin +10 on x-axis</button> <br \>
  <button id = 'positionMove'>Move position +10 on x-axis</button>  <br \>
  <button id = 'originCenter'>Move origin to center</button>  <br \>
  <button id = 'adjustedMove'>Move both +10 on x-axis</button> 
</p>
<p>
Rotation :    <span id='angle'>0</span> <br \>
Position :   <span id='position'></span> <br \>  
Offset :   <span id='offset'></span>
<div id="container"></div>
```

## CSS  
```
body {
  margin: 10;
  padding: 10;
  overflow: hidden;
  background-color: #f0f0f0;
}
button { 
margin: 2px;
}
```

## JS  
```
let angle = 0;
const startPos = {x: 80, y: 60}, 

      // Set up a stage
      stage = new Konva.Stage({
        container: 'container',
        width: window.innerWidth,
        height: window.innerHeight
      }),
    

      // add a layer to draw on
      layer = new Konva.Layer(),

      // add a rectangle to play with
      rect = new Konva.Rect({x: startPos.x, y: startPos.y, width: 120, height: 80, fill: 'magenta', stroke: 'black', strokeWidth: 4 }),

      // And add a rectangle to act as the illustration of the original rect position
      rect1 = rect.clone({opacity: 0.2}), // new Konva.Rect({x: startPos.x, y: startPos.y, width: 120, height: 80, fill: 'magenta', stroke: 'black', strokeWidth: 4, opacity: 0.2 }),
   
      // draw a red circle to show the position point
      positionPt = new Konva.Circle({x: startPos.x, y: startPos.y, radius: 10, stroke: 'red', strokeWidth: 2 });
    
// Draw a circle to show the origin point  
originPt = positionPt.clone({stroke: 'black'}); // new Konva.Circle({x: startPos.x, y: startPos.y, radius: 10, fill: 'transparent', stroke: 'cyan', strokeWidth: 2 });

// Add the shapes to the layer    
layer.add(rect, rect1);
layer.add(originPt, positionPt);
// and the layer to the stage
stage.add(layer);

// udate the display info
updatePts();

// initial draw so we can see something
stage.draw()

// Rotate the rect around its origin.
$('#rotate').on('click', function(){
  
  angle = angle + 10;
  rect.rotate(10);
  stage.draw();
  
  $('#angle').html(angle);
  $('#offset').html('x:' + rect.offsetX() + ', y:' + rect.offsetY());
  
  updatePts();
  
})

$('#originMove').on('click', function(){
  move(10, 0); // move only the origin   
})

$('#positionMove').on('click', function(){
  move(0, 10); // move only the position   
})

$('#adjustedMove').on('click', function(){
  move(10, 10); // move both the position and origin   
})

// Apply move params
function move(originX, positionX){
  rect.position({x: rect.position().x + positionX, y: rect.position().y})
  rect.offset({x: rect.offset().x + originX, y: rect.offset().y})
  updatePts();
  stage.draw();   
}

// Move circle pos indicators and update info display.
function updatePts(){
  positionPt.position({x: rect.position().x, 
                     y: rect.position().y });
  originPt.position({x: rect.position().x - rect.offsetX(), 
                     y: rect.position().y - rect.offsetY()});
    
  $('#angle').html(angle);
  $('#offset').html('x:' + rect.offsetX() + ', y:' + rect.offsetY());    
  $('#offset').html('x:' + rect.offsetX() + ', y:' + rect.offsetY());
  $('#position').html('x:' + rect.position().x + ', y:' + rect.position().y);  
}

updatePts();

$('#reset').on('click', function(){
  
  rect.offset({x: 0, y: 0})
  rect.position(startPos)
  rect.rotation(0);
  originPt.position(startPos)  
  positionPt.position(startPos)
  angle = 0;
  
  updatePts();
  
  stage.draw();
})

$('#originCenter').on('click', function(){

  // move the offset.
  rect.offset({x:  rect.width()/2, y: rect.height()/2})
  // move the position to compensate for the offset.
//  rect.position({x: rect.position().x + rect.offsetX(), y: rect.position().y + rect.offsetY() })  

  updatePts();
    
  stage.draw();  
  
})
```
