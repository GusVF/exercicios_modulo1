function createDaysOfTheWeek() {
    const weekDays = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado']
    const weekDaysList = document.querySelector('.week-days');
  
    for (let index = 0; index < weekDays.length; index += 1) {
      const days = weekDays[index];
      const dayListItem = document.createElement('li');
      dayListItem.innerHTML = days;
  
      weekDaysList.appendChild(dayListItem);
    };
  };
  
  createDaysOfTheWeek(); 
  // Escreva seu código abaixo.

    const decemberDaysList = [29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];   
  function decemberDays () {
    const unOrderList = document.querySelector('#days');

    for (let i = 0; i < decemberDaysList.length; i += 1) {
        const decDays =  decemberDaysList[i];
        const decembList = document.createElement('li');
        decembList.innerHTML = decDays;
       
        if (decDays === 24 || decDays === 31 ) {
          decembList.className = 'days holiday';
          unOrderList.appendChild(decembList);
        } else if (decDays === 4 || decDays === 11 || decDays === 18) {
          decembList.className = 'days friday';   
          unOrderList.appendChild(decembList);
        } else if (decDays === 25) {
            decembList.className = 'days holiday friday';   
            unOrderList.appendChild(decembList);  
        } else {
            decembList.className = 'days';   
            unOrderList.appendChild(decembList);  
        }
    }

  } 
  