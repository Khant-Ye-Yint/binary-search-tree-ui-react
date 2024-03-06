function optimalBST(keys, frequencies) {
  const n = keys.length;
  const cost = new Array(n).fill().map(() => new Array(n).fill(0));
  const rootIndex = new Array(n).fill().map(() => new Array(n).fill(0));

  // Initialize cost table for one-node subtrees
  for (let i = 0; i < n; i++) {
    cost[i][i] = frequencies[i];
  }

  // Dynamic Programming to fill the cost table
  for (let l = 1; l <= n; l++) {
    for (let i = 0; i <= n - l; i++) {
      let j = i + l - 1;
      cost[i][j] = Infinity;
      let subtreeProb = frequencies
        .slice(i, j + 1)
        .reduce((acc, val) => acc + val, 0);
      for (let r = i; r <= j; r++) {
        let c = r > i ? cost[i][r - 1] : 0;
        c += r < j ? cost[r + 1][j] : 0;
        c += subtreeProb;
        if (c < cost[i][j]) {
          cost[i][j] = c;
          rootIndex[i][j] = r;
        }
      }
    }
  }

  // Reconstruct the optimal binary search tree
  return {
    root: reconstructTree(keys, 0, n - 1, rootIndex),
    cost: cost[0][n - 1],
  };
}

function reconstructTree(keys, start, end, rootIndex) {
  if (start > end) {
    return null;
  }
  let rootIdx = rootIndex[start][end];
  let root = {
    data: keys[rootIdx],
    left: reconstructTree(keys, start, rootIdx - 1, rootIndex),
    right: reconstructTree(keys, rootIdx + 1, end, rootIndex),
  };
  return root;
}

export { optimalBST };
