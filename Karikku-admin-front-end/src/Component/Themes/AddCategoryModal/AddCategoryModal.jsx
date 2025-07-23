import React, { useState } from 'react'
import './AddCategoryModal.scss';

const AddCategoryModal = ({ isOpen, onClose, onAddCategory }) => {
  const [categoryName, setCategoryName] = useState('');
  const [hsnCode, setHsnCode] = useState('');
 
   const handleSubmit = (e) => {
     e.preventDefault();
     if (categoryName.trim()) {
       // Pass both category name and HSN code to parent component
       onAddCategory({
         name: categoryName.trim(),
         hsnCode: hsnCode.trim()
       });
       setCategoryName('');
       setHsnCode('');
       onClose();
     }
   };
 
   const handleCancel = () => {
     setCategoryName('');
     setHsnCode('');
     onClose();
   };
 
   if (!isOpen) return null;
 
   return (
     <div className="modal-overlay">
       <div className="modal-content">
         <h3 className="modal-title">Add Category</h3>
         
         <form onSubmit={handleSubmit} className="modal-form">
           <div className="form-group">
             <input
               type="text"
               placeholder="Category name"
               value={categoryName}
               onChange={(e) => setCategoryName(e.target.value)}
               className="brand-input"
               autoFocus
             />
           </div>
           <div className="form-group">
             <input
               type="text"
               placeholder="HSN Code"
               value={hsnCode}
               onChange={(e) => setHsnCode(e.target.value)}
               className="brand-input"
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
               disabled={!categoryName.trim()}
             >
               Add
             </button>
           </div>
         </form>
       </div>
     </div>
   );
}

export default AddCategoryModal