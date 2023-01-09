import React from 'react'

type Props = {
  text?: string
  classname?: string
}

const Button = ({ text, classname }: Props) => {
  return <button className={classname}>{text}</button>
}

export default Button
