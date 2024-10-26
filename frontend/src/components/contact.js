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
        Thank You for Your Feedback! Thank you for taking the time to share your
        thoughts with us. Your feedback helps us make Wizardle even more
        magical! Whether it's a suggestion, a bug report, or just a note to say
        hi, we appreciate every bit of input from our players. We’ll review your
        message soon and do our best to keep improving the game for you and all
        wizards out there. ✨ Happy casting! — The Wizardle Team
      </p>
      <div className="text-center my-3">
        <button
          type="button"
          class="btn btn-dark mx-1"
          onClick={(e) => {
            e.preventDefault();
            window.open(
              "https://forms.gle/4iJGSeDyxgEnV9o79",
              "_blank",
              "noopener,noreferrer"
            );
          }}
        >
          Contact Form
        </button>
      </div>
      <h3>Email</h3>
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
