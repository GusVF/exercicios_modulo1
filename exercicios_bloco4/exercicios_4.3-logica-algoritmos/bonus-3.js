let number = 8;
let symbol = '*';
let inputLine = '';
let inputPosition = number;

for (let lineIndex = 0; lineIndex <= number; lineIndex += 1){
    for (let columnIndex = 0; columnIndex < number; columnIndex += 1){
        if(columnIndex < inputPosition){
        inputLine+= ' ';
    } else {
        inputLine+= symbol;
    }   
  }
    console.log(inputLine);
    inputLine= '';
    inputPosition -= 1;
}