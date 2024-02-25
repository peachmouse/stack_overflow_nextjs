import React from 'react'

const Layout = ({children}: {children: React.ReactNode}) => { //all the files within the (auth) folder
  return (
    <main className='flex min-h-screen w-full items-center justify-center'>
       {children}
    </main>
  )
}

export default Layout