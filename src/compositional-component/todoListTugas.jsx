import React from 'react';
import { FaTrashCan } from 'react-icons/fa6';

function TodoListTugas({
    daftarTodoList,
    isSembunyikanTugasChecked,
    setDaftarTodoList,
}) {
    const handleDeleteTugas = (id) => {
        setDaftarTodoList(daftarTodoList.filter((tugas) => tugas.id !== id));
    };

    const handleUpdateTugasSelesai = (id) => {
        setDaftarTodoList(
            daftarTodoList.map((tugas) =>
                tugas.id === id ? { ...tugas, checked: !tugas.checked } : tugas
            )
        );
    };

    return (
        <section id="list">
            {daftarTodoList.map((tugas) => {
                return (
                    <div
                        className="row"
                        key={tugas.id}
                        style={{
                            display: isSembunyikanTugasChecked && tugas.checked ? 'none' : '',
                        }}
                    >
                        <div className="col-8 d-flex align-items-center ms-5">
                            <input
                                type="checkbox"
                                className="form-check-input"
                                checked={tugas.checked}
                                onChange={() => handleUpdateTugasSelesai(tugas.id)}
                            />
                            <label className={`ms-2 ${tugas.checked ? 'done' : ''}`}>
                                {tugas.namaTugas}
                            </label>
                        </div>

                        <div className="col-2 text-center p-0">
                            <button
                                className="btn"
                                onClick={() => handleDeleteTugas(tugas.id)}
                            >
                                <FaTrashCan />
                            </button>
                        </div>
                    </div>
                );
            })}
        </section>
    );
}

export default TodoListTugas;
