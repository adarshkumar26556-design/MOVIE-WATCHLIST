import React, { useState } from "react";
import Navbar from "./navebar";
import Sidebar from "./sidebar";
import Window from "./window";

function Home() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <div className="flex min-h-screen bg-gray-900 text-white">
      {/* Sidebar - show/hide based on screen size */}
      <Sidebar isOpen={isSidebarOpen} setIsOpen={setIsSidebarOpen} />

      {/* Main content area */}
      <div className="flex-1 flex flex-col">
        <Navbar toggleSidebar={() => setIsSidebarOpen(!isSidebarOpen)} />
        <main className="pt-24 px-6">
          <Window />
        </main>
      </div>
    </div>
  );
}

export default Home;
