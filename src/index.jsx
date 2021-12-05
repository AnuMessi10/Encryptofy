import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
export {default as Header} from './Components/Header';
export {default as Tabs} from './Components/Tabs';
export {default as Encrypt} from './Components/Encrypt';
export {default as Decrypt} from './Components/Decrypt';
export {default as Typewriter} from 'typewriter-effect'
export {default as lock} from './images/Lock.gif';
export {default as CopyBtn} from './Components/CopyBtn';

ReactDOM.render(<App />, document.getElementById('root'));