import Sidebar from './Sidebar';
import Topbar from './Topbar';
import { Outlet } from 'react-router-dom';

export default function Layout() {
  return (
    <div className="flex h-screen overflow-hidden bg-gradient-to-r from-indigo-500 to-purple-600">
      {/* Sidebar: hidden on small screens, visible on md+ */}
      <div className="h-full fixed z-20 hidden md:block">
        <Sidebar />
      </div>
      <div className="flex flex-col flex-grow md:ml-[250px] relative w-full">
        {/* Topbar: visible only on small screens */}
        <Topbar />
        <main className="flex-grow overflow-y-auto p-6 sm:p-10">
          <div className="max-w-5xl mx-auto w-full bg-white/80 backdrop-blur-lg rounded-3xl shadow-xl p-10 mt-6">
            <Outlet />
          </div>
        </main>
        <footer className="bg-white/90 shadow-inner border-t border-gray-200 z-50 sticky bottom-0">
          <div className="max-w-7xl mx-auto py-4 px-6 text-center text-sm text-gray-600">
            © 2025 Hackathon. All rights reserved.
          </div>
        </footer>
      </div>
    </div>
  );
}
