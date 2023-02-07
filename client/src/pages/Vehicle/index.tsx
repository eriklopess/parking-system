import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  AiOutlineCloseCircle, AiOutlinePlusCircle,
} from 'react-icons/ai';
import Sidebar from '../../components/Sidebar';
import { Car } from '../../interfaces/Car';
import { addCar, removeCar } from '../../redux/Car.store';
import { RootState } from '../../redux';
import { Lot } from '../../interfaces/Lot';
import { occupyLot } from '../../redux/Lots.store';
import { addOrder, Order } from '../../redux/Orders.store';

function Vehicle() {
  const [isOpen, setIsOpen] = React.useState(false);
  const cars = useSelector<RootState>((state: RootState) => state.car) as Car[];
  const lots = useSelector<RootState>((state: RootState) => state.lots) as Lot[];
  const orders = useSelector<RootState>((state: RootState) => state.orders) as Order[];
  const getFirstLotWithoutCar = lots.indexOf(
    lots.find((lot: Lot) => lot.car === undefined) as Lot,
  ) + 1;
  const [getLot, setGetLot] = React.useState<number>(getFirstLotWithoutCar);

  const [getForm, setGetForm] = React.useState<Car>({
    brand: '',
    model: '',
    color: '',
    plate: '',
  });

  const handlerOpen = () => setIsOpen(!isOpen);
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setGetForm({
      ...getForm,
      [event.target.name]: event.target.value,
    });
  };
  const dispatch = useDispatch();
  const handleSubmit = () => {
    dispatch(addCar(getForm));
    dispatch(occupyLot({ number: getLot, car: getForm }));
    dispatch(addOrder({ lot: getLot, car: getForm }));
    setIsOpen(false);
    const updateDefaultLot = lots.indexOf(
      lots.find((lot: Lot) => lot.car === undefined) as Lot,
    ) + 1 || 0;
    setGetLot(updateDefaultLot);
  };
  const handleRemove = (plate: string) => {
    dispatch(removeCar(plate));
  };

  return (
    <main className="flex flex-col min-h-screen h-screen">
      <Sidebar />
      <div className="flex min-h-full flex-col content-center justify-center text-center font-mono text-3xl">
        <div className="flex flex-row flex-wrap h-screen justify-center items-center ml-72 ">
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
                        <input type="text" name="brand" onChange={handleChange} placeholder="Marca" className="border border-black  p-2 m-1 w-full" />
                        <input type="text" name="model" onChange={handleChange} placeholder="Modelo" className="border border-black  p-2 m-1 w-full" />
                        <input type="text" name="plate" onChange={handleChange} placeholder="Placa" className="border border-black  p-2 m-1 w-full" />
                        <input type="text" name="color" onChange={handleChange} placeholder="Cor" className="border border-black  p-2 m-1 w-full" />
                        <select
                          onChange={
                          (event) => {
                            setGetLot(Number(event.target.value));
                          }
                        }
                          className="border border-black  p-2 m-1 w-full"
                        >
                          {
                                lots.map((lot) => (
                                  lot.car === undefined && (
                                  <option value={lot.number}>
                                    {`Vaga: ${lot.number}`}
                                  </option>
                                  )
                                ))
                            }
                        </select>
                        <button type="button" onClick={() => handleSubmit()} className="text-xl flex items-center border border-black  p-2 w-full justify-center">
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
                  <div className="my-20">
                    <button type="button" onClick={handlerOpen} className="flex content-center items-center justify-center p-1 text-xl h-10">
                      <span className="mr-2 text-2xl">
                        <AiOutlinePlusCircle />
                      </span>
                      Adicionar Carro
                    </button>
                    <table className="w-full text-lg rounded-lg">
                      <thead className="">
                        <tr className="border border-black ">
                          {
                            ['Marca', 'Modelo', 'Placa', 'Cor', 'Vaga', 'Entrada', 'Remover'].map((item) => (
                              <th className="border border-black p-2 px-4 text-center">{item}</th>
                            ))
                          }
                        </tr>
                      </thead>
                      <tbody>
                        {
                            cars.map((car) => (
                              <tr>
                                <td className="border border-black p-2 px-4 text-center">{car.brand}</td>
                                <td className="border border-black p-2 px-4 text-center">{car.model}</td>
                                <td className="border border-black p-2 px-4 text-center">{car.plate}</td>
                                <td className="border border-black p-2 px-4 text-center">{car.color}</td>
                                <td className="border border-black p-2 px-4 text-center">
                                  {
                                    lots.map((lot) => {
                                      if (!lot.car) return null;
                                      if (lot.car.plate === car.plate) {
                                        return `Vaga: ${lot.number}`;
                                      }
                                      return null;
                                    })
                                  }
                                </td>
                                <td className="border border-black p-2 px-4 text-center">
                                  {
                                    orders.map((order) => {
                                      if (order.car.plate === car.plate) {
                                        return order.entry.toLocaleTimeString();
                                      }
                                      return null;
                                    })
                                }
                                </td>
                                <td className="border border-black p-2 px-4 text-center">
                                  <button type="button" onClick={() => handleRemove(car.plate)} className="flex content-center items-center justify-center p-1 h-10 text-lg">
                                    <AiOutlineCloseCircle />
                                  </button>
                                </td>
                              </tr>
                            ))
                          }
                      </tbody>
                    </table>
                  </div>
                )
            }
          </div>
        </div>
      </div>
    </main>
  );
}

export default Vehicle;
