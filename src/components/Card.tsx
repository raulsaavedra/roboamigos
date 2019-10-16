import * as React from 'react';

interface CardStateLessProps {
  name: string;
  email: string;
  id: number;
}

const Card: React.SFC<CardStateLessProps> = ({ name, email, id }) => (
  <div className="tc grow bg-light-green br3 pa3 ma2 dib bw2 shadow-5">
    <img alt="robots" src={`https://robohash.org/${id}?200x200`} />
    <div>
      <h2>{name}</h2>
      <p>{email}</p>
    </div>
  </div>
);

export default Card;
