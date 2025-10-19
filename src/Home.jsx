import React from 'react'
import { useNavigate } from 'react-router-dom';

const Home = () => {
    const [roomCode, setRoomCode] = React.useState('');

    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        if(!roomCode){
            alert('Please enter a room link');
            return;
        }
        navigate(`/callroom/${roomCode}`);
    }

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
        <div className='max-w-[500px] bg-white border-gray-200 rounded-md shadow-md p-5'>
            <h1>Add The Room Link here</h1>
            <form onSubmit={handleSubmit}>
                <input type="text" placeholder='Enter Room Link' className='w-full border border-gray-300 rounded-md p-2 mt-3 outline-0'
                onChange={(e) => setRoomCode(e.target.value)} />
                <button type='submit' className='w-full bg-blue-500 text-white rounded-md p-2 mt-3 cursor-pointer'>Join Room</button>
            </form>
        </div>
    </div>
  )
}

export default Home