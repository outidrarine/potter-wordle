import React from "react";

export default function Post5(props) {
  return (
    <div id="about">
      {props.sum ? (
        <div className="post-preview">
          <a href="post/power-of-elder-wand">
            <h2 className="post-title">
              The Power and Legacy of the Elder Wand
            </h2>
            <h3 id="postpreview" className="post-subtitle">
              The Most Feared and Coveted Wand in Wizarding History
            </h3>
          </a>
          <p className="post-meta">
            Posted by
            <a className="mx-2" href="http://pegmy.com/">
              Pegmy
            </a>
            on November 02, 2024
          </p>
          <hr className="my-4" />
        </div>
      ) : (
        <>
          <header className="masthead">
            <div className="container position-relative ">
              <div className="row gx-4  justify-content-center">
                <div className="">
                  <div className="post-heading">
                    <h1>The Power and Legacy of the Elder Wand</h1>

                    <h2 className="subheading">
                      The Most Feared and Coveted Wand in Wizarding History
                    </h2>

                    <span className="meta">
                      Posted by
                      <a className="mx-1" href="http://pegmy.com/">
                        Pegmy
                      </a>
                      on August 24, 2023
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </header>
          <article className="mb-4">
            <div className="container ">
              <div className="row gx-4  justify-content-center">
                <div className="">
                  <h2 className="section-heading">Origins of the Elder Wand</h2>
                  <p>
                    The Elder Wand, the most powerful wand ever created, is one
                    of the three Deathly Hallows. According to legend, it was
                    crafted by Death himself as part of a bargain with Antioch
                    Peverell, the eldest of the Peverell brothers. Its power has
                    made it both a tool of great achievements and a source of
                    endless conflict.
                  </p>

                  <h2 className="section-heading">
                    The Unique Properties of the Elder Wand
                  </h2>
                  <p>
                    Unlike ordinary wands, the Elder Wand is known for its
                    unparalleled strength and ability to perform magic that
                    other wands cannot. However, its allegiance is bound by a
                    peculiar rule: it changes ownership only when its previous
                    master is defeated, whether by death or disarmament.
                  </p>

                  <ul>
                    {" "}
                    <li>
                      <strong>Unmatched Magical Strength</strong>
                    </li>{" "}
                    <p>
                      The Elder Wand enhances the magical ability of its
                      wielder, allowing them to cast spells with extraordinary
                      precision and potency.
                    </p>{" "}
                    <li>
                      <strong>Allegiance Through Defeat</strong>
                    </li>{" "}
                    <p>
                      The wand’s loyalty shifts to the person who overcomes its
                      previous owner, making it a symbol of conquest and power.
                    </p>{" "}
                    <li>
                      <strong>Core of Thestral Hair</strong>
                    </li>{" "}
                    <p>
                      The Elder Wand is the only known wand with a core of
                      thestral hair, a rare and mysterious component that
                      reflects the wand’s connection to death.
                    </p>
                  </ul>

                  <h2 className="section-heading">The Wand’s Dark History</h2>
                  <p>
                    Over the centuries, the Elder Wand has been at the center of
                    numerous duels, betrayals, and murders. From Grindelwald to
                    Voldemort, its owners have often sought it out to dominate
                    others. This history has solidified its reputation as a
                    symbol of both power and peril.
                  </p>

                  <h2 className="section-heading">
                    The Elder Wand in Harry Potter’s Journey
                  </h2>
                  <p>
                    During the events of *Harry Potter and the Deathly Hallows*,
                    the Elder Wand plays a pivotal role. Voldemort’s obsession
                    with its power leads to his downfall when Harry Potter
                    becomes its true master after disarming Draco Malfoy.
                    However, Harry chooses not to wield its power, breaking the
                    cycle of violence surrounding the wand.
                  </p>

                  <h2 className="section-heading">
                    Ethical Questions Surrounding the Wand
                  </h2>
                  <p>
                    The Elder Wand raises profound ethical questions: Should
                    anyone possess such immense power? Is it possible to wield
                    it responsibly, or does its existence inevitably lead to
                    conflict? These dilemmas reflect broader themes about the
                    corrupting influence of power in the wizarding world.
                  </p>

                  <h2 className="section-heading">
                    The Legacy of the Elder Wand
                  </h2>
                  <p>
                    By returning the Elder Wand to Dumbledore’s tomb and vowing
                    to die undefeated, Harry Potter ensured that its power would
                    fade into legend. Yet the wand’s story serves as a lasting
                    reminder of the dangers of unchecked ambition and the
                    importance of choosing humility over dominance.
                  </p>
                </div>
              </div>
            </div>
          </article>
        </>
      )}
    </div>
  );
}
