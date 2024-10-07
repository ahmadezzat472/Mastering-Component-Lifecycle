interface Iprops {
    setPage: (page: string) => void
}

const Navbar = ({setPage} : Iprops) => {
    return (
        <nav className="mb-[50px]">
            <ul className="flex items-center justify-center space-x-3">
                <li className="cursor-pointer hover:underline" onClick={() => setPage("home")}>Home</li>
                <li className="cursor-pointer hover:underline" onClick={() => setPage("product")}>Product</li>
                <li className="cursor-pointer hover:underline" onClick={() => setPage("about")}>About Us</li>
                <li className="cursor-pointer hover:underline" onClick={() => setPage("useEffect")}>Use Effect</li>
            </ul>
        </nav>
    )
}

export default Navbar