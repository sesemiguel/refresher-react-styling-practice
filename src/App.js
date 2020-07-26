import React from 'react';
import './App.css';

class App extends React.Component {

  render() {

    let currentDate = new Date();
    let currentHour = currentDate.getHours();
    let greetingText = "";

    const customStyle = {
      color: "yellow"
    }

    const greeting = (currentHour) => {
      if (currentHour >= 0 && currentHour < 12) {
        customStyle.color = "red"
        greetingText = "Morning"
      }
      else if (currentHour >= 12 && currentHour < 18) {
        customStyle.color = "green"
        greetingText = "Afternoon"
      }
      else if (currentHour >= 18 && currentHour < 24) {
        customStyle.color = "blue"
        greetingText = "Evening"
      }
    }

    return (
      <>
        {greeting(currentHour)}
        <h1 className="heading" style={customStyle}>Good {greetingText}!</h1>
      </>
    )
  }
}

export default App;
