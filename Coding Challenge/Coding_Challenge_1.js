const massMarks = 78;
const heighMarks = 1.69;
const massJohn = 92;
const heighJohn = 1.95;


const BMIMarks = massMarks / heighMarks ** 2;

const BMIJohn = massJohn / (heighJohn * heighJohn);
const markHigherBMI = BMIMarks > BMIJohn;
console.log(BMIMarks, BMIJohn, markHigherBMI);

