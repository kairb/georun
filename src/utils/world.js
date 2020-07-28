export const createWorld = () => {
  return [
    [0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0],
    [1,1,1,1,1,1,1,1,1,1]
  ]
}

export const blockMap = {
  0: {
    color: 'blue',
  },
  1: {
    color: 'green',
  }
}

const getRandom = () => {
  return Math.random() > 0.5 ? 1:0;
}

export const updateWorld = (world) => {
  return world.map((row) => {
    const newRow = [row[1],row[2],row[3],row[4],row[5],row[6],row[7],row[8],row[9],getRandom()]
    return newRow;
  })
}

