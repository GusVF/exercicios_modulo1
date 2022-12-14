// 1-Crie uma função para adicionar o turno da noite na lesson2. Essa função deve possuir três parâmetros, sendo eles: o objeto a ser modificado, a chave que deverá ser adicionada e o valor dela.
// 2-Crie uma função para listar as keys de um objeto. Essa função deve receber um objeto como parâmetro.
// 3-Crie uma função para mostrar o tamanho de um objeto.

// 4-Crie uma função para listar os valores de um objeto. Essa função deve receber um objeto como parâmetro.
// 5-Crie um objeto de nome allLessons, que deve agrupar todas as aulas através do Object.assign. Cada chave desse novo objeto será uma aula, sendo essas chaves: lesson1, lesson2 e lesson3. Ao executar o comando console.log(allLessons), a saída deverá ser a seguinte:

const lesson1 = {
    materia: 'Matemática',
    numeroEstudantes: 20,
    professor: 'Maria Clara',
    turno: 'manhã',
  };
  
  const lesson2 = {
    materia: 'História',
    numeroEstudantes: 20,
    professor: 'Carlos',
  };
  
  const lesson3 = {
    materia: 'Matemática',
    numeroEstudantes: 10,
    professor: 'Maria Clara',
    turno: 'noite',
  };
// function1
  const addKey = (obj, key , value) => {
    obj[key] = value; 
}
    addKey(lesson2, 'turno', 'noite');
//  console.log(lesson2);

//function2
  const objKeys = (obj) => {
  const showKeys = Object.keys(obj);
  console.log(showKeys);
} 
  // objKeys(lesson1);

// function3
  const objSize = (obj) => Object.keys(obj).length;
  // console.log(objSize(lesson2));

// function4
  const objValue = (obj) => {
    const objV = Object.values(obj);
    console.log(objV);
  }
  // objValue(lesson1);

// function5
  const newObj = Object.assign({}, {lesson1,lesson2,lesson3});
  // console.log(newObj);
 
const allLessons = {
  lesson1: {
    materia: 'Matemática',
    numeroEstudantes: 20,
    professor: 'Maria Clara',
    turno: 'manhã'
  },
  lesson2: {
    materia: 'História',
    numeroEstudantes: 20,
    professor: 'Carlos',
    turno: 'tarde'
  },
  lesson3: {
    materia: 'Matemática',
    numeroEstudantes: 10,
    professor: 'Maria Clara',
    turno: 'noite'
  }
}
//function6
  const allStudents = (obj) => {
    let result = 0;
    const array = Object.keys(obj);
    for ( index in array) {
      result += obj[array[index]].numeroEstudantes;
    }
    console.log(result);
  }
  // allStudents(allLessons);

// Crie uma função que obtenha o valor da chave de acordo com a sua posição no objeto. 
  const valuesPosition = (obj, value) => Object.values(obj)[value];
// console.log(valuesPosition(lesson2, 2));

// Crie uma função que verifique se o par (chave / valor) existe na função. Essa função deve possuir três parâmetros, sendo eles: o objeto, o nome da chave e o valor da chave. Exemplo:
const verifyKeyValue = (obj, key, value) => {
  const array = Object.entries(obj);
  let answer = false;
  for (let index in array) {
    if (array[index][0] === key && array[index][1] === value) {
       answer = true;
    }
  }
  return answer;
}
// console.log(verifyKeyValue(lesson3, 'professor', 'Maria Clara'));