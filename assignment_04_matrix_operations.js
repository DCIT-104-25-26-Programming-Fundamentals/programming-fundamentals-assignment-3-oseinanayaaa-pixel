// =============================================================================
// PROGRAMMING FUNDAMENTALS — Assignment 4
// =============================================================================
//
// TASK: Matrix Operations
//
// Write a JavaScript program that performs three operations on matrices
// (2D arrays), each implemented in its own function.
//
// In JavaScript, a matrix is represented as an array of arrays:
//   let matrix = [[1, 2, 3], [4, 5, 6]];   // 2 rows, 3 columns
//
// -----------------------------------------------------------------------------
// HOW TO RUN THIS PROGRAM
// -----------------------------------------------------------------------------
// 1. Install the input library (only once):  npm install readline-sync
// 2. Run the program:                        node assignment_04_matrix_operations.js
//
// -----------------------------------------------------------------------------
// PART A — Transpose a Matrix
// -----------------------------------------------------------------------------
// - Read an M x N matrix from the user.
// - Compute and display its transpose (rows become columns, columns become rows).
//
// Example (2 x 3 input):
//
//   Original Matrix:      Transposed Matrix:
//   1  2  3               1  4
//   4  5  6               2  5
//                         3  6
//
// -----------------------------------------------------------------------------
// PART B — Add Two Matrices
// -----------------------------------------------------------------------------
// - Read two matrices of exactly the same size (M x N).
// - Compute their element-wise sum and display the result.
//
// -----------------------------------------------------------------------------
// PART C — Multiply Two Matrices
// -----------------------------------------------------------------------------
// - Read matrix A of size M x N and matrix B of size N x P.
//   (Number of COLUMNS in A must equal number of ROWS in B.)
// - Compute and display the matrix product A x B (result is M x P).
//
// -----------------------------------------------------------------------------
// EXPECTED INPUT FORMAT
// -----------------------------------------------------------------------------
// When entering a row, the user types all values on one line separated by spaces:
//
//   Enter number of rows: 2
//   Enter number of columns: 3
//   Enter row 1: 1 2 3
//   Enter row 2: 4 5 6
//
// Hint: Use row.split(' ').map(Number) to convert a line of text into an array
// of numbers.
//
// -----------------------------------------------------------------------------
// REQUIREMENTS
// -----------------------------------------------------------------------------
// - Use nested loops for all operations (no external libraries).
// - Each operation must be in its own function (see scaffold below).
// - Display each matrix in a neat, aligned grid format.
// - Tip: Complete Part A first, then Parts B and C.
//

// =============================================================================
// YOUR CODE BELOW — remove the // symbols from the scaffold and fill it in
// =============================================================================

const readlineSync = require('readline-sync');

// Matrix Operations
// assignment_04_matrix_operations.js

const readlineSync = require('readline-sync');

// Function to read a matrix from user
function readMatrix(rows, cols) {
    let matrix = [];
    for (let i = 0; i < rows; i++) {
        let rowInput = readlineSync.question(`Enter row ${i + 1}: `);
        let row = rowInput.split(' ').map(Number);
        if (row.length !== cols) {
            console.log("Error: Row must have exactly " + cols + " numbers.");
            return null;
        }
        matrix.push(row);
    }
    return matrix;
}

// Function to display a matrix neatly
function displayMatrix(matrix) {
    for (let i = 0; i < matrix.length; i++) {
        console.log(matrix[i].join(" "));
    }
}

// Part A — Transpose
function transposeMatrix(matrix) {
    let rows = matrix.length;
    let cols = matrix[0].length;
    let result = [];
    for (let i = 0; i < cols; i++) {
        result[i] = [];
        for (let j = 0; j < rows; j++) {
            result[i][j] = matrix[j][i];
        }
    }
    return result;
}

// Part B — Add Two Matrices
function addMatrices(matrixA, matrixB) {
    let rows = matrixA.length;
    let cols = matrixA[0].length;
    let result = [];
    for (let i = 0; i < rows; i++) {
        result[i] = [];
        for (let j = 0; j < cols; j++) {
            result[i][j] = matrixA[i][j] + matrixB[i][j];
        }
    }
    return result;
}

// Part C — Multiply Two Matrices
function multiplyMatrices(matrixA, matrixB) {
    let rowsA = matrixA.length;
    let colsA = matrixA[0].length;
    let rowsB = matrixB.length;
    let colsB = matrixB[0].length;

    if (colsA !== rowsB) {
        console.log("Error: Number of columns in A must equal number of rows in B.");
        return null;
    }

    let result = [];
    for (let i = 0; i < rowsA; i++) {
        result[i] = [];
        for (let j = 0; j < colsB; j++) {
            let sum = 0;
            for (let k = 0; k < colsA; k++) {
                sum += matrixA[i][k] * matrixB[k][j];
            }
            result[i][j] = sum;
        }
    }
    return result;
}

// Main function
function main() {
    console.log("=== Part A: Transpose ===");
    let rowsA = readlineSync.questionInt("Enter number of rows: ");
    let colsA = readlineSync.questionInt("Enter number of columns: ");
    let matrixA = readMatrix(rowsA, colsA);
    if (!matrixA) return;
    console.log("Original Matrix:");
    displayMatrix(matrixA);
    console.log("Transposed Matrix:");
    displayMatrix(transposeMatrix(matrixA));

    console.log("\n=== Part B: Add Two Matrices ===");
    let rowsB = readlineSync.questionInt("Enter number of rows: ");
    let colsB = readlineSync.questionInt("Enter number of columns: ");
    let matrixB1 = readMatrix(rowsB, colsB);
    let matrixB2 = readMatrix(rowsB, colsB);
    if (!matrixB1 || !matrixB2) return;
    console.log("Matrix Sum:");
    displayMatrix(addMatrices(matrixB1, matrixB2));

    console.log("\n=== Part C: Multiply Two Matrices ===");
    let rowsC1 = readlineSync.questionInt("Enter number of rows for Matrix A: ");
    let colsC1 = readlineSync.questionInt("Enter number of columns for Matrix A: ");
    let matrixC1 = readMatrix(rowsC1, colsC1);
    let rowsC2 = readlineSync.questionInt("Enter number of rows for Matrix B: ");
    let colsC2 = readlineSync.questionInt("Enter number of columns for Matrix B: ");
    let matrixC2 = readMatrix(rowsC2, colsC2);
    if (!matrixC1 || !matrixC2) return;
    let product = multiplyMatrices(matrixC1, matrixC2);
    if (product) {
        console.log("Matrix Product:");
        displayMatrix(product);
    }
}

// Run the program
main();
