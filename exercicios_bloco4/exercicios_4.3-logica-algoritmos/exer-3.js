let array = ['java', 'javascript', 'python', 'html', 'css'];
let emptyVar = 0;
let biggerIndex;  
  
for( let i = 0; i < array.length; i += 1){
     if(array[i].length > emptyVar){
     emptyVar = array[i].length;
     biggerIndex = array[i];
     
    }

  }
    console.log(biggerIndex);