import { useState } from 'react'
import { useCopyToClipboard } from 'react-use'

export interface Props {
  children: string;
}

const Component = (props: Props) => {
  const { children } = props
  const [popoverVisible, setPopoverVisible] = useState(false)
  const [, copyToClipboard] = useCopyToClipboard()

  const handleOnClick = (valueToCopy: string) => {
    copyToClipboard(valueToCopy)
    setPopoverVisible(true)
    setTimeout(() => {
      setPopoverVisible(false)
    }, 3000)
  }

  return (
    <button
      className="text-lg text-gray-900 focus:outline-none"
      onClick={() => handleOnClick(children)}
    >
      {children}
      <span
        className={` bg-black text-white text-sm rounded px-3 py-1 mx-2 transition ease-out duration-150 opacity-0 ${
          popoverVisible ? 'opacity-100' : 'opacity-0'
        }`}
      >
        Copied!
      </span>
    </button>
  )
}

export default Component
