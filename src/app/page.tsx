'use client'
import Image from "next/image";
import { GridBackgroundDemo } from "./components/ui/GridBackground";
import GlobeDemo from "./components/GlobeDemo";
import {Noto_Sans} from 'next/font/google'
import { SignUp } from "@clerk/nextjs";
import { ButtonsCard } from '@/app/components/ui/tailwindcss-buttons'

const notoSans = Noto_Sans({ subsets: ['latin'] });

export default function Home() {
  return (
      <div className="flex flex-row justify-between overflow-hidden  relative z-50 h-[100vh] w-[100vw] items-center px-28">
        <div className="flex flex-col justify-center ">
        <div className={`${notoSans.className} text-8xl font-medium tracking-tighter text-[#9ED0E6] `}>CollaborFlow</div>
        <div className="text-white ml-4 my-2">Where real-time creativity meets seamless collaboration.</div>
        <ButtonsCard onClick={()=>{console.log("clicked")}}>
        <button className="relative  inline-flex mt-8 ml-4 h-12 w-36 overflow-hidden rounded-full p-[1px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
        <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
        <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-slate-950 px-3 py-1 text-sm font-medium text-white backdrop-blur-3xl">
          Start Now
        </span>
      </button>
        </ButtonsCard>
        </div>
      <GlobeDemo></GlobeDemo>
      </div>
  );
}
