import { ComponentPropsWithoutRef, ElementType, ReactNode } from 'react'

import s from './typography.module.scss'

export type TypographyPropsType<T extends ElementType> = {
  as?: T
  children: ReactNode
  className?: string
  variant?:
    | 'body1'
    | 'body2'
    | 'caption'
    | 'h1'
    | 'h2'
    | 'h3'
    | 'h4'
    | 'large'
    | 'link1'
    | 'link2'
    | 'overline'
    | 'subtitle1'
    | 'subtitle2'
} & ComponentPropsWithoutRef<T>

export const Typography = <T extends ElementType = 'p'>(props: TypographyPropsType<T>) => {
  const { as: Component = 'p', className, variant = 'body1', ...rest } = props

  return <Component className={`${s.text} ${s[variant]} ${className}  `} {...rest} />
}
