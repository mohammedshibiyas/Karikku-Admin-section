import React, { useState } from 'react'
import './WareHouse.scss'
import Sidebar from '../../Common/SideBar/Sidebar'
import Navbar from '../../Common/Navbar/Navbar'
import { CiSearch } from "react-icons/ci";
import AddWarehouseModal from '../../Themes/AddWarehouseModal/AddWarehouseModal';

const WareHouse = () => {

    const [searchTerm, setSearchTerm] = useState('');
    const [currentPage, setCurrentPage] = useState(1);  
    const [isModalOpen, setIsModalOpen] = useState(false); // Modal state

    const itemsPerPage = 10;


    const [brandsData, setBrandsData] = useState([ // Make brandsData stateful
        { id: 2134, name: 'Thara Industries', brandId: 'Chungham', createdTime: 'Perinthalmanna', State: 'Kerala', Contact: 'Ashvy', totalProducts: (9876543210) },
        { id: 2134, name: 'Thara Industries', brandId: 'Chungham', createdTime: 'Perinthalmanna', State: 'Kerala', Contact: 'Ashvy', totalProducts: (9876543210) },
        { id: 2134, name: 'Thara Industries', brandId: 'Chungham', createdTime: 'Perinthalmanna', State: 'Kerala', Contact: 'Ashvy', totalProducts: (9876543210) },
        { id: 2134, name: 'Thara Industries', brandId: 'Chungham', createdTime: 'Perinthalmanna', State: 'Kerala', Contact: 'Ashvy', totalProducts: (9876543210) },
        { id: 2134, name: 'Thara Industries', brandId: 'Chungham', createdTime: 'Perinthalmanna', State: 'Kerala', Contact: 'Ashvy', totalProducts: (9876543210) },
        { id: 2134, name: 'Thara Industries', brandId: 'Chungham', createdTime: 'Perinthalmanna', State: 'Kerala', Contact: 'Ashvy', totalProducts: (9876543210) },
        { id: 2134, name: 'Thara Industries', brandId: 'Chungham', createdTime: 'Perinthalmanna', State: 'Kerala', Contact: 'Ashvy', totalProducts: (9876543210) },


    ]);



    // Filter brands based on search term
    const filteredBrands = brandsData.filter(brand =>
        brand.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        brand.brandId.toLowerCase().includes(searchTerm.toLowerCase())
    );

    // Pagination logic
    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentItems = filteredBrands.slice(indexOfFirstItem, indexOfLastItem);
    const totalPages = Math.ceil(filteredBrands.length / itemsPerPage);

    const handlePageChange = (pageNumber) => {
        setCurrentPage(pageNumber);
    };



    // Modal handlers
    const handleOpenModal = () => {
        setIsModalOpen(true);
    };

    const handleCloseModal = () => {
        setIsModalOpen(false);
    };

    const handleAddBrand = (brandName) => {
        // Generate a new brand ID (you can implement your own logic)
        const newBrandId = `${brandName.replace(/\s+/g, '')}${Math.floor(Math.random() * 10000)}`;
        const currentDate = new Date().toLocaleDateString('en-GB');

        const newBrand = {
            id: brandsData.length + 1,
            name: brandName,
            brandId: newBrandId,
            createdTime: currentDate,
            totalProducts: 0
        };

        setBrandsData([...brandsData, newBrand]);
    };

    return (
        <div className='warehouseWrapper'>
            <div className="container-fluid">
                <div className="row">

                    <div className="col-lg-3">
                        <Sidebar />
                    </div>

                    <div className="col-lg-9">

                        <div className="navbar-main">
                            <Navbar />
                        </div>

                        <div className="head-section-stokes">

                            <h5 className='Brands'>
                                WareHouse List
                            </h5>

                            <div className="head-sub-part-main">
                                <div className="head-sub">
                                    <p>
                                        Warehouses
                                    </p>

                                    <p className='price'>
                                        {brandsData.length}

                                    </p>

                                </div>

                                <div className="head-sub">
                                    <p>
                                        Inactive
                                    </p>

                                    <p className='price'>
                                        868
                                    </p>

                                </div>
                            </div>
                        </div>




                        <div className="brands-table-section">
                            <div className="table-header">
                                <h3> Warehouse List </h3>

                                <div className="search-section">

                                    <CiSearch />

                                    <input
                                        type="text"
                                        placeholder="Search Warehouse"
                                        className="search-input"
                                        vikkue={searchTerm}
                                        onChange={(e) => setSearchTerm(e.target.value)}
                                    />





                                </div>
                                <div className="table-actions">
                                    <button className="add-brand-btn" onClick={handleOpenModal}>Add Warehouse</button>
                                    <button className="filters-btn">
                                        <span>Filters</span>
                                        <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                                            <path d="M3 4.5L6 7.5L9 4.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                        </svg>
                                    </button>
                                </div>
                            </div>

                            <div className="table-container">
                                <table className="brands-table" >
                                    <thead>
                                        <tr >
                                            <th>WID</th>
                                            <th>Warehouse Name</th>
                                            <th>Place</th>
                                            <th>City</th>
                                            <th>State</th>
                                            <th>Contact Person</th>
                                            <th>Mobile No</th>
                                            <th>Action</th>

                                        </tr>
                                    </thead>
                                    <tbody>
                                        {currentItems.map((brand, index) => (
                                            <tr key={brand.id}>
                                                <td>{indexOfFirstItem + index + 1}</td>
                                                <td>{brand.name}</td>
                                                <td>{brand.brandId}</td>
                                                <td>{brand.createdTime}</td>
                                                <td>{brand.State}</td>
                                                <td>{brand.Contact}</td>
                                                <td>{brand.totalProducts}</td>
                                                <td>
                                                    <div className="action-buttons">
                                                        <button className="edit-btn">Edit</button>
                                                        <button className="more-btn">⋮</button>
                                                    </div>
                                                </td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>

                            <div className="pagination-container">
                                <div className="pagination-info">
                                    <span>Page {currentPage} of {totalPages}</span>
                                </div>
                                <div className="pagination-controls">
                                    <button
                                        className="pagination-btn"
                                        onClick={() => handlePageChange(currentPage - 1)}
                                        disabled={currentPage === 1}
                                    >
                                        Previous
                                    </button>
                                    <button
                                        className="pagination-btn"
                                        onClick={() => handlePageChange(currentPage + 1)}
                                        disabled={currentPage === totalPages}
                                    >
                                        Next
                                    </button>
                                </div>
                            </div>
                        </div>

                        {/* Add Brand Modal */}
                        <AddWarehouseModal
                            isOpen={isModalOpen}
                            onClose={handleCloseModal}
                            onAddBrand={handleAddBrand}
                        />

                    </div>


                </div>
            </div>



        </div>
    )
}

export default WareHouse
