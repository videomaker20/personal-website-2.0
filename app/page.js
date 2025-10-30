"use client";
import Image from "next/image";
import Link from "next/link";
import { motion } from "motion/react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation, EffectCoverflow } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/effect-coverflow";
import { useState, useLayoutEffect } from "react";
import localFont from "next/font/local";

const cinemairFont = localFont({
  src: "./fonts/Cinemair-Regular.ttf"
});

const oswaldFont = localFont({
  src: "./fonts/Oswald-Regular.ttf"
});

export default function Home() {
  const [isMobile, setIsMobile] = useState(null);

  useLayoutEffect(() => {
    setIsMobile(window.innerWidth < 768);
  }, []);

  if (isMobile === null) return null;

  const faceAnimation = isMobile
    ? { initial : { x: 0, y: 0, opacity: 0 }, animate : { x: 0, y: 0, opacity: 1 }, }
    : { initial : { x: 100, y: 0, opacity: 0 }, animate : { x: 0, y: 0, opacity: 1 }, };

  return (
    <>
      <div className="w-full flex justify-center mb-10 overflow-hidden">
        <div className="flex flex-col md:flex-row items-center">
          <motion.div initial = {{ scale: 0, opacity: 0 }} animate = {{ scale: [0, 1.2, 1], opacity: 1 }} transition={{ duration: 0.5, delay: 0.2, ease: "easeOut" }}>          
            <Image className="w-[90vw] md:w-[45vw] max-w-[700px] h-auto" src="/assets/hello.png" width={700} height={700} alt="hello" />
          </motion.div>
        
          <motion.div initial = {faceAnimation.initial} animate = {faceAnimation.animate} transition={{ duration: 0.5, delay:0.2, ease: "easeOut" }}>        
            <Image className="w-[100vw] max-w-[900px] h-auto object-contain" src="/assets/face.png" width={700} height={700} alt="face" />
          </motion.div>
        </div>        
      </div>
      <motion.div initial = {{ scale: 0 }} whileInView = {{ scale: 1 }}>
        <h1 id="title" className={`${cinemairFont.className} text-center text-4xl md:text-5xl mt-20`}>A little bit about me</h1>
      </motion.div>
      <motion.div initial = {{ scale: 0 }} whileInView = {{ scale: 1 }}>
        <p id="card" className={`${oswaldFont.className} ml-10 md:ml-50 mr-10 md:mr-50 mt-10 mb-20 text-justify text-xl border-4 border-gray-700 rounded-xl bg-green-200/25 shadow-xl p-5`}>
          I am a newcomer, self-taught programmer with a strong passion for computer and technology.
          Long have I dwell in another industry to finally decided that this is my calling.
          After gaining valuable experience, I decided to pivot and fully immerse myself in a programming journey
          that has been both challenging and incredibly rewarding. I love the creative process and the power to build and create.
          I am looking forward to finally be able to contribute my skills, curiosity, and dedication to the tech industry
          and collaborate on projects that could make an impact for everybody.
        </p>
      </motion.div>
      <motion.div initial = {{ scale: 0 }} whileInView = {{ scale: 1 }}>
        <h1 id="title" className={`${cinemairFont.className} text-center text-5xl mt-auto`}>My skill</h1>
      </motion.div>
      <motion.div initial = {{ scale: 0 }} whileInView={{ scale: 1}} className="flex justify-center mt-10">
        <Swiper className="w-250"
        effect="coverflow"
        onProgress={(swiper) => {
          swiper.slides.forEach((slide) => {
            const slideProgress = slide.progress;
            const opacity = 1 - Math.min(Math.abs(slideProgress) * 0.3);
            slide.style.opacity = opacity;
          });
        }}  
        spaceBetween={50}
        slidesPerView={4}
        centeredSlides={true}
        coverflowEffect={{ rotate: 0, stretch: 0, depth: 100, modifier: 4, slideShadows: false, }}
        navigation={true}
        pagination={{ clickable: true }}
        loop={true}
        modules={[Navigation, EffectCoverflow]}
        >
          <SwiperSlide><img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg"></img></SwiperSlide>
          <SwiperSlide><img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg"></img></SwiperSlide>
          <SwiperSlide><img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg"></img></SwiperSlide>
          <SwiperSlide><img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg"></img></SwiperSlide>
          <SwiperSlide><img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/csharp/csharp-original.svg"></img></SwiperSlide>
          <SwiperSlide><img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg"></img></SwiperSlide>
          <SwiperSlide><img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original.svg"></img></SwiperSlide>
          <SwiperSlide><img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original.svg"></img></SwiperSlide>
          <SwiperSlide><img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-original.svg"></img></SwiperSlide>
          <SwiperSlide><img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg"></img></SwiperSlide>
          <SwiperSlide><img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vscode/vscode-original.svg"></img></SwiperSlide>
        </Swiper>
      </motion.div>

      <motion.div initial = {{ scale: 0 }} whileInView = {{ scale: 1 }}>
        <h1 id="title" className={`${cinemairFont.className} text-center text-5xl mt-20`}>Portfolio</h1>
      </motion.div>
      <motion.div initial = {{ scale: 0 }} whileInView={{ scale: 1 }} className="flex flex-col items-center justify-center mb-20">
        <div id="card" className={`${oswaldFont.className} w-300 text-center m-5 bg-green-200/25 p-5 shadow-xl border-4 border-gray-700 rounded-xl`}>
          <Link href="https://bmc-update-bpjs-ketenagakerjaan.up.railway.app/" target="_blank" rel="noopener noreferrer" className="hover:text-green-600">
            <p className="text-2xl">Community Data Input 1.0</p>
          </Link>          
          <p>This is my first attempt creating a data input collection using React and MySQL to store the data from user.</p>
        </div> 
        <div id="card" className={`${oswaldFont.className} w-300 text-center m-5 bg-green-200/25 p-5 shadow-xl border-4 border-gray-700 rounded-xl`}>
          <Link href="https://dekranasdasauyunan.up.railway.app/" target="_blank" rel="noopener noreferrer" className="hover:text-green-600">
            <p className="text-2xl">Community Data Input 2.0</p>
          </Link>          
          <p>Second attempt creating a data input collection using Next.js and Postgresql to store the data from user.</p>
        </div>
        <div id="card" className={`${oswaldFont.className} w-300 text-center m-5 bg-green-200/25 p-5 shadow-xl border-4 border-gray-700 rounded-xl`}>
          <p className="text-2xl">Yugioh Database & Analyzer</p>
          <p>A Yugioh card database where user can search for Yugioh card using api and simple algorithm to check the quality of the cards.</p>
        </div>
      </motion.div>

      <div className="flex justify-center">
        <p id="title" className={`${oswaldFont.className} text-2xl mb-10`}>Thank you for checking my page!</p>
      </div>
      <Link href="https://www.youtube.com" target="_blank" rel="noopener noreferrer">
        <motion.div whileHover = {{ scale: 1.1 }} className="flex justify-center mb-20 cursor-pointer">
          <div id="card" className="flex items-center justify-center gap-5 w-80 p-2 border-4 rounded-xl border-gray-700">
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg" width={100}></img>
            <p className={`${oswaldFont.className} text-xl`}>Okky Putra Perdana</p>
          </div>
        </motion.div>
      </Link>    
    </>
    
  );
}
