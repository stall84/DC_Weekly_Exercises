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
            encodedString += " ";
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




cipher('Hello World', 2)

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

//printSquare(8)

function sayHi (name) {
    console.log('Hello ' + name + ' how are you today?');
}

sayHi('Michael')
