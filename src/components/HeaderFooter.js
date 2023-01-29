import React from 'react'
const Header = ({title}) => {
    return <div className='header-div' style={{backgroundColor:title==='header' ? "blue": "black", color:title==='header' ? "white": "white"}}>
        <h1>{title === 'header' ? 'Header' : "Footer"}</h1>
    </div>
}
export default Header