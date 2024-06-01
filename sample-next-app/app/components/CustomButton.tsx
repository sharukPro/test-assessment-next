// components/CustomButton.tsx
'use client';
import { useState } from 'react';
import { useRouter } from 'next/navigation';

interface Props {
  name: string;
  type: string;
}

const CustomButton = (Props: Props) => {

  const {name, type} = Props;

  const router = useRouter();

  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const onClickButtonHandler = () => {
    if (type === 'popup-btn') {
      setIsPopupOpen(!isPopupOpen);
    } else {
      router.push('/secondPage');
      alert('It will be a simple animation page created using three.js basics. I have started learning three.js. Trust me i can do better. Click anywhere on the screen to go back to home page. ');
    }
  };

  return (
    <div className='mt-10'>
      <div className={`flex items-center justify-center h-full ${isPopupOpen ? 'blur-sm' : ''}`}>
        <button
          onClick={onClickButtonHandler}
          className="px-4 py-2 font-bold text-white bg-blue-500 rounded hover:bg-blue-700"
        >
          {name}
        </button>
      </div>

      {isPopupOpen && (
        <div className="fixed top-0 left-0 flex items-center justify-center w-full h-full bg-black bg-opacity-70">
          <div className="p-8 bg-white rounded shadow-lg">
            <h2 className="mb-4 text-2xl font-bold">Popup Content</h2>
            <p>This is a simple popup with a blurred background.</p>
            <button
              onClick={() => setIsPopupOpen(!isPopupOpen)}
              className="px-4 py-2 mt-4 font-bold text-white bg-red-500 rounded hover:bg-red-700"
            >
              Close Popup
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default CustomButton;
