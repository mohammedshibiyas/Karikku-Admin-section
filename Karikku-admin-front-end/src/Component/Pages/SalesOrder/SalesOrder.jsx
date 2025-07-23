import React, { useState } from 'react';
import { CiSearch } from "react-icons/ci";

import './SalesOrder.scss';
import ConfirmOrder from './ConfirmOrder/ConfirmOrder';
import PendingOrder from './PendingOrder/PendingOrder';
import ReadyForShipping from './ShippingOrder/ShippingOrder';
import DispatchedOrder from './DispatchOrder/DispatchOrder';
import DeliveredOrder from './DeliverOrder/DeliverOrder';
import CancelledOrder from './CancelOrder/CancelOrder';
import Sidebar from '../../Common/SideBar/Sidebar';
import Navbar from '../../Common/Navbar/Navbar';

const SalesOrders = () => {
    const [activeStatus, setActiveStatus] = useState('Confirm Order');
    const [selectedSupplier, setSelectedSupplier] = useState('');
    const [selectedWarehouse, setSelectedWarehouse] = useState('');
    const [fromDate, setFromDate] = useState('');
    const [toDate, setToDate] = useState('');

    // Status tabs configuration
    const statusTabs = [
        { key: 'Confirm Order', label: 'Confirm Order', count: 3 },
        { key: 'Pending', label: 'Pending', count: 6 },
        { key: 'Ready for shipping', label: 'Ready for shipping', count: 2 },
        { key: 'Dispatched', label: 'Dispatched', count: 2 },
        { key: 'Delivered', label: 'Delivered', count: 2 },
        { key: 'Cancelled', label: 'Cancelled', count: 2 }
    ];

    const handleStatusChange = (status) => {
        setActiveStatus(status);
    };

    const handleClear = () => {
        setSelectedSupplier('');
        setSelectedWarehouse('');
        setFromDate('');
        setToDate('');
    };

    const renderActiveComponent = () => {
        const commonProps = {
            selectedSupplier,
            selectedWarehouse,
            fromDate,
            toDate
        };

        switch(activeStatus) {
            case 'Confirm Order':
                return <ConfirmOrder {...commonProps} />;
            case 'Pending':
                return <PendingOrder {...commonProps} />;
            case 'Ready for shipping':
                return <ReadyForShipping {...commonProps} />;
            case 'Dispatched':
                return <DispatchedOrder {...commonProps} />;
            case 'Delivered':
                return <DeliveredOrder {...commonProps} />;
            case 'Cancelled':
                return <CancelledOrder {...commonProps} />;
            default:
                return <ConfirmOrder {...commonProps} />;
        }
    };

    return (
        <div className='SalesOrdersWrapper'>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-lg-3"><Sidebar/></div>
                    <div className="col-lg-9">
                         <div className="navbar-main">
                            <Navbar />
                        </div>
                        <div className="sales-orders-content">
                            <h2 className="page-title">Sales Orders</h2>
                            
                            {/* Filter Section */}
                            <div className="filter-section">
                                <div className="filter-row">
                                    <select 
                                        className="filter-select"
                                        value={selectedSupplier}
                                        onChange={(e) => setSelectedSupplier(e.target.value)}
                                    >
                                        <option value="">Select Supplier</option>
                                        <option value="thara-trading">Thara Trading Co</option>
                                        <option value="abc-suppliers">ABC Suppliers</option>
                                        <option value="xyz-distributors">XYZ Distributors</option>
                                    </select>

                                    <select 
                                        className="filter-select"
                                        value={selectedWarehouse}
                                        onChange={(e) => setSelectedWarehouse(e.target.value)}
                                    >
                                        <option value="">Select Warehouse</option>
                                        <option value="warehouse-1">Warehouse 1</option>
                                        <option value="warehouse-2">Warehouse 2</option>
                                    </select>

                                    <div className="date-range">
                                        <input 
                                            type="date" 
                                            className="date-input"
                                            placeholder="From Date"
                                            value={fromDate}
                                            onChange={(e) => setFromDate(e.target.value)}
                                        />
                                        <span className="date-separator">To</span>
                                        <input 
                                            type="date" 
                                            className="date-input"
                                            placeholder="To Date"
                                            value={toDate}
                                            onChange={(e) => setToDate(e.target.value)}
                                        />
                                    </div>

                                    <div className="filter-actions">
                                        <button className="go-btn">Go</button>
                                        <button className="clear-btn" onClick={handleClear}>Clear</button>
                                    </div>
                                </div>
                            </div>

                            {/* Status Tabs */}
                            <div className="status-tabs">
                                {statusTabs.map((tab) => (
                                    <button
                                        key={tab.key}
                                        className={`status-tab ${activeStatus === tab.key ? 'active' : ''}`}
                                        onClick={() => handleStatusChange(tab.key)}
                                    >
                                        {tab.label} ({tab.count})
                                    </button>
                                ))}
                            </div>

                            {/* Render Active Component */}
                            {renderActiveComponent()}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SalesOrders;