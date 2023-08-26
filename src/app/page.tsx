import Image from "next/image"
import {
   Home as HomeIcon,Search,
   Library,
   ChevronLeft,
    ChevronRight,
    Play,
    Shuffle, 
    SkipBack, 
    SkipForward, 
    Repeat, 
    Mic2, 
    LayoutList, 
    Volume, 
    Maximize2,
  Laptop2 } from "lucide-react"
import { SideBar } from "./component/Aside/SideBar"
import { Main } from "./component/Main/Main"
import { Footer } from "./component/Footer/Footer"

export default function Home() {
  return (
  <div className="h-screen flex flex-col">
    <div className="flex flex-1 ">
     <SideBar/>
     <Main/>
     
    </div>
   <Footer/>

  </div>
  )
}
