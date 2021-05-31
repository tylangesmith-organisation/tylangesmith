import { useState } from 'react'
import { useCopyToClipboard } from 'react-use'

export interface Props {
  children: string;
}

const Component = (props: Props) => {
  const { children } = props
  const [popoverVisible, setPopoverVisible] = useState(false)
  const [initialised, setInitialised] = useState(false)
  const [, copyToClipboard] = useCopyToClipboard()

  const handleOnClick = (valueToCopy: string) => {
    copyToClipboard(valueToCopy)
    setInitialised(true)
    setPopoverVisible(true)
    setTimeout(() => {
      setPopoverVisible(false)
    }, 3000)
  }

  return (
    <div className="flex items-center">
      <button
      className="text-lg text-gray-900 focus:outline-none"
      onClick={() => handleOnClick(children)}
      >
        <div className="flex items-center">
          {children}
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 text-gray-900 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
          </svg>
        </div>
      </button>
      <div className={`flex items-center bg-black text-white text-sm rounded px-2 py-1 mx-2 ${popoverVisible ? 'opacity-100' : 'opacity-0'} ${!popoverVisible && initialised ? 'transition-opacity ease-out duration-150' : ''}`}>
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 font-bold mr-1 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
        </svg>
        Copied!
      </div>
    </div>
  )
}

export default Component
