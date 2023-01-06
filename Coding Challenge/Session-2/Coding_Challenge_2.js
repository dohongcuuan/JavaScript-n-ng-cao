const massMarks = 18;
const heighMarks = 1.69;
const massJohn = 92;
const heighJohn = 1.95;
const BMIMarks = massMarks / heighMarks ** 2;
const BMIJohn = massJohn / (heighJohn * heighJohn);
const markHigherBMI = BMIMarks > BMIJohn;

if (BMIMarks > BMIJohn) {
    console.log(`Mark BMI (${BMIMarks})  is higher than John (${BMIJohn})`)
} else {
    console.log(`John BMI (${BMIJohn}) is higher than Mark (${BMIMarks})!`)
}

