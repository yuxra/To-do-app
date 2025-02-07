import React from 'react';

function TodoHideList({ 
    isSembunyikanTugasChecked, 
    setIsSembunyikanTugasChecked 
}) {
    const handleChange = () => {
        setIsSembunyikanTugasChecked((prev) => !prev);
    };

    return (
        <div className="mb-3 ms-5">
            <input
                type="checkbox"
                className="form-check-input"
                checked={isSembunyikanTugasChecked}
                onChange={handleChange}
            />
            <label className="ms-2">Sembunyikan Tugas Selesai</label>
        </div>
    );
}

export default TodoHideList;
