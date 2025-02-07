import React, { useState } from 'react';
import { FaTrashCan } from 'react-icons/fa6';


function TodoApp() {

  const [tugasBaru, setTugasBaru] = useState("");
  const [daftarTugas, setDaftarTugas] = useState([]);

  const handleChange = (e) => {
    setTugasBaru(e.target.value);
    console.log(tugasBaru);
  }

  const handleTambahTugas = () => {
    const updateTugasBaru = [
      ...daftarTugas, 
      { id: Date.now(), namaTugas: tugasBaru, checked: false },
    ];

    tugasBaru.length > 0 ? (setDaftarTugas(updateTugasBaru), setTugasBaru("")) : alert("Tugas Harus Diisi");

    // if (tugasBaru.length >0) {
    //   setDaftarTugas(updateTugasBaru);
    //   setTugasBaru("");
    //   console.log(updateTugasBaru);      
    // } else {
    //   alert("Tugas Harus Diisi");
    // }
  };


  return (
    <div className="container">
      <section id="judul">
        <p className="text-center fs-3 fw-bold mt-3">My To Do List</p>
      </section>

      <section id="input">
        <div className="row justify-content-center align-item-center mb-3">
          <div className="col-8">
            <input 
            type="text"
            className="form-control" 
            placeholder="Masukkan Tugas Baru" 
            value={tugasBaru} 
            onChange={(e) => {
              setTugasBaru(e.target.value)
            }} />
          </div>
          <div className="col-auto">
            <button className="btn btn-primary" 
            onClick={handleTambahTugas}>
              Tambah
            </button>
          </div>
        </div>
      </section>

      <section id="list">
        {daftarTugas.map((tugas)=>{
            return(
              <div className="row" key={tugas.id}>
                <div className="col-8 d-flex align-item-center ms-5">
                  <input type="checkbox" className="form-check-input" 
                  onChange={()=>{
                    setDaftarTugas(
                      daftarTugas.map((item)=>
                        tugas.id === item.id ?
                          {...item, checked: !item.checked} : item
                      )
                    )
                  }}
                  />
                  <label className={`${tugas.checked && "done" } ms-2`}>{tugas.namaTugas}</label>
                </div>
                <div className="col-2 text-center p-0">
                  <button className="btn">
                    <FaTrashCan/>
                  </button>
                </div>
              </div>
            )
          })}
      </section>
      <section id="hide">
        {daftarTugas.length > 0 ? (
          <div className="mb-3 ms-5">
            <input type="checkbox" className="form-check-input" />
            <label className="ms-2">Sembunyikan Tugas Selesai</label>
          </div>
        ) : null}
      </section>

    </div>
  );
}

export default TodoApp;