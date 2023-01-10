import React from 'react'

type Props = {
  text?: string
  styleClass?: string
}

const Button = ({ text, styleClass }: Props) => {
  return <button className={styleClass}>{text}</button>
}

export default Button
