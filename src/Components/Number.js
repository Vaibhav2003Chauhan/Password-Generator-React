import React from 'react';

export default function Number(props) {
  return (
    <>
      <input type="checkbox" checked={props.numAllow} onChange={() => {
        props.setNumAllow((prev) => !prev)
      }} />
      <label htmlFor="css" className='numCheck'>Number</label>
    </>
  );
}

