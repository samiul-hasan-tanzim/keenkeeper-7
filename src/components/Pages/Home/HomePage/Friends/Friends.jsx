import React from 'react';
import FriendsCard from './FriendsCard';

const Friends = async () => {
    const friendsDataPromice = await fetch('https://keenkeeper-7.vercel.app/data.json')
    const friends = await friendsDataPromice.json()
    return (
        <div className='container mx-auto mt-15'>
            <h3 className='text-center md:text-left text-3xl font-bold my-5'>Your Friends</h3>
            <div className='grid grid-cols-2 md:grid-cols-4 w-[95%] md:w-full mx-auto gap-3 md:gap-10'>
                {
                    friends.map((friend, i) => <FriendsCard key={i} friend={friend} />)
                }
            </div>
        </div>
    );
};

export default Friends;