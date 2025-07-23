import React, { useState } from 'react';
import { CiSearch } from "react-icons/ci";

const DeliveredOrder = ({ selectedSupplier, selectedWarehouse, fromDate, toDate }) => {
    const [searchTerm, setSearchTerm] = useState('');
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 10;

    const deliveredOrderData = [
        { id: 'OID129', orderDate: '15/02/2025', vendorName: 'LMN Corporation', vendorType: 'Distributor', invoiceNo: 'LMN-34567', vehicleType: 'Own Vehicle', trackingNo: '8888999900', amount: '3500.00', orderStatus: 'Completed' },
        { id: 'OID130', orderDate: '16/02/2025', vendorName: 'RST Traders', vendorType: 'Trader', invoiceNo: 'RST-45678', vehicleType: 'Delivery', trackingNo: '7777888899', amount: '4200.00', orderStatus: 'Completed' }
    ];

    const filteredOrders = deliveredOrderData.filter(order => {
        const matchesSearch = order.id.toLowerCase().includes(searchTerm.toLowerCase()) ||
                            order.vendorName.toLowerCase().includes(searchTerm.toLowerCase()) ||
                            order.invoiceNo.toLowerCase().includes(searchTerm.toLowerCase());
        return matchesSearch;
    });

    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentItems = filteredOrders.slice(indexOfFirstItem, indexOfLastItem);
    const totalPages = Math.ceil(filteredOrders.length / itemsPerPage);

    const handlePageChange = (pageNumber) => {
        setCurrentPage(pageNumber);
    };

    return (
        <div className="table-section">
            <div className="table-header">
                <div className="search-section">
                    <CiSearch />
                    <input
                        type="text"
                        placeholder="Search invoice number"
                        className="search-input"
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                    />
                </div>
                <div className="table-actions">
                    <button className="add-order-btn">Add Order</button>
                    <button className="filters-btn">
                        <span>Filters</span>
                        <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                            <path d="M3 4.5L6 7.5L9 4.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                    </button>
                </div>
            </div>

            <div className="table-container">
                <table className="orders-table">
                    <thead>
                        <tr>
                            <th>Order ID</th>
                            <th>Order Date</th>
                            <th>Vendor Name</th>
                            <th>Vendor Type</th>
                            <th>Invoice No</th>
                            <th>Vehicle Type</th>
                            <th>Tracking (Mobile No)</th>
                            <th>Amount</th>
                            <th>Order Status</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {currentItems.map((order) => (
                            <tr key={order.id}>
                                <td>{order.id}</td>
                                <td>{order.orderDate}</td>
                                <td className="vendor-name">{order.vendorName}</td>
                                <td>
                                    <span className="vendor-type">{order.vendorType}</span>
                                </td>
                                <td>
                                    <div className="invoice-no">
                                        {order.invoiceNo}
                                    </div>
                                </td>
                                <td>{order.vehicleType}</td>
                                <td>{order.trackingNo}</td>
                                <td className="amount">{order.amount}</td>
                                <td>
                                    <span className="status-badge delivered">
                                        {order.orderStatus}
                                    </span>
                                </td>
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
    );
};

export default DeliveredOrder;