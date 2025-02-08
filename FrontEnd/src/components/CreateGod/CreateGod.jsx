import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { create } from '../../features/gods/godSlice';
import { useNavigate } from 'react-router-dom';

const CreateGod = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const initialState = {
        name: "",
        superpower: "",
        humility_score: ""
    };
    
    const [formData, setFormData] = useState(initialState);
    const [error, setError] = useState("");

    const { name, superpower, humility_score } = formData;

    const onChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const onSubmit = (e) => {
        e.preventDefault();

        const humility = Number(humility_score);
        if (isNaN(humility) || humility < 1 || humility > 10) {
            setError("Humility score must be between 1 and 10");
            return;
        }

        setError("");
        console.log("Form submitted:", formData);

        // Aquí puedes hacer una petición a la API con formData
        dispatch(create(formData))
        navigate("/getAll")
        setFormData(initialState);
    };

    return (
        <div className='return container d-block'>
            <h2 className="mb-4">Add a new God</h2>

            <form onSubmit={onSubmit}>
                <div className="mb-3">
                    <label htmlFor="name" className="form-label">Name</label>
                    <input type="text" className="form-control" id="name" name='name' placeholder="Name..." required value={name} onChange={onChange} />
                </div>

                <div className="mb-3">
                    <label htmlFor="superpower" className="form-label">Superpower</label>
                    <input type="text" className="form-control" name='superpower' id="superpower" placeholder="Superpower..." onChange={onChange} required value={superpower} />
                </div>

                <div className="mb-3">
                    <label htmlFor="humilityScore" className="form-label">Humility</label>
                    <input type="number" className="form-control" name='humility_score' value={humility_score} onChange={onChange} id="humilityScore" placeholder="Humility..." required min={1} max={10} />
                    {error && <div className="text-danger mt-2">{error}</div>}
                </div>

                <button type="submit" className="btn btn-primary bSubmit">New God</button>
            </form>
        </div>
    );
}

export default CreateGod;
