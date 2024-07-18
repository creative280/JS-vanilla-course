let i = 0;
do {

    if (i % 3 === 0 && i % 5 === 0) {
        console.log(`${i} - FizzBuzz`);
    } else if (i % 3 === 0) {
        console.log(`${i} - Fizz`);
    } else if (i % 5 === 0) {
        console.log(`${i} - Buzz`);
    } else {
        console.log(i);
    }

    i++;
} while (i < 10); // Se ejecuta al menos una vez, aunque la condición sea falsa