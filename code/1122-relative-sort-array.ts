function relativeSortArray(arr1: number[], arr2: number[]): number[] {
  var array2D = [];
  var output = [];
  var len = arr2.length;
  for( var y = 0; y <= len; y++){
      array2D[y] = new Array();
  }
  arr1.sort((a, b) => a - b);
  for(var x = 0; x < arr1.length; x++){
      var index = arr2.indexOf(arr1[x]);
      if(index >= 0){
          array2D[index].push(arr1[x]);  
      }
      else{
          array2D[len].push(arr1[x]);
      }  
  }
  
  for(var i = 0; i <= len; i++ ){
      output = output.concat(array2D[i]);
  }
  
  return output;
};
