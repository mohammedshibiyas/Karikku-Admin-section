import React, { useState } from 'react'
import './Brand.scss'
import Sidebar from '../../Common/SideBar/Sidebar'
import Navbar from '../../Common/Navbar/Navbar'
import { CiSearch } from "react-icons/ci";
import AddBrandModal from '../../Themes/AddBrandModal/AddBrandModal';

const Brand = () => {

    const [searchTerm, setSearchTerm] = useState('');
    const [currentPage, setCurrentPage] = useState(1);
    const [isModalOpen, setIsModalOpen] = useState(false); // Modal state

    const itemsPerPage = 10;


    const [brandsData, setBrandsData] = useState([ // Make brandsData stateful
        { id: 1, name: 'Karikku', brandId: 'Karikku2134', createdTime: '13/05/2025', totalProducts: 26 },
        { id: 2, name: 'Karikku', brandId: 'Karikku2134', createdTime: '13/05/2025', totalProducts: 26 },
        { id: 3, name: 'Karikku', brandId: 'Karikku2134', createdTime: '13/05/2025', totalProducts: 26 },
        { id: 4, name: 'Karikku', brandId: 'Karikku2134', createdTime: '13/05/2025', totalProducts: 26 },
        { id: 5, name: 'Karikku', brandId: 'Karikku2134', createdTime: '13/05/2025', totalProducts: 30 },
        { id: 6, name: 'Karikku', brandId: 'Karikku2134', createdTime: '13/05/2025', totalProducts: 26 },
        { id: 7, name: 'Karikku', brandId: 'Karikku2134', createdTime: '13/05/2025', totalProducts: 26 },
        { id: 8, name: 'Karikku', brandId: 'Karikku2134', createdTime: '13/05/2025', totalProducts: 26 },
        { id: 9, name: 'Karikku', brandId: 'Karikku2134', createdTime: '13/05/2025', totalProducts: 26 },
        { id: 10, name: 'Karikku', brandId: 'Karikku2134', createdTime: '13/05/2025', totalProducts: 26 },
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
        <div className='NewproductWrapper'>
            <div className="container-fluid">
                <div className="row">

                    <div className="col-lg-3"><Sidebar /></div>

                    <div className="col-lg-9">

                        <div className="navbar-main">
                            <Navbar />
                        </div>

                        <div className="head-section-stokes">

                            <h5 className='Brands'>
                                Brands
                            </h5>

                            <div className="head-sub-part-main">
                                <div className="head-sub">
                                    <p>
                                        Total Brands
                                    </p>

                                    <p className='price'>
                                        {brandsData.length}

                                    </p>

                                </div>

                                <div className="head-sub">
                                    <p>
                                        Blocked
                                    </p>

                                    <p className='price'>
                                        868
                                    </p>

                                </div>
                            </div>
                        </div>


                        <div className="brands-table-section">
                            <div className="table-header">
                                <h3>Brands </h3>

                                <div className="search-section">

                                    <CiSearch />

                                    <input
                                        type="text"
                                        placeholder="Search Brand"
                                        className="search-input"
                                        vikkue={searchTerm}
                                        onChange={(e) => setSearchTerm(e.target.value)}
                                    />





                                </div>
                                <div className="table-actions">
                                    <button className="add-brand-btn" onClick={handleOpenModal}>Add Brand</button>
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
                                            <th>Sl.No.</th>
                                            <th>Brand Name</th>
                                            <th>Brand Id</th>
                                            <th>Created Time</th>
                                            <th>Total Products</th>
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
                        <AddBrandModal
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

export default Brand
