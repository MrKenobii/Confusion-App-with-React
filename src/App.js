import { Navbar, NavbarBrand } from "reactstrap";
import "./App.css";

const App = () => {
  return (
    <div className="App">
      <Navbar dark color="primary">
       {/* <Container>
          <Row>
            <Col xs="1" sm="1" md="1" lg="1" xl="1">
                <NavbarBrand href="/">Ristorante Confusion</NavbarBrand>
            </Col>
          </Row>
        </Container>  */}
        <div className="container d-flex">
            <NavbarBrand href="/" className="fw-bold">Ristorante Con Fusion</NavbarBrand>
          </div>
      </Navbar>
    </div>
  );
};

export default App;
