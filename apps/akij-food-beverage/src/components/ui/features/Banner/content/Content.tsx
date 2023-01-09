import React from 'react'
import Button from '../../../elements/buttons/Button'

type Props = {
  actionTitle: string
  title: string
  description: string
  actionBtnOne: string
  actionBtnTwo: string
}

const Content = ({ title, actionTitle, description, actionBtnOne, actionBtnTwo }: Props) => {
  return (
    <div className="Box">
      <p className="highlightedGreenText">{actionTitle}</p>
      <h1 className="">{title}</h1>
      <p className="">{description}</p>
      <div className=" flex flex-col gap-5 md:flex-row">
        <Button text={actionBtnOne} classname="primaryBtn" />
        <Button text={actionBtnTwo} classname="outlineBtn" />
      </div>
    </div>
  )
}

export default Content
