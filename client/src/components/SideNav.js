import '../styles/side-nav.css';
import { GrTrophy } from "react-icons/gr";
import { FaBasketball, FaRankingStar, FaHeart } from "react-icons/fa6";
import { PiConfettiBold } from "react-icons/pi";

import { useLocation, useNavigate } from 'react-router-dom'
import { useEffect } from 'react'; 

import LoadScreen from './LoadScreen.js';

const SideNav = () => {

    const url = "https://upload.wikimedia.org/wikipedia/en/thumb/5/53/NBA_75th_anniversary_logo.svg/800px-NBA_75th_anniversary_logo.svg.png";
    
    const location = useLocation();
    const navigate = useNavigate();

    useEffect(() => {
        window.scrollTo({top: 0});
    },[location]);

    const handleScrollSection = (s) => {
        document.querySelector('.side-nav')?.classList.remove('expand');

        if (location.pathname.includes('/Roster')) {
            navigate('/');
        }
        setTimeout(() => {
            collapseNav();

            if (s === 'home') {
                document.querySelector('.interface')?.scrollIntoView({block: 'start'})   
            }
            if (s === 'first' || s === 'second' || s === 'third') {
                document.querySelector('.intro-wrapper' + "." + s)?.scrollIntoView({block: 'start'}); 
            }
            if (s === 'footer') {
                document.querySelector('.footer')?.scrollIntoView({block: 'start'});
            }
        }, 250);
    }

    const handleExpandNav = () => {

        if (document.querySelector('.side-nav')?.classList.contains('expand')) {
            collapseNav();
        }
        else {
            expandNav();
        }
    }

    const collapseNav = () => {
        document.querySelector('.side-nav')?.classList.remove('expand');
        document.querySelector('.load-screen')?.classList.remove('appear');
        document.querySelector('.load-screen')?.classList.add('shrink');
    }

    const expandNav = () => {
        document.querySelector('.side-nav')?.classList.add('expand');
        document.querySelector('.load-screen')?.classList.add('appear');
        document.querySelector('.load-screen')?.classList.remove('shrink');
    }

    return (
        <nav className="side-nav flex">
            <LoadScreen type={"main"}/>
            <div className='nav-bar flex'>
                <img src={url} alt=""/>
                <div className= 'nav-button flex' onClick={(e) => {handleExpandNav(e)}}>
                    <div className='vertical-line left'/>
                    <div className='vertical-line right'/>
                </div>
                <div/>
            </div>
            <div className='nav-links flex'>
                <div className='nav-link flex' onClick={() => {handleScrollSection('home')}}>
                    <FaRankingStar className='icon'/>
                    <h1>NBA Standings</h1>
                </div>
                <div className='nav-link flex' onClick={() => {handleScrollSection('first')}}>
                    <FaBasketball className='icon'/>
                    <h1>What is NBA</h1>
                </div>
                <div className='nav-link flex' onClick={() => {handleScrollSection('second')}}>
                    <PiConfettiBold className='icon'/>
                    <h1>NBA Playoffs</h1>
                </div>
                <div className='nav-link flex' onClick={() => {handleScrollSection('third')}}>
                    <GrTrophy className='icon'/>
                    <h1>NBA Awards</h1>
                </div>
                <div className="nav-link flex" onClick={() => {handleScrollSection('footer')}}>
                    <FaHeart className='icon'/>
                    <h1>About</h1>
                </div>
            </div>
        </nav>
    )
}

export default SideNav;