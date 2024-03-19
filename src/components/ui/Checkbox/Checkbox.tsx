import * as Checkbox from '@radix-ui/react-checkbox'
import { CheckIcon } from '@radix-ui/react-icons'

import s from './Checkbox.module.scss'

const CheckboxDemo = () => (
  <div className={s.container}>
    <div style={{ alignItems: 'center', display: 'flex' }}>
      <Checkbox.Root className={s.CheckboxRoot} defaultChecked id={'c1'}>
        <div className={s.wrapper}>
          <Checkbox.Indicator className={s.CheckboxIndicator}>
            <CheckIcon height={24} width={24} />
          </Checkbox.Indicator>
        </div>
      </Checkbox.Root>
      <label className={s.Label} htmlFor={'c1'}>
        Accept terms and conditions.
      </label>
    </div>
  </div>
)

export default CheckboxDemo
