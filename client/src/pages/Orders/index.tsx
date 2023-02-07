import React from 'react';
import { AiFillCloseCircle } from 'react-icons/ai';
import { useSelector } from 'react-redux';
import Sidebar from '../../components/Sidebar';
import { RootState } from '../../redux';
import { Order } from '../../redux/Orders.store';

function Orders() {
  const orders = useSelector<RootState>((state) => state.orders) as Order[];
  const price = useSelector<RootState>((state) => state.price) as number;
  const getPrice = (order: Order) => {
    const { entry } = order;
    const time = (new Date().getTime() - entry.getTime()) / 1000;
    const hours = Math.ceil(time / 3600);
    console.log(hours);

    return hours * price;
  };

  return (
    <div>
      <Sidebar />
      <div className="flex min-h-full flex-col content-center justify-center text-center font-mono text-3xl">
        <div className="flex flex-row flex-wrap h-screen justify-center items-center ml-72">
          <div className="flex flex-wrap flex-col w-10/12 justify-center">
            <h1 className="font-bold">Entradas</h1>
            <table>
              <thead>
                <tr className="border border-gray-600 p-1">
                  <th className="border border-black p-2 px-4 text-center">Placa</th>
                  <th className="border border-black p-2 px-4 text-center">Vaga</th>
                  <th className="border border-black p-2 px-4 text-center">Entrada</th>
                  <th className="border border-black p-2 px-4 text-center">Saída</th>
                  <th className="border border-black p-2 px-4 text-center">Valor</th>
                  <th className="border border-black p-2 px-4 text-center">Fechar</th>
                </tr>
              </thead>
              <tbody>
                {
                  orders.length === 0 ? (
                    <tr className="border border-gray-600 p-1">
                      <td colSpan={5}>Não há entradas</td>
                    </tr>
                  )
                    : (
                      orders.map((order) => (
                        <tr className="border border-gray-600 p-1">
                          <td className="border border-black p-2 px-4 text-center">{order.car.plate}</td>
                          <td className="border border-black p-2 px-4 text-center">{order.lot}</td>
                          <td className="border border-black p-2 px-4 text-center">{order.entry.toLocaleTimeString()}</td>
                          <td className="border border-black p-2 px-4 text-center">
                            {
                            order.exit === order.entry ? 'Em aberto' : order.exit.toLocaleTimeString()
                          }

                          </td>
                          <td className="border border-black p-2 px-4 text-center">{getPrice(order)}</td>
                          <td className="border border-black p-2 px-4 text-center">
                            <button type="button">
                              <AiFillCloseCircle />
                            </button>
                          </td>
                        </tr>
                      )))
                }
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Orders;
