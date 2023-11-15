// bisogna stampare in console dei numeri da 1 a 100:

// per multipli di 3 stampa Fizz, quindi se divisibile per 3

// per multipli di 5 stampa Buzz, quindi se divisibile per 5

// per multipli di 3 e 5 stampa fizzBuzz, quindi se divisibile per 3 e 5


// bisogna creare un ciclo con una condizione

// creare un container con appendChild


for (let i = 1; i <= 100; i++){

        // Se il numero divisibile sia 3 e 5
    if (i % 3 === 0 && i % 5 === 0){
        console.log("FizzBuzz");
    } 
    // se il numero è divisibile per 3
    else if (i % 3 === 0){
        console.log("fizz");
    }
        // se il numero è divisibile per 5
    else if (i % 5 === 0){
         console.log("buzz");
    }
        // in tutti gli altri casi
    else {
        console.log (i);
    }
}

                                                                                                                     

