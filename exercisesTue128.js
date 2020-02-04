function logName (names) {
    for (var i = 0; i < names.length; i++) {
        console.log('Hi, ' + names[i]);
    }

}

logName(["Lachlan","Kim","Moira"])



// #2 Given array of first, middle, last name write func that prints initials

// Hacky version

function inits(name) {
    var firstName = name.shift();
    var middleName = name.shift();
    var lastName = name.shift();
        var firstInit = firstName.split('').shift();
        var middleInit = middleName.split('').shift();
        var lastInit = lastName.split('').shift();
            return firstInit + middleInit + lastInit;
}

// Loop Version that will work with multiple names

function nameInitials() {
    var name = ["Adam", "Michael", "Szaruga"];
    var inits = "";
    for (var i = 0; i < name.length; i++) {     // INCOMPLETE
        return inits += name[i][0];
    }
}

// #3

var number = [0,1,0,1,1,0,0]

function returnIndex (numberArray) {

    var lastIndex;
    for (var i = 0; i <= numberArray.length; i++) {
        if (numberArray[i] == 1) {
            lastIndex = i;
        }
    
    }
    return lastIndex;
}


// #4  Given list of positive numbers, write function that returns the biggest number

var numbers = [1,5,25,3,99,20];

function largestNumber(myArray) {
    var largeNum = myArray[0];

        for (var i = 0; i < myArray.length; i++) {
            if (myArray[i] > largeNum) {
                largeNum = myArray[i];
            }
        }
        
        return largeNum;

}


// Example of function to create object of unique values in an array

function histogram(arr) {
    var obj = {};

    for (var i = 0; i < arr.length; i++)
    {
        var currentItem = arr[i];
        if (!obj[currentItem]) {
            obj[currentItem] = 0;
        }
        obj[currentItem]++

    }
    return obj;
}

histogram([21,48,290,48,920,11]); // Will return object: Object { 11: 1, 21: 1, 48: 2, 290: 1, 920: 1 }

// 2nd Set of Exercises 

// Given array of student birth years, return the most common birth year

function mostCommonYr(years) {
// create empty object to hold year/number key/value pairs
var mostCommonYears = {};

for (var i = 0; i < years.length; i++) {
    //create variable storing the current element of array being iterated over
    var currentYear = years[i];
    if (!mostCommonYears[currentYear]) {
        mostCommonYears[currentYear] = 0;
    }
    mostCommonYears[currentYear]++
}
return mostCommonYears;
}

mostCommonYr([1991,1998,1990,1991,1984,1987,1991])

//Given a string "This is a random string" write a function that returns a count of each character in the string

function charCounter(str) {
    // create empty object to hold the count of characters
    var obj = {};
    // store individually character-split string 
    var splitStr = str.split('');
    // iterate through splitStr to count unique characters and send them to the obj
    for (var i = 0; i < splitStr.length; i++) {
        // create variable for the current item/character being iterated over in for loop
        var currentChar = splitStr[i]; 
        if (!obj[currentChar]) {
            obj[currentChar] = 0;
        }
        obj[currentChar]++

    }
    return obj;
}

console.log(charCounter("This is a random string"))

// Given array of olympic race results ...
// [{country: "USA", time: 222},
//  {country: "USA", time: 199},
//  {country: "USA", time: 100},
//  {country: "Russia", time: 998},
//  {country: "Russia", time: 298}
//  {country: "Kenya", time: 102},
//  {country: "Brazil", time: 288},
//  {country: "Sweeden", time: 273},
//  {country: "Sweeden", time: 266}]
// Write a function that returns each country's best (quickest) time

var raceResults = [{country: "USA", time: 222},
  {country: "USA", time: 199},
  {country: "USA", time: 100},
  {country: "Russia", time: 998},
  {country: "Russia", time: 298}
  {country: "Kenya", time: 102},
  {country: "Brazil", time: 288},
  {country: "Sweeden", time: 273},
  {country: "Sweeden", time: 266}];

  function bestTimeByCountry (times) {
      // create empty object to hold the best times as country/time key/value pairs
    var bestTimes = {};
      // use for loop to iterate through the array of times
      for (var i = 0; i < times.length; i++) {
          // create variable currentTime to hold the current country/time being iterated through
      var currentTime = times[i];
      var countryBestTime = 
      }
  }



// 3rd set of exercises 

// Finding multiples of a number
// A number is a multiple of n if: number % n == 0 

function multiple(number, n) {
    for (var i = 0; i < n; i++) {
        if (i % number == 0) {
            console.log(i)
        }
    }
}