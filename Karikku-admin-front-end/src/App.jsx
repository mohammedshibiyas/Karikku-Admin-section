import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import HomePage from './Component/HomePage/HomePage'
import Login from './Component/Pages/Login/Login'
import Sidebar from './Component/Common/SideBar/Sidebar'
import AddnewProduct from './Component/Pages/AddNewProduct/AddnewProduct'
import Products from './Component/Pages/Products/Products'
import Category from './Component/Pages/Category/Category'
import Brand from './Component/Pages/Brand/Brand'
import SalesOrders from './Component/Pages/SalesOrder/SalesOrder'
import WareHouse from './Component/Pages/WareHouse/WareHouse'
import AddWareHouse from './Component/Pages/AddWareHouse/AddWareHouse'

function App() {


  return (
    <>

      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Login />} />
          <Route path='/Sidebar' element={<Sidebar />} />
          <Route path='/Add-product' element={<AddnewProduct />} />
          <Route path='/Brand' element={<Brand  />} />
          <Route path='/Products' element={<Products/>} />
          <Route path='/Category' element={<Category/>} />
          <Route path='/Sales-order' element={<SalesOrders/>} />
          <Route path='/Warehouse' element={<WareHouse/>} />
          <Route path='/AddWarehouse' element={<AddWareHouse/>} />



        </Routes>

      </BrowserRouter>

    </>
  )
}

export default App
