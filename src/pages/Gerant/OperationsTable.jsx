import React, { useState } from "react";
import DataTable from "react-data-table-component";
import OperationsForm from "./OperationsForm";

const OperationsTable = () => {
  const [operations, setOperations] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const columns = [
    { name: "Nom", selector: (row) => row.name, sortable: true },
    { name: "Prénom", selector: (row) => row.lastname, sortable: true },
    { name: "Contact", selector: (row) => row.contact, sortable: true },
    {
      name: "Type de Client",
      selector: (row) => row.clientType,
      sortable: true,
    },
    {
      name: "Commentaires",
      selector: (row) =>
        row.comments
          .map(
            (comment) =>
              `${comment.type},${comment.prix} (${comment.quantity} pièces, ${comment.color}) - ${comment.description}`
          )
          .join(", "),
    },
  ];

  const handleAddOperation = (newOperation) => {
    setOperations([...operations, newOperation]);
    setIsModalOpen(false); // Ferme la modale après l'ajout
  };

  return (
    <div className="p-4">
      <h2 className="text-xl font-bold mb-4">Liste des Opérations</h2>
      {/* Bouton Ajouter */}
      <button
        onClick={() => setIsModalOpen(true)}
        className="bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700 mb-4"
      >
        Ajouter
      </button>

      {/* Tableau */}
      <DataTable
        columns={columns}
        data={operations}
        pagination
        highlightOnHover
        persistTableHead
      />

      {/* Modale pour le formulaire */}
      {isModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div className="bg-white p-6 rounded shadow-lg w-full max-w-6xl relative">
            <button
              onClick={() => setIsModalOpen(false)}
              className="absolute top-2 right-2 text-gray-500 hover:text-gray-800 text-2xl font-bold"
            >
              &times;
            </button>
            <OperationsForm onAddOperation={handleAddOperation} />
          </div>
        </div>
      )}
    </div>
  );
};

export default OperationsTable;
