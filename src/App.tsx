import { Button } from '@/components/ui/button'
import { CheckboxDemo } from '@/components/ui/checkbox/Checkbox'
import { Input } from '@/components/ui/input'

export function App() {
  return (
    <div>
      <Input errorMessage={'b'} label={'a'} type={'password'} variant={'search'} />
      <Button children={'ghbdtn'} />
      {/*<CheckboxDemo />*/}
    </div>
  )
}
