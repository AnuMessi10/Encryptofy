import React from 'react';
import CryptoJS from 'crypto-js';
import { CopyBtn } from '..';

function Encrypt() {

    function encryptText() {
        var userInput = document.getElementById('floatingTextarea1').value;
        var blankInput = document.getElementsByClassName('alert');

        if (userInput !== '') {
            blankInput[0].style.visibility = "hidden";
            window.key = Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);
            const hash = CryptoJS.AES.encrypt(userInput, window.key);
            document.getElementById('floatingTextarea2').value = hash.toString();

        }
        else {
            blankInput[0].style.visibility = "visible";
        }
    };

    function downloadKey() {
        const element = document.createElement("a");
        const file = new Blob([window.key], { type: 'text/plain' });
        element.href = URL.createObjectURL(file);
        element.download = "Key.txt";
        document.body.appendChild(element); // Required for this to work in FireFox
        element.click();
    }

    return (
        <div>
            <div className="d-grid input-text-label" style={{ gridTemplateColumns: "2fr 2fr" }}>
                <label>Enter the text to be encrypted (plaintext):</label>
                <label>Your Encrypted text is:</label>
            </div>
            <div className="text" >
                <div className="container-fluid pb-3">
                    <div className="d-grid gap-3" style={{ gridTemplateColumns: "2fr 2fr" }}>
                        <div className="bg-light border rounded-3">
                            <div className="form">
                                <textarea rows = "15" name="inputEncrypt" className="form-control" placeholder="Your text goes here..." id="floatingTextarea1" style={{ position: "relative", left: "-7%" }}></textarea>
                            </div>
                        </div>
                        <div className="bg-light border rounded-3">
                            <textarea rows = "15" readOnly className="form-control" placeholder="Get your secret message here..." id="floatingTextarea2"
                                style={{ position: "relative", left: "-7%" }}></textarea>
                        </div>
                    </div>
                </div>
            </div>
            <div className="buttons">
                <button type="submit" onClick={encryptText} className="btn btn-outline-success btns">Encrypt It! <i className="fas fa-lock"></i></button>
                <button onClick={downloadKey} className="btn btn-outline-primary btns">Save your key <i className="fas fa-download"></i></button>
                <CopyBtn />
            </div>
            <div>
                <svg xmlns="http://www.w3.org/2000/svg" style={{ "display": "none" }}>
                    <symbol id="exclamation-triangle-fill" fill="currentColor" viewBox="0 0 16 16">
                        <path d="M8.982 1.566a1.13 1.13 0 0 0-1.96 0L.165 13.233c-.457.778.091 1.767.98 1.767h13.713c.889 0 1.438-.99.98-1.767L8.982 1.566zM8 5c.535 0 .954.462.9.995l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 5.995A.905.905 0 0 1 8 5zm.002 6a1 1 0 1 1 0 2 1 1 0 0 1 0-2z" />
                    </symbol>
                </svg>
                <div className="alert alert-warning d-flex align-items-center" role="alert">
                    <svg className="bi flex-shrink-0 me-2" width="24" height="30" role="img" aria-label="Warning:"><use xlinkHref="#exclamation-triangle-fill" /></svg>
                    <div id="alertWarning1">
                        Please enter a valid input!
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Encrypt;