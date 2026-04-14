import React from 'react';

const DetailesPage = async ({ params }) => {
    const { id } = await params;

    const res = await fetch('https://keenkeeper-7.vercel.app/data.json', {
        cache: 'no-store'
    });
    const friends = await res.json();

    const matchedFriend = friends.find(
        (friend) => friend.id === Number(id)
    );
    console.log(matchedFriend)
    return (
        <div>
            {
                matchedFriend ? (
                    <p>{matchedFriend.name}</p>
                ) : (
                    <p>No friend found</p>
                )
            }
        </div>
    );
};

export default DetailesPage;