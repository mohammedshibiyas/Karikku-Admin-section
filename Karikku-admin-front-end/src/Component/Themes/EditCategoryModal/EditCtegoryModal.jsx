import React, { useState, useEffect } from 'react'
import './EditCategoryModal.scss'; // You can reuse AddCategoryModal.scss or create a new one

const EditCategoryModal = ({ isOpen, onClose, onEditCategory, categoryData }) => {
  const [categoryName, setCategoryName] = useState('');
  const [hsnCode, setHsnCode] = useState('');

  // Pre-fill the form when modal opens or categoryData changes
  useEffect(() => {
    if (categoryData) {
      setCategoryName(categoryData.name || '');
      setHsnCode(categoryData.HSNcode || '');
    }
  }, [categoryData]);
 
   const handleSubmit = (e) => {
     e.preventDefault();
     if (categoryName.trim()) {
       // Pass the updated category data to parent component
       onEditCategory({
         id: categoryData.id,
         name: categoryName.trim(),
         hsnCode: hsnCode.trim()
       });
       onClose();
     }
   };
 
   const handleCancel = () => {
     // Reset to original values
     setCategoryName(categoryData?.name || '');
     setHsnCode(categoryData?.HSNcode || '');
     onClose();
   };
 
   if (!isOpen) return null;
 
   return (
     <div className="modal-overlay">
       <div className="modal-content">
         <h3 className="modal-title">Edit Category</h3>
         
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
               Update
             </button>
           </div>
         </form>
       </div>
     </div>
   );
}

export default EditCategoryModal