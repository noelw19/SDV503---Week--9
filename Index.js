//rounds to specified decimal point.
let number = 14.2341;
console.log(number.toPrecision(4));

/*let singleArray = metaArray.map(sorting) //creating a new array by mapping numbers
//via sorting function

function sorting()
{
    console.log(metaArray.sort(function(a,b) {return b - a;}))
    //should go through the array and sort it into descending order
    
}

console.log(singleArray)*/



const numOne = 1000;
const numTwo = Number(1000);
const numThree = new Number(1000);

console.log(numOne);
console.log(numTwo);
console.log(numThree);

console.log(numOne === numTwo);
console.log(typeof numTwo);
//output is true because it is not using the strict equality, so convert = number and number
console.log(numTwo == numThree);

//number.isNaN()
//Number.isFinite()
//number.isInteger()

let int = Number([1000, 200, 1423]);

function typeOfNaN(x) {
    if (Number.isNaN(x)) {
        return 'Number NaN';
    }
    if (isNaN(x)) {
        return 'NaN';
    }
}

console.log(typeof int);

console.log(typeOfNaN(int));




let x = NaN
console.log(Number.isNaN(x) ? "Number is NaN" : "NaN")

console.log(253.243.toFixed(1));
console.log(234.1324.toLocaleString());



//currency = 

function moolah(x, y) {
    x = Number(x)
    //either adds a $ to string or adds symbol that is added as an arguement.
    y = y || "$"

    if (Number.isNaN(x) || typeof y != 'string') {
        return null
    }
    return y + x.toFixed(2)
}

console.log(moolah(1000, ""));


//number.isInteger()

function fits(x, y) {
    if (Number.isInteger(y / x)) {
        return 'Fits!';
    }
    return 'Does NOT fit!';
}
console.log(fits(5, 10));
console.log(fits(5, 11));

//finds value at specified index
//not possible to modify a string
// but you can create a new string
console.log("Hello-World" [6]);

//Anonymous functions
const someFunction = function (x) {
    console.log(x)
};

someFunction(29);

//function literal

(function (x, y) {
    console.log(x + y);
})(5, 6)

//callbacks
/* 
function anyFunction(data, callback) {
    async-process(data).then(    //do async request
        function(result) {      //the on return
            callback(result)    //execute callback
            
        }
    );
        // rest the code
}*/

//string objects - string prototype methods

//can use string as an object within log
console.log("Hello World".length);

const text1 = 'first name'
const text2 = ' last name'
const fullName = text1.concat(text2);
console.log(fullName);
console.log(fullName.toUpperCase());

//trims all of the white space that is at the begining or end of your string.
//also trimend and trimstart
console.log(text1.trim());


const newText = new String('SDV')

console.log(newText);

const newTextToString = (newText.toString())
console.log(newTextToString);



