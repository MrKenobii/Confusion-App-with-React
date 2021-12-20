import React, { Component } from "react";
import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  Label,
  Col,
  Row,
} from "reactstrap";
import { Control, LocalForm, Errors } from "react-redux-form";

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
    alert("Current State is:" + JSON.stringify(values));
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
              </Row>
              <Row className="form-group mt-2">
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
              </Row>
              <Row className="form-group mt-2">
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

export default CommentForm;
