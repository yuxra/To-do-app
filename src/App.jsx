import React, { Component } from 'react';


class App extends Component {
  render() { 
    return (
      <div className="container">
        <section id="judul">
          <p className="text-center fs-3 fw-bold mt-3">My To Do List</p>
        </section>

        <section id="input">
          <div className="row justify-content-center align-item-center mb-3">
            <div className="col-8">
              <input type="text" className="form-control" placeholder='Masukkan Tugas Baru'/>
            </div>
            <div className="col-auto">
              <button className="btn btn-primary" type="submit">Tambah</button>
            </div>
          </div>
        </section>
      </div>
      );
  }
}
 
export default App;
