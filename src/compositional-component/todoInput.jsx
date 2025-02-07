import React from 'react'

function TodoInput({daftarTodoList, setDaftarTodoList, tugasBaru, setTugasBaru}) {

    const handleTambahTugas = (e)=>{
        e.preventDefault();

        setDaftarTodoList([
            {id: Date.now(), namaTugas: tugasBaru, checked:false}
        ]);
    }

    const handleChange = (e)=>{
        setTugasBaru(e.target.value);
    }

    return (
        <section id="input">
        <div className="row justify-content-center align-item-center mb-3">
          <div className="col-8">
            <input 
            type="text"
            className="form-control" 
            placeholder="Masukkan Tugas Baru" 
            onChange={handleChange}
            />
          </div>
          <div className="col-auto">
            <button className="btn btn-primary" 
            onClick={handleTambahTugas}
            >
              Tambah
            </button>
          </div>
        </div>
      </section>

    )
}

export default TodoInput