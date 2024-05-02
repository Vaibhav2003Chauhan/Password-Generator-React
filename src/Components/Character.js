import React from 'react';

export default function Character(props) {
  return (
    <>
      <input type="checkbox" checked={props.charAllow} onChange={() => {
        props.setCharAllow((prev) => !prev)
      }} />
      <label htmlFor="css">Character</label>
    </>
  );
}
