import { useState } from 'react'
import Logo from '.././public/assets/logo.svg'
import Image from 'next/image'
import DropDownItem from './navbar/dropDownItem'
import NavItem from './navbar/navItem'
import IconMenu from '.././public/assets/icon-menu.svg'
import SlideOver from '../components/slideOver'
export default function Navbar() {
    const [isOpenSideMenu, setIsOpenSidemu] = useState(false)
    const toggleSideMenu = () => {
        setIsOpenSidemu(!isOpenSideMenu)
    }
    return (
        <div className="h-[10vh] mb-0 md:-mb-12">
            {/* desktop View */}
            <div className="hidden sm:block">
                <nav className="flex items-center justify-between">
                    <div className="flex items-center space-x-20">
                        <Image src={Logo} alt=" Logo" /> 
                        <div className="flex space-x-8">
                            <DropDownItem title="Features">
                                <a hre="/" className="flex items-center space-x-2 cursor-pointer">
                                    <svg width="14" height="16" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M14 3v12a1 1 0 0 1-1 1H1a1 1 0 0 1-1-1V3a1 1 0 0 1 1-1h1V1a1 1 0 1 1 2 0v1h2V1a1 1 0 1 1 2 0v1h2V1a1 1 0 0 1 2 0v1h1a1 1 0 0 1 1 1Zm-2 3H2v1h10V6Zm0 3H2v1h10V9Zm0 3H2v1h10v-1Z" fill="#726CEE"/>
                                    </svg>
                                    <p className="text-sm text-mediumGray-100 font-semibold hover:text-almostBlack-100">Todo List</p> 
                                </a>
                                <a hre="/" className="flex items-center space-x-2 pt-4 cursor-pointer">
                                    <svg width="16" height="16" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M12.667 8.667h-4v4h4v-4ZM11.334 0v1.333H4.667V0h-2v1.333h-1C.75 1.333 0 2.083 0 3v11.333C0 15.25.75 16 1.667 16h12.667C15.25 16 16 15.25 16 14.333V3c0-.917-.75-1.667-1.666-1.667h-1V0h-2Zm3 14.333H1.667V5.5h12.667v8.833Z" fill="#4BB1DA"/>
                                    </svg>
                                    <p className="text-sm text-mediumGray-100 font-semibold hover:text-almostBlack-100">Calendar</p> 
                                </a>
                                <a hre="/" className="flex items-center space-x-2 pt-4 cursor-pointer">
                                    <svg width="13" height="17" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M6.408 13.916c-3.313 0-6-1.343-6-3 0-.612.371-1.18 1-1.654V7.916a5 5 0 0 1 3.041-4.6 2 2 0 0 1 3.507-1.664 2 2 0 0 1 .411 1.664 5.002 5.002 0 0 1 3.041 4.6v1.346c.629.474 1 1.042 1 1.654 0 1.657-2.687 3-6 3Zm0 1c.694 0 1.352-.066 1.984-.16.004.054.016.105.016.16a2 2 0 0 1-4 0c0-.055.012-.106.016-.16.633.094 1.29.16 1.984.16Z" fill="#EDD556"/>
                                    </svg>
                                        <p className="text-sm text-mediumGray-100 font-semibold hover:text-almostBlack-100">Reminders</p> 
                                    </a>
                                <a hre="/" className="flex items-center space-x-2 pt-4 cursor-pointer">
                                    <svg width="16" height="16" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M8 0a8 8 0 1 1 0 16A8 8 0 0 1 8 0Zm0 2.133a5.867 5.867 0 1 0 0 11.734A5.867 5.867 0 0 0 8 2.133ZM8 3.2a4.8 4.8 0 1 1 0 9.6 4.8 4.8 0 0 1 0-9.6Zm-.533 2.667a.533.533 0 0 0-.534.533v2.133c0 .295.24.534.534.534h3.2a.533.533 0 0 0 0-1.067H8V6.4a.533.533 0 0 0-.533-.533Z" fill="#8E4CB6"/>
                                    </svg>
                                    <p className="text-sm text-mediumGray-100 font-semibold hover:text-almostBlack-100">Planning</p> 
                                </a>
                            </DropDownItem>
                            <DropDownItem title="Company">
                                <div className="flex items-center space-x-2 cursor-pointer">
                                    <a hre="/" className="text-sm text-mediumGray-100 font-semibold hover:text-almostBlack-100">History</a> 
                                </div>
                                <div className="flex items-center space-x-2 pt-4 cursor-pointer">
                                    <a hre="/" className="text-sm text-mediumGray-100 font-semibold hover:text-almostBlack-100">Our Team</a> 
                                </div>
                                <div className="flex items-center space-x-2 pt-4 cursor-pointer">
                                    <a hre="/" className="text-sm text-mediumGray-100 font-semibold hover:text-almostBlack-100">Blog</a> 
                                </div>
                            </DropDownItem>
                            <NavItem title="Careers" route="/" />
                            <NavItem title="About" route="/" />
                        </div>
                        
                    </div>
                    <div className="flex space-x-4">
                        <button className="text-almostBlack-100 font-semibold py-2 px-4">
                            Login
                        </button>
                        <button className="text-almostBlack-100 font-semibold py-2 px-4 border-2 rounded-lg border-almostBlack-100">
                            Register
                        </button>
                    </div>
                </nav>
            </div>

            {/* mobile View */}
            <div className="block sm:hidden">
                <nav className="flex items-center justify-between px-4 py-6">
                    <Image src={Logo} alt=" Logo" /> 
                    <button className="flex items-center justify-center px-4 py-2 cursor-pointer" onClick={toggleSideMenu}>
                        <Image src={IconMenu} alt="Menu" /> 
                    </button>
                </nav>
                <div className={`${isOpenSideMenu ? 'block' : 'hidden'}`}>
                    <SlideOver close={toggleSideMenu}>
                        <div className="px-4 flex flex-col space-y-8">
                            <DropDownItem title="Features">
                                <a hre="/" className="flex items-center space-x-3 cursor-pointer">
                                    <svg width="14" height="16" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M14 3v12a1 1 0 0 1-1 1H1a1 1 0 0 1-1-1V3a1 1 0 0 1 1-1h1V1a1 1 0 1 1 2 0v1h2V1a1 1 0 1 1 2 0v1h2V1a1 1 0 0 1 2 0v1h1a1 1 0 0 1 1 1Zm-2 3H2v1h10V6Zm0 3H2v1h10V9Zm0 3H2v1h10v-1Z" fill="#726CEE"/>
                                    </svg>
                                    <p className="text-lg text-mediumGray-100 font-semibold hover:text-almostBlack-100">Todo List</p> 
                                </a>
                                <a hre="/" className="flex items-center space-x-3 pt-4 cursor-pointer">
                                    <svg width="16" height="16" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M12.667 8.667h-4v4h4v-4ZM11.334 0v1.333H4.667V0h-2v1.333h-1C.75 1.333 0 2.083 0 3v11.333C0 15.25.75 16 1.667 16h12.667C15.25 16 16 15.25 16 14.333V3c0-.917-.75-1.667-1.666-1.667h-1V0h-2Zm3 14.333H1.667V5.5h12.667v8.833Z" fill="#4BB1DA"/>
                                    </svg>
                                    <p className="text-lg text-mediumGray-100 font-semibold hover:text-almostBlack-100">Calendar</p> 
                                </a>
                                <a hre="/" className="flex items-center space-x-3 pt-4 cursor-pointer">
                                    <svg width="13" height="17" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M6.408 13.916c-3.313 0-6-1.343-6-3 0-.612.371-1.18 1-1.654V7.916a5 5 0 0 1 3.041-4.6 2 2 0 0 1 3.507-1.664 2 2 0 0 1 .411 1.664 5.002 5.002 0 0 1 3.041 4.6v1.346c.629.474 1 1.042 1 1.654 0 1.657-2.687 3-6 3Zm0 1c.694 0 1.352-.066 1.984-.16.004.054.016.105.016.16a2 2 0 0 1-4 0c0-.055.012-.106.016-.16.633.094 1.29.16 1.984.16Z" fill="#EDD556"/>
                                    </svg>
                                        <p className="text-lg text-mediumGray-100 font-semibold hover:text-almostBlack-100">Reminders</p> 
                                    </a>
                                <a hre="/" className="flex items-center space-x-3 pt-4 cursor-pointer">
                                    <svg width="16" height="16" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M8 0a8 8 0 1 1 0 16A8 8 0 0 1 8 0Zm0 2.133a5.867 5.867 0 1 0 0 11.734A5.867 5.867 0 0 0 8 2.133ZM8 3.2a4.8 4.8 0 1 1 0 9.6 4.8 4.8 0 0 1 0-9.6Zm-.533 2.667a.533.533 0 0 0-.534.533v2.133c0 .295.24.534.534.534h3.2a.533.533 0 0 0 0-1.067H8V6.4a.533.533 0 0 0-.533-.533Z" fill="#8E4CB6"/>
                                    </svg>
                                    <p className="text-lg text-mediumGray-100 font-semibold hover:text-almostBlack-100">Planning</p> 
                                </a>
                            </DropDownItem>
                            <DropDownItem title="Company">
                                <div className="flex items-center space-x-2 cursor-pointer">
                                    <a hre="/" className="text-lg text-mediumGray-100 font-semibold hover:text-almostBlack-100">History</a> 
                                </div>
                                <div className="flex items-center space-x-2 pt-4 cursor-pointer">
                                    <a hre="/" className="text-lg text-mediumGray-100 font-semibold hover:text-almostBlack-100">Our Team</a> 
                                </div>
                                <div className="flex items-center space-x-2 pt-4 cursor-pointer">
                                    <a hre="/" className="text-lg text-mediumGray-100 font-semibold hover:text-almostBlack-100">Blog</a> 
                                </div>
                            </DropDownItem>
                            <NavItem title="Careers" route="/" />
                            <NavItem title="About" route="/" />
                        </div>
                        <div className="my-10 flex flex-col ">
                            <button className="text-almostBlack-100 font-semibold py-2 px-4 mb-2 text-lg">
                                Login
                            </button>
                            <button className="text-almostBlack-100 font-semibold py-2 px-4 border-2 rounded-xl border-almostBlack-100 mb-4 text-lg">
                                Register
                            </button>
                        </div>
                    </SlideOver>
                </div>
            </div>
        </div>
    )
}