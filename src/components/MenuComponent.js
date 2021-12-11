import React from "react";
import {
  Card,
  CardImg,
  CardImgOverlay,
  CardTitle,
} from "reactstrap";

  function RenderMenuItem({dish,onClick}){
    return (
      <Card key={dish.id} onClick={() => onClick(dish.id)}>
      <CardImg width="100%" src={dish.image} alt={dish.name} />
      <CardImgOverlay>
        <CardTitle className="fw-bold fs-4">{dish.name}</CardTitle>
      </CardImgOverlay>
    </Card>
    );
  }
  
  const MenuComponent = (props) => {
    const menu = props.dishes.map((dish) => {
      return (
        <div className="m-1 col-12 col-md-5" key={dish.id}>
            <RenderMenuItem dish={dish} onClick={props.onClick} />
        </div>
      );
    });
    return (
      <div className="container">
        <div className="row">{menu}</div>
      </div>
      
    );
  }
  




export default MenuComponent;