let array = ['java', 'javascript', 'python', 'html', 'css'];
let biggerIndex= array [0];  
let smallerIndex = array [0];  
   for( let i = 0; i < array.length; i += 1){
     if(array[i].length > biggerIndex.length){
     biggerIndex = array[i];
}
   }
   
   for( let index = 0; index < array.length; index += 1){
      if(array[index].length < smallerIndex.length){
      smallerIndex = array[index];
}   
   }
    console.log(biggerIndex);
    console.log(smallerIndex);