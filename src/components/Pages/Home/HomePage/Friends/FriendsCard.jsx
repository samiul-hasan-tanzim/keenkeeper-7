import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const getDateLabel = (dateString) => {
    const today = new Date();
    // console.log('today', today.valueOf())   //From 1 January 1970 (UTC) to 14 April 2026 (UTC), approximately
    const target = new Date(dateString);
    // console.log('target', target.valueOf())  //From 1 January 1970 (UTC) to 14 April 2026 (UTC), approximately

    const diff = today - target;
    // console.log('diff', diff)
    const days = Math.floor(diff / (1000 * 60 * 60 * 24));

    return days + 'd ago'
};

const FriendsCard = ({ friend }) => {
    const { id, picture, name, tags, status, next_due_date } = friend
    return (
        <Link href={`/detailes/${id}`}>
            <div className='min-h-80 md:min-h-fit flex flex-col justify-center items-center bg-white p-1 md:p-10 rounded shadow  cursor-pointer space-y-3'>
                <Image src={picture} alt={name} className='rounded-full' width={70} height={70}></Image>
                <h5>{name}</h5>
                <p>{getDateLabel(next_due_date)}</p>
                <div className='flex gap-1'>
                    {
                        tags.map((tag, i) => <div key={i} className="badge badge-outline badge-success">{tag}</div>)
                    }
                </div>
                <div className=
                    {`badge 
                ${status === 'almost due' && 'badge-warning'}
                ${status === 'overdue' && 'badge-error'}
                ${status === 'on-track' && 'badge-neutral'}
                `}>
                    {
                        status === 'almost due' && 'Almost Due' ||
                        status === 'overdue' && 'Overdue' ||
                        status === 'on-track' && 'On Track'
                    }</div>
            </div>
        </Link>
    );
};

export default FriendsCard;