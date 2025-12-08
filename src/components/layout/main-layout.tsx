import { Outlet } from 'react-router-dom';
import Sidebar from './sidebar';
import Navbar from './navbar';

export default function MainLayout() {
  return (
    <div className="min-h-screen bg-background">
      <Sidebar />
      <div className="pl-[280px]">
        <Navbar />
        <main className="pt-16">
          <div className="container mx-auto p-6">
            <Outlet />
          </div>
        </main>
      </div>
    </div>
  );
}
