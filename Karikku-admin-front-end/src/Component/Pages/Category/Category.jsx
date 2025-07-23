import React, { useState } from 'react'
import './Category.scss'
import Sidebar from '../../Common/SideBar/Sidebar'
import Navbar from '../../Common/Navbar/Navbar'
import { CiSearch } from "react-icons/ci";
import AddCategoryModal from '../../Themes/AddCategoryModal/AddCategoryModal';
import EditCategoryModal from '../../Themes/EditCategoryModal/EditCtegoryModal';

const Category = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [currentPage, setCurrentPage] = useState(1);
    const [isAddModalOpen, setIsAddModalOpen] = useState(false); // Add modal state
    const [isEditModalOpen, setIsEditModalOpen] = useState(false); // Edit modal state
    const [selectedCategory, setSelectedCategory] = useState(null); // Selected category for editing

    const itemsPerPage = 10;

    const [brandsData, setBrandsData] = useState([ // Make brandsData stateful
        { id: 1, name: 'Electronics', brandId: 'Electronics2134', HSNcode: '8517', createdTime: '13/05/2025', totalProducts: 26 },
        { id: 2, name: 'Clothing', brandId: 'Clothing2134', HSNcode: '6203', createdTime: '13/05/2025', totalProducts: 26 },
        { id: 3, name: 'Books', brandId: 'Books2134', HSNcode: '4901', createdTime: '13/05/2025', totalProducts: 26 },
        { id: 4, name: 'Furniture', brandId: 'Furniture2134', HSNcode: '9403', createdTime: '13/05/2025', totalProducts: 26 },
        { id: 5, name: 'Toys', brandId: 'Toys2134', HSNcode: '9503', createdTime: '13/05/2025', totalProducts: 30 },
        { id: 6, name: 'Sports', brandId: 'Sports2134', HSNcode: '9506', createdTime: '13/05/2025', totalProducts: 26 },
        { id: 7, name: 'Beauty', brandId: 'Beauty2134', HSNcode: '3304', createdTime: '13/05/2025', totalProducts: 26 },
        { id: 8, name: 'Home', brandId: 'Home2134', HSNcode: '9404', createdTime: '13/05/2025', totalProducts: 26 },
        { id: 9, name: 'Garden', brandId: 'Garden2134', HSNcode: '8201', createdTime: '13/05/2025', totalProducts: 26 },
        { id: 10, name: 'Auto', brandId: 'Auto2134', HSNcode: '8708', createdTime: '13/05/2025', totalProducts: 26 },
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

    // Add Modal handlers
    const handleOpenAddModal = () => {
        setIsAddModalOpen(true);
    };

    const handleCloseAddModal = () => {
        setIsAddModalOpen(false);
    };

    const handleAddCategory = (categoryData) => {
        // Generate a new brand ID (you can implement your own logic)
        const newCategoryId = `${categoryData.name.replace(/\s+/g, '')}${Math.floor(Math.random() * 10000)}`;
        const currentDate = new Date().toLocaleDateString('en-GB');

        const newBrand = {
            id: brandsData.length + 1,
            name: categoryData.name,
            brandId: newCategoryId,
            HSNcode: categoryData.hsnCode,
            createdTime: currentDate,
            totalProducts: 0
        };

        setBrandsData([...brandsData, newBrand]);
    };

    // Edit Modal handlers
    const handleOpenEditModal = (category) => {
        setSelectedCategory(category);
        setIsEditModalOpen(true);
    };

    const handleCloseEditModal = () => {
        setIsEditModalOpen(false);
        setSelectedCategory(null);
    };

    const handleEditCategory = (updatedCategoryData) => {
        setBrandsData(prevData =>
            prevData.map(category =>
                category.id === updatedCategoryData.id
                    ? {
                        ...category,
                        name: updatedCategoryData.name,
                        HSNcode: updatedCategoryData.hsnCode
                    }
                    : category
            )
        );
    };

    return (
        <div className='CategoryWrapper'>
            <div className="container-fluid">
                <div className="row">

                    <div className="col-lg-3"><Sidebar /></div>

                    <div className="col-lg-9">

                        <div className="navbar-main">
                            <Navbar />
                        </div>

                        <div className="head-section-stokes">

                            <h5 className='Brands'>
                                All Categories
                            </h5>

                            <div className="head-sub-part-main">
                                <div className="head-sub">
                                    <p>
                                        Total Categories
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
                                <h3>Categories </h3>

                                <div className="search-section">

                                    <CiSearch />

                                    <input
                                        type="text"
                                        placeholder="Search Categories"
                                        className="search-input"
                                        value={searchTerm}
                                        onChange={(e) => setSearchTerm(e.target.value)}
                                    />

                                </div>
                                <div className="table-actions">
                                    <button className="add-brand-btn" onClick={handleOpenAddModal}>Add Category</button>
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
                                            <th>Category Name</th>
                                            <th>HSN Code</th>
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
                                                <td>{brand.HSNcode}</td>
                                                <td>{brand.createdTime}</td>
                                                <td>{brand.totalProducts}</td>
                                                <td>
                                                    <div className="action-buttons">
                                                        <button
                                                            className="edit-btn"
                                                            onClick={() => handleOpenEditModal(brand)}
                                                        >
                                                            Edit
                                                        </button>
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

                        {/* Add Category Modal */}
                        <AddCategoryModal
                            isOpen={isAddModalOpen}
                            onClose={handleCloseAddModal}
                            onAddCategory={handleAddCategory}
                        />

                        {/* Edit Category Modal */}
                        <EditCategoryModal
                            isOpen={isEditModalOpen}
                            onClose={handleCloseEditModal}
                            onEditCategory={handleEditCategory}
                            categoryData={selectedCategory}
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Category