import React, {useState,useRef} from "react";
import useOnClickOutside from '../../hooks/useOnClickOutside';

export default function DropDownItem({title, children}) {
    const [setActive, setActiveState] = useState("");
    const [setShow, setShowState] = useState(false);
    const [setRotate, setRotateState] = useState("dropdown__icon");
    const sensitive = useRef()
    function toggleDropdown() {
        setActiveState(setActive === "" ? "active" : "");
        setShowState(
            setActive === "active" ? false : true
        );
        setRotateState(
            setActive === "active" ? "dropdown__icon" : "dropdown__icon rotate"
        );
    }
    useOnClickOutside(sensitive, () => {
        setActiveState("");
        setShowState(false);
        setRotateState("adropdown__icon");
    });

    return (
        <div>
            <div className="relative" ref={sensitive}>
                <div className="flex items-center space-x-3 cursor-pointer text-mediumGray-100 hover:text-almostBlack-100" onClick={toggleDropdown}>
                    <p className="myFont text-2xl sm:text-base font-normal">{title}</p>
                    <svg xmlns="http://www.w3.org/2000/svg" width="10" height="7" className={`${setRotate}`}>
                        <path fill="none" stroke="#686868" strokeWidth="2" opacity=".75" d="M1 1l4 4 4-4" />
                    </svg>
                </div> 
                <div className="hidden sm:block">
                    <div className={setShow ? 'absolute top-10 bg-white py-5 px-6 rounded-lg shadow-2xl w-40 -left-12' :'hidden'}>
                        {children}
                    </div>
                </div>
                <div className="block sm:hidden">
                    <div className={setShow ? ' hidden' :'py-5 pl-5'}>
                        {children}
                    </div>
                </div>
            </div>
        </div>
    )
}