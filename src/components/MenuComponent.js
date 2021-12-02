import React, { Component } from "react";
import {
  Container,
  Media,
  Row,
  Card,
  CardImg,
  CardImgOverlay,
  CardText,
  CardBody,
  CardTitle,
  Col,
} from "reactstrap";
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
  renderDish(dish) {
    if (dish !== null) {
      return (
        <Card>
          <CardImg width="100%" src={dish.image} alt={dish.name} />
          <CardBody>
            <CardTitle>{dish.name}</CardTitle>
            <CardText>{dish.description}</CardText>
          </CardBody>
        </Card>
      );
    } else {
      return <div></div>;
    }
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
          <Card key={dish.id} onClick={() => this.onDishSelect(dish)}>
            <CardImg width="100%" src={dish.image} alt={dish.name} />
            <CardImgOverlay>
              <CardTitle>{dish.name}</CardTitle>
            </CardImgOverlay>
          </Card>
        </Col>
      );
    });
    return (
      <Container>
        <Row>{menu}</Row>
        <Row>
            {this.renderDish(this.state.selectedDish)}
        </Row>
      </Container>
    );
  }
}

export default MenuComponent;
