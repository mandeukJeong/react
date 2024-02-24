import React, { useState } from 'react';
import './App.css';

function App() {
  let [title, setTitle] = useState([
    '남자 코트 추천',
    '강남 우동 맛집',
    '파이썬독학',
  ]);
  let [modal, setModal] = useState(false);

  return (
    <div className="App">
      <div className="black-nav">
        <h4>ReactBlog</h4>
      </div>
      {title.map((item) => {
        return (
          <div className="list">
            <h4
              onClick={() => {
                setModal((prevState) => {
                  return !prevState;
                });
              }}
            >
              {item}
            </h4>
            <p>2월 17일 발행</p>
          </div>
        );
      })}
      {modal === true ? <Modal /> : null}
    </div>
  );
}

function Modal() {
  return (
    <div className="modal">
      <h4>제목</h4>
      <p>날짜</p>
      <p>상세내용</p>
    </div>
  );
}

export default App;
