import React, { useState, useEffect, useRef } from 'react'
import { Link } from 'gatsby'
import Search_bar from '@components/Search_bar'
import NotificactionIcon from '@Icons/NotificationIcon'
import UseOnClickOutside from '../hooks/useOnClickOutside'
import LoginModal from '@components/LoginModal'

const Layout = (props) => {
  const [currentNav, setCurrentNav] = useState('/')
  const [open, setOpen] = useState(false)
  const ref = useRef()
  const [showModal, setShowModal] = useState(false)
  const refLoginModal = useRef()

  // Hooks
  UseOnClickOutside(ref, () => setOpen(false))
  UseOnClickOutside(refLoginModal, () => setShowModal(false))

  useEffect(() => {
    setCurrentNav(window.location.pathname)
  }, [])
  //Desktop Navs
  const navBase =
    'inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium leading-5 focus:outline-none transition duration-150 ease-in-out'
  const navSelected = 'border-indigo-400 text-gray-100 focus:border-indigo-200'
  const navUnselected =
    'focus:border-gray-300 border-transparent text-gray-500 hover:text-white hover:border-gray-300 focus:text-gray-700'
  //Mobile Navs
  const navUnselectedMobile =
    'block px-4 py-2 text-sm leading-5 text-white hover:bg-gray-100 focus:outline-none focus:bg-gray-100 transition duration-150 ease-in-out'
  const navSelectedMobile =
    'block pl-3 pr-4 py-2 border-l-4 border-indigo-500 text-base font-medium text-white bg-indigo-50 focus:outline-none focus:text-indigo-800 focus:bg-indigo-100 focus:border-indigo-700 transition duration-150 ease-in-out'

  return (
    <div className="max-h-auto bg-white">
      <nav className="bg-gray-800 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" ref={ref}>
          <div className="flex justify-between h-16">
            <div className="flex">
              <div className="flex-shrink-0 flex items-center text-gray-200 font-semibold">
                Profesource
              </div>
              <div className="hidden sm:ml-6 sm:flex">
                <Link
                  to="/"
                  // Interpolación
                  className={`${navBase} ${
                    currentNav === '/' ? navSelected : navUnselected
                  }`}
                >
                  Dashboard
                </Link>
                <Link
                  to="/page-2/"
                  className={`ml-8 ${navBase} ${
                    currentNav === '/page-2/' ? navSelected : navUnselected
                  }`}
                >
                  Page two
                </Link>
                <Link
                  to="/form/"
                  // Interpolación
                  className={`ml-8 ${navBase} ${
                    currentNav === '/form/' ? navSelected : navUnselected
                  }`}
                >
                  Contactanos
                </Link>
                <Link
                  to="/information/"
                  className={`ml-8 ${navBase} ${
                    currentNav === '/information/' ? navSelected : navUnselected
                  }`}
                >
                  Información
                </Link>
              </div>
              {/* <Search_bar/> */}
            </div>
            <Search_bar />
            <div className="hidden sm:ml-6 sm:flex sm:items-center">
              <button
                className="p-1 border-2 border-transparent text-gray-400 rounded-full hover:text-gray-500 focus:outline-none focus:text-gray-500 focus:bg-gray-100 transition duration-150 ease-in-out"
                aria-label="Notifications"
              >
                {/* <svg
                  className="h-6 w-6"
                  stroke="currentColor"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
                  />
                </svg> */}
                <NotificactionIcon
                  className="fill-current my-auto h-6 w-6"
                  color={'#ffd700'}
                  width="20px"
                  height="20px"
                />
              </button>
              {/* <!-- Profile dropdown --> */}
              <div className="ml-3 relative">
                <div>
                  <button
                    className="flex text-sm border-2 border-transparent rounded-full focus:outline-none focus:border-gray-300 transition duration-150 ease-in-out"
                    id="user-menu"
                    aria-label="User menu"
                    aria-haspopup="true"
                    onClick={() => {
                      setOpen(!open)
                    }}
                  >
                    <img
                      className="h-8 w-8 rounded-full"
                      src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                      alt=""
                    />
                  </button>
                </div>
                {/* <!--
                Profile dropdown panel, show/hide based on dropdown state.
  
                Entering: "transition ease-out duration-200"
                  From: "transform opacity-0 scale-95"
                  To: "transform opacity-100 scale-100"
                Leaving: "transition ease-in duration-75"
                  From: "transform opacity-100 scale-100"
                  To: "transform opacity-0 scale-95"
              --> */}
                {open && (
                  <div
                    className="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg"
                    onClick={() => {
                      setOpen(false)
                    }}
                  >
                    <div className="py-1 rounded-md bg-white shadow-xs">
                      <Link
                        to="/page-2/"
                        className="block px-4 py-2 text-sm leading-5 text-gray-700 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 transition duration-150 ease-in-out"
                      >
                        Profile
                      </Link>
                      <a
                        href="#"
                        className="block px-4 py-2 text-sm leading-5 text-gray-700 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 transition duration-150 ease-in-out"
                      >
                        Settings
                      </a>
                      <Link
                        to="/"
                        className="block px-4 py-2 text-sm leading-5 text-gray-700 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 transition duration-150 ease-in-out"
                        onClick={() => {
                          setShowModal(open)
                        }}
                      >
                        Sign out
                      </Link>
                    </div>
                  </div>
                )}
              </div>
            </div>
            {showModal && (
              <div>
                <LoginModal setShowModal={setShowModal} />
              </div>
            )}
            <div className="-mr-2 flex items-center sm:hidden">
              {/* <!-- Mobile menu button --> */}
              <button
                onClick={() => {
                  setOpen(!open)
                }}
                className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 bg-gray-800 hover:text-gray-500 hover:bg-gray-800 focus:outline-none focus:bg-gray-800 focus:text-gray-500 transition duration-150 ease-in-out"
              >
                {/* <!-- Menu open: "hidden", Menu closed: "block" --> */}
                <svg
                  className={`${open ? 'hidden' : 'block'} h-6 w-6 bg-gray-800`}
                  stroke="currentColor"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
                {/* <!-- Menu open: "block", Menu closed: "hidden" --> */}
                <svg
                  className={`${open ? 'block' : 'hidden'} h-6 w-6 bg-gray-800`}
                  stroke="currentColor"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>

        {/* <!--
        Mobile menu, toggle classNamees based on menu state.
  
        Open: "block", closed: "hidden"
      --> */}
        <div className={`${open ? 'block' : 'hidden'} sm:hidden`}>
          <div className="pt-2 pb-3">
            <Link
              to="/"
              // Interpolación
              className={`${
                currentNav === '/' ? navSelectedMobile : navUnselectedMobile
              }`}
            >
              Dashboard
            </Link>
            <Link
              to="/page-2/"
              className = {`${
                currentNav == '/page-2/' ? navSelectedMobile : navUnselectedMobile
              }`}
            >
              Profile
            </Link>
            <Link
              to="/form/"
              className = {`${
                currentNav == '/form/' ? navSelectedMobile : navUnselectedMobile
              }`}
            >
              Contáctenos
            </Link>
            <Link
              to="/information/"
              className = {`${
                currentNav == '/information/' ? navSelectedMobile : navUnselectedMobile
              }`}
            >
              Información
            </Link>
          </div>
          <div className="pt-4 pb-3 border-t border-gray-200">
            <div className="flex items-center px-4">
              <div className="flex-shrink-0">
                <img
                  className="h-10 w-10 rounded-full"
                  src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                  alt="profile-photo"
                />
              </div>
              <div className="ml-3">
                <div className="text-base font-medium leading-6 text-gray-800">
                  Tom Cook
                </div>
                <div className="text-sm font-medium leading-5 text-gray-500">
                  tom@example.com
                </div>
              </div>
            </div>
            <div
              className="mt-3"
              role="menu"
              aria-orientation="vertical"
              aria-labelledby="user-menu"
            >
              <a
                href="#"
                className="block px-4 py-2 text-base font-medium text-gray-500 hover:text-gray-800 hover:bg-gray-100 focus:outline-none focus:text-gray-800 focus:bg-gray-100 transition duration-150 ease-in-out"
                role="menuitem"
              >
                Your Profile
              </a>
              <a
                href="#"
                className="mt-1 block px-4 py-2 text-base font-medium text-gray-500 hover:text-gray-800 hover:bg-gray-100 focus:outline-none focus:text-gray-800 focus:bg-gray-100 transition duration-150 ease-in-out"
                role="menuitem"
              >
                Settings
              </a>
              <a
                href="#"
                className="mt-1 block px-4 py-2 text-base font-medium text-gray-500 hover:text-gray-800 hover:bg-gray-100 focus:outline-none focus:text-gray-800 focus:bg-gray-100 transition duration-150 ease-in-out"
                role="menuitem"
                onClick={() => {
                  setShowModal(open)
                }}
              >
                Sign out
              </a>
            </div>
          </div>
        </div>
      </nav>
      <div className="py-10">
        {props.title && (
          <header>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <h1 className="text-3xl font-bold leading-tight text-gray-900">
                {props.title}
              </h1>
            </div>
          </header>
        )}
        <main>
          <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
            {/* <!-- Replace with your content --> */}
            {props.children}
            {/* <!-- /End replace --> */}
          </div>
        </main>
      </div>
    </div>
  )
}

export default Layout
