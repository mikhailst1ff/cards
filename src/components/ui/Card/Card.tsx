import { ComponentPropsWithoutRef } from 'react'

import s from './Card.module.scss'

export type CardPropsType = {} & ComponentPropsWithoutRef<'div'>
export const Card = (props: CardPropsType) => {
  const { className, ...rest } = props
  const classNames = `${className} ${s.card}`

  return <div className={classNames} {...rest}></div>
}
