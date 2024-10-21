import React, { useState } from "react";
import { CopyToClipboard } from "react-copy-to-clipboard";
import { useSelector } from "react-redux";

export default function Contactus() {
  const [isCopied, setIsCopied] = useState(false);
  const isColorBlindMode = useSelector(
    (state) => state.colorBlindReducer.isColorBlindMode
  );
  return (
    <div id="contact">
      <h4 className="pb-3 pt-4">Contact Us</h4>
      <p>
        If you'd like to contact us about this site, feel free to send an email
        to :
        <div>
          <strong>pod24121994@gmail.com</strong>.
          <CopyToClipboard text="pod24121994@gmail.com">
            <button
              className="btn btn-outline-dark"
              onClick={() => setIsCopied(true)}
            >
              {isCopied ? "Copied!" : "Copy"}
            </button>
          </CopyToClipboard>
        </div>
      </p>
    </div>
  );
}
