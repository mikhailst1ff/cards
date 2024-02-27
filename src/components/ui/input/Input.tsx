import { ComponentProps, useState } from 'react'

import Search from '@/assets/icons/Search'
import Eye from '@/assets/icons/eye'
import VisibilityOff from '@/assets/icons/visibility-off'

import s from '@/components/ui/input/input.module.scss'

export type InputPropsType = {
  className?: string
  disabled?: boolean
  errorMessage?: 'string'
  label?: string
  placeholder?: 'string'
  type?: string
  value?: 'string'
  variant?: 'default' | 'password' | 'search'
}
export const Input = (props: InputPropsType) => {
  const {
    className,
    disabled,
    errorMessage,
    label,
    placeholder,
    type,
    value,
    variant = 'default',
    ...rest
  } = props
  const [showPassword, setShowPassword] = useState(false)

  function getFinalType(type: ComponentProps<'input'>['type'], showPassword: boolean) {
    if (type === 'password' && showPassword) {
      return 'text'
    }

    return type
  }

  return (
    <div className={s.container}>
      {label && <span>{label}</span>}
      <div className={s.input}>
        {variant === 'search' && <Search className={s.search} />}
        <input
          className={`${errorMessage ? s.error : ''} ${className} ${s.input} ${
            variant === 'search' && s.inputSearch
          }`}
          placeholder={`${variant === 'search' ? 'input search' : 'input'}`}
          {...rest}
          type={getFinalType(type, showPassword)}
        />
        {type === 'password' && (
          <button className={s.eye} onClick={() => setShowPassword(!showPassword)}>
            {showPassword ? <VisibilityOff /> : <Eye />}
          </button>
        )}
      </div>
      {errorMessage && <span>{errorMessage}</span>}
    </div>
  )
}
