let biggerPrime = 0;

   for (let iPrime = 2; iPrime <= 50; iPrime += 1) {
       let primeNumber = true;
    for (let index = 2; index < iPrime; index += 1) {
       if(iPrime % index === 0){
        primeNumber = false;
       }
    }
    if(primeNumber){
        biggerPrime = iPrime;
    }
   }   
    console.log(biggerPrime);

    