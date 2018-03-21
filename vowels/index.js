// --- Directions
// Write a function that returns the number of vowels
// used in a string.  Vowels are the characters 'a', 'e'
// 'i', 'o', and 'u'.
// --- Examples
//   vowels('Hi There!') --> 3
//   vowels('Why do you ask?') --> 4
//   vowels('Why?') --> 0


function vowels(str){
    const matches = str.match(/[aeiou]/gi);
    return matches ? matches.length : 0 ;
}

module.exports = vowels;

// function vowels(str) {

//     const vowels = 'aeiou';
//     let result = 0;
//     for (let char of str.toLowerCase()) {
//         if (vowels.includes(char)) {
//             result++;
//         }
//     }
//     return result;

// }


// function vowels(str) {

//     let result = 0;
//     const arr = str.toLowerCase().split('');
//     for (let char of arr) {
//         if (char === 'a' || char === 'e' || char === 'i' || char === 'o' || char === 'u') {
//             result++;
//         }
//     }
//     return result;
// }
