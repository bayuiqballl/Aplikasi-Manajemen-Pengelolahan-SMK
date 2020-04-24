import React from "react";
import Form from "react-bootstrap/Form";
function Siswa() {
  return (
    <div className="container mt-5">
      <h1>Data Siswa SMK </h1>
      <Form className="row mt-5">
        <div className="col">
          <Form.Control placeholder="Nama" />
        </div>
        <div className="col">
          <Form.Control placeholder="NISN" />
        </div>
        <div className="col">
          <Form.Control placeholder="Kelas" />
        </div>
        <button>Add Data</button>
      </Form>
    </div>
  );
}

export default Siswa;
