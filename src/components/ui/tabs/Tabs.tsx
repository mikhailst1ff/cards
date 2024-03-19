import { ComponentPropsWithoutRef } from 'react'

import { Typography, TypographyPropsType } from '@/components/ui/Typography'
import * as TabsRadix from '@radix-ui/react-tabs'

import s from './tabs.module.scss'

const Tabs = TabsRadix.Root

const TabsTitle = ({ children, className, ...rest }: TypographyPropsType<'p'>) => {
  return (
    <Typography variant={'body1'} {...rest} className={`${s.className}`}>
      {children}
    </Typography>
  )
}

const TabList = ({ className, ...rest }: ComponentPropsWithoutRef<typeof TabsRadix.List>) => {
  return <TabsRadix.List className={`${s.TabsList} ${s.className}`} {...rest}></TabsRadix.List>
}
const TabsTrigger = ({
  className,
  ...rest
}: ComponentPropsWithoutRef<typeof TabsRadix.Trigger>) => {
  return (
    <TabsRadix.Trigger className={`${s.TabsTrigger} ${s.className}`} {...rest}></TabsRadix.Trigger>
  )
}
const TabsContent = ({
  className,
  ...rest
}: ComponentPropsWithoutRef<typeof TabsRadix.Content>) => {
  return (
    <TabsRadix.Content className={`${s.TabsContent} ${s.className}`} {...rest}></TabsRadix.Content>
  )
}

export { TabList, Tabs, TabsContent, TabsTitle, TabsTrigger }
