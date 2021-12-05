import React from "react";

function CopyBtn() {
    return (
        <div>
            <span id="copySuccess" style={{ "visibility": "hidden" }}>
                Text copied to clipboard successfully!
            </span>
            <button className="copyBtn" onClick={() => {
                navigator.clipboard.writeText(document.getElementById('floatingTextarea2').value);
                document.getElementById('copySuccess').style.visibility = "visible";
            }}>
                <i className="far fa-copy"></i>
            </button>
        </div>
    )
};

export default CopyBtn;