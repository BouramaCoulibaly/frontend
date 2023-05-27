import React from "react";
import "./Cards.css";
import Card from "./card";

const Cards = () => {
  const generateRandomData = () => {
    const colors = ["#FF6384", "#36A2EB", "#FFCE56", "#4BC0C0", "#9966FF"];
    const titles = ["Card 1", "Card 2", "Card 3", "Card 4", "Card 5"];
    const barValues = [Math.floor(Math.random() * 100) + 1, Math.floor(Math.random() * 100) + 1, Math.floor(Math.random() * 100) + 1, Math.floor(Math.random() * 100) + 1, Math.floor(Math.random() * 100) + 1];
    const values = [Math.floor(Math.random() * 1000) + 1, Math.floor(Math.random() * 1000) + 1, Math.floor(Math.random() * 1000) + 1, Math.floor(Math.random() * 1000) + 1, Math.floor(Math.random() * 1000) + 1];
    const pngs = "./src/Images/a.jpg";
    const series = [
      {
        name: "Series 1",
        data: [Math.floor(Math.random() * 100) + 1, Math.floor(Math.random() * 100) + 1, Math.floor(Math.random() * 100) + 1, Math.floor(Math.random() * 100) + 1, Math.floor(Math.random() * 100) + 1]
      },
      {
        name: "Series 2",
        data: [Math.floor(Math.random() * 100) + 1, Math.floor(Math.random() * 100) + 1, Math.floor(Math.random() * 100) + 1, Math.floor(Math.random() * 100) + 1, Math.floor(Math.random() * 100) + 1]
      }
    ];

    return titles.map((title, index) => {
      const randomIndex = Math.floor(Math.random() * colors.length);
      return {
        title,
        color: {
          backGround: colors[randomIndex],
          boxShadow: `0px 4px 6px ${colors[randomIndex]}33`
        },
        barValue: barValues[index],
        value: values[index],
        png: pngs[index],
        series: series
      };
    });
  };

  const cardsData = generateRandomData();

  return (
    <div className="Cards">
      {cardsData.map((card, id) => (
        <div className="parentContainer" key={id}>
          <Card
            title={card.title}
            color={card.color}
            barValue={card.barValue}
            value={card.value}
            png={card.png}
            series={card.series}
          />
        </div>
      ))}
    </div>
  );
};

export default Cards;
