import React from 'react';
import { Link } from 'react-router-dom';
import { AiOutlineCar } from 'react-icons/ai';
import { CiParking1 } from 'react-icons/ci';

function Sidebar() {
  return (
    <div className="flex w-72 fixed left-0 top-0 pt-16 z-0 flex-col h-full shadow-lg bg-white border-r border-slate-200">
      { [
        {
          name: 'Veículos',
          path: '/dashboard',
          icon: <AiOutlineCar />,
        },
        {
          name: 'Estacionamento',
          path: '/dashboard/parking',
          icon: <CiParking1 />,
        },
      ].map((item) => (
        <Link
          to={item.path}
          key={item.name}
          className="flex align-middle text-lg
                cursor-pointer hover:bg-slate-200 transition-all p-3 border-b content-center hover:border-slate-400"
        >
          <span className="flex align-middle justify-center p-1 mr-1">
            {item.icon}
          </span>
          {item.name}
        </Link>
      ))}
    </div>
  );
}

export default Sidebar;
