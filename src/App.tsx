import { Card } from '@/components/ui/Card/Card'
import Checkbox from '@/components/ui/Checkbox/Checkbox'
import { TextField } from '@/components/ui/TextField/TextField'
import { TabList, Tabs, TabsContent, TabsTitle, TabsTrigger } from '@/components/ui/tabs/Tabs'

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
      <Tabs>
        <TabsTitle>ghbdtn</TabsTitle>
        <TabList>
          <TabsTrigger value={'1'}>switch1</TabsTrigger>
          <TabsTrigger value={'2'}>switch2</TabsTrigger>
          <TabsTrigger value={'3'}>switch3</TabsTrigger>
        </TabList>
        <TabsContent value={'1'}>1</TabsContent>
        <TabsContent value={'2'}>2</TabsContent>
        <TabsContent value={'3'}>3</TabsContent>
      </Tabs>
    </div>
  )
}
