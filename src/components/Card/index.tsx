import React from 'react'

interface CardProps {
  message: string
  hi: string
}
const Card = ({message, hi}: CardProps) => {
  return <> {message} {hi} </>
}

export default Card
