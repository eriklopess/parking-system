import React from 'react';
import { AiFillCloseCircle } from 'react-icons/ai';
import Sidebar from '../../components/Sidebar';

function Dashboard() {
  const [isOpen, setIsOpen] = React.useState<boolean>(true);
  const [, setConfig] = React.useState<string>();
  return (
    <main className="flex flex-col min-h-screen h-screen">
      <Sidebar />
      <div className="flex min-h-full flex-col content-center justify-center text-center font-mono text-3xl">
        <div className="flex flex-row flex-wrap h-screen justify-center items-center ml-72 ">
          {
            isOpen ? (
              <div className="flex flex-col text-center w-full place-items-center ">
                <button
                  type="button"
                  onClick={() => { setIsOpen(false); }}
                  className="my-20 bg-green-500 hover:bg-green-700 text-white font-bold mt-4 text-l rounded-full"
                >
                  <AiFillCloseCircle />
                </button>
                <h1>
                  Configurações
                </h1>
                <div className="flex flex-col w-full place-items-center">
                  <label htmlFor="price">
                    <input
                      type="number"
                      id="price"
                      min="0"
                      placeholder="Preço por hora"
                      onChange={(event) => setConfig(event.target.value)}
                      className="flex w-full content-center justify-center border border-gray-400 p-2 mt-5 mx-auto"
                    />
                  </label>
                </div>
              </div>
            ) : (
              <div className="flex flex-col text-center w-full">
                <span className="text-xl font-bold">
                  Não há carros cadastrados
                </span>
              </div>
            )
        }
        </div>
      </div>
    </main>
  );
}

export default Dashboard;
