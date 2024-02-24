import React, { useState } from 'react';
import './App.css';

function App() {
  let [title, setTitle] = useState([
    '남자 코트 추천',
    '강남 우동 맛집',
    '파이썬독학',
  ]);
  let [modal, setModal] = useState(false);
  let [index, setIndex] = useState(null);
  let [value, setValue] = useState('');

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
                setIndex(index);
              }}
            >
              {item}
            </h4>
            <button
              onClick={() =>
                setTitle((prevState) => {
                  return prevState.filter((_, num) => num !== index);
                })
              }
            >
              삭제
            </button>
            <p>2월 17일 발행</p>
          </div>
        );
      })}
      <input onChange={(e) => setValue(e.target.value)} />
      <button
        onClick={() =>
          setTitle((prevState) => {
            return [...prevState, value];
          })
        }
      >
        글추가
      </button>
      <Modal2 />
      {modal === true ? <Modal index={index} title={title} /> : null}
    </div>
  );
}

function Modal(props) {
  return (
    <div className="modal">
      <h4>{props.title[props.index]}</h4>
      <p>날짜</p>
      <p>상세내용</p>
    </div>
  );
}

class Modal2 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: 'minseo',
      age: 25,
    };
  }

  render() {
    return (
      <div>
        안녕 {this.state.name}
        <button
          onClick={() => {
            this.setState({ age: 26 });
          }}
        >
          버튼
        </button>
      </div>
    );
  }
}

export default App;
