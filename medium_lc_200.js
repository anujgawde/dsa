/**
 * @param {character[][]} grid
 * @return {number}
 */
var numIslands = function (grid) {
  // If the grid is empty, no islands
  if (!grid.length) return 0;

  //   Number of rows and columns
  const ROWS = grid.length;
  const COLS = grid[0].length;

  //   Final Value to return
  var count = 0;

  var dfs = function (row, col) {
    // check if out of bounds, is not 1
    if (
      row < 0 ||
      col < 0 ||
      row >= ROWS ||
      col >= COLS ||
      grid[row][col] !== "1"
    ) {
      return;
    }

    // Make element visited
    grid[row][col] = "-1";

    // Traverse in all directions:
    dfs(row + 1, col);
    dfs(row, col + 1);
    dfs(row - 1, col);
    dfs(row, col - 1);
  };

  // Traverse through every element in the aray:
  for (var i = 0; i < ROWS; i++) {
    for (var j = 0; j < COLS; j++) {
      //IF we come across an island element, traverse deeper:
      if (grid[i][j] === "1") {
        // Traversal Function:
        dfs(i, j);

        // Increment the counter after the traversal is complete, it has traversed the entire island and turned island elements into visited inside
        count++;
      }
    }
  }

  return count;
};
