import React, { useState } from "react";
import "./Card.css";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import { motion, AnimateSharedLayout } from "framer-motion";
import { UilTimes } from "@iconscout/react-unicons";
import Chart from "react-apexcharts";
import { ApexOptions } from "apexcharts";
import { Line } from "react-chartjs-2";
type CardPropsi = {
  png: string;
  color: {
    backGround: string;
    boxShadow: string;
  };
  barValue: number;
  title: string;
  value: number;
  series: any[];
};

interface CardProps {
  title: string;
  color: {
    backGround: string;
    boxShadow: string;
  };
  barValue: number;
  value: number;
  png: string; // Update the type to match your png data
  series: any[]; // Update the type to match your series data
}




const Card: React.FC<CardPropsi> = (props) => {
  const [expanded, setExpanded] = useState(false);

  return (
    <AnimateSharedLayout>
      {expanded ? (
        <ExpandedCard param={props} setExpanded={() => setExpanded(false)} />
      ) : (
        <CompactCard param={props} setExpanded={() => setExpanded(true)} />
      )}
    </AnimateSharedLayout>
  );
};

function CompactCard({ param, setExpanded }: { param: CardProps, setExpanded: () => void }) {
  const Png = param.png;

  return (
    <motion.div
      className="CompactCard"
      style={{
        background: param.color.backGround,
        boxShadow: param.color.boxShadow,
      }}
      layoutId="expandableCard"
      onClick={setExpanded}
    >
      <div className="radialBar">
        <CircularProgressbar value={param.barValue} text={`${param.barValue}%`} />
        <span>{param.title}</span>
      </div>
      <div className="detail">
        <Png />
        <span>${param.value}</span>
        <span>Last 24 hours</span>
      </div>
    </motion.div>
  );
}

function ExpandedCard({ param, setExpanded }: { param: CardProps, setExpanded: () => void }){
  const data = {
    labels: param.series.map((point) => point.x), // Assuming x-axis values are stored in 'x' property
    datasets: [
      {
        label: "Data",
        data: param.series.map((point) => point.y), // Assuming y-axis values are stored in 'y' property
        fill: true,
        backgroundColor: "rgba(75,192,192,0.4)",
        borderColor: "rgba(75,192,192,1)",
      },
    ],
  };
  const options = {
    scales: {
      x: {
        // x-axis configuration
        // Add any desired options
      },
      y: {
        // y-axis configuration
        // Add any desired options
      },
    },
    // Add any other desired chart options
  };

  return (
    <motion.div>
    {/* Other JSX code */}
    <div className="chartContainer">
      <Line data={data} /*options={data.options} *//>
    </div>
    {/* Other JSX code */}
  </motion.div>
  );
}

export default Card;
