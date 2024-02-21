import React, { useState } from 'react';
import './App.css';

function App() {
  let [title, setTitle] = useState(['남자 코트 추천', '강남 우동 맛집', '파이썬독학']);
  let [good, setGood] = useState(0);

  return (
    <div className="App">
      <div className="black-nav">
        <h4>ReactBlog</h4>
      </div>
      <button onClick={() => {
        let copy = [...title];
        copy.sort();
        setTitle(copy);
      }}>가나다순정렬</button>
      <button onClick={() => {
        let copy = [...title];
        copy[0] = '여자 코트 추천';
        setTitle(copy);
      }}>글수정</button>
      <div className="list">
        <h4>{title[0]} <span onClick={() => {setGood(good + 1);}}>👍</span> {good} </h4>
        <p>2월 17일 발행</p>
      </div>
      <div className="list">
        <h4>{title[1]}</h4>
        <p>2월 17일 발행</p>
      </div>
      <div className="list">
        <h4>{title[2]}</h4>
        <p>2월 17일 발행</p>
      </div>
    </div>
  );
}

export default App;
