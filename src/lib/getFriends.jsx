export const getFriends = async () => {
    const res = await fetch('https://keenkeeper-7.vercel.app/data.json');
    return res.json();
};