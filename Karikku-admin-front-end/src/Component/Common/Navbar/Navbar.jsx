import React from 'react'
import './Navbar.scss'
import { CiBellOn, CiCalendarDate } from 'react-icons/ci'

const Navbar = () => {
    return (
        <div className='navbarmainwrapper'>
            <div className="container-fluid">
                <div className="navbar">
                    <div className="left-side">
                        <div className="drop-1">
                            
                            <select name="" id="">
                                <option value="" selected ><CiCalendarDate /> Month</option>
                                <option value="1" >op1</option>
                                <option value="2" >op2</option>
                                <option value="3" >op3</option>
                            </select>
                        </div>
                        <div className="drop-2">
                              <select name="" id="">
                                <option value="" selected ><CiCalendarDate /> Warehouse</option>
                                <option value="1" >op1</option>
                                <option value="2" >op2</option>
                                <option value="3" >op3</option>
                            </select>
                        </div>
                    </div>
                    <div className="right-side">
                        <CiBellOn style={{width:"24px",height:"24px"}} />
                        <div className="user">
                            <img src="/Images/thara-logo.svg" alt="" />
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Navbar
