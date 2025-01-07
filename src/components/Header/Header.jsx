import React from 'react';
import ReactImage from "../../assets/react-core-concepts.png";
import "./Header.css";

const reactDescriptions = ['Fundamental', 'Crucial', 'Core'];

function getRandomDescription(array) {
  return array[Math.floor(Math.random() * array.length)];
}

const Header = () => {
  const randomWord = getRandomDescription(reactDescriptions);
  return (
    <header>
        <img src={ReactImage} alt="Stylized atom" />
        <h1>React Essentials</h1>
        <p>
          {randomWord} React concepts you will need for almost any app you are
          going to build!
        </p>
      </header>
  );
}

export default Header;