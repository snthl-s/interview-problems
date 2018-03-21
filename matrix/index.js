// --- Directions
// Write a function that accepts an integer N
// and returns a NxN spiral matrix.
// --- Examples
//   matrix(2)
//     [[1, 2],
//     [4, 3]]
//   matrix(3)
//     [[1, 2, 3],
//     [8, 9, 4],
//     [7, 6, 5]]
//  matrix(4)
//     [[1,   2,  3, 4],
//     [12, 13, 14, 5],
//     [11, 16, 15, 6],
//     [10,  9,  8, 7]]

function matrix(n) {
    
    const results = [];
    let counter = 0;
    let sr = sc = 0;
    let er = ec = n-1;
    for(let i = 0; i < n ; i++)
    {
        results.push([]);
    }

    while(sc <= ec && sr <= er)
    {
        for(let i = sr ; i <= er ; i++)
        {
            results[sr][i] = ++counter;
        }
        sr++;
        for(let i = sr ; i <= er ; i++)
        {
            results[i][ec] = ++counter;
        }
        ec--;
        for(let i =  ec; i >= sc ; i-- )
        {
            results[er][i] = ++counter;
        }
        er--;
        for(let i = er ; i >= sr ; i--)
        {
            results[i][sc] = ++counter;
        } 
        sc++;
    }
    return results;
}

module.exports = matrix;
