'use client'

import { useState } from 'react'
import { ToolBar } from "./ToolBar"
import { Navbar } from "./Navbar"
import { getAsideData } from '../../query/query'

export const AsideBar = () => {
  const [active, setActive] = useState<string>('');
  const { data, isPending, error } = getAsideData();

  if (isPending) return <div>Loading...</div>
  if (error) return <div>Error: {error.message}</div>

  const activeData = data.find((item) => item.label === active);
  const id = activeData?.id;

  return (
    <nav className="bg-white dark:bg-dark-6 h-screen flex flex-col dark:border-dark-4 w-90">
      <div className="flex flex-1">
        <ToolBar active={active} setActive={setActive} data={data} />
        <Navbar list={activeData?.list} id={id} key={id} />
      </div>
    </nav>
  )
}