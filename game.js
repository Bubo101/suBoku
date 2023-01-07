import { Util } from "./Util.js"

let board = [
    [0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0],
]

function isValidPlace(grid, row, col, number) {
    for (let i = 0; i < 9; i++){
        if (grid[i][col] === number) {
            return false
        }
    }
    for (let i = 0; i < 9; i++){
        if (grid[row][i] === number) {
            return false
        }
    }
    // checking all the rows and cols for the number and if found is double = false
    let localBoxRow = row - (row % 3)
    let localBoxCol = col - (col % 3)
    // this finds the top left of every sub grid
    for (let i = localBoxRow; i <localBoxRow + 3; i++){
        for (let j = localBoxCol; i <localBoxCol + 3; i++){
            if (grid[i][j] === number) {
                return false
            }
        }
    }
    return true
}

function solve(grid) {
    for (let row = 0; row < 9; row++) {
        for (let col = 0; col < 9; col++) {
            if (grid[row][col]=== 0) {
                //check if empty before trying to put a value there
                for (let guess =1; guess < 10; guess++) {
                    if(isValidPlace(grid, row, col, guess)) {
                        grid[row][col] = guess
                        //if nothing is able to be placed must go back to previous step and change
                        //need to do recursion to backtrack
                        if(solve(grid)){

                        }
                        grid[row][col] = 0
                        //will cause it to go back to the 0 and retry to place a number
                    }
                }
                return false
                //if no solution is found for the grid
            }
        }
    }
    return true
}

solve(board)
console.log(board)
let solution = []
Util.copyGrid(board, solution)
solve(solution)
Util.print2DArray(solution)

console.log("boden test")
