import React from 'react'

export default function Home() {
  const clickMeforfun = () => {
    alert('cliecked workd')
  }
  return (
    <button onClick={clickMeforfun}>
      Select a Language you want
    </button>
  )
}