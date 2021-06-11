
import './App.scss';
import { Atom, Orbit, Trinity, Electron, Square, SelfSquare, Radar } from './spinners/index';

function App() {
  return (
    <>
    <div className="main-container">
  <div className="title-holder">
    <h1 className="header">Epic React Spinners</h1>
    <h5 className="sub-header">React Implementation of
      <a className="link" href="https://epic-spinners.epicmax.co/" target="_blank" rel="noreferrer"> Epic Spinners
      </a>
    </h5>

    <div className="get-started">
      <div className="get-started__docs">
        <h4>Get started</h4>
        <a href="https://github.com/p4pupro/epic-react-spinners" className="docs">Docs</a>
      </div>
      <div className="get-started-code">
        <p>npm install epic-react-spinners</p>
        <p>yarn add epic-react-spinners</p>
      </div>
    </div>
  </div>

  <div className="spinner-holder">
    <div className="spinner-element">
      <Atom color="#61dafb" size="70" animationDuration="2"></Atom>
    </div>
    <div className="name">
      Atom Spinner
    </div>
  </div>

  <div className="spinner-holder">
    <div className="spinner-element">
      <Orbit color="#61dafb" size="70" animationDuration="2"></Orbit>
    </div>
    <div className="name">
      Orbit Spinner
    </div>
  </div>
  
  <div className="spinner-holder">
    <div className="spinner-element">
      <Trinity color="#61dafb" size="70" animationDuration="2"></Trinity>
    </div>
    <div className="name">
      Trinity Spinner
    </div>
  </div>

  <div className="spinner-holder">
    <div className="spinner-element">
      <Electron color="#61dafb" size="70" animationDuration="2"></Electron>
    </div>
    <div className="name">
      Electron Spinner
    </div>
  </div>

  <div className="spinner-holder">
    <div className="spinner-element">
      <Square color="#61dafb" size="70" animationDuration="2"></Square>
    </div>
    <div className="name">
      Squares Spinner
    </div>
  </div>

  <div className="spinner-holder">
    <div className="spinner-element">
      <SelfSquare color="#61dafb" size="70" animationDuration="1.4"/>
    </div>
    <div className="name">
      Squares Spinner
    </div>
  </div>

  <div className="spinner-holder">
    <div className="spinner-element">
      <Radar color="#61dafb" size="70" animationDuration="2"/>
    </div>
    <div className="name">
      Squares Spinner
    </div>
  </div>

  </div>

<footer>
  <h4>By
    <a href="https://github.com/p4pupro" className="link"> @p4pupro</a>
  </h4>
  <p>This project is an implementation of the
    <a href="https://github.com/p4pupro/epic-spinners" target="_blank" rel="noreferrer" className="link"> Epic Spinners</a> project created by
    <a href="https://github.com/p4pupro" target="_blank" rel="noreferrer" className="link"> p4pupro</a>
  </p>
</footer>
</>
   
  );
}

export default App;
