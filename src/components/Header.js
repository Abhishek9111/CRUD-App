import React,{useEffect,useState} from 'react'
import {Link,useLocation} from 'react-router-dom'
import "./Header.css"


const Header = () => {
    const[activeTab,SetActiveTab] = useState('home')
    const location = useLocation()

    useEffect(()=>{
        if(location.pathname==='/'){
            SetActiveTab('Home')
        }else if(location.pathname==='/add'){
            SetActiveTab('AddContact')
        }else if(location.pathname==='/about'){
            SetActiveTab('About')
        }
    },[location])
    return (
        <div className = 'header'>
            <p className = 'logo'>Contact App</p>
            <div className = 'header-right'>
                <Link to ='/'>
                    <p className = {`${activeTab=== 'Home' ? 'active':''}`} onClick = {()=>SetActiveTab('Home')}>
                        Home
                    </p>
                </Link>
                <Link to ='/add'>
                    <p className = {`${activeTab==='AddContact'?'active':''}`} onClick = {()=>SetActiveTab('AddContact')}>
                        Add Contact
                    </p>
                </Link>
                <Link to ='/about'>
                    <p className = {`${activeTab==='About'?'active':" "}`} onClick = {()=>SetActiveTab('About')}>
                        About
                    </p>
                </Link>
            </div>
        </div>
    )
}

export default Header
