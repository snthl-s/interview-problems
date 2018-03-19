// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a pyramid shape
// with N levels using the # character.  Make sure the
// pyramid has spaces on both the left *and* right hand sides
// --- Examples
//   pyramid(1)
//       '#'
//   pyramid(2)
//       ' # '
//       '###'
//   pyramid(3)
//       '  #  '
//       ' ### '
//       '#####'
//

function pyramid(n, row = 0, block = '') {

let base = (n * 2) - 1;    
let middle = Math.floor(base/2);

if(n === row)
{
    return;
}

if(base === block.length)
{
    console.log(block);
    pyramid(n,row + 1);
    return;
}
if (block.length >= middle - row && block.length <= middle + row)
{  
    block += '#';
}
else{
    block += ' ';
}
    pyramid(n,row,block);

}

module.exports = pyramid;
