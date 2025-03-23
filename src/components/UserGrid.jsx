import { lazy, Suspense } from "react";
import { useInView } from "react-intersection-observer";

const UserListItem = lazy(() => import("./UserCard"));

export default function UserGrid({ users }) {
    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 z-20">
            {users.map((user) => (
                <LazyUserCard key={user.id} user={user} />
            ))}
        </div>
    );
}

function LazyUserCard({ user }) {
    const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });

    return (
        <div ref={ref}>
            {inView ? (
                <Suspense fallback={<div className="p-4 border rounded-lg shadow-md">Loading...</div>}>
                    <UserListItem user={user} />
                </Suspense>
            ) : (
                <div className="p-4 border rounded-lg shadow-md h-40 bg-purple-200 animate-pulse"></div>
            )}
        </div>
    );
}
