import React from 'react';

const Card = ({ robot }) => {
  const { username, email, name } = robot;
  return (
    <div className="tc grow bg-light-green br3 pa3 ma2 dib bw2 shadow-5">
      <img src={`https://robohash.org/${username}`} alt="RobotImage" />
      <h2>Name: {name}</h2>
      <p>UserName : {username}</p>
      <p>email : {email} </p>
    </div>
  );
};

export default Card;
