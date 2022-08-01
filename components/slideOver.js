import CloseIconMenu from '.././public/assets/icon-close-menu.svg'
import Image from 'next/image'
import Slide from 'react-reveal/Slide';
export default function SlideOver({close ,children}) {
    return (
    <div>
    <div className="fixed inset-0 bg-almostBlack-100 bg-opacity-75 transition-opacity"></div>
        <div className="fixed inset-0 overflow-hidden">
            <div className="absolute inset-0 overflow-hidden">
                <div className="pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-32">
                    <Slide right>
                        <div className="pointer-events-auto relative w-screen max-w-md">
                            <div className="flex h-full flex-col overflow-y-scroll bg-white py-6 shadow-xl">
                                <div className="px-4 sm:px-6 flex justify-end">
                                    <button onClick={close} className="cursor-pointer">
                                        <Image src={CloseIconMenu} alt="closeMenu" /> 
                                    </button>
                                </div>
                                <div className="relative mt-6 flex-1 px-4 sm:px-6">
                                    <div className="absolute inset-0 px-4 sm:px-6">
                                        {children}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Slide>
                </div>
            </div>
        </div>
    </div>

    )
}
