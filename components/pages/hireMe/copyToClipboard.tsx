import { useState } from 'react'
import { useCopyToClipboard } from 'react-use'
import { Popover, Transition } from '@headlessui/react'

export interface Props {
  children: string;
}

const Component = (props: Props) => {
  const { children } = props
  const [open, setOpen] = useState(false)
  const [currentTimeout, setCurrentTimeout] = useState<any>()
  const [, copyToClipboard] = useCopyToClipboard()

  const handleOnClick = (valueToCopy: string) => {
    copyToClipboard(valueToCopy)
    setOpen(true)

    // If the currentTimeout exists and we've clicked again - clear it
    if (currentTimeout) {
      clearTimeout(currentTimeout)
    }

    // Set a timeout to close the popup
    const timeout = setTimeout(() => {
      setOpen(false)
      setCurrentTimeout(undefined)
    }, 3000)
    setCurrentTimeout(timeout)
  }

  return (
    <Popover className="flex items-center">
      <div onClick={() => handleOnClick(children)}>
        <Popover.Button className="text-lg text-gray-900 focus:outline-none">
          <div className="flex items-center">
            {children}
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 text-gray-900 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
            </svg>
          </div>
        </Popover.Button>
      </div>
      <Transition
        show={open}
        leave="transition duration-150 ease-out"
        leaveFrom="transform opacity-100"
        leaveTo="transform opacity-0"
      >
        <Popover.Panel>
          <div className="flex items-center bg-black text-white text-sm rounded px-2 py-1 mx-2">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 font-bold mr-1 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
            </svg>
            Copied!
          </div>
        </Popover.Panel>
      </Transition>

    </Popover>
  )
}

export default Component
