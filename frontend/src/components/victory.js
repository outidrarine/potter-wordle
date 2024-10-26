import React, { useState } from "react";
import Modal from "react-bootstrap/Modal";

export default function Victory(props) {
  const [isShown, setIsShown] = useState(true);

  const Close = () => {
    setIsShown(false);
  };

  return (
    <>
      <Modal
        show={isShown}
        onHide={() => setIsShown(false)}
        size="lg"
        centered
        className="transparentModal"
      >
        <Modal.Body>
          <div className="container victory">
            <div className="card w-80 text-center">
              <Modal.Header className="pt-2" closeButton></Modal.Header>

              <div className="p-3">
                <h1 className="pb-3">Victory!</h1>
                <p>
                  Congratulations! 🎉 You've correctly guessed the wizard! Ready
                  for another challenge? 🧙‍♂️ A new wizard has been chosen at
                  random—can you guess who it is? Tap "Play Again" to test your
                  skills and take another guess! 💫
                </p>
                <h2>{props.champion}</h2>
                <p className="mb-1 smaller">{props.title}</p>
                {props.tries > 1 ? (
                  <p className="smaller">It took {props.tries} tries</p>
                ) : (
                  <p className="smaller">First try</p>
                )}
                <button type="button" class="btn btn-dark mx-1" onClick={Close}>
                  Play again
                </button>
                <button
                  type="button"
                  class="btn  mx-1"
                  onClick={(e) => {
                    e.preventDefault();
                    window.open(
                      "https://forms.gle/4iJGSeDyxgEnV9o79",
                      "_blank",
                      "noopener,noreferrer"
                    );
                  }}
                >
                  Give Feedback
                </button>
              </div>
            </div>
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
}
