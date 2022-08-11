let alumnos = [{ name: "Jorge", lastName: "Camarillo", average: 29 }, { name: "Jorge", lastName: "Camarillo", average: 30 }, { name: "Jorge", lastName: "Camarillo", average: 18 }, { name: "Jorge", lastName: "Camarillo", average: 19 }];
const resultado = (alumnos.reduce((a, b) => a + b.average, 0)) / alumnos.length;
console.log(resultado)