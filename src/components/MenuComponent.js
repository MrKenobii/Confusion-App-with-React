import React, { Component } from "react";
import {
  Container,
  Row,
  Card,
  CardImg,
  CardImgOverlay,
  CardTitle,
  Col,
} from "reactstrap";
import DishdetailComponent from "./DishdetailComponent";
class MenuComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedDish: null,
    };
  }
  onDishSelect(dish) {
    this.setState({ selectedDish: dish });
  }
  
  render() {
    const menu = this.props.dishes.map((dish) => {
      return (
        // <Row key={dish.id} className="mt-5">
        //   <Media className="col-2">
        //     <Media object src={dish.image} alt={dish.name} />
        //   </Media>
        //   <Media body className="col-10 text-start">
        //     <Media heading>{dish.name}</Media>
        //     <p>{dish.description}</p>
        //   </Media>
        // </Row>
        <Col className="m-1" md="5">
          <Card key={dish.id} onClick={() => this.props.onClick(dish.id)}>
            <CardImg width="100%" src={dish.image} alt={dish.name} />
            <CardImgOverlay>
              <CardTitle className="fw-bold fs-4">{dish.name}</CardTitle>
            </CardImgOverlay>
          </Card>
        </Col>
      );
    });
    return (
      <Container>
        <Row>{menu}</Row>
        <DishdetailComponent
          dish={this.state.selectedDish}> 
        </DishdetailComponent>
      </Container>
      
    );
  }
}

export default MenuComponent;