// Hero.jsx
import React, { useState } from 'react';
import { GoCrossReference } from 'react-icons/go';
import { FaQuora } from 'react-icons/fa';
import { FcAbout } from 'react-icons/fc';
import {
  PaperAirplaneIcon,
} from '@heroicons/react/solid';
import bgImg from '../assets/cyber-bg.png';
import ReferralModal from './ReferralModal';

const Hero = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div name="home" className="w-full h-screen bg-zinc-200 flex flex-col justify-between">
      <div className="grid md:grid-cols-2 max-w-[1240px] m-auto">
        <div className="flex flex-col justify-center md:items-start w-full px-2 py-8">
          <p className="text-2xl">Unique Sequencing & Production</p>
          <h1 className="py-3 text-5xl md:text-7xl font-bold">Refer And Earn</h1>
          <p className="text-2xl">This is our Tech brand.</p>
          <button className="py-3 px-6 sm:w-[60%] my-4" onClick={openModal}>
            Refer Now
          </button>
        </div>
        <div>
          <img className="w-full" src={bgImg} alt="/" />
        </div>
        <div
          className="absolute flex flex-col py-8 md:min-w-[760px] bottom-[5%]
          mx-1 md:left-1/2 transform md:-translate-x-1/2 bg-zinc-200
          border border-slate-300 rounded-xl text-center shadow-xl"
        >
          <p>Services</p>
          <div className="flex justify-between flex-wrap px-4">
            <p className="flex px-4 py-2 text-slate-500">
              <FcAbout className="h-6 text-indigo-600" /> AboutUs
            </p>
            <p className="flex px-4 py-2 text-slate-500">
              <FaQuora className="h-6 text-indigo-600" /> FAQs
            </p>
            <p className="flex px-4 py-2 text-slate-500">
              <GoCrossReference className="h-6 text-indigo-600" /> How to Refer
            </p>
            <p className="flex px-4 py-2 text-slate-500">
              <PaperAirplaneIcon className="h-6 text-indigo-600" /> Refer
            </p>
          </div>
        </div>
      </div>
      <ReferralModal isOpen={isModalOpen} onRequestClose={closeModal} />
    </div>
  );
};

export default Hero;
