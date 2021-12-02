import { Component } from "react";
import { Navbar, NavbarBrand } from "reactstrap";
import "./App.css";
import MenuComponent from "./components/MenuComponent";
import { DISHES } from "./shared/dishes";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      dishes: DISHES,
    };
  }
  render() {
    return (
      <div>
        <Navbar dark color="primary">
          {/* <Container>
            <Row>
              <Col xs="1" sm="1" md="1" lg="1" xl="1">
                  <NavbarBrand href="/">Ristorante Confusion</NavbarBrand>
              </Col>
            </Row>
          </Container>  */}
          <div className="container d-flex">
            <NavbarBrand href="/" className="fw-bold">
              Ristorante Con Fusion
            </NavbarBrand>
          </div>
        </Navbar>
        <MenuComponent dishes={this.state.dishes} />
      </div>
    );
  }
}

export default App;
