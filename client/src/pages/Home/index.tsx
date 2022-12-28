import React from 'react';
import Header from '../../components/Header';

export default function Home(): JSX.Element {
  return (
    <main className="flex flex-col min-h-screen h-screen overflow-hidden">
      <Header />
      <div className="flex min-h-full flex-col content-center justify-center text-center font-mono text-3xl p-5">
        <h1 className="font-bold text-6xl mt-4 text-center mb-10">Gerenciador de Estacionamento</h1>
        <p>
          Seja bem vindo ao meu projeto de estacionamento,
          aqui você pode gerenciar seus veículos e seus clientes,
          para começar, entre na Área do Cliente.
        </p>
      </div>
    </main>
  );
}
