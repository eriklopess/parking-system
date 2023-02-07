import React from 'react';
import { AiFillPlusCircle } from 'react-icons/ai';
import { useDispatch, useSelector } from 'react-redux';
import Sidebar from '../../components/Sidebar';
import { Car } from '../../interfaces/Car';
import { Lot } from '../../interfaces/Lot';
import { RootState } from '../../redux';
import {
  addLot, removeLot, freeLot, occupyLot,
} from '../../redux/Lots.store';

function Parking() {
  const [isOpen, setIsOpen] = React.useState<boolean>(false);
  const [getLot, setGetLot] = React.useState<number>();
  const [getCar, setGetCar] = React.useState<Car>();

  const lots = useSelector<RootState>((state) => state.lots) as Lot[];
  const cars = useSelector<RootState>((state) => state.car) as Car[];

  const dispatch = useDispatch();

  const handleDisoccupy = (number: number) => {
    dispatch(freeLot(number));
  };

  const handleOpen = (number: number) => {
    setIsOpen(true);
    setGetLot(number);
  };

  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const car = cars.find((carOfStore: Car) => carOfStore.plate === event.target.value);
    setGetCar(car);
  };

  const handleOccupy = () => {
    dispatch(occupyLot({
      number: getLot!,
      car: getCar! || cars[0],
    }));
    setIsOpen(false);
  };

  return (
    <div>
      <Sidebar />
      <div className="flex min-h-full flex-col content-center justify-center text-center font-mono text-3xl">
        <div className="flex flex-row flex-wrap h-screen justify-center items-center ml-72">
          <div className="flex flex-wrap flex-row w-full justify-center">
            {
              isOpen ? (
                <div className="flex flex-col text-center w-full">
                  <h2>{`Vaga: ${getLot}`}</h2>
                  <div className="flex flex-col w-full place-items-center">
                    {
                    cars.length === 0 ? (
                      <span className="text-xl font-bold">
                        Não há carros cadastrados
                      </span>
                    ) : (
                      (
                        <>
                          <select
                            onChange={
                      (event) => handleChange(event)
                    }
                            placeholder="Selecione um carro"
                            defaultValue={cars[0].plate}
                            className="flex w-4/6 content-center justify-center border border-gray-400 p-2 mt-5 mx-auto"
                          >
                            {
                          cars.map((car: Car) => (
                            !lots.find(
                              (lot: Lot) => lot.car?.plate === car.plate,
                            ) && (
                            <option value={car.plate}>
                              {`${car.brand}/${car.model}/${car.plate}`}
                            </option>
                            )
                          ))
                      }
                          </select>
                          <button
                            type="button"
                            onClick={
                      () => handleOccupy()
                    }
                            className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded mt-4 text-sm w-1/6"
                          >
                            Ocupar vaga
                          </button>
                        </>
                      )
                    )
                    }
                  </div>
                </div>
              ) : (
                <>
                  <div className="basis-full my-10">
                    <button
                      type="button"
                      onClick={() => dispatch(addLot())}
                      className="bg-green-500 hover:bg-green-700 text-white font-bold mt-4 text-l rounded-full"
                    >
                      <AiFillPlusCircle />
                    </button>
                  </div>

                  {lots.map((lot: Lot) => (
                    <div
                      className={
                    lot.isOccupied ? 'flex flex-row justify-center items-center border m-5 border-red-500 w-1/4 h-72 rounded'
                      : 'flex flex-row justify-center items-center border m-5 border-green-500 w-1/4 h-56 rounded'
                  }
                      key={lot.id}
                    >
                      {
                      lot.isOccupied && lot.car ? (
                        <div className="flex flex-col text-left">
                          <div className="flex flex-col">
                            <span className="text-xl font-bold" />
                            <span className="text-xl font-bold">
                              Marca:
                              {lot.car.brand}
                            </span>
                          </div>
                          <div className="flex flex-col">
                            <span className="text-xl font-bold">
                              Modelo:
                              {lot.car.model}
                            </span>
                            <span className="text-xl font-bold">
                              Cor:
                              {lot.car.color}
                            </span>
                          </div>
                          <div className="flex flex-row">
                            <span className="text-xl font-bold">
                              Placa:
                              {lot.car.plate}
                            </span>
                          </div>
                          <button
                            type="button"
                            className="
                            bg-red-500
                            hover:bg-red-700
                            text-white
                            font-bold
                            py-2
                            px-4
                            rounded
                            mt-4
                            text-sm
                          "
                            onClick={() => handleDisoccupy(lot.number)}
                          >
                            Liberar vaga
                          </button>
                        </div>
                      )
                        : (
                          <div className="flex flex-col text-left">
                            Vaga:
                            {lot.number}
                            <button type="button" onClick={() => handleOpen(lot.number)} className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded mt-4 text-sm">
                              Ocupar vaga
                            </button>
                            <button
                              type="button"
                              onClick={
                                () => dispatch(removeLot(lot.number))
                            }
                              className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded mt-4 text-sm"
                            >
                              Desabilitar vaga
                            </button>
                          </div>
                        )
                    }
                    </div>
                  ))}
                </>
              )
            }
          </div>
        </div>
      </div>
    </div>
  );
}

export default Parking;
