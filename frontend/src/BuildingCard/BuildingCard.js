import React from 'react';

const Props = {
  name: String
}

export default function BuildingCard ({
  name,
}) {
  return <div>{name}</div>
}

BuildingCard.propTypes = Props;
