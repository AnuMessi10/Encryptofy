import React from 'react';
import CryptoJS from 'crypto-js';
import { CopyBtn } from '..';

function Encrypt() {

    function encryptText() {
        window.key = Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);
        const msg = document.getElementById('floatingTextarea1').value;
        const hash = CryptoJS.AES.encrypt(msg, window.key);
        document.getElementById('floatingTextarea2').value = hash.toString();
        alert(window.key);
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
            <div className="input-text-label" >
                <label>Enter the text to be encrypted (plaintext)</label>
                <label style={{ marginLeft: "21rem" }}>Your Encrypted text is:</label>
                <CopyBtn/>
            </div>
            <div className="text" >
                <div className="container-fluid pb-3">
                    <div className="d-grid gap-3" style={{ gridTemplateColumns: "2fr 2fr" }}>
                        <div className="bg-light border rounded-3">
                            <div className="form">
                                <textarea name="inputEncrypt" className="form-control" placeholder="Your text goes here..." id="floatingTextarea1" style={{ height: "15rem", position: "relative", left: "-7%" }}></textarea>
                            </div>
                        </div>
                        <div className="bg-light border rounded-3">
                            <textarea readOnly className="form-control" placeholder="Get your secret message here..." id="floatingTextarea2"
                                style={{ height: "15rem", position: "relative", left: "-7%" }}></textarea>
                        </div>
                    </div>
                </div>
            </div>
            <div className="buttons">
                <button type="submit" onClick={encryptText} className="btn btn-outline-success btns">Encrypt It! <i className="fas fa-lock"></i></button>
                <button onClick={downloadKey} className="btn btn-outline-primary btns">Save your key <i className="fas fa-download"></i></button>
            </div>
        </div>
    )
}

export default Encrypt;