import { Fragment } from 'react'
import { Popover, PopoverPanel, Transition, PopoverButton } from '@headlessui/react'
import { Bars3Icon } from '@heroicons/react/20/solid'

export default function HamburguerMenu() {

  return (
    <Popover className="relative wful">
      <PopoverButton className="inline-flex items-center gap-x-1 text-sm font-semibold leading-6 p-1 rounded-lg hover:scale-105 outline-none md:hidden">
        <Bars3Icon className='w-8 h-8 text-neutral-800 dark:text-neutral-200 ' />
      </PopoverButton>

      <Transition
        as={Fragment}
        enter="transition ease-out duration-200"
        enterFrom="opacity-0 translate-y-1"
        enterTo="opacity-100 translate-y-0"
        leave="transition ease-in duration-150"
        leaveFrom="opacity-100 translate-y-0"
        leaveTo="opacity-0 translate-y-1"
      >
        <PopoverPanel className="absolute left-1/2 z-10 mt-5 flex w-dvw lg:max-w-min -translate-x-1/2 lg:-translate-x-48 ">
          <div className="w-full lg:w-56 shrink bg-gray-900 p-4 text-sm font-semibold leading-6 text-gray-900 shadow-lg ring-1 ring-gray-900/5">
            <p className='text-center text-gray-200 my-4'>Hello!</p>
            <a
              className='block text-center text-gray-300 p-2 hover:text-white'
            >My Profile</a>
            <a
              className='block text-center text-gray-300 p-2 hover:text-white'
            >My projects</a>
            <button
              className='block mx-auto text-gray-300 p-2 hover:text-red-600'
              type='button'
            >
              Log Out
            </button>
          </div>
        </PopoverPanel>
      </Transition>
    </Popover>
  )
}