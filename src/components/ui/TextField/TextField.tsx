import { ComponentProps, ComponentPropsWithoutRef, useState } from 'react'

import Search from '@/assets/icons/Search'
import Eye from '@/assets/icons/eye'
import VisibilityOff from '@/assets/icons/visibility-off'

import s from './TextField.module.scss'

export type TextFieldPropsType = {
  errorMessage?: string
  label?: string
  search: boolean
} & ComponentPropsWithoutRef<'input'>

export const TextField = ({
  errorMessage,
  label,
  placeholder,
  search,
  type,
}: TextFieldPropsType) => {
  const passwordButton = type === 'password'
  const [showPassword, setShowPassword] = useState(false)

  const finalType = getFinalType(type, showPassword)

  return (
    <div className={s.root}>
      {label && <span>{label}</span>}
      <div className={s.textFieldWrapper}>
        <div className={s.textFieldWithIcons}>{search && <Search className={s.searchIcon} />}</div>
        <input
          className={`${s.textField} ${search ? s.search : ''} ${errorMessage ? s.error : ''}`}
          placeholder={placeholder}
          type={finalType}
        />
        {passwordButton && (
          <button
            className={s.showPasswordButton}
            onClick={() => setShowPassword(prevState => !prevState)}
          >
            {showPassword ? <VisibilityOff /> : <Eye />}
          </button>
        )}
      </div>
      {errorMessage && <span className={s.spanError}>{errorMessage}</span>}
    </div>
  )
}

function getFinalType(type: ComponentProps<'input'>['type'], showPassword: boolean) {
  if (type === 'password' && showPassword) {
    return 'text'
  }

  return type
}
