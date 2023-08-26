import {  ChevronLeft, ChevronRight, Play } from "lucide-react";
import Image from "next/image";

export function Main() {
  return(
    <main className="flex-1 p-4">
    <div className="flex items-center gap-4">
      <button className="rounded-full bg-black/40 p-1">
        <ChevronLeft size={20}/>
      </button>
      <button className="rounded-full bg-black/40 p-1">
        <ChevronRight size={20}/>
      </button>
      </div>
      <h1 className="font-semibold text-2xl mt-6">Good Afeternoon</h1>
    <div className="grid grid-cols-3 gap-4 mt-4">
      <a href=" " className="bg-white/10 rounded group flex items-center gap-4 overflow-hidden hover:bg-white/20 transition-colors">
        <Image src="/You need to enable Javascript.jpg" width={95} height={95} alt="Disturbed"/>
        <strong>Disturbed</strong>
        <button className="p-2 rounded-full bg-green-400 text-black ml-auto mr-8 w-12 h-12 flex items-center justify-center pl-2 invisible group-hover:visible">
          <Play/>
        </button>
      </a>
      <a href=" " className="bg-white/10 rounded group flex items-center gap-4 overflow-hidden hover:bg-white/20 transition-colors">
        <Image src="/You need to enable Javascript.jpg" width={95} height={95} alt="Disturbed"/>
        <strong>Disturbed</strong>
        <button className="p-2 rounded-full bg-green-400 text-black ml-auto mr-8 w-12 h-12 flex items-center justify-center pl-2 invisible group-hover:visible">
          <Play/>
        </button>
      </a>
      <a href=" " className="bg-white/10 rounded group flex items-center gap-4 overflow-hidden hover:bg-white/20 transition-colors">
        <Image src="/You need to enable Javascript.jpg" width={95} height={95} alt="Disturbed"/>
        <strong>Disturbed</strong>
        <button className="p-2 rounded-full bg-green-400 text-black ml-auto mr-8 w-12 h-12 flex items-center justify-center pl-2 invisible group-hover:visible">
          <Play/>
        </button>
      </a>
      <a href=" " className="bg-white/10 rounded group flex items-center gap-4 overflow-hidden hover:bg-white/20 transition-colors">
        <Image src="/You need to enable Javascript.jpg" width={95} height={95} alt="Disturbed"/>
        <strong>Disturbed</strong>
        <button className="p-2 rounded-full bg-green-400 text-black ml-auto mr-8 w-12 h-12 flex items-center justify-center pl-2 invisible group-hover:visible">
          <Play/>
        </button>
      </a>
      <a href=" " className="bg-white/10 rounded group flex items-center gap-4 overflow-hidden hover:bg-white/20 transition-colors">
        <Image src="/You need to enable Javascript.jpg" width={95} height={95} alt="Disturbed"/>
        <strong>Disturbed</strong>
        <button className="p-2 rounded-full bg-green-400 text-black ml-auto mr-8 w-12 h-12 flex items-center justify-center pl-2 invisible group-hover:visible">
          <Play/>
        </button>
      </a>
      <a href=" " className="bg-white/10 rounded group flex items-center gap-4 overflow-hidden hover:bg-white/20 transition-colors">
        <Image src="/You need to enable Javascript.jpg" width={95} height={95} alt="Disturbed"/>
        <strong>Disturbed</strong>
        <button className="p-2 rounded-full bg-green-400 text-black ml-auto mr-8 w-12 h-12 flex items-center justify-center pl-2 invisible group-hover:visible">
          <Play/>
        </button>
      </a>

    </div>
    <h2 className="font-semibold text-xl mt-10">Made for André Torres</h2>
    <div className="grid grid-cols-5 gap-4 mt-4" >
      <a href="" className="bg-white/5 p-3 rounded-md flex flex-col gap-2 hover:bg-white/10">
      <Image className="w-full" src="/You need to enable Javascript.jpg" width={110} height={110} alt="Disturbed"/>
      <strong className="font-semibold">Daily Mix 1</strong>
      <span className="text-sm text-zinc-400">Disturbed, Triviun, Nightwish...</span>
      </a>
       <a href="" className="bg-white/5 p-3 rounded-md flex flex-col gap-2 hover:bg-white/10">
      <Image className="w-full" src="/You need to enable Javascript.jpg" width={110} height={110} alt="Disturbed"/>
      <strong className="font-semibold">Daily Mix 1</strong>
      <span className="text-sm text-zinc-400">Disturbed, Triviun, Nightwish...</span>
      </a>
      <a href="" className="bg-white/5 p-3 rounded-md flex flex-col gap-2 hover:bg-white/10">
      <Image className="w-full" src="/You need to enable Javascript.jpg" width={110} height={120} alt="Disturbed"/>
      <strong className="font-semibold">Daily Mix 1</strong>
      <span className="text-sm text-zinc-400">Disturbed, Triviun, Nightwish...</span>
      </a>
      <a href="" className="bg-white/5 p-3 rounded-md flex flex-col gap-2 hover:bg-white/10">
      <Image className="w-full" src="/You need to enable Javascript.jpg" width={110} height={110} alt="Disturbed"/>
      <strong className="font-semibold">Daily Mix 1</strong>
      <span className="text-sm text-zinc-400">Disturbed, Triviun, Nightwish...</span>
      </a>
      
      <a href="" className="bg-white/5 p-3 rounded-md flex flex-col gap-2 hover:bg-white/10">
      <Image className="w-full" src="/You need to enable Javascript.jpg" width={110} height={110} alt="Disturbed"/>
      <strong className="font-semibold">Daily Mix 1</strong>
      <span className="text-sm text-zinc-400">Disturbed, Triviun, Nightwish...</span>
      </a>
    </div>
  </main>
  )

}