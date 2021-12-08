import React, { useState } from "react";

function CopyBtn() {
    const [a, b] = useState(<i className="far fa-copy"></i>);

    const copyBtnStyle = { fontSize: "1.5vw", color: "white", backgroundColor: "black", opacity: "0.6", padding: "0.5vw", borderRadius: "0.8vw" };

    return (
        <div className="copyBtn" onClick={() => {
            b(<span style={copyBtnStyle}>Copied!</span>);
            navigator.clipboard.writeText(document.getElementById('floatingTextarea2').value);
        }}>{a}
        </div>
    )
};

export default CopyBtn;