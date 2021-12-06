import React, { Component } from "react";
import {
  Row,
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  Col,
} from "reactstrap";

class DishdetailComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      ...props,
    };
  }
  renderComments(comments) {
    if (comments != null) {
      const userComments = Object.entries(comments.comments).map((item) => {
        return (
          <div className="mb-4">
            <ul className="list-group">
              <li className="list-unstyled">{item[1].comment}</li>
              <li className="list-unstyled">
                --{item[1].author} ,{" "}
                {new Intl.DateTimeFormat("en-US", {
                  year: "numeric",
                  month: "short",
                  day: "2-digit",
                }).format(new Date(Date.parse(item[1].date)))}
              </li>
            </ul>
          </div>
        );
      });
      return (
        <Col className="m-1" md="5">
          <h4 className="fw-bold fs-2">Comments</h4>
          <div className="m-1 fs-4">{userComments}</div>
        </Col>
      );
    }
  }
  renderDish(dish) {
    if (dish != null) {
      return (
        <Col className="m-1" md="5">
          <Card key={dish.id}>
            <CardImg width="100%" src={dish.image} alt={dish.name} />
            <CardBody>
              <CardTitle>{dish.name}</CardTitle>
              <CardText>{dish.description}</CardText>
            </CardBody>
          </Card>
        </Col>
      );
    } else {
      return <div></div>;
    }
  }
  render() {
    return (
      <div className="container">
        <Row>
          {this.renderDish(this.props.dish)}
          {this.renderComments(this.props.dish)}
        </Row>
      </div>
    );
  }
}

export default DishdetailComponent;
