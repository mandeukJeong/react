import { useState } from 'react';
import './App.css';
import { Container, Nav, Navbar } from 'react-bootstrap';
import data from './data';
import ShopList from './ShopList';
import ShopDetail from './routes/ShopDetail';
import { Routes, Route, Link, useNavigate, Outlet } from 'react-router-dom';
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

      {/* <Link to="/">홈</Link>
      <Link to="/detail">상세페이지</Link> */}

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
            </>
          }
        />
        <Route path="/detail" element={<ShopDetail />} />
        <Route path="/about" element={<About />}>
          <Route path="member" element={<div>멤버임</div>} />
          <Route path="location" element={<div>위치정보임</div>} />
        </Route>
        {/* <Route path="*" element={<div>없는 페이지요</div>} /> */}
      </Routes>

      {/* <div className="main-bg" style={{ backgroundImage: `url(${bg})` }}></div> */}
    </div>
  );
}

function About() {
  return (
    <div>
      <h4>회사정보임</h4>
      <Outlet></Outlet>
    </div>
  );
}

export default App;
