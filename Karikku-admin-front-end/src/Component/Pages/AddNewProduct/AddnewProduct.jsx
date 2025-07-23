import React from 'react'
import './AddnewProduct.scss'
import Sidebar from '../../Common/SideBar/Sidebar'
import Navbar from '../../Common/Navbar/Navbar'

const AddnewProduct = ({ onClose }) => {
    return (
        <div className='NewproductWrapper'>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-lg-3"><Sidebar /></div>
                    <div className="col-lg-9">
                        <div className="navbar-main">
                            <Navbar />

                            <div className="new-product-form">
                                <div className="head-section">
                                    <h3>New Product</h3>
                                </div>
                                <div className="add-rating-image-section">
                                    <div className="selected-image-wrapper">
                                        <div className="file-upload">
                                            <input
                                                type="file"
                                                id="file"
                                                className="file-input"
                                                multiple
                                                accept="image/*"
                                            />
                                            <label htmlFor="file" className="file-label">
                                                <span className="plus-sign">Add Image</span>
                                            </label>
                                        </div>
                                        <div className="selected-image">
                                            <img src='/Images/Thara-login-logo.svg' />
                                        </div>
                                    </div>
                                </div>
                                <div className="prod-name">
                                    <input type="text" placeholder='Enter product name' />
                                </div>
                                <div className="prod-name">
                                    <textarea name="" id="" placeholder='Enter product description' rows={4}></textarea>
                                </div>
                                <div className="row">
                                    <div className="col-lg-4">
                                        <div className="prod-name">
                                            <input type="text" placeholder='MRP Rate*' required />
                                        </div>
                                    </div>
                                    <div className="col-lg-4">
                                        <div className="prod-name">
                                            <input type="text" placeholder='Unit Price*' required />
                                        </div>
                                    </div>
                                    <div className="col-lg-4">
                                        <div className="prod-name">
                                            <input type="text" placeholder='Tax*' required />
                                        </div>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-lg-4">
                                        <div className="prod-name">
                                            <input type="text" placeholder='Select Category' required />
                                        </div>
                                    </div>
                                    <div className="col-lg-4">
                                        <div className="prod-name">
                                            <input type="text" placeholder='Select brand' required />
                                        </div>
                                    </div>
                                    <div className="col-lg-4">
                                        <div className="prod-name">
                                            <input type="text" placeholder='weight (in grams)*' required />
                                        </div>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-lg-6">
                                        <div className="prod-name">
                                            <input type="text" placeholder='UOM *' required />
                                        </div>
                                    </div>
                                    <div className="col-lg-6">
                                        <div className="prod-name">
                                            <select name="" id="">
                                                <option value="" selected > Alternative Unit</option>
                                                <option value="1" >op1</option>
                                                <option value="2" >op2</option>
                                                <option value="3" >op3</option>
                                            </select>
                                        </div>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-lg-6">
                                         <div className="prod-name">
                                            <input type="text" placeholder='Alternative unit Count' required />
                                        </div>
                                    </div>
                                      <div className="col-lg-6">
                                         <div className="prod-name">
                                            <input type="text" placeholder='Conversion Factor:' required />
                                        </div>
                                    </div>
                                </div>
                                 <div className="row">
                                    <div className="col-lg-6">
                                         <div className="prod-name">
                                            <input type="text" placeholder='Barcode' required />
                                        </div>
                                    </div>
                                      <div className="col-lg-6">
                                         <div className="prod-name">
                                            <input type="text" placeholder='SKU code*' required />
                                        </div>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-lg-6">
                                         <div className="prod-name">
                                            <input type="text" placeholder='HSN Code*' required />
                                        </div>
                                    </div>
                                      <div className="col-lg-6">
                                         <div className="prod-name">
                                            <input type="text" placeholder='Product Code*' required />
                                        </div>
                                    </div>
                                </div>
                                <div className="buttons">
                                    <button className='close-btn' onClick={onClose}>close</button>
                                    <button className='submit'>Submit</button>
                                </div>
                                
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AddnewProduct
