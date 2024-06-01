// pages/index.tsx
import dynamic from 'next/dynamic';
import Head from 'next/head';

const PopupButton = dynamic(() => import('./components/CustomButton'), { ssr: false });

const HomePage = () => {
  return (
    <div className="bg-[url('../public/lapImage.jpg')] w-full h-screen bg-cover bg-center">
      <Head>
        <title>Home Page</title>
      </Head>
      <div className='flex flex-row justify-center pt-10'>
        <div className="w-20 h-20 bg-[url('../public/myImage.jpeg')] bg-cover rounded-full"></div>
      </div>
      <div className='flex flex-row justify-center pt-5'>
        <span className='font-bold text-xl text-slate-500'>Sharook Andathodan</span>
      </div>
      <div className='flex flex-row justify-center pt-1'>
        <span className='font-bold text-base text-slate-500'>Full Stack Developer</span>
      </div>
      <div className='flex flex-row justify-center pt-1'>
        <span className='font-bold text-sm text-slate-500'>Test assessment by Qaim Alvi</span>
      </div>
      <div className='flex flex-row justify-center pt-1'>
        <span className='font-bold text-sm text-slate-500'>Email: sharookat@gmail.com, Mob: +971554512472</span>
      </div>
      <PopupButton name='Open Popup' type='popup-btn' />
      <PopupButton name='Go to next page' type='page-btn' />
    </div>
  );
};

export default HomePage;
