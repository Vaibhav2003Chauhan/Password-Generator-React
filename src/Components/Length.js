import React from 'react';

export default function Length(props) {
  return (
    <>
      <input type="range" min="6" max="30"  value={props.length} onChange={(e) => props.setLength(e.target.value)} />
      <label htmlFor="points" className='passwordLength'>Length: {props.length}</label>
    </>
  );
}
