import QuickActions from '@/components/QuickActions/QuickActions';
import Image from 'next/image';
import React from 'react';
import { FaArchive } from 'react-icons/fa';
import { IoVideocamOutline } from 'react-icons/io5';
import { LuMessageSquareMore } from 'react-icons/lu';
import { MdDelete } from 'react-icons/md';
import { RiNotificationSnoozeLine } from 'react-icons/ri';
import { TbPhoneCall } from 'react-icons/tb';
import { toast } from 'react-toastify';

const DetailesPage = async ({ params }) => {
    const { id } = await params;

    const res = await fetch('https://keenkeeper-7.vercel.app/data.json', {
        cache: 'no-store'
    });
    const friends = await res.json();

    const matchedFriend = friends.find(
        (friend) => friend.id === Number(id)
    );
    const { name, picture, bio, status, tags, days_since_contact, goal, next_due_date } = matchedFriend
    console.log(matchedFriend)

    const formatDate = (dateStr) => {
        const date = new Date(dateStr);

        const options = {
            year: "numeric",
            month: "long",
            day: "numeric",
        };

        return date.toLocaleDateString("en-US", options);
    }


    return (
        <div className='bg-[#F8FAFC]'>
            {
                matchedFriend ? (
                    <div className='container mx-auto md:gap-30 flex flex-col md:flex-row md:justify-around p-5 md:p-20'>
                        <div className='mb-10'>
                            <div className='min-h-80 md:w-90 md:min-h-fit flex flex-col justify-center items-center bg-white p-1 md:p-5 rounded shadow space-y-3'>
                                <Image src={picture} alt={name} className='rounded-full' width={70} height={70}></Image>
                                <h5>{name}</h5>
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
                                    }
                                </div>
                                <div className='flex gap-1'>
                                    {
                                        tags.map((tag, i) => <div key={i} className="badge badge-outline badge-success">{tag}</div>)
                                    }
                                </div>
                                <p className='text-center'>{bio}</p>
                            </div>
                            <div className='flex flex-col items-center space-y-2 md:space-y-5 mt-3 md:mt-0'>
                                <button className='btn flex items-center justify-center gap-1 bg-white shadow p-2 w-full rounded-sm'><RiNotificationSnoozeLine />Snooze 2 weeks</button>
                                <button className='btn flex items-center justify-center gap-1 bg-white shadow p-2 w-full rounded-sm'><FaArchive />Archive</button>
                                <button className='btn flex items-center justify-center gap-1 bg-white shadow p-2 w-full rounded-sm text-red-500'><MdDelete />Delete</button>
                            </div>
                        </div>
                        <div className='space-y-5'>
                            <div>
                                <div className='text-center grid grid-cols-2 md:grid-cols-3 gap-5'>
                                    <div className='bg-white p-5 md:p-10 rounded-xl shadow border border-black/1'>
                                        <h3 className='text-3xl md:text-4xl font-bold'>{days_since_contact}</h3>
                                        <p>Days Since Contact</p>
                                    </div>
                                    <div className='bg-white p-5 md:p-10 rounded-xl shadow border border-black/1'>
                                        <h3 className='text-3xl md:text-4xl font-bold'>{goal}</h3>
                                        <p>Goal(Days)</p>
                                    </div>
                                    <div className='bg-white p-5 md:p-10 rounded-xl shadow border border-black/1'>
                                        <h3 className='text-3xl md:text-3xl font-bold'>{formatDate(next_due_date)}</h3>
                                        <p>Next Due</p>
                                    </div>
                                </div>
                            </div>
                            <div className='flex justify-between p-5  bg-white rounded shadow '>
                                <div>
                                    <h5 className='text-[#244D3F] font-bold'>Relationship Goal</h5>
                                    <p>Connect every <span className='text-black font-bold'>30 days</span></p>
                                </div>
                                <button className='btn btn-soft'>Edit</button>
                            </div>
                            <div className='bg-white p-5 rounded shadow'>
                                <h3 className='text-[#244D3F] text-2xl'>Quick Check-In</h3>
                                <QuickActions name={name} date={next_due_date} />
                            </div>
                        </div>
                    </div>
                ) : null
            }
        </div>
    );
};

export default DetailesPage;