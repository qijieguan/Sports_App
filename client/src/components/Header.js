import '../styles/header.css';

import { useLocation, useNavigate } from 'react-router-dom'
import { useEffect } from 'react'; 

const Header = () => {

    const url = "https://upload.wikimedia.org/wikipedia/en/thumb/5/53/NBA_75th_anniversary_logo.svg/800px-NBA_75th_anniversary_logo.svg.png";
    
    const location = useLocation();
    const navigate = useNavigate();

    useEffect(() => {
        window.scrollTo({top: 0});
    },[location]);

    const handleScrollSection = (s) => {
        if (location.pathname.includes('/Roster')) {
            navigate('/');
        }
        setTimeout(() => {
            if (s === 'home') {
                window.scrollTo({top: 0});   
            }
            if (s === 'first' || s === 'second') {
                document.querySelector('.intro-text' + "." + s)?.scrollIntoView({block: 'center'}); 
            }
        }, 250)
    }

    return (
        <nav className="header flex">
            <img src={url} alt=""/>
            <div onClick={() => {handleScrollSection('home')}}>NBA Standings</div>
            <div onClick={() => {handleScrollSection('first')}}>What is NBA</div>
            <div onClick={() => {handleScrollSection('second')}}>NBA Playoffs</div>
            <div onClick={() => { document.querySelector('.footer')?.scrollIntoView({block: 'start'}); }}>About</div>
        </nav>
    )
}

export default Header;