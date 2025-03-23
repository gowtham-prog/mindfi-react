import { Loader } from "lucide-react";
import React, { useEffect, useRef, useState } from "react";
import { toast } from "react-hot-toast";
import { useNavigate } from "react-router";
import Hero from "../components/Hero";
import UserGrid from "../components/UserGrid";


export default function DisplayUsers() {
    const [users, setUsers] = useState([]);
    const hasFetched = useRef(false);
    const [isLoading, setIsLoading] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        console.log("triggering fetch", hasFetched)
        if (!hasFetched.current) {
            fetchData();
            hasFetched.current = true
        }
    }, [hasFetched,])

    const fetchData = async () => {
        try {
            setIsLoading(true)
            const response = await fetch('https://api.github.com/users')
            const data = await response.json()
            setUsers(data)
            toast.success("Data Fetched Successfully")
        } catch (error) {
            toast.error(error.message);
            toast.error("Unable to fetch users at the moment. Please try again")
            console.error(error)
            
        } finally {
            setIsLoading(false)
        }
    }


    if (isLoading) {
        return (
            <div className="flex justify-center items-center min-h-screen">
                <Loader className="animate-spin text-purple-600 w-12 h-12" />
            </div>
        );
    }

    return (
        <div className="flex flex-col items-center justify-center ">
            <Hero users = {users} />
            <div className="flex flex-col items-center justify-center min-h-screen w-screen h-full overflow-auto bg-gradient-to-b to-white from-purple-200 dark:from-purple-950 dark:to-black p-6 text-center ">
                <h2 className="text-2xl font-bold tracking-tight mb-4">Mentors We have: {users.length}</h2> 
                {users.length > 0 && <UserGrid users={users} />}
            </div>
        </div>
    )
}