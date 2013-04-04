var solveNRooks = function(n){

  var result = [];
  var allNums = [];
  for (var i=0; i<n; i++){
    allNums.push(i);
  }

  var buildPermutationsArray = function(rookPositions, positionsLeft){
    if (!positionsLeft.length){
      result.push(rookPositions);
      return;
    } else {
      _.each(positionsLeft, function(val){
        newRookPositions = rookPositions.concat([val]);
        newPositionsLeft = _.without(positionsLeft, val);
        buildPermutationsArray(newRookPositions, newPositionsLeft);
      });
    }
  };
      
  buildPermutationsArray([], allNums);
  return result;
};

// var solveNQueens = function(n){

//   var rooksSolution = solveNRooks(n);

//   var hasDiagonalConflict = function(board){
//     var leftDiagonals = [];
//     var rightDiagonals = [];
//     var hasConflict = false
//     var i = 0;
//     while ((!hasConflict) && i < n){
//       var leftDiagonalNumber = i + board[i];
//       var rightDiagonalNumber = n - 1 + i - board[i];
//       if ( _.contains(leftDiagonals, leftDiagonalNumber) || _.contains(rightDiagonals, rightDiagonalNumber )){
//         hasConflict = true;
//       } else {
//         leftDiagonals.push(leftDiagonalNumber);
//         rightDiagonals.push(rightDiagonalNumber);
//       }
//       i++;
//     }
//     return hasConflict;
//   };
//   var result = _.reduce(rooksSolution, function(memo, val){
//     if (!hasDiagonalConflict(val)){
//       memo.push(val);
//     }
//     return memo;
//   }, []);
//   return result;
// };


 