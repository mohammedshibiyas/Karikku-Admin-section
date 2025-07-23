import React, { useState } from 'react';
import './AddBrandModal.scss';

const AddBrandModal = ({ isOpen, onClose, onAddBrand }) => {
  const [brandName, setBrandName] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (brandName.trim()) {
      onAddBrand(brandName.trim());
      setBrandName('');
      onClose();
    }
  };

  const handleCancel = () => {
    setBrandName('');
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <h3 className="modal-title">Add Brand</h3>
        
        <form onSubmit={handleSubmit} className="modal-form">
          <div className="form-group">
            <input
              type="text"
              placeholder="Brand"
              value={brandName}
              onChange={(e) => setBrandName(e.target.value)}
              className="brand-input"
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
              disabled={!brandName.trim()}
            >
              Add
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddBrandModal;