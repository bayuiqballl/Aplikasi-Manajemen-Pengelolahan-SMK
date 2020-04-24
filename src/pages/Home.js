import React from "react";

const Home = () => {
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
          <CardHome />
          <CardHome1 />
          <CardHome2 />
        </div>
      </div>
    </>
  );
};

const CardHome = () => {
  return (
    <div className="col-md-4 my-5">
      <div className="card bg-light mb-3">
        <div className="card-header">Jumlah Siswa </div>
        <div className="card-body">
          <h5 className="card-title"></h5>
        </div>
      </div>
    </div>
  );
};

const CardHome1 = () => {
  return (
    <div className="col-md-4 my-5">
      <div className="card bg-light mb-3">
        <div className="card-header">Jumlah Guru </div>
        <div className="card-body">
          <h5 className="card-title"></h5>
        </div>
      </div>
    </div>
  );
};

const CardHome2 = () => {
  return (
    <div className="col-md-4 my-5">
      <div className="card bg-light mb-3">
        <div className="card-header">Jumlah Staff </div>
        <div className="card-body">
          <h5 className="card-title"></h5>
        </div>
      </div>
    </div>
  );
};

export default Home;
