# JS

## Coding Basics

This page contains basic problems solved with JavaScript code.

For each problem solutions are given in the folders with test scripts.

## Install Unit Test Package 

Jest is used by Facebook to test all JavaScript code including React applications.

To know more about jest refer this link [Jest Webpage](https://facebook.github.io/jest/docs/en/getting-started.html). 

```
yarn global add jest
or
npm install --save-dev jest
```
## Run Jest

Command to execute the test file.

```
jest test.js
```
Example Output :

```
PASS  reversestring/test.js
  ✓ Reverse function exists (3ms)
  ✓ Reverse reverses a string (1ms)
  ✓ Reverse reverses a string

Test Suites: 1 passed, 1 total
Tests:       3 passed, 3 total
Snapshots:   0 total
Time:        2.469s
```

## Debugger

### File Name : index.js 

```
function reverse(str){
     debugger;
    return str.split('').reduce((rev,char)=>
        char+rev , '');
}
reverse('qwsde');
module.exports = reverse;
}
```
To debug the above program, go to terminal and run the below command.

```
    node inspect index.js
    Press c
    repl
``` 
Type variable name to check the value of a variable or type a statement to run.

```
    return str.split('').reduce((rev,char)=>
        char+rev , '');
```    

## Reverse a string program

To test this concept we wrote a string reverse function, first get the string to be reversed, we convert the string into array, reverse it and convert back into string.

```
function reverse(str) {

    const arr = str.split(''); // convert the string into array.
    arr.reverse(); // Reverse the string.
    return arr.join(''); // Join the string and return the string.
    
}

function reverse(str) {
    return str
         .split('')
         .reverse()
         .join('');    
}

function reverse(str) {
 let reversed = '';
    for(let characters of str)
    {
        reversed = characters + reversed;
    }

    return reversed;
}
function reverse(str) {
  return str.split('').reduce((rev,char)=>
        char+rev,'');
}

```

## Check the given string is a Palindrome

```
function palindrome(str) {

   return str === str.split('').reduce((rev,char)=>char+rev,'');
   
}
```
### Using every prototype

```
function palindrome(str) {
      return str.split('').every( (char,i) => {
        return char === str[str.length-1-i];
    });
}
   
```

## Reverse an Integer

```
function reverseInt(n) {

    return Math.sign(n)*parseInt(n.toString().split('').reduce((num,rev) => rev+num,''));

}
```

## Find maximum repeated characted in a string

```
function maxChar(str) {

    chars = {};
    max = 0;

    for(let char of str){
        chars[char] = chars[char] + 1 || 1;
    }  
    
    for(let char in chars)
    {
        if(chars[char] > max)
        {
            max = char;
        }
    }   
    return max;
}
```

## FizzBuzz program 

```
function fizzBuzz(n) {
    
    for (let i = 1; i <= n ; i++){
        if(i%3 == 0 && i%5 !=0 )
        {
            console.log('fizz');
        } 
        else if (i % 3 != 0 && i % 5 == 0 )
        {
            console.log('buzz');
        }
        else if (i % 3 == 0 && i % 5 == 0) {
            console.log('fizzbuzz');
        }
        else{
            console.log(i);
        }
    }

}
```
