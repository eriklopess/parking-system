import React from 'react';
import {
  AiOutlineCloseCircle, AiOutlineSend, AiOutlinePlusCircle,
} from 'react-icons/ai';
import Sidebar from '../../components/Sidebar';

function Dashboard() {
  const [isOpen, setIsOpen] = React.useState(false);
  const handlerOpen = () => setIsOpen(!isOpen);
  return (
    <main className="flex flex-col min-h-screen h-screen">
      <Sidebar />
      <div className="flex min-h-full flex-col content-center justify-center text-center font-mono text-3xl">

        <div className="flex flex-row flex-wrap h-screen justify-center items-center ml-72">
          <div>
            {
              isOpen ? (
                <>
                  <button type="button" onClick={handlerOpen} className="flex content-center items-center justify-center p-1 text-xl h-10">
                    <span className="mr-2 text-2xl">
                      <AiOutlineCloseCircle />
                    </span>
                    Fechar
                  </button>
                  <div className="flex flex-col w-full h-full  z-30  items-center content-center justify-center">
                    <div className="flex flex-col justify-center items-center">
                      <form className="flex flex-col justify-center items-center text-xl">
                        <input type="text" placeholder="Cliente" className="border border-black p-2 m-1 w-full" />
                        <input type="text" placeholder="Marca" className="border border-black  p-2 m-1 w-full" />
                        <input type="text" placeholder="Modelo" className="border border-black  p-2 m-1 w-full" />
                        <input type="text" placeholder="Placa" className="border border-black  p-2 m-1 w-full" />
                        <input type="text" placeholder="Cor" className="border border-black  p-2 m-1 w-full" />
                        <input type="text" placeholder="Vaga" className="border border-black  p-2 m-1 w-full" />
                        <button type="button" className="text-xl flex items-center border border-black  p-2 w-full justify-center">
                          <span className="mr-2">
                            <AiOutlinePlusCircle />
                          </span>
                          Adicionar Carro
                        </button>
                      </form>
                    </div>
                  </div>
                </>
              )
                : (
                  <>
                    <button type="button" onClick={handlerOpen} className="flex content-center items-center justify-center p-1 text-xl h-10">
                      <span className="mr-2 text-2xl">
                        <AiOutlinePlusCircle />
                      </span>
                      Adicionar Carro
                    </button>
                    <table className="w-full text-lg rounded-lg">
                      <thead className="">
                        <tr className="border border-black ">
                          <th className="border border-black h-7 p-1">Cliente</th>
                          <th className="border border-black">Marca</th>
                          <th className="border border-black">Modelo</th>
                          <th className="border border-black">Placa</th>
                          <th className="border border-black">Cor</th>
                          <th className="border border-black">Vaga</th>
                          <th className="border border-black">Entrada</th>
                          <th className="border border-black">Tempo</th>
                          <th className="border border-black">Valor</th>
                          <th className="border border-black">Fechar</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td className="border border-black p-2">Cliente 1</td>
                          <td className="border border-black p-2">Marca 1</td>
                          <td className="border border-black p-2">Modelo 1</td>
                          <td className="border border-black p-2">Placa 1</td>
                          <td className="border border-black p-2">Cor 1</td>
                          <td className="border border-black p-2">Vaga 1</td>
                          <td className="border border-black p-2">Entrada 1</td>
                          <td className="border border-black p-2">Tempo 1</td>
                          <td className="border border-black p-2">Valor 1</td>
                          <td className="border border-black p-2">
                            <button type="button" className="text-3xl">
                              <AiOutlineSend />
                            </button>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </>
                )
            }
          </div>
        </div>
      </div>
    </main>
  );
}

export default Dashboard;
