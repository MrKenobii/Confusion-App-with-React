import React, { Component } from "react";
import {
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  Breadcrumb,
  BreadcrumbItem,
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  Label,
  Col,
  Row,
} from "reactstrap";
import { Link } from "react-router-dom";
import { Control, LocalForm, Errors } from "react-redux-form";
import { Loading } from "./LoadingComponent";
import{ baseUrl } from "../shared/baseUrl";

const maxLength = (len) => (val) => !val || val.length <= len;
const minLength = (len) => (val) => val && val.length >= len;
class CommentForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isModalOpen: false,
    };
    this.toggleModal = this.toggleModal.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  toggleModal() {
    this.setState({
      isModalOpen: !this.state.isModalOpen,
    });
  }
  handleSubmit(values) {
    this.toggleModal();
    // alert("Current State is:" + JSON.stringify(values));
    this.props.addComment(this.props.dishId, values.rating, values.author, values.comment);
  }
  render() {
    return (
      <>
        <Button outline onClick={this.toggleModal}>
          <span className="fa fa-pencil fa-lg"></span> Submit Comment
        </Button>
        <Modal isOpen={this.state.isModalOpen} toggle={this.toggleModal}>
          <ModalHeader toggle={this.toggleModal}>Submit Comment</ModalHeader>
          <ModalBody>
            <LocalForm onSubmit={(values) => this.handleSubmit(values)}>
              <Row className="form-group mt-2">
                <Col md={12}>
                <div className="m-1">
                  <Label htmlFor="rating" md={10} className="fw-bold">
                    Rating
                  </Label>

                  <Control.select
                    model=".rating"
                    name="rating"
                    className="form-control"
                  >
                    <option name="1" value="1">
                      1
                    </option>
                    <option name="2" value="2">
                      2
                    </option>
                    <option name="3" value="3">
                      3
                    </option>
                    <option name="4" value="4">
                      4
                    </option>
                    <option name="5" value="5">
                      5
                    </option>
                  </Control.select>
                </div>
                </Col>
              </Row>
              <Row className="form-group mt-2">
                <Col md={12}>
                <div className="m-1">
                  <Label htmlFor="author" md={10} className="fw-bold">
                    Your Name
                  </Label>

                  <Control.text
                    model=".author"
                    id="author"
                    className="form-control"
                    name="author"
                    placeholder="Your Name"
                    validators={{
                      minLength: minLength(3),
                      maxLength: maxLength(15),
                    }}
                  />
                  <Errors
                    className="text-danger"
                    model=".author"
                    show="touched"
                    messages={{
                      minLength: "Must be greater than 2 characters ",
                      maxLength: "Must be less than 15 characters ",
                    }}
                  />
                </div>
                </Col>
              </Row>
              <Row className="form-group mt-2">
                <Col md={12}>
                <div className="m-1">
                  <Label htmlFor="comment" md={2} className="fw-bold">
                    Comment
                  </Label>

                  <Control.textarea
                    model=".comment"
                    id="comment"
                    className="form-control"
                    name="comment"
                    rows="12"
                  />
                </div>
                </Col>
              </Row>
              <Row className="form-group mt-2">
                <Col md={2}>
                  <Button type="submit" color="primary">
                    Submit
                  </Button>
                </Col>
              </Row>
            </LocalForm>
          </ModalBody>
        </Modal>
      </>
    );
  }
}

function RenderComments({ comments, addComment, dishId}) {
  if (comments !== null) {
    return (
      <div className="col-12 col-md-5 m-1">
        <h4 className="fw-bolder fs-2">Comments</h4>
        <ul className="list-unstyled">
          {comments.map((comment) => {
            return (
              <li key={comment.id}>
                <p className="fs-4">{comment.comment}</p>
                <p className="fs-5">
                  -- {comment.author} , {" "}
                  {new Intl.DateTimeFormat("en-US", {
                    year: "numeric",
                    month: "short",
                    day: "2-digit",
                  }).format(new Date(Date.parse(comment.date)))}
                </p>
              </li>
            );
          })}
        </ul>
        <div className="col-12 col-md-5 m-1">
          <CommentForm addComment={addComment} dishId={dishId}/>
        </div>
      </div>
    );
  } else {
    return <div></div>;
  }
}
function RenderDish({ dish }) {
  if (dish !== null) {
    return (
      <div className="col-12 col-md-5 m-1">
        <Card>
          <CardImg top width="100%" src={baseUrl +  dish.image} alt={dish.name} />
          <CardBody>
            <CardTitle>{dish.name}</CardTitle>
            <CardText>{dish.description}</CardText>
          </CardBody>
        </Card>
      </div>
    );
  } else {
    return <div></div>;
  }
}
const DishdetailComponent = (props) => {
  if(props.isLoading) {
    return(
      <div className="container">
        <div className="row">
          <Loading />
        </div>
      </div>
    );
  }else if(props.errMess) {
    return(
      <div className="container">
        <div className="row">
          <h4>{props.errMess}</h4>
        </div>
      </div>
    );
  }
  else if (props.dish != null) {
    return (
      <div className="container">
        <div className="row">
          <Breadcrumb>
            <BreadcrumbItem>
              <Link to="/menu">Menu</Link>
            </BreadcrumbItem>
            <BreadcrumbItem active>{props.dish.name}</BreadcrumbItem>
          </Breadcrumb>
          <div className="col-12">
            <h3>{props.dish.name}</h3>
            <hr />
          </div>
        </div>
        <div className="row">
          <RenderDish dish={props.dish} />
          <RenderComments comments={props.comments} addComment={props.addComment} dishId={props.dish.id} />
        </div>
      </div>
    );
  } else {
    return <div></div>;
  }
};

export default DishdetailComponent;
