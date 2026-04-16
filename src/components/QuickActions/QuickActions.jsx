'use client';

import { TbPhoneCall } from 'react-icons/tb';
import { LuMessageSquareMore } from 'react-icons/lu';
import { IoVideocamOutline } from 'react-icons/io5';
import { toast } from 'react-toastify';
import { useContext, useState } from 'react';
import { ActionContext } from '@/context/context';

const QuickActions = ({ name, date }) => {

    const { addAction } = useContext(ActionContext);

    const [actions, setActions] = useState([]);
    const [calls, setCalls] = useState([]);
    const [texts, setTexts] = useState([]);
    const [videos, setVideos] = useState([]);

    const handleAction = (type) => {
        const newAction = {
            name,
            type,
            date
        };
        setActions([...actions, newAction]);
    };

    const handleCall = () => {
        const newCall = { name, type: 'call', date };
        setCalls([...calls, newCall]);
        // console.log("Calls:", newCall);
    };

    const handleText = () => {
        const newText = { name, type: 'text', date };
        setTexts([...texts, newText]);
        // console.log("Texts:", newText);
    };

    const handleVideo = () => {
        const newVideo = { name, type: 'video', date };
        setVideos([...videos, newVideo]);
        // console.log("Videos:", newVideo);
    };
    // console.log(actions)
    // console.log(calls)
    // console.log(texts)
    // console.log(videos)

    const handelClick = (p) => {
        let position = "top-right";

        if (window.innerWidth >= 768) {
            position = "top-center";
        }

        toast.success(`${p} with ${name}`, { position });
        handleAction('${p}');
        if (p === 'call') handleCall();
        if (p === 'text') handleText();
        if (p === 'video') handleVideo();
        addAction(name, `${p}`, date)
    }

    return (
        <div className='text-center grid grid-cols-2 md:grid-cols-3 gap-5'>
            <div onClick={() => handelClick('call')} className='bg-[#F8FAFC] flex flex-col items-center p-5 rounded-xl cursor-pointer'>
                <TbPhoneCall size={20} />
                <p>Call</p>
            </div>

            {/* <div onClick={() => { toast.success(`Text with ${name}`); handleAction('text'); handleText(); addAction(name, 'text', date) }} className='bg-[#F8FAFC] flex flex-col items-center p-5 rounded-xl cursor-pointer'> */}
            <div onClick={() => handelClick('text')} className='bg-[#F8FAFC] flex flex-col items-center p-5 rounded-xl cursor-pointer'>
                <LuMessageSquareMore size={20} />
                <p>Text</p>
            </div>

            <div onClick={() => handelClick('video')} className='bg-[#F8FAFC] flex flex-col items-center p-5 rounded-xl cursor-pointer'>
                <IoVideocamOutline size={20} />
                <p>Video</p>
            </div>
        </div>
    );
};

export default QuickActions;