
const Stats = () => {
    return (
        <div className='container mx-auto w-[95%] text-center grid grid-cols-2 md:grid-cols-4 gap-5'>
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
            <div className='bg-white p-5 md:p-10 rounded-xl shadow border border-black/1'>
                <h3 className='text-3xl md:text-4xl font-bold'>10</h3>
                <p>Interection this Month</p>
            </div>
        </div>
    );
};

export default Stats;