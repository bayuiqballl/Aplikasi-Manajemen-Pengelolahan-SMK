import React, { useState, useEffect } from "react";
import Form from "react-bootstrap/Form";
import { connect } from "react-redux";
import Table from "react-bootstrap/Table";
import { guruShow, addGuru, deleteGuru } from "../actions/guruAction";

const Guru = (props) => {
  const [guru, setGuru] = useState("");
  const [nama, setNama] = useState("");
  const [nip, setNip] = useState("");
  const [mapel, setMapel] = useState("");

  useEffect(() => {
    props.guruShow();
  }, []);
  // console.log(props);

  const handleChangeNama = (e) => {
    setNama(e.target.value);
  };

  const handleChangeNip = (e) => {
    setNip(e.target.value);
  };

  const handleChangeMapel = (e) => {
    setMapel(e.target.value);
  };

  const handleAdd = (e) => {
    e.preventDefault();
    let newGuru = {
      id: props.guru[props.guru.length - 1] + 1,
      nama: nama,
      nip: nip,
      mapel: mapel,
    };
    props.addGuru(newGuru);
  };

  const handleDelete = (id) => {
    props.deleteGuru(id);
  };

  return (
    <div className="container mt-5">
      <h1>Data Guru SMK </h1>
      <form className="row mt-5">
        <div className="col">
          <input value={nama} placeholder="Nama" onChange={handleChangeNama} />
        </div>
        <div className="col">
          <input value={nip} placeholder="NIP" onChange={handleChangeNip} />
        </div>
        <div className="col">
          <input
            value={mapel}
            placeholder="Mata Pelajaran"
            onChange={handleChangeMapel}
          />
        </div>
        <button onClick={handleAdd}>Add Data</button>
      </form>

      <Table className="mt-5 mb-5" striped bordered hover>
        <thead>
          <tr>
            <th>#</th>
            <th>Nama</th>
            <th>NIP</th>
            <th>Mapel</th>
            <th>Aksi</th>
          </tr>
        </thead>
        <tbody>
          {props.guru.map((item, index = 1) => (
            <tr>
              <td>{index + 1}</td>
              <td>{item.nama}</td>
              <td>{item.nip}</td>
              <td>{item.mapel}</td>
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
    guru: props.guruReducer.data,
  };
};

const mapDispatchToProps = { guruShow, addGuru, deleteGuru };

export default connect(mapStateToProps, mapDispatchToProps)(Guru);
