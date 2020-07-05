import React from 'react';
import Card from './Card';

const CardArray = ({ robots }) => {
  return (
    <div>
      {robots.map((robot) => {
        return <Card key={robot.id} robot={robot} />;
      })}
    </div>
  );
};

export default CardArray;
