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
    </div>
  )
}
