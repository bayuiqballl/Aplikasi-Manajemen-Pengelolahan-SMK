import React, { useState, useEffect } from "react";
import Form from "react-bootstrap/Form";
import { connect } from "react-redux";
import Table from "react-bootstrap/Table";
import { siswaShow, addSiswa, deleteSiswa } from "../actions/siswaAction";

const Siswa = (props) => {
  const [siswa, setSiswa] = useState("");
  const [nama, setNama] = useState("");
  const [nisn, setNisn] = useState("");
  const [kelas, setKelas] = useState("");

  useEffect(() => {
    props.siswaShow();
  }, []);
  // console.log(props);

  const handleChangeNama = (e) => {
    setNama(e.target.value);
  };

  const handleChangeNisn = (e) => {
    setNisn(e.target.value);
  };

  const handleChangeKelas = (e) => {
    setKelas(e.target.value);
  };

  const handleAdd = (e) => {
    e.preventDefault();
    let newSiswa = {
      id: props.siswa[props.siswa.length - 1] + 1,
      nama: nama,
      nisn: nisn,
      kelas: kelas,
    };
    props.addSiswa(newSiswa);
  };

  const handleDelete = (id) => {
    props.deleteSiswa(id);
  };

  return (
    <div className="container mt-5">
      <h1>Data Siswa SMK </h1>
      <form className="row mt-5">
        <div className="col">
          <input value={nama} placeholder="Nama" onChange={handleChangeNama} />
        </div>
        <div className="col">
          <input value={nisn} placeholder="NISN" onChange={handleChangeNisn} />
        </div>
        <div className="col">
          <input
            value={kelas}
            placeholder="Kelas"
            onChange={handleChangeKelas}
          />
        </div>
        <button onClick={handleAdd}>Add Data</button>
      </form>

      <Table className="mt-5 mb-5" striped bordered hover>
        <thead>
          <tr>
            <th>#</th>
            <th>Nama</th>
            <th>NISN</th>
            <th>Kelas</th>
            <th>Aksi</th>
          </tr>
        </thead>
        <tbody>
          {props.siswa.map((item, index = 1) => (
            <tr>
              <td>{index + 1}</td>
              <td>{item.nama}</td>
              <td>{item.nisn}</td>
              <td>{item.kelas}</td>
              <td>
                <button
                  onClick={() => {
                    handleDelete(item.id);
                  }}
                >
                  delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
};

const mapStateToProps = (props) => {
  return {
    siswa: props.siswaReducer.data,
  };
};

const mapDispatchToProps = { siswaShow, addSiswa, deleteSiswa };

export default connect(mapStateToProps, mapDispatchToProps)(Siswa);
