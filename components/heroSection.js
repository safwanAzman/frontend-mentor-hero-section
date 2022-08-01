import Image from 'next/image'
import Client1 from '.././public/assets/client-databiz.svg'
import Client2 from '.././public/assets/client-audiophile.svg'
import Client3 from '.././public/assets/client-meet.svg'
import Client4 from '.././public/assets/client-maker.svg'
import HeroDesktop from '.././public/assets/image-hero-desktop.png'
import HeroMobile from '.././public/assets/image-hero-mobile.png'

    export default function HeroSection() {
        return (
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-2 h-full lg:h-[60vh] px-0 lg:px-32 ">
                <div className="flex items-center lg:items-start justify-center order-last lg:order-first flex-col px-4 lg:px-0 ">
                    <h1 className="myFont text-4xl sm:text-5xl lg:text-8xl font-bold text-almostBlack-100">Make remote work</h1>
                    <p className="myFont text-sm sm:text-base lg:text-xl font-normal text-mediumGray-100 max-w-lg mt-4 lg:mt-10 text-center lg:text-left">
                        Get yout team in sync. no matter your location. Streamline processes. 
                        create team rituals.and watch productivity soar.
                    </p>
                    <div>
                        <button className="flex justify-center font-semibold py-4 px-4 border-2 rounded-xl bg-almostBlack-100 mt-4 lg:mt-10 text-white w-40">
                            Learn More
                        </button>
                    </div>
                    <div className="flex space-x-10 w-full justify-center lg:justify-start mt-20">
                        <div>
                            <Image src={Client1} alt="Client1" className="z-[-999]"/> 
                        </div>
                        <div>
                            <Image src={Client2} alt="Client2" className="z-[-999]"/> 
                        </div>
                        <div>
                            <Image src={Client3} alt="Client3" className="z-[-999]"/> 
                        </div>
                        <div>
                            <Image src={Client4} alt="Client4" className="z-[-999]"/> 
                        </div>
                    </div>
                </div>
                <div className="ml-0 lg:ml-20 mb-4 lg:mb-32">
                    <div className="hidden lg:block ">
                        <Image src={HeroDesktop} alt="HeroDesktop" /> 
                    </div>
                    <div className="block lg:hidden ">
                        <Image  src={HeroMobile} alt="HeroMobile" className="z-[-999]" /> 
                    </div>
                </div>
            </div>
        )
    }
