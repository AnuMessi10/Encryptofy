import React from 'react';
import { CopyBtn } from '..';
import CryptoJS from 'crypto-js';

const Decrypt = () => {

    var alertBtn = document.getElementsByClassName('alert');

    const decryptText = () => {
        try {
            if (alertBtn[1].style.visibility === "visible") {
                alertBtn[1].style.animation = "shake 0.75s 1";
            }
            var file = document.querySelector('input[type=file]').files[0];
            var reader = new FileReader()
            if (window.FileName !== '') {
                reader.onload = function (event) {
                    const msg = document.getElementById('floatingTextarea1').value;
                    const decryptedText = CryptoJS.AES.decrypt(msg, event.target.result);
                    // eslint-disable-next-line eqeqeq
                    if (decryptedText == '') {
                        keyTypeError();
                    }
                    else {
                        document.getElementById('floatingTextarea2').value = decryptedText.toString(CryptoJS.enc.Utf8);
                        alertBtn[1].style.visibility = "hidden";
                        alertBtn[2].style.visibility = "hidden";
                    }
                }
                reader.readAsText(file);
            }
        }
        catch (error) {
            if (error.name === "TypeError") {
                keyTypeError();
            }
            else {
                keyUploadError();
            }
        }
    }

    const keyUploadError = () => {
        alertBtn[0].style.visibility = "hidden";
        alertBtn[2].style.visibility = "hidden";
        alertBtn[1].style.visibility = "visible";
        document.getElementById('floatingTextarea2').value = '';
    }
    const keyTypeError = () => {
        alertBtn[0].style.visibility = "hidden";
        alertBtn[1].style.visibility = "hidden";
        alertBtn[2].style.visibility = "visible";
        document.getElementById('floatingTextarea2').value = '';
    }

    const handleChange = (event) => {
        try {
            window.FileName = `${event.target.files[0].name}`;
            alertBtn[1].style.visibility = "hidden";
            alertBtn[0].style.visibility = "visible";
            alertBtn[2].style.visibility = "hidden";
            document.getElementById('alertSuccess').innerHTML = 'Key "<b>' + window.FileName + '</b>" uploaded successfully!';
        }
        catch (error) {
            keyUploadError();
        }
    }

    return (
        <div>
            <div className="d-grid input-text-label" style={{ gridTemplateColumns: "2fr 2fr" }} >
                <label>Enter your encrypted message:</label>
                <label>Your Decrypted text is:</label>
            </div>
            <div className="text" >
                <div className="container-fluid pb-3">
                    <div className="d-grid gap-2" style={{ gridTemplateColumns: "2fr 2fr" }}>
                        <div className="form">
                            <textarea rows="15" className="form-control" placeholder="Your encrypted message goes here..." id="floatingTextarea1"
                                style={{ position: "relative", left: "-7%" }}></textarea>
                        </div>
                        <textarea rows="15" readOnly className="form-control" placeholder="Get your decrypted message here..." id="floatingTextarea2"
                            style={{ position: "relative", left: "-7%" }}></textarea>
                    </div>
                </div>
            </div>
            <div className="buttons">
                <div className="file btn btn-outline-primary btns">Upload your key <i class="fas fa-file-upload"></i><input type="file" id="uploadBtn" name="file" accept=".txt" onChange={handleChange} />
                </div>
                <button type="submit" className="btn btn-outline-success btns" onClick={decryptText} >Decrypt It! <i className="fas fa-unlock"></i></button>
                <CopyBtn />
            </div>
            <div>
                <svg xmlns="http://www.w3.org/2000/svg" style={{ "display": "none" }}>
                    <symbol id="check-circle-fill" fill="currentColor" viewBox="0 0 16 16">
                        <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z" />
                    </symbol>
                    <symbol id="exclamation-triangle-fill" fill="currentColor" viewBox="0 0 16 16">
                        <path d="M8.982 1.566a1.13 1.13 0 0 0-1.96 0L.165 13.233c-.457.778.091 1.767.98 1.767h13.713c.889 0 1.438-.99.98-1.767L8.982 1.566zM8 5c.535 0 .954.462.9.995l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 5.995A.905.905 0 0 1 8 5zm.002 6a1 1 0 1 1 0 2 1 1 0 0 1 0-2z" />
                    </symbol>
                </svg>
                <div className="alert alert-success d-flex align-items-center" role="alert">
                    <svg className="bi flex-shrink-0 me-2" width="24" height="24" role="img" aria-label="Success:"><use xlinkHref="#check-circle-fill" /></svg>
                    <div id="alertSuccess">
                        {/* Key upload successfully! */}
                    </div>
                </div>
                <div className="alert alert-warning d-flex align-items-center" role="alert">
                    <svg className="bi flex-shrink-0 me-2" width="24" height="24" role="img" aria-label="Warning:"><use xlinkHref="#exclamation-triangle-fill" /></svg>
                    <div id="alertWarning1">
                        Please upload your key in the button above!
                    </div>
                </div>
                <div className="alert alert-warning d-flex align-items-center" role="alert">
                    <svg className="bi flex-shrink-0 me-2" width="24" height="24" role="img" aria-label="Warning:"><use xlinkHref="#exclamation-triangle-fill" /></svg>
                    <div id="alertWarning2">
                        Please upload the correct key in a .txt format
                        <br /> OR check the message field!
                    </div>
                </div>
            </div>
        </div>
    )
};

export default Decrypt;