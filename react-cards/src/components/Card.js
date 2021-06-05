import React from 'react'
import { CardContainer, CardBody, CardTitle, CardButton, CardContent, CardImg } from "./ElementsCard";


const Card = (props) => {
    return (
      <CardContainer>
        <CardBody>
          <CardImg src={props.img}/>
          <CardTitle>{props.title}</CardTitle>
          <CardContent>{props.description}</CardContent>
        </CardBody>
        <CardButton className="card__btn">View Recipe</CardButton>
      </CardContainer>
    );
  };
  
  export default Card;
