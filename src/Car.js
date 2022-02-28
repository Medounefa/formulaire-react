import React from "react";
import car from "./car.svg";

const Car = (props) =>{
    return (
        <img className="carBorder" src={car} alt="hhh" fill={props.color} />
    )
}
export default Car;