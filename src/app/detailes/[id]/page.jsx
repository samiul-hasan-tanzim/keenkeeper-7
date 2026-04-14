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
    console.log(matchedFriend)

    return (
        <div className='bg-[#F8FAFC]'>
            {
                matchedFriend ? (
                    <div className='container mx-auto flex flex-col md:flex-row md:justify-around p-5 md:p-20'>
                        <div className='mb-10'>
                            <div className='min-h-80 md:w-90 md:min-h-fit flex flex-col justify-center items-center bg-white p-1 md:p-5 rounded shadow space-y-3'>
                                <Image src={matchedFriend.picture} alt={matchedFriend.name} className='rounded-full' width={70} height={70}></Image>
                                <h5>{matchedFriend.name}</h5>
                                <div className=
                                    {`badge 
                                            ${matchedFriend.status === 'almost due' && 'badge-warning'}
                                            ${matchedFriend.status === 'overdue' && 'badge-error'}
                                            ${matchedFriend.status === 'on-track' && 'badge-neutral'}
                                            `}>
                                    {
                                        matchedFriend.status === 'almost due' && 'Almost Due' ||
                                        matchedFriend.status === 'overdue' && 'Overdue' ||
                                        matchedFriend.status === 'on-track' && 'On Track'
                                    }
                                </div>
                                <div className='flex gap-1'>
                                    {
                                        matchedFriend.tags.map((tag, i) => <div key={i} className="badge badge-outline badge-success">{tag}</div>)
                                    }
                                </div>
                                <p className='text-center'>{matchedFriend.bio}</p>
                            </div>
                            <div className='flex flex-col items-center space-y-2 md:space-y-5 mt-3 md:mt-0'>
                                <button className='btn flex items-center justify-center gap-1 bg-white shadow p-2 w-full rounded-sm'><RiNotificationSnoozeLine />Snooze 2 weeks</button>
                                <button className='btn flex items-center justify-center gap-1 bg-white shadow p-2 w-full rounded-sm'><FaArchive />Archive</button>
                                <button className='btn flex items-center justify-center gap-1 bg-white shadow p-2 w-full rounded-sm text-red-500'><MdDelete />Delete</button>
                            </div>
                        </div>
                        <div className='space-y-10'>
                            <div>
                                <div className='text-center grid grid-cols-2 md:grid-cols-3 gap-5'>
                                    <div className='bg-white p-5 md:p-10 rounded-xl shadow border border-black/1'>
                                        <h3 className='text-3xl md:text-4xl font-bold'>10</h3>
                                        <p>Total Friend</p>
                                    </div>
                                    <div className='bg-white p-5 md:p-10 rounded-xl shadow border border-black/1'>
                                        <h3 className='text-3xl md:text-4xl font-bold'>10</h3>
                                        <p>On Track</p>
                                    </div>
                                    <div className='bg-white p-5 md:p-10 rounded-xl shadow border border-black/1'>
                                        <h3 className='text-3xl md:text-4xl font-bold'>10</h3>
                                        <p>Need Attention</p>
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
                                <QuickActions name={matchedFriend.name} />
                            </div>
                        </div>
                    </div>
                ) : null
            }
        </div>
    );
};

export default DetailesPage;