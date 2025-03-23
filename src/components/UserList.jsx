import React from 'react';
import { useNavigate } from 'react-router';
export default function UserList({filteredSet}) {
    const navigate = useNavigate();
    return (
        <div className="sticky top-0 max-w-md w-full h-fit z-30">
            <div className="relative">
                <div className="absolute top-0 left-0 w-full transform opacity-90 backdrop-blur-lg bg-white dark:bg-purple-800 border-2 border-gray-300 rounded-2xl shadow-lg z-30">
                    {filteredSet.map((user) => (
                        <div key={user.id} onClick={() => navigate(`/user/${user.login}`)} className="flex-1 w-full cursor-pointer rounded-2xl hover:bg-purple-900">
                            <div className='flex flex-row items-center justify-normal  text-black dark:text-white text-lg font-semibold px-6 py-2'>
                                <img
                                    src={user.avatar_url}
                                    alt={user.login}
                                    className="w-12 h-12 rounded-full mr-4"
                                />
                                <div className='flex flex-col '>
                                    <>{user.login}</>
                                    <a href={user.html_url} target='_blank' className='text-sm text-semibold text-blue-600'>View on Github</a>
                                </div>
                            </div>
                        </div>
                    ))}
                    {
                        filteredSet.length === 0 && (
                            <div className='flex flex-row items-center justify-center text-black dark:text-white text-lg font-semibold px-6 py-2'>
                                No User Found
                            </div>
                        )
                    }
                </div>
            </div>
        </div>
    )
}