"use client";
import React, { useEffect, useState } from "react";
import "./Content.css";
import Spinner from "react-bootstrap/Spinner";

const Content = () => {
  let [chuck, setchuck] = useState(true);
  let [dark, setdark] = useState(false);
  let [dad, setdad] = useState(false);

  //   ---------------------------------------

  let [chuckjoke, setchuckjoke] = useState(
    "Click to generate chucknoras joke "
  );
  let [darkjokesetup, setdarkjokesetup] = useState(
    "Click to generate dark joke "
  );
  let [darkjokedelivery, setdarkjokedelivery] = useState(" ready for answer");
  let [dadjoke, setdadjoke] = useState("Click to generate dad joke ");

  async function updatedarkjoke() {
    // let hider=document.querySelector(".hider")
    // hider?.classList.remove("true")

    try {    let joke = await fetch("https://v2.jokeapi.dev/joke/Dark?type=twopart")
      .then((data) => data.json())
      .then(
        (data) => (
          setdarkjokesetup(data.setup), setdarkjokedelivery(data.delivery)
        )
      );
      
    } catch (error) {

      setdarkjokesetup("(*_*) Error");
      
    }


  }

  useEffect(() => {
    let hider = document.querySelector(".hider");
    hider?.classList.remove("true");
  }, [darkjokedelivery]);



  async function updatechuckjoke() {


    try {    let setup = await fetch("https://api.chucknorris.io/jokes/random")
      .then((data) => data.json())
      .then((data) => setchuckjoke(data.value));
      
    } catch (error) {

      setchuckjoke("(*_*) Error");
      
    }

  
  
    }
  async function updatedadjoke() {

    try {    let joke = await fetch(
      "https://v2.jokeapi.dev/joke/Pun,Spooky?blacklistFlags=nsfw,religious,political,racist,sexist,explicit&type=single"
    )
      .then((data) => data.json())
      .then((data) => setdadjoke(data.joke));
      
    } catch (error) {

      setdadjoke("(*_*) Error")
      
    }



  
  
    }

  // ----------------------------------------------
  let categoryChangeToChuck = () => {
    setchuck(true);
    setdad(false);
    setdark(false);
  };
  let categoryChangeToDark = () => {
    setchuck(false);
    setdad(false);
    setdark(true);
  };

  let categoryChangeToDad = () => {
    setchuck(false);
    setdad(true);
    setdark(false);
  };

  let AnswerRevealer = () => {
    let hider = document.querySelector(".hider");

    hider?.classList.add("true");
  };

  if (chuck) {
    return (
      <>
        <div className="category">
          <div className="chucknoras" onClick={categoryChangeToChuck}>
            chucknoras
          </div>

          <div
            className="dark"
            onClick={categoryChangeToDark}
            style={{ borderColor: "#57a6a100", color: "#FFFFFF" }}
          >
            dark{" "}
          </div>

          <div
            className="dad"
            onClick={categoryChangeToDad}
            style={{ borderColor: "#57a6a100", color: "#FFFFFF" }}
          >
            dad joke
          </div>
        </div>

        <div className="chuckjoke">
          <h1>
            {chuckjoke} {<Spinner animation="border" />}
          </h1>
        </div>

        <button onClick={updatechuckjoke}>Chuck Joke</button>
      </>
    );
  }

  if (dad) {
    return (
      <>
        <div className="category">
          <div
            className="chucknoras"
            onClick={categoryChangeToChuck}
            style={{ borderColor: "#57a6a100", color: "#FFFFFF" }}
          >
            chucknoras
          </div>

          <div
            className="dark"
            onClick={categoryChangeToDark}
            style={{ borderColor: "#57a6a100", color: "#FFFFFF" }}
          >
            dark
          </div>

          <div className="dad" onClick={categoryChangeToDad}>
            dad joke
          </div>
        </div>

        <div className="dadjoke">
          <h1>{dadjoke} </h1>
        </div>

        <button onClick={updatedadjoke}>DAD Jokes</button>
      </>
    );
  }
  if (dark) {
    return (
      <>
        <div className="category">
          <div
            className="chucknoras"
            onClick={categoryChangeToChuck}
            style={{ borderColor: "#57a6a100", color: "#FFFFFF" }}
          >
            chucknoras
          </div>

          <div className="dark" onClick={categoryChangeToDark}>
            dark{" "}
          </div>

          <div
            className="dad"
            onClick={categoryChangeToDad}
            style={{ borderColor: "#57a6a100", color: "#FFFFFF" }}
          >
            {" "}
            dad joke{" "}
          </div>
        </div>

        <div className="darkjokesetup">
          <h1>{darkjokesetup}</h1>
        </div>
        <div className="darkjokedelivery">
          <div className="hider" onClick={AnswerRevealer}>
            Tap to Reveal
          </div>

          <h1 className="jokedelivery">{darkjokedelivery}</h1>
        </div>

        <button onClick={updatedarkjoke}>Dark Joke</button>
      </>
    );
  }
};

export default Content;
