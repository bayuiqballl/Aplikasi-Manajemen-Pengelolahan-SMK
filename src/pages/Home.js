import React from "react";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";

const Home = (props) => {
  return (
    <>
      <div className="jumbotron jumbotron-fluid">
        <div className="container">
          <h1 className="display-4">Selamat Datang</h1>
          <p className="lead">
            Ini merupakan halaman awal Aplikasi Manajemen Pengelolahan SMK
          </p>
        </div>
      </div>
      <div className="container">
        <div className="row  d-flex justify-content-center mt-5 ">
          <CardHome props={props} />
          <CardHome1 props={props} />
          <CardHome2 props={props} />
        </div>
      </div>
    </>
  );
};

const CardHome = (props) => {
  return (
    <div className="col-md-4 my-5">
      <div className="card bg-light mb-3">
        <div className="card-header">Jumlah Siswa </div>
        <div className="card-body">
          <h5 className="card-title">Total :</h5>
        </div>
      </div>
    </div>
  );
};

const CardHome1 = (props) => {
  console.log(props);
  return (
    <div className="col-md-4 my-5">
      <div className="card bg-light mb-3">
        <div className="card-header">Jumlah Guru </div>
        <div className="card-body">
          <h5 className="card-title">Total : {props.guru}</h5>
        </div>
      </div>
    </div>
  );
};

const CardHome2 = (props) => {
  return (
    <div className="col-md-4 my-5">
      <div className="card bg-light mb-3">
        <div className="card-header">Jumlah Staff </div>
        <div className="card-body">
          <h5 className="card-title">Total :</h5>
        </div>
      </div>
    </div>
  );
};

const mapStateToString = (props) => {
  return {
    guru: props.guruReducer.data.length,
  };
};

export default connect(mapStateToString, null)(Home);
