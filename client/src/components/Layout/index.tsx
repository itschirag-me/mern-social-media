import Body from "./Body";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";

const Layout = () => {
  return (
    <div className="flex flex-col h-screen bg-white rounded-sm">
      <Navbar />
      <div className="flex w-full h-full">
        <Sidebar />
        <Body />
      </div>
    </div>
  )
}

export default Layout;