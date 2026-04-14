'use client';

import { createContext, useState } from 'react';

export const ActionContext = createContext();

const ActionProvider = ({ children }) => {
    const [actions, setActions] = useState([]);

    const addAction = (name, type, date) => {
        const newAction = { name, type, date };
        setActions(prev => [...prev, newAction]);
    };


    const calls = actions.filter(a => a.type === 'call');
    const texts = actions.filter(a => a.type === 'text');
    const videos = actions.filter(a => a.type === 'video');

    return (
        <ActionContext.Provider value={{
            actions,
            addAction,
            calls,
            texts,
            videos
        }}>
            {children}
        </ActionContext.Provider>
    );
};

export default ActionProvider;