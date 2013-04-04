var solveNQueens = function(n){

  var result = [];
  var allNums = [];
  for (var i=0; i<n; i++){
    allNums.push(i);
  }

  var buildPermutationsArray = function(queenPositions, positionsLeft){
    if (hasDiagonalConflict(n, queenPositions)){
      return;
    } else if (!positionsLeft.length){
      result.push(queenPositions);
      return;
    } else {
      _.each(positionsLeft, function(val){
        newQueenPositions = queenPositions.concat([val]);
        newPositionsLeft = _.without(positionsLeft, val);
        buildPermutationsArray(newQueenPositions, newPositionsLeft);
      });
    }
  };

  
  buildPermutationsArray([], allNums);
  return result;
};

var hasDiagonalConflict = function(n, board){
    var leftDiagonals = [];
    var rightDiagonals = [];
    var hasConflict = false
    var i = 0;
    while ((!hasConflict) && i < board.length){
      var leftDiagonalNumber = i + board[i];
      var rightDiagonalNumber = n - 1 + i - board[i];
      if ( _.contains(leftDiagonals, leftDiagonalNumber) || _.contains(rightDiagonals, rightDiagonalNumber )){
        hasConflict = true;
      } else {
        leftDiagonals.push(leftDiagonalNumber);
        rightDiagonals.push(rightDiagonalNumber);
      }
      i++;
    }
    return hasConflict;
  };






