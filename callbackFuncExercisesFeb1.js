

// Write function which takes an array of numbers as input and returns a new array containing only the positive numbers in the given array

//var arr1 = [10,-10,3,73,-93,-8,33,21,-9];
//function posNums (arr) {
    //var newArr = arr.filter(function(n) {
        //return n > 0; 
    //})
    //return newArr;
//}
//console.log(posNums(arr1))


// Write a function which takes an array of numbers as input and returns a new array containing only the EVEN numbers in an array

function evenFinder (arr) {
    var evenArray = [];
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] % 2 === 0) {
            evenArray.push(arr[i]);
        }
    }
    return evenArray;
}

//console.log(evenFinder([1,2,3,4,5,10,11,13,14,15,21,22,23,24]))

// version 2 using simplified callback function filter method
function evenFinderV2 (arr) {
    var evenArr =  arr.filter(function(element) {
        return element % 2 === 0;
    });
    console.log(evenArr);
}

//evenFinderV2([80,82,95,104,105,107,112,121,140,182])


// Write a function taking an array of numbers as input, squaring them, then returning array of squares

function squarer(nums) {
    var squaredNums = nums.map(function(num) {
        return num ** 2;
    });
    console.log(squaredNums);
}
//console.log("Squarer: ")
//squarer([1,2,3,4,5])

// Cities Temp Function. Write function that takes array of city-objects & returns array of cities cooler than 70 degrees.

var cityTemps = [{name: 'Atlanta', temp: 69}, 
    {name: 'Houston', temp: 80},
    {name: 'Dallas', temp: 72},
    {name: 'New York', temp: 55},
    {name: 'Chicago', temp: 48},
    {name: 'Denver', temp: 40},
    {name: 'Los Angeles', temp: 76},
    {name: 'San Francisco', temp: 65}];

function city70 (cities) {
    // create new variable to store the filtered results. make sure to return citTemp.temp to specify the temp key/value
    var below70Cities = cities.filter(function(citTemp) {
        return citTemp.temp < 70;
    });
    console.log(below70Cities);
}    

//city70(cityTemps);

// Citites 2. Same as above except return array of city names only. 

function cityNames(citiesArr) {
    // not sure exactly why map works over filter, but it does return the names only .. using filter returns the whole city/temp object
    var namesOnly = citiesArr.map(function(citTemp) {
        return citTemp.name;
    });
    console.log(namesOnly);
}

//cityNames(cityTemps);


// Good Job - Write a function that takes the input array of names and prints out "Good Job <name>" for each name on a new line.

var names = [
    'Dom',
    'Lyn',
    'Kirk',
    'Autumn',
    'Trista',
    'Jesslyn',
    'Kevin',
    'John',
    'Eli',
    'Juan',
    'Robert',
    'Keyur',
    'Jason',
    'Che',
    'Ben'
];

function gjPrinter(nameArr) {
    // use forEach method to take each element of nameArr & print to the console with string statement
    nameArr.forEach(function(name) {
        console.log('Good Job, ' + name +'!');
    });
};

//gjPrinter(names);

// Good Job Printer version 2 using map instead of forEach
// basically same concept except creating variable to store returned output from map method

function gjPrinterV2(nameArr) {
    var goodWorkers = nameArr.map(function(element) {
        return "Good Job, " + element + "!";
    });
    console.log(goodWorkers);
};

//gjPrinterV2(names);

// Sort 1 - Taking the previous array of strings/names, sort them alphabetically 

function alphaSorter(arr) {
    return arr.sort();
}

//console.log(alphaSorter(names));


// Sort 2 - Taking same names array, sort them by length, shortest name first

function lengthReturn (arr) {
    var newArr = arr.sort(function(a,b) {
        return a.length - b.length;
    })

    console.log(newArr);
    
}

//lengthReturn(names);

// Given this function: 
// function call3Times(fun) {
//    fun();
//    fun();
//    fun();
//}
// Use the call3Times function to print 'Hello World!' 3 times

function fun() {
    console.log('Hello, World!');
}

function call3Times(arg) {
    fun();
    fun();
    fun();
};

//call3Times(fun);

// Write a function 'callNTimes' that takes 2 arguments: times as a number, and fun as a function.

function callNTimes(n,func) {
    for (var i = 0; i < n; i++) {
        // always remember to invoke the function by parentheses
        func();
    }
}

//callNTimes(5,fun);

// Using reduce method return sum of elements in an input array

function sum(arr) {
    var sum = arr.reduce(function(acc, num) {
        return acc += num;
    });
    console.log(sum);
}

//sum([4,8,12,-3]);
