 const allLessons = {
  lesson1:
   { materia: 'Matemática',
     numeroEstudantes: 20,
     professor: 'Maria Clara',
     turno: 'manhã' },
  lesson2:
   { materia: 'História',
     numeroEstudantes: 20,
     professor: 'Carlos',
     turno: 'noite' },
  lesson3:
   { materia: 'Matemática',
     numeroEstudantes: 10,
     professor: 'Maria Clara',
     turno: 'noite' }
};

const alunosMatematica = (lesson) => {
const arr = Object.keys(lesson);
let conta = 0;
for (let key in arr) {
  if (lesson[arr[key]].materia === 'Matemática') {
    conta += lesson[arr[key]].numeroEstudantes;
  }
}
return conta;
}

console.log(alunosMatematica(allLessons));
