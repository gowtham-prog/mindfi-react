import Header from "./Header";
export default function Layout({ children }) {
    return (
        <div className='flex flex-col items-center bg-gradient-to-b from-white to-purple-200 dark:bg-gradient-to-b dark:from-black dark:to-purple-950 w-screen min-h-screen h-full  mx-auto'>
            <Header />
            <div className="flex w-full h-full flex-col items-center justify-center max-w-7xl">
                {children}
            </div>
        </div>
    )
}