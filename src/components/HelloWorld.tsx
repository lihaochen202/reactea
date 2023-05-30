import viteLogo from '/vite.svg'
import reactLogo from '@/assets/react.svg'
import type { FC } from 'react'

const HelloWorld: FC = () => {
  return (
    <div className='flex justify-center'>
      <a href='https://vitejs.dev' target='_blank'>
        <img src={viteLogo} alt='Vite logo' className='m-1.5em h-6em' />
      </a>
      <a href='https://react.dev' target='_blank'>
        <img src={reactLogo} alt='React logo' className='m-1.5em h-6em' />
      </a>
    </div>
  )
}

export default HelloWorld
