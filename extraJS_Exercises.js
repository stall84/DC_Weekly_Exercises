function hello(name) {
    if (!name) {
        console.log('Hello World!');
    } else {
        console.log('Hello ' + name);
    }
}

function madlib(name,subject) {
    return name + "'s favorite subject is " + subject;
}

function tipAmount(bill,svcLvl) {
    if (svcLvl == "good") {
        return (bill * .20);
    } else if (svcLvl == "fair") {
        return (bill * .15);
    } else if (svcLvl == "bad") {
        return (bill * .10);
    }
}

function totalAmount(bill,svcLvl) {
    return tipAmount() + bill;

}

//

//

// function printing numbers from start to finish using for loop
function printNumbers(start,finish) {
    for (var i = start; i <= finish; i++) {
        console.log(i);
    }
}
// function printing numbers from start to finsih using while loop
function printNumbersWhile(start,finish) {
    while (start <= finish) {
        console.log(start);
        start++;
    }

}// function taking input and creating square of asteriks from that input

function printSquare(n) {
    //create variable to hold line of asteriks
    var singleLine = "";
    // for loop to go through number length and add asteriks to singleLine
    for (var i = 0; i < n; i++) {
        singleLine += "*";
    }
    // create 2nd variable to store height of square by taking length of previous var singleLine
    var lineCount = singleLine.length;
    // for loop to iterate through length of singleLine and then print out that number by console loging 
    for (var j = 0; j < lineCount; j++) {
        console.log(singleLine);
    }
}


// factor function. takes input number and returns array of numbers

function factors(num) {
    var factArr = [];
    for (var i = 0; i <= num; i++) {
    if (num % i === 0) {
        factArr.push(i);
    } 
    }
    return factArr;
}



// sum numbers function . sum given array of numbers

function sumNums(arr) {
    var sum = 0;
    for (var i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    return sum;
}

// Write a function "cipher" which is given a string, a shift, and returns
// the Caesar cipher of the string.
// Caesar cipher --> http://practicalcryptography.com/ciphers/caesar-cipher/
//
// Examples:
// > cipher('Genius without education is like silver in the mine', 5)
// 'ljsnzx bnymtzy jizhfynts nx qnpj xnqajw ns ymj rnsj'

function cipher (string, shift) {
    // create variable to store the characters of the alphabet to iterate through later on 
    var alphabet = "abcdefghijklmnopqrstuvwxyz";
    // create variable to store the returned encoded string
    var encodedString = "";
    // for loop that will iterate through strings characters and then shift them by the shift amount
    for (var i = 0; i < string.length; i++) {
        // store the current letter from the input string
        var currentLetter = string[i].toLowerCase();
        // create if statement to provide for spacing between words, , then continue script
         if (currentLetter === " ") {
            encodedString += " "
            continue;
        }
         
        // determine the index in the alphabet of the current letter 
        var indexOfCurrentLetter = alphabet.indexOf(currentLetter);
        // store the index of the new offset/shifted letter
        var newLetterIndex = indexOfCurrentLetter + shift;

        // provide for wrapping around the alphabet
        if (newLetterIndex > 25) {
            newLetterIndex = newLetter + 25;
        } else if (newLetterIndex < 0) {
            newLetterIndex = newLetterIndex + 26;
        }


        // store the new letter from the newLetterIndex
        var newLetter = alphabet[newLetterIndex];
        //load the offset letters into the new encoded string
        encodedString += newLetter;
     

        
    }
    console.log(encodedString);
    return encodedString;
}

// try using ASCII codes 

// Matrix Multiplication 



// Write a function numberJoinerWhile given start & end numbers as args.
// should return string of the numbers joined together by underscore.
// Use while loop first

function numberJoinerWhile (start, finish) {
    var joinedNums = '';
    while (start < finish) {
        return joinedNums += start + "_";
        
    }
    start++;
    console.log(joinedNums);
}

function numberJoinerFor (start, finish) {
    var joinedNums = '';
    for (var i = start; i < finish; i++) {
        joinedNums += i;
    }

}