// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

function reverse(str) {

    // const arr = str.split(''); // convert the string into array.
    // arr.reverse(); // Reverse the string.
    // return arr.join(''); // Join the string and return.

    // return str
    //         .split('')
    //         .reverse()
    //         .join('');
    // let reversed = '';
    // for(let characters of str)
    // {
    //     reversed = characters + reversed;
    // }

    // return reversed;
    debugger;
    return str.split('').reduce((rev,char)=>
        char+rev , '');

}

reverse('qwsde');
module.exports = reverse;
