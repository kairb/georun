import ground1 from '../assets/scenery/square-1.png';
import ground2 from '../assets/scenery/square-2.png';
import ground3 from '../assets/scenery/square-3.png';
import ground4 from '../assets/scenery/square-4.png';
import ground5 from '../assets/scenery/square-dark.png';

const getRandomGround = () => {
  return `ground${parseInt(Math.random() * 4 + 1)}`;
};

export const createWorld = () => {
  // world goes thisa way
  //  |
  //  |
  //  V
  const getInitialRow = () => {
    return [0, 0, 0, 0, 0, 0, 0, 0, 0, 'ground1'];
  };
  return new Array(40).fill(getInitialRow(), 0, 40);
};

export const blockMap = {
  0: {
    // color: 'none',
  },
  1: {
    // color: 'green',
  },
  ground1: { image: ground1 },
  ground2: { image: ground2 },
  ground3: { image: ground3 },
  ground4: { image: ground4 },
  ground5: { image: ground5 },
};

const getRandom = () => {
  return Math.random() > 0.5 ? "ground5" : 0;
};

export const getCollisionHeight = (world) => {
  const height1 = getColumnWorldHeight(world[18]);
  const height2 = getColumnWorldHeight(world[19]);
  const height3 = getColumnWorldHeight(world[20]);
  const height4 = getColumnWorldHeight(world[21]);
  return [height1, height2, height3, height4].sort()[0];
};

const getColumnWorldHeight = (column) => {
  return ((column.join('').indexOf('ground') - 1) / 10) * window.innerHeight;
};

const getNextBlock = (above, below, index) => {
  if (above !== 0) {
    return 'ground5';
  } else if (below === 0) {
    return 0;
  } else {
    return getRandom();
  }
};

const getNextColumn = (column) => {
  return column
    .map((block, index) => {
      if (index < 2) {
        return 0;
      } else if (index === 9) {
        return 'ground5';
      } else {
        return getNextBlock(column[index - 1], column[index + 1], index);
      }
    })
    .map((block, index, newWorld) => {
      console.log(newWorld);
      if (!newWorld[index - 1] && newWorld[index] && !newWorld[index-2]) {
        return getRandomGround();
      }
      if (newWorld[index - 1] && newWorld[index + 1]) {
        return 'ground5';
      }
      return block;
    });
};

export const updateWorld = (world) => {
  return [...world.slice().splice(1, 39), getNextColumn(world[39])];
};
