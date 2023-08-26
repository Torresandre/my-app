import { HomeIcon, Library, Search } from "lucide-react";

export function SideBar() {
  return(
    <aside className="w-68 bg-zinc-950 p-6">
    <div className="flex items-center gap-2">
      <div className="w-3 h-3 bg-red-500 rounded-full"/>
      <div className="w-3 h-3 bg-yellow-500 rounded-full"/>
      <div className="w-3 h-3 bg-green-500 rounded-full"/>
    </div>
    <nav className="space-y-5 mt-10">
    <a href="" className="flex itens-center gap-3 text-xs font-semibold  text-zinc-200">
      <HomeIcon/> Home</a>
    <a href="" className="flex itens-center gap-3 text-xs font-semibold  text-zinc-200">
      <Search/>
      Seach</a>
    <a href="" className="flex itens-center gap-3 text-xs font-semibold text-zinc-200">
      <Library/>Your Library</a>
    </nav>
    <nav className="mt-6 pt-6 border-t border-zinc-700 flex flex-col gap-3">
      <a href="" className=" text-sm text-zinc-400 hover:text-zinc-100">Work out metal</a>
      <a href="" className=" text-sm text-zinc-400 hover:text-zinc-100">Motorcycle trip</a>
      <a href="" className=" text-sm text-zinc-400 hover:text-zinc-100">Foco nos estudos</a>
      <a href="" className=" text-sm text-zinc-400 hover:text-zinc-100">Party metal</a>
      <a href="" className=" text-sm text-zinc-400 hover:text-zinc-100">Riffs</a>
    </nav>
  </aside>
  )
}