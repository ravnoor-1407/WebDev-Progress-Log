// Practice Questions on Nested Arrays

/* Recreate the tic-tac-toe game as shown below
X  _  O
_  X  _
O  _  X
*/

let tic_tac_toe = [['X', null, 'O'], [null, 'X', null], ['O', null, 'X']];
console.log(tic_tac_toe);

/* Recreate the tic-tac-toe game as shown below
X  O  O
_  X  _
O  _  X
*/

tic_tac_toe[0][1] = 'O';
console.log(tic_tac_toe);