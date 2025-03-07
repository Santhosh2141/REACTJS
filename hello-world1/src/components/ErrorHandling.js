// static getDerivedStateFromError and componentDidCatch are the 2 methods in errorHandling
// first is used to display a fallback UI seocnd is used to log the error info
// we cant catch errors in eventHandlers like onclick. for that we need to use try catch statements
import React from 'react'

function ErrorHandling({heroName}) {
  if (heroName === "Joker"){
    throw new Error("Not a hero");
  }
  return (
    <div>ErrorHandling {heroName}</div>
  )
}

export default ErrorHandling