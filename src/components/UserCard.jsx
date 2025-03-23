import { useState } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router";

const UserCard = ({ user }) => {
  const [userDetails, setUserDetails] = useState(null);
  const [loading, setLoading] = useState(false);
  const [showDetails, setShowDetails] = useState(false);
  const navigate = useNavigate();
  let timeoutId = null;

  const fetchUserDetails = async () => {
    if (userDetails || loading) return;
    setLoading(true);

    try {
      const response = await fetch(`https://api.github.com/users/${user.login}`);
      const data = await response.json();
      setUserDetails({
        followers: data.followers,
        following: data.following,
        bio: data.bio,
        location: data.location,
        public_repos: data.public_repos,
      });
    } catch (error) {
      console.error("Error fetching user details:", error);
    } finally {
      setLoading(false);
    }
  };

  const handleMouseEnter = () => {
    timeoutId = setTimeout(() => {
      setShowDetails(true);
      fetchUserDetails();
    }, 300);
  };

  const handleMouseLeave = () => {
    clearTimeout(timeoutId);
    setShowDetails(false);
  };

  return (
    <div
      onClick={() => navigate(`/user/${user.login}`)}
      className="relative w-full p-6 rounded-lg shadow-md cursor-pointer border-2 border-purple-400 hover:shadow-xl transition duration-300"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div className="flex flex-col items-center">
        <img
          src={user.avatar_url}
          alt={user.login}
          className="w-20 h-20 rounded-full "
        />
        <div className="mt-2">
          <span className="text-gray-600 dark:text-gray-200 font-semibold">{user.login}</span>
        </div>
        <button
          onClick={() => navigate(`/user/${user.login}`)}
          className="mt-2 px-4 py-2 bg-gradient-to-r from-purple-500 to-purple-600 shadow-sm text-white rounded-lg transition"
        >
          View Availability
        </button>

      </div>

      {showDetails && (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 10 }}
          className="absolute left-1/2 top-full mt-2 w-64 p-4 bg-gradient-to-b from-white to-purple-200 dark:from-black dark:to-purple-950 shadow-xl rounded-lg border z-10 transform -translate-x-1/2"
        >
          {loading ? (
            <p className="text-gray-500 text-sm">Loading...</p>
          ) : userDetails ? (
            <div className="flex flex-col items-center space-y-2">
              <h3 className="font-semibold text-lg">{user.login}</h3>
              {userDetails.bio && <p className="text-sm text-gray-600 italic">{userDetails.bio}</p>}
              {userDetails.location && (
                <p className=" text-gray-500 dark:text-gray-400">📍 {userDetails.location}</p>
              )}
              {/* <div className="flex space-x-4 text-sm text-gray-600"> */}
                <p>👥 Followers: <span className="font-semibold text-gray-500 dark:text-gray-400">{userDetails.followers}</span></p>
                <p>🔄 Following: <span className="font-semibold text-gray-500 dark:text-gray-400">{userDetails.following}</span></p>
              {/* </div> */}
              <p className=" text-gray-500 dark:text-gray-400">📂 Repositories: {userDetails.public_repos}</p>
            </div>
          ) : (
            <p className="text-red-500 text-sm">Error loading data</p>
          )}
        </motion.div>
      )}
    </div>
  );
};

export default UserCard;
