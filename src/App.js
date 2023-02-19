import React, { useState } from 'react'
import ProfileDetails from './pages/ProfileDetails'
import './App.css';

export default function App() {
  const [inputArray, setInputArray] = useState([...new Array(9)].map((_, index) => (
    {
      id: index + "",
      label: `label ${1 + index}`,
      placeholder: "placeholder",
      value: "",
    }
  )))

  function changeValue({ target: { value, id } }) {
    setInputArray(prev => prev.map(inp => (id === inp.id) ? ({ ...inp, value }) : (inp)))
  }

  function onSubmit(e) {
    e.preventDefault();
    return (inputArray.map(({ value }) => value));
  }

  return (
    <div style={{ height: "100vh" }}>
      <ProfileDetails inputArray={inputArray} changeValue={changeValue} onSubmit={onSubmit} />
    </div>
  )
}
