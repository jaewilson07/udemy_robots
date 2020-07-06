import React from 'react';
import Card from './Card';

const CardArray = ({ robots_list }) => {
  return (
    <div>
      {robots_list.map((robot) => {
        return <Card key={robot.id} robot={robot} />;
      })}
    </div>
  );
};

export default CardArray;
