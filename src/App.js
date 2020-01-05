import React from 'react';
import logo from './logo.svg';
import MyName from './MyName';
import Counter2 from './NonClassFieldsCounter';
import './App.css';

function App() {
  let a = 1;
  let b = 'jiwon';
  let value = 1;
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <div className="App-test">
          {
            a==1 ? (<p>Edit {a}and save to reload. </p>)
                 : (<p>Edit <code>{b}</code> and save to reload. </p>)
          }
        </div>
        <MyName name="윤지원"/>
        <div>
          {
            (() => {
                if (value === 1) return (<div>하나</div>);
                if (value === 2) return (<div>둘</div>);
                if (value === 3) return (<div>셋</div>);
              })()
          }
          
        </div>
        <Counter2/>
        
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer">
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
