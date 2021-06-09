import React from 'react'
import { Header } from '@components/organisms'

export default function withHeaderAndFooter<T>(Page: React.FC<T>) {
  return (props: any) => (
    <div className="relative flex flex-col min-h-screen">
      <Header />
      <Page {...props} />
    </div>
  )
}
