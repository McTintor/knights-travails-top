function knightMoves(start, end) {
    const directions = [
      [2, 1], [1, 2], [-1, 2], [-2, 1],
      [-2, -1], [-1, -2], [1, -2], [2, -1]
    ];
  
    function isValid(x, y) {
      return x >= 0 && x < 8 && y >= 0 && y < 8;
    }
  
    const queue = [[...start, [start]]];
    const visited = new Set();
    visited.add(start.toString());
  
    while (queue.length > 0) {
      const [x, y, path] = queue.shift();
  
      if (x === end[0] && y === end[1]) {
        console.log(`You made it in ${path.length - 1} moves! Here's your path:`);
        path.forEach(square => console.log(square));
        return path;
      }
  
      for (const [dx, dy] of directions) {
        const [nx, ny] = [x + dx, y + dy];
        if (isValid(nx, ny) && !visited.has([nx, ny].toString())) {
          visited.add([nx, ny].toString());
          queue.push([nx, ny, path.concat([[nx, ny]])]);
        }
      }
    }
  }
  
  // Example usage:
  knightMoves([0, 0], [7, 7]);