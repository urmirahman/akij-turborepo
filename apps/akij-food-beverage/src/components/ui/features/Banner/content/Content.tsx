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
      <h1 className="mt-5">{title}</h1>
      <p className="mt-5 text-lg ">{description}</p>
      <div className="mt-5 flex flex-col gap-5 md:flex-row">
        <Button text={actionBtnOne} classname="primaryBtn" />
        <Button text={actionBtnTwo} classname="outlineBtn" />
      </div>
    </div>
  )
}

export default Content
