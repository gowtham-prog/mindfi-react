import { Link } from "react-router"
export default function Header() {
    return (
        <header className="sticky top-0 left-0 right-0 flex w-full items-center z-50 justify-center bg-white dark:bg-black opacity-90 border-b py-2 backdrop-blur-md shadow-md">
            <div className="flex flex-grow items-center justify-between w-full max-w-7xl p-2">
                {/* <div className="flex items-center"> */}
                    <Link to="/" className="flex items-center">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/a/ae/Github-desktop-logo-symbol.svg" className="w-8 h-8 mr-3" alt="mindfi logo" />
                    <span className=" text-3xl font-extrabold">Mindfi-Git</span>
                    </Link>
                {/* </div> */}

            </div>
        </header>
    )
}