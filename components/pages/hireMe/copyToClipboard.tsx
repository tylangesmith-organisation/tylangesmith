import { useState } from 'react'
import { useCopyToClipboard } from 'react-use'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faClipboard } from '@fortawesome/free-regular-svg-icons'
import { faCheck } from '@fortawesome/free-solid-svg-icons'

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
      <FontAwesomeIcon
        className="text-lg text-gray-900 ml-2"
        icon={faClipboard}
      />
      <span
        className={` bg-black text-white text-sm rounded px-3 py-1 mx-2 transition ease-out duration-150 opacity-0 ${
          popoverVisible ? 'opacity-100' : 'opacity-0'
        }`}
      >
        <FontAwesomeIcon
          className="text-sm text-green-500 mr-1"
          icon={faCheck}
        />
        Copied!
      </span>
    </button>
  )
}

export default Component
