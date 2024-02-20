import { ComponentPropsWithRef, ElementType, ReactNode } from 'react'

import s from './buton.module.scss'

export type ButtonPropsType<T extends ElementType = 'button'> = {
  as?: T
  children: ReactNode
  className?: string
  fullWidth?: boolean
  variant?: 'primary' | 'secondary'
} & ComponentPropsWithRef<'button'>

export const Button = <T extends ElementType = 'button'>(props: ButtonPropsType<T>) => {
  const { as: Component = 'button', className, fullWidth, variant = 'primary', ...rest } = props

  return (
    <Component className={`${s[variant]} ${fullWidth ? s.fullWidth : ''} ${className}`} {...rest} />
  )
}
