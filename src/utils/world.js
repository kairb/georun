export const createWorld = () => {
  // world goes thisa way
  //  |
  //  |
  //  V

  return [
    [0,0,0,0,0,0,0,0,0,1],
    [0,0,0,0,0,0,0,0,0,1],
    [0,0,0,0,0,0,0,0,0,1],
    [0,0,0,0,0,0,0,0,0,1],
    [0,0,0,0,0,0,0,0,0,1],
    [0,0,0,0,0,0,0,0,0,1],
    [0,0,0,0,0,0,0,0,0,1],
    [0,0,0,0,0,0,0,0,0,1],
    [0,0,0,0,0,0,0,0,0,1],
    [0,0,0,0,0,0,0,0,0,1],
    [0,0,0,0,0,0,0,0,0,1],
    [0,0,0,0,0,0,0,0,0,1],
    [0,0,0,0,0,0,0,0,0,1],
    [0,0,0,0,0,0,0,0,0,1],
    [0,0,0,0,0,0,0,0,0,1],
    [0,0,0,0,0,0,0,0,0,1],
    [0,0,0,0,0,0,0,0,0,1],
    [0,0,0,0,0,0,0,0,0,1],
    [0,0,0,0,0,0,0,0,0,1],
    [0,0,0,0,0,0,0,0,0,1],
    [0,0,0,0,0,0,0,0,0,1],
    [0,0,0,0,0,0,0,0,0,1],
    [0,0,0,0,0,0,0,0,0,1],
    [0,0,0,0,0,0,0,0,0,1],
    [0,0,0,0,0,0,0,0,0,1],
    [0,0,0,0,0,0,0,0,0,1],
    [0,0,0,0,0,0,0,0,0,1],
    [0,0,0,0,0,0,0,0,0,1],
    [0,0,0,0,0,0,0,0,0,1],
    [0,0,0,0,0,0,0,0,0,1],
    [0,0,0,0,0,0,0,0,0,1],
    [0,0,0,0,0,0,0,0,0,1],
    [0,0,0,0,0,0,0,0,0,1],
    [0,0,0,0,0,0,0,0,0,1],
    [0,0,0,0,0,0,0,0,0,1],
    [0,0,0,0,0,0,0,0,0,1],
    [0,0,0,0,0,0,0,0,0,1],
    [0,0,0,0,0,0,0,0,0,1],
    [0,0,0,0,0,0,0,0,0,1],
    [0,0,0,0,0,0,0,0,0,1]
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

export const getCollisionHeight = (world) => {
  const height1 = getColumnWorldHeight(world[18])
  const height2 = getColumnWorldHeight(world[19])
  const height3 = getColumnWorldHeight(world[20])
  const height4 = getColumnWorldHeight(world[21])
  return [height1,height2,height3, height4].sort()[0]
}

const getColumnWorldHeight = (column) =>{
  return (column.join('').indexOf(1) / 10 * window.innerHeight)
}

const getNextBlock = (above, below, index) => {
  if(above === 1){
    return 1;
  }else if (below === 0){
    return 0;
  }else{
    return getRandom();
  }
}

const getNextColumn = (column) => {
  return column.map((block, index) => {
    if(index < 2){
      return 0;
    }else if(index === 9){
      return 1;
    }else{
      return getNextBlock(column[index-1], column[index +1], index)
    }
  }).map((block,index, newWorld) =>{
    if (newWorld[index-1] && newWorld[index+1]){
      return 1;
    }
    return block;
  })
}

export const updateWorld = (world) => {
  return [
    ...world.slice().splice(1,39),
    getNextColumn(world[39])
  ]
}

