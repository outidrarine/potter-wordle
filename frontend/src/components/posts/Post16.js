import React from "react";

export default function Post5(props) {
  return (
    <div id="about">
      {props.sum ? (
        <div className="post-preview">
          <a href="post/hogwarts-mystery-relics">
            <h2 className="post-title">
              The Mystery Behind the Hogwarts Founders' Relics
            </h2>
            <h3 id="postpreview" className="post-subtitle">
              Unveiling the Secrets of Hogwarts' Legendary Artifacts
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
                    <h1>The Mystery Behind the Hogwarts Founders' Relics</h1>

                    <h2 className="subheading">
                      Unveiling the Secrets of Hogwarts' Legendary Artifacts
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
                  <h2 className="section-heading">
                    The Legendary Four Founders
                  </h2>
                  <p>
                    Hogwarts School of Witchcraft and Wizardry, established over
                    a thousand years ago, owes much of its enduring legacy to
                    its four founders: Godric Gryffindor, Helga Hufflepuff,
                    Rowena Ravenclaw, and Salazar Slytherin. Each founder not
                    only contributed to the school’s house system but also left
                    behind a relic that has become central to wizarding lore.
                  </p>

                  <h2 className="section-heading">The Enchanted Relics</h2>
                  <p>
                    These magical artifacts—Godric Gryffindor’s sword, Helga
                    Hufflepuff’s cup, Rowena Ravenclaw’s diadem, and Salazar
                    Slytherin’s locket—were not mere trinkets. Each item
                    symbolized the values and unique traits of their respective
                    founders. Beyond their symbolism, the relics held
                    extraordinary magical properties.
                  </p>

                  <ul>
                    {" "}
                    <li>
                      <strong>Godric Gryffindor’s Sword</strong>
                    </li>{" "}
                    <p>
                      Forged by goblins, this sword was imbued with the ability
                      to absorb powers from objects it encountered. Only a true
                      Gryffindor, brave and courageous, could summon it in times
                      of need.
                    </p>{" "}
                    <li>
                      <strong>Helga Hufflepuff’s Cup</strong>
                    </li>{" "}
                    <p>
                      A golden goblet said to enhance the abilities of those who
                      drank from it, the cup symbolized Hufflepuff's belief in
                      hard work and fair play.
                    </p>{" "}
                    <li>
                      <strong>Rowena Ravenclaw’s Diadem</strong>
                    </li>{" "}
                    <p>
                      Known to grant wisdom to its wearer, this diadem embodied
                      the intelligence and creativity prized by Ravenclaw.
                    </p>{" "}
                    <li>
                      <strong>Salazar Slytherin’s Locket</strong>
                    </li>{" "}
                    <p>
                      The locket contained powerful dark magic and could only be
                      opened by a Parselmouth, representing Slytherin’s ambition
                      and cunning.
                    </p>
                  </ul>

                  <h2 className="section-heading">Dark Magic and the Relics</h2>
                  <p>
                    The relics became infamous during Voldemort's reign of
                    terror, as he sought to immortalize himself by transforming
                    these items into Horcruxes. This act not only defiled the
                    legacy of the founders but also turned the relics into
                    conduits of dark magic, requiring immense bravery and
                    sacrifice to destroy.
                  </p>

                  <h2 className="section-heading">
                    The Relics' Enduring Legacy
                  </h2>
                  <p>
                    Despite their dark history, the relics continue to captivate
                    witches and wizards worldwide. They serve as a reminder of
                    the founders' vision and the resilience of Hogwarts. Whether
                    as symbols of unity or cautionary tales of power's misuse,
                    these items remain integral to the wizarding world’s
                    history.
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
