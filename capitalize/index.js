// --- Directions
// Write a function that accepts a string.  The function should
// capitalize the first letter of each word in the string then
// return the capitalized string.
// --- Examples
//   capitalize('a short sentence') --> 'A Short Sentence'
//   capitalize('a lazy fox') --> 'A Lazy Fox'
//   capitalize('look, it is working!') --> 'Look, It Is Working!'


function capitalize(str) {
    let result = str[0].toUpperCase();

    for(let i = 1 ; i < str.length ; i++ )
    {
        if(str[i-1] === ' ')
        {
            result += str[i].toUpperCase();   
        }
        else
        {
            result += str[i];
        }
    }

    return result;
}


// function capitalize(str) {
   
//     const arr = str.split(' ');
//     const chars = [];
//     for(let char of arr)
//     {
//         chars.push(char[0].toUpperCase()+char.slice(1));
//     }
//     const capitalize = chars.join(' ');
//     return capitalize;
// }

module.exports = capitalize;
