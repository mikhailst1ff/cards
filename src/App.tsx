import { Card } from '@/components/ui/Card/Card'
import Checkbox from '@/components/ui/Checkbox/Checkbox'
import { TextField } from '@/components/ui/TextField/TextField'

import { Button } from './components/ui/Button'

export function App() {
  return (
    <div>
      <Button variant={'primary'}>hello</Button>
      <Button fullWidth variant={'secondary'}>
        hello
      </Button>
      <Button as={'a'} href={'/'}>
        hello
      </Button>
      <TextField label={'label'} search type={'password'}></TextField>
      <TextField label={'label'} search type={'password'}></TextField>
      <TextField errorMessage={'error'} label={'label'} search type={'password'}></TextField>
      <Card />
      <Checkbox></Checkbox>
    </div>
  )
}
