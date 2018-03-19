// --- Directions
// Check to see if two provided strings are anagrams of eachother.
// One string is an anagram of another if it uses the same characters
// in the same quantity. Only consider characters, not spaces
// or punctuation.  Consider capital letters to be the same as lower case
// --- Examples
//   anagrams('rail safety', 'fairy tales') --> True
//   anagrams('RAIL! SAFETY!', 'fairy tales') --> True
//   anagrams('Hi there', 'Bye there') --> False

function anagrams(stringA, stringB) {

    const charsA = buildCharMap(stringA);
    const charsB = buildCharMap(stringB);
    

    if (Object.keys(charsA).length === Object.keys(charsB).length)
    {
        for(let i in charsA)
        {
            if (charsA[i] !== charsB[i])
            {
                return false;
            }
        }
        return true;
    }
    return false;
}

function buildCharMap(str){

    chars = [];
    for (let char of str.replace(/[^\w]/g, " ").toLowerCase().split('')) {
        chars[char] = chars[char] + 1 || 1;
    }
    return chars;
}
module.exports = anagrams;
