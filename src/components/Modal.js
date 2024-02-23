import clsx from 'clsx'
import { Fragment, useRef } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import XCircleIcon from '@heroicons/react/24/solid/XCircleIcon'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })

/*
Modal is extended by Confirmation and Alert, do not use it directly. It does
not close by itself and call `onClose` instead
*/

export default function Modal({
  children,
  hideClose = true,
  initialFocus,
  open = false,
  onClose = () => {},
}) {
  let closeButtonRef = useRef(null)
  if (!initialFocus) {
    initialFocus = closeButtonRef
  }
  console.log('show', open)
  return (
    <Transition.Root show={open} as={Fragment}>
      <Dialog
        as="div"
        className={clsx(inter.variable, 'font-sans', 'relative z-50')}
        onClose={onClose}
        initialFocus={initialFocus}
      >
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-black bg-opacity-85 transition-opacity" />
        </Transition.Child>

        <div className="z-100 fixed inset-0 overflow-y-auto">
          {/* sm:items-center was below but probably without much effect */}
          <div className="flex h-full items-center justify-center p-4 text-center sm:p-0">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              enterTo="opacity-100 translate-y-0 sm:scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 translate-y-0 sm:scale-100"
              leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            >
              <Dialog.Panel
                className={clsx(
                  // "overflow-hidden",
                  'rounded',
                  // Becareful, dont had margin
                  // For example, `mt-[3rem]` will move the modal down, eventually
                  // below the screen limit, on small screens
                  'relative transform text-left shadow-xl transition-all',
                  'rounded-lg bg-[var(--layout-top)]',
                  // Add border to avoid transparency behind the close icon
                  // 'border-4 border-[var(--layout-top)]',
                )}
              >
                {children}
                {!hideClose && (
                  <button
                    className={clsx(
                      'caret-transparent',
                      'focus:border-none',
                      'rounded-full',
                      'focus:outline-none focus:ring-2 focus:ring-indigo-200 ',
                      'absolute -right-3 -top-3 z-30 outline-none',
                      '[&_svg]:fill-slate-400 [&_svg]:hover:fill-indigo-200',
                    )}
                    onClick={onClose}
                    ref={closeButtonRef}
                  >
                    <XCircleIcon className="h-6 w-6" />
                  </button>
                )}
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  )
}
