export default function NavItem({title ,route}) {
    return (
        <div className="flex items-center space-x-4 cursor-pointer text-mediumGray-100 hover:text-almostBlack-100">
            <a href={route}>
                <p className="myFont text-2xl sm:text-base font-normal">{title}</p>
            </a>
        </div>
    )
}