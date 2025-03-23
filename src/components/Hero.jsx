import {useState, useEffect, useRef} from 'react';
import UserList from './UserList';
export default function Hero({users}) {
    const [inputValue, setInputValue] = useState('');
    const [filteredSet, setFilteredSet] = useState([]);
    const searchRef = useRef(null);

    useEffect(() => {
        filterUser();
    }, [inputValue,])


    const filterUser = () => {
        setFilteredSet(users.filter((user) => 
            user.login.toLowerCase().includes(inputValue.toLowerCase())
        ));
    };
    

    useEffect(() => {
        function handleClickOutside(event) {
            if (searchRef.current && !searchRef.current.contains(event.target)) {
                setInputValue("");
            }
        }

        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);

    return (
        <div className="bg-gradient-to-b from-white to-purple-200  dark:bg-gradient-to-b dark:from-black dark:to-purple-950 py-24 w-screen h-1/2">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col w-full h-full items-center">
                    <h2 className="text-3xl leading-8 font-extrabold tracking-tight text-black dark:text-white sm:text-4xl">
                        <span className="block text-center xl:inline">Mindfi-Git</span>
                        {' '}
                        <span className="block text-center xl:inline text-indigo-600 dark:text-indigo-400 ">
                            A simple Github user search app
                        </span>
                    </h2>
                    <span className="mt-4 text-lg text-gray-600 dark:text-gray-200 py-4">
                        Find Mentors you can work with
                    </span>
                    <div ref={searchRef} className="relative w-full max-w-md">
                        { users.length > 0 && <input value={inputValue} onChange={(e) => setInputValue(e.target.value)} className="relative mt-4 px-6 py-3 z-30 border-2 w-full max-w-md rounded-4xl border-purple-300 bg-purple-50 outline-0 dark:bg-gray-950" type="text" placeholder="Search for a user" />}
                        {
                            inputValue && <UserList filteredSet={filteredSet} />
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}
