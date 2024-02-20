import React, { useState } from 'react';
import './App.css';

function App() {
  let [title, b] = useState('남자 코트 추천');

  return (
    <div className="App">
      <div className="black-nav">
        <h4>ReactBlog</h4>
      </div>
      <div className="list">
        <h4>{title}</h4>
        <p>2월 17일 발행</p>
      </div>
    </div>
  );
}

export default App;
