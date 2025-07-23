import React, { useState } from 'react';
import './AddWarehouseModal.scss'

const AddWarehouseModal = ({ isOpen, onClose, onAddWarehouse }) => {
    const [warehouseName, setWarehouseName] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (warehouseName.trim()) {
            onAddWarehouse(warehouseName.trim());
            setWarehouseName('');
            onClose();
        }
    };

    const handleCancel = () => {
        setWarehouseName('');
        onClose();
    };

    if (!isOpen) return null;

    return (
        <div className="modal-overlay">
            <div className="modal-content">
                <h3 className="modal-title">Add Warehouse</h3>

                <form onSubmit={handleSubmit} className="modal-form">
                    <div className="form-group">
                        <input
                            type="text"
                            placeholder="Warehouse"
                            value={warehouseName}
                            onChange={(e) => setWarehouseName(e.target.value)}
                            className="warehouse-input"
                            autoFocus
                        />
                    </div>

                    <div className="modal-actions">
                        <button
                            type="button"
                            onClick={handleCancel}
                            className="cancel-btn"
                        >
                            Cancel
                        </button>
                        <button
                            type="submit"
                            className="add-btn"
                            disabled={!warehouseName.trim()}
                        >
                            Add
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default AddWarehouseModal;
