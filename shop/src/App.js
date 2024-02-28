import { createContext, useState } from 'react';
import './App.css';
import { Container, Nav, Navbar } from 'react-bootstrap';
import data from './data';
import ShopList from './ShopList';
import ShopDetail from './routes/ShopDetail';
import Cart from './routes/Cart';
import { Routes, Route, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { useQuery } from 'react-query';

// import bg from './img/bg.png';

export let Context1 = createContext();

function App() {
  let [shoes, setShoes] = useState(data);
  let [remain, setRemain] = useState([10, 11, 12]);
  const [count, setCount] = useState(0);
  const [loading, setLoading] = useState(false);
  let navigate = useNavigate();

  let result = useQuery(
    '',
    () =>
      axios.get('https://codingapple1.github.io/userdata.json').then((res) => {
        return res.data;
      }),
    { staleTime: 2000 }
  );

  return (
    <div className="App">
      <Navbar bg="light" data-bs-theme="light">
        <Container>
          <Navbar.Brand href="#home">ShoeShop</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link onClick={() => navigate('/')}>Home</Nav.Link>
            <Nav.Link onClick={() => navigate('/detail')}>Detail</Nav.Link>
          </Nav>
          <Nav className="ms-auto">
            {result.isLoading ? '로딩중입니다.' : result.data.name}
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
                  setLoading(true);
                  if (count < 2) {
                    axios
                      .get(
                        `https://codingapple1.github.io/shop/data${
                          count + 2
                        }.json`
                      )
                      .then((response) => {
                        setLoading(false);
                        setShoes((prevState) => {
                          return [...prevState, ...response.data];
                        });
                        setCount((prevState) => prevState + 1);
                      })
                      .catch((e) => {
                        setLoading(false);
                        console.log(e);
                      });
                  } else {
                    setLoading(false);
                    alert('상품이 더 이상 존재하지 않습니다.');
                  }
                }}
              >
                버튼
              </button>
              {loading && <p>로딩중입니다...</p>}
            </>
          }
        />
        <Route
          path="/detail/:id"
          element={
            <Context1.Provider value={{ remain }}>
              <ShopDetail shoes={shoes} />
            </Context1.Provider>
          }
        />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </div>
  );
}

export default App;
