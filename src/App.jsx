import React from 'react';
import "./App.css";
import { Tabs, Encrypt, Decrypt, Typewriter, lock} from './index';

function App() {
  return (
    <div>
      <div className="appTitle">
        <Typewriter
          onInit={(typewriter) => {
            typewriter.typeString("<h1 id='titleName'>Encryptofy!</h1>").start();
          }}
        />
        <img id="padlock" className="my-3" src={lock} alt='lock' />
      </div>
      <Tabs>
        <div label="Encrypt">
          <Encrypt />
        </div>
        <div label="Decrypt">
          <Decrypt />
        </div>
      </Tabs>
    </div>
  );
}

export default App;