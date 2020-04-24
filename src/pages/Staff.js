import React, { useState, useEffect } from "react";
import Form from "react-bootstrap/Form";
import { connect } from "react-redux";
import Table from "react-bootstrap/Table";
import { staffShow, addStaff, deleteStaff } from "../actions/StaffAction";

const Staff = (props) => {
  const [staff, setStaff] = useState("");
  const [nama, setNama] = useState("");
  const [nip, setNip] = useState("");
  const [ahli, setAhli] = useState("");

  useEffect(() => {
    props.staffShow();
  }, []);
  // console.log(props);

  const handleChangeNama = (e) => {
    setNama(e.target.value);
  };

  const handleChangeNip = (e) => {
    setNip(e.target.value);
  };

  const handleChangeAhli = (e) => {
    setAhli(e.target.value);
  };

  const handleAdd = (e) => {
    e.preventDefault();
    let newStaff = {
      id: props.staff[props.staff.length - 1] + 1,
      nama: nama,
      nip: nip,
      ahli: ahli,
    };
    props.addStaff(newStaff);
  };

  const handleDelete = (id) => {
    props.deleteStaff(id);
  };

  return (
    <div className="container mt-5">
      <h1>Data Staff SMK </h1>
      <form className="row mt-5">
        <div className="col">
          <input value={nama} placeholder="Nama" onChange={handleChangeNama} />
        </div>
        <div className="col">
          <input value={nip} placeholder="NIP" onChange={handleChangeNip} />
        </div>
        <div className="col">
          <input value={ahli} placeholder="Ahli" onChange={handleChangeAhli} />
        </div>
        <button onClick={handleAdd}>Add Data</button>
      </form>

      <Table className="mt-5 mb-5" striped bordered hover>
        <thead>
          <tr>
            <th>#</th>
            <th>Nama</th>
            <th>NIP</th>
            <th>Ahli</th>
            <th>Aksi</th>
          </tr>
        </thead>
        <tbody>
          {props.staff.map((item, index = 1) => (
            <tr>
              <td>{index + 1}</td>
              <td>{item.nama}</td>
              <td>{item.nip}</td>
              <td>{item.ahli}</td>
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
    staff: props.staffReducer.data,
  };
};

const mapDispatchToProps = { staffShow, addStaff, deleteStaff };

export default connect(mapStateToProps, mapDispatchToProps)(Staff);
