import React from 'react';
import Sidebar from '../components/Sidebar';
import EtiquetasHeader from '../components/EtiquetasHeader';
import CreateEtiquetaForm from '../components/CreateEtiquetaForm';
import EtiquetasTable from '../components/EtiquetasTable';

const Etiquetas = () => {
  return (
    <div className="flex h-screen bg-gray-50">
      <Sidebar />
      <div className="flex-1 flex flex-col overflow-hidden">
        <header className="px-6 py-4">
          <EtiquetasHeader />
        </header>
        <main className="flex-1 overflow-y-auto p-6">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <div className="lg:col-span-1">
              <CreateEtiquetaForm />
            </div>
            <div className="lg:col-span-2">
              <EtiquetasTable />
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Etiquetas;
