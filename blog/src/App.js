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
      {title.map((item, index) => {
        return (
          <div className="list" key={index}>
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
      {modal === true ? <Modal title={title} /> : null}
    </div>
  );
}

function Modal(props) {
  const [text, setText] = useState(props.title[0]);
  return (
    <div className="modal">
      <h4>{text}</h4>
      <p>날짜</p>
      <p>상세내용</p>
      <button onClick={() => setText('여자 코트 추천')}>글수정</button>
    </div>
  );
}

export default App;
