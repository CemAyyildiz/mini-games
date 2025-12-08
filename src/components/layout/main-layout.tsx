import { Outlet } from 'react-router-dom';
import Sidebar from './sidebar';

export default function MainLayout() {
  return (
    <div className="min-h-screen bg-background">
      <Sidebar />
      <div className="pl-[280px]">
        <main className="pt-6">
          <div className="container mx-auto p-6">
            <Outlet />
          </div>
        </main>
      </div>
    </div>
  );
}
