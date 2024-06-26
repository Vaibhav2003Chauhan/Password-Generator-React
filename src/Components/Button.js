import React, { useState } from 'react';


export default function Button({ password }) {
  const [copied, setCopied] = useState(false);

  const copyToClipboard = () => {
    navigator.clipboard.writeText(password)
      .then(() => {
        setCopied(prev => !prev); // Toggle the copied state
      })
      .catch((error) => {
        console.error('Failed to copy: ', error);
      });
  };
  let buttonText = 'Copy';
  let buttonStyle = { backgroundColor: 'blue', color: 'white' };
  if (copied) {
    buttonText = 'Copied!';
    buttonStyle.backgroundColor = 'green';
    buttonStyle.color = 'black';
  }

  return (
    <>
      <button onClick={copyToClipboard} style={buttonStyle} className='copyButton'>{buttonText}</button>
    </>
  );
}
