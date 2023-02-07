import React from 'react';
import { Link } from 'react-router-dom';
import { AiOutlineCar, AiOutlinePaperClip, AiOutlineTool } from 'react-icons/ai';
import { CiParking1 } from 'react-icons/ci';

function Sidebar() {
  return (
    <div className="flex w-72 fixed left-0 top-0 z-0 flex-col h-full shadow-lg bg-white border-r border-slate-200">
      { [
        {
          name: 'Dashboard',
          path: '/dashboard',
          icon: <AiOutlineTool />,
        },
        {
          name: 'Veículos',
          path: '/dashboard/vehicle',
          icon: <AiOutlineCar />,
        },
        {
          name: 'Estacionamento',
          path: '/dashboard/parking',
          icon: <CiParking1 />,
        },
        {
          name: 'Recibos',
          path: '/dashboard/orders',
          icon: <AiOutlinePaperClip />,
        },

      ].map((item) => (
        <Link
          to={item.path}
          key={item.name}
          className="flex align-middle text-lg
                cursor-pointer hover:bg-slate-200 transition-all p-3 border-b content-center hover:border-slate-400"
        >
          <span className="flex place-items-center p-1 mr-1">
            {item.icon}
          </span>
          {item.name}
        </Link>
      ))}
    </div>
  );
}

export default Sidebar;
