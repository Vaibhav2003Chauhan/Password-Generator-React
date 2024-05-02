import React from 'react';

export default function Length(props) {
  return (
    <>
      <input type="range" min="6" max="100" value={props.length} onChange={(e) => props.setLength(e.target.value)} />
      <label htmlFor="points">Length: {props.length}</label>
    </>
  );
}
