import React from 'react';
import { Link } from 'react-router-dom';
import { AiOutlineMenu, AiOutlineHome, AiOutlineUser } from 'react-icons/ai';

function Header(): JSX.Element {
  const [isOpen, setIsOpen] = React.useState(false);
  const handleOpen = () => setIsOpen(!isOpen);
  return (
    window.innerWidth < 768
      ? (
        <header className="fixed w-full p-2">
          <button className="absolute z-10 text-2xl p-1" type="button" onClick={handleOpen}>
            <AiOutlineMenu />
          </button>
          {
        isOpen && (
        <nav className="fixed top-0 left-0 bg-slate-50  w-72 h-screen z-0 pt-24">
          <ul>
            { [
              {
                name: 'Inicio',
                path: '/',
                icon: <AiOutlineHome />,
              },
              {
                name: 'Área do Cliente',
                path: '/',
                icon: <AiOutlineUser />,
              },
            ].map((item) => (
              <li
                key={item.name}
                className="flex align-middle text-lg w-full h-full
              cursor-pointer hover:bg-slate-200 transition-all p-3 border-b border-slate-200 hover:border-slate-400"
              >
                <span className=" flex align-middle justify-center p-1 mr-1">
                  {item.icon}
                </span>
                {item.name}
              </li>
            )) }
          </ul>
        </nav>
        )
      }
        </header>
      )
      : (
        <header className="flex justify-end align-middle bg-slate-50 items-center w-full h-16 shadow-md z-10 fixed">
          {[
            {
              name: 'Inicio',
              path: '/',
              icon: <AiOutlineHome />,
            },
            {
              name: 'Área do Cliente',
              path: '/dashboard',
              icon: <AiOutlineUser />,
            },
          ].map((item) => (
            <Link
              to={item.path}
              key={item.name}
              className="w-auto flex mr-8 text-xl cursor-pointer hover:bg-slate-200 transition-all p-3 border-b"
            >
              <span className=" flex align-middle justify-center p-1 mr-1">
                {item.icon}
              </span>
              {item.name}
            </Link>
          )) }
        </header>
      )
  );
}

export default Header;
