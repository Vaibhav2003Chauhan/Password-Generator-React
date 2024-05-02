import React from 'react'

export default function Input(props) {
  return (
    <>
          <input type="text" className='passwordSection' value={props.value} placeholder='Password'readOnly />
    </>
  )
}
