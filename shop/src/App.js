import { useState } from 'react';
import './App.css';
import { Container, Nav, Navbar } from 'react-bootstrap';
import data from './data';
import ShopList from './ShopList';
import ShopDetail from './routes/ShopDetail';
import { Routes, Route, useNavigate } from 'react-router-dom';
import axios from 'axios';
// import bg from './img/bg.png';

function App() {
  let [shoes, setShoes] = useState(data);
  let navigate = useNavigate();

  return (
    <div className="App">
      <Navbar bg="light" data-bs-theme="light">
        <Container>
          <Navbar.Brand href="#home">ShoeShop</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link onClick={() => navigate('/')}>Home</Nav.Link>
            <Nav.Link onClick={() => navigate('/detail')}>Detail</Nav.Link>
          </Nav>
        </Container>
      </Navbar>

      <Routes>
        <Route
          path="/"
          element={
            <>
              <div className="main-bg"></div>

              <div className="container">
                <div className="row">
                  {shoes.map((item, index) => {
                    return <ShopList key={index} shoes={item} />;
                  })}
                </div>
              </div>
              <button
                onClick={() => {
                  axios
                    .get('https://codingapple1.github.io/shop/data2.json')
                    .then((response) => {
                      setShoes((prevState) => {
                        return [...prevState, ...response.data];
                      });
                    })
                    .catch((e) => {
                      console.log(e);
                    });
                }}
              >
                버튼
              </button>
            </>
          }
        />
        <Route path="/detail/:id" element={<ShopDetail shoes={shoes} />} />
      </Routes>
    </div>
  );
}

export default App;
