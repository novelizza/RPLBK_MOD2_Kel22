import "./App.css";
import DataMahasiswa from "./component/data.js";
import Card from "./component/card.jsx";
import React from "react";

export default function App() {
  return (
    <div
      style={{
        display: "flex",
        "flex-wrap": "wrap",
        "flex-direction": "column",
        "align-content": "center",
      }}
    >
      <h2 style={{ "align-self": "center" }}>Kelompok 22:</h2>
      <input
        onChange={(data) => findData(data.target.value)}
        placeholder="Masukkan Nim Mahasiswa..."
        style={{ width: 400 }}
      />
      <br />
      {data.length !== 0 ? (
        data.map((mahasiswa, i) => {
          return <Card key={i} data={mahasiswa} i={i} />;
        })
      ) : state ? (
        <h2 style={{ "align-self": "center" }}>Data Tidak Ditemukan</h2>
      ) : (
        ""
      )}
    </div>
  );
}
