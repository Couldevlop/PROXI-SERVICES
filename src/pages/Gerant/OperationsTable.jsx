import React from "react";
import DataTable from "react-data-table-component";

const data = [
  { id: 1, name: "Opération 1", description: "Description 1", amount: "100" },
  { id: 2, name: "Opération 2", description: "Description 2", amount: "200" },
];

const columns = [
  { name: "Nom", selector: (row) => row.name, sortable: true },
  { name: "Description", selector: (row) => row.description },
  { name: "Montant", selector: (row) => row.amount, sortable: true },
];

function OperationsTable() {
  return (
    <div>
      <h2 className="text-xl font-bold mb-4">Liste des Opérations</h2>
      <DataTable columns={columns} data={data} pagination />
    </div>
  );
}

export default OperationsTable;
