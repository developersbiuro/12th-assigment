'use client'
import { useState, useEffect } from 'react';





export default function Page() {


    const [username, setUsername] = useState('');
    const [followers, setFollowers] = useState([]);
    const [followings, setFollowings] = useState([]);
    const [followerFollowers, setFollowerFollowers] = useState({});
    const [isLoading, setIsLoading] = useState(false);

    const handleFetch = async () => {
        try {
            setIsLoading(true);

            const [followersResponse, followingsResponse] = await Promise.all([
                fetch(`https://api.github.com/users/${username}/followers`),
                fetch(`https://api.github.com/users/${username}/following`),
            ]);

            const followersData = await followersResponse.json();
            const followingsData = await followingsResponse.json();

            setFollowers(followersData);
            setFollowings(followingsData);

            setIsLoading(false);
        } catch (error) {
            console.error('Error fetching data:', error);
            setIsLoading(false);
        }
    };

    const handleFetchFollowerFollowers = async (follower) => {
        try {
            const response = await fetch(`https://api.github.com/users/${follower.login}/followers`);
            const followerFollowersData = await response.json();
            setFollowerFollowers({ ...followerFollowers, [follower.login]: followerFollowersData });
        } catch (error) {
            console.error(`Error fetching ${follower.login}'s followers:`, error);
        }
    };

    useEffect(() => {
        if (followers.length === 0) {
            return;
        }

        // Fetch followers of each follower
        followers.forEach((follower) => {
            handleFetchFollowerFollowers(follower);
        });
    }, [followers]);

    return (
        <div>
            <h1>GitHub User Info</h1>
            <label htmlFor="username">GitHub Username:</label>
            <input
                type="text"
                id="username"
                placeholder="Enter GitHub username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
            />
            <button onClick={handleFetch} disabled={isLoading}>
                {isLoading ? 'Fetching...' : 'Fetch Followers and Followings'}
            </button>

            {followers && <p>{username}'s followers: {followers.length}</p>}
            {followings && <p>{username}'s followings: {followings.length}</p>}

            <h2>Follower Followers:</h2>
            <ul>
                {followers.map((follower) => (
                    <li key={follower.login}>
                        {follower.login}'s followers: {followerFollowers[follower.login] ? followerFollowers[follower.login].length : 'Loading...'}
                    </li>
                ))}
            </ul>
            
        </div>
    );
}
