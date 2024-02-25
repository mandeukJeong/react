import { useState } from 'react';
import './App.css';
import { Container, Nav, Navbar } from 'react-bootstrap';
import data from './data';
import ShopList from './ShopList';
// import bg from './img/bg.png';

function App() {
  let [shoes, setShoes] = useState(data);

  return (
    <div className="App">
      <Navbar bg="light" data-bs-theme="light">
        <Container>
          <Navbar.Brand href="#home">ShoeShop</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">Cart</Nav.Link>
          </Nav>
        </Container>
      </Navbar>

      {/* <div className="main-bg" style={{ backgroundImage: `url(${bg})` }}></div> */}
      <div className="main-bg"></div>

      <div className="container">
        <div className="row">
          {shoes.map((item, index) => {
            return <ShopList key={index} shoes={item} />;
          })}
        </div>
      </div>
    </div>
  );
}

export default App;
