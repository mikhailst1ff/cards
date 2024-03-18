import { ComponentPropsWithRef, ElementType } from 'react'

import s from './buton.module.scss'

export type ButtonProps<T extends ElementType> = {
  as?: T
  fullWidth?: boolean
  variant?: 'primary' | 'secondary'
} & ComponentPropsWithRef<T>

export const Button = <T extends ElementType = 'button'>(props: ButtonProps<T>) => {
  const { as: Component = 'button', className, fullWidth, variant = 'primary', ...rest } = props

  return (
    <Component
      className={`${s.button} ${fullWidth ? s.fullWidth : ''} ${s[variant]} ${className ?? ''}`}
      {...rest}
    />
  )
}
