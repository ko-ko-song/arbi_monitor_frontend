// RobotData.js
import React from "react";

const RobotData = ({ dataList }) => {
  return (
    <ul>
      {dataList.map((data, index) => (
        <li key={index}>{JSON.stringify(data)}</li>
      ))}
    </ul>
  );
};

export default RobotData;