import React from 'react'
import plane from '../../assets/Fly.png';
import deadPlane from '../../assets/Dead.png'
import {makeStyles} from "@material-ui/core";

const useStyles = makeStyles({
  plane:({position}) => ({
    position:"absolute",
    width: "10%",
    top: position,
  })
});


const Plane = ({position, gameOver}) => {
  const classes = useStyles({position});
  return(
    <img src={(gameOver)? deadPlane: plane} alt="plane" className={classes.plane}/>
  )
}

export default Plane;