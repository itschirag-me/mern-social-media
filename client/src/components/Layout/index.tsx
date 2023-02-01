import Body from "./Body";
import { useState } from "react"
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";

const Layout = () => {
  const [isOpen, setIsOpen] = useState(false)

  const handleSidebar = () => setIsOpen(!isOpen)

  return (
    <div className="flex flex-col h-screen bg-white rounded-sm">
      <Navbar onSidebar={handleSidebar} />
      <div className="flex w-full h-full relative">
        <Sidebar isOpen={isOpen} />
        <Body />
      </div>
    </div>
  )
}

export default Layout;