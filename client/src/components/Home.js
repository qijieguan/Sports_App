import '../styles/home.css';

import Interface from './Interface.js';
import Footer from './Footer.js';
import LoadScreen from './LoadScreen.js';

import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const Home = () => {

    const location = useLocation();

    useEffect(() => {
        callObserver();
    }, [location]);

    const callObserver = () => {
        let targets = document.querySelectorAll('.animate');

        let options = {
            root: null,
            rootMargin: '-500px 0px -500px 0px',
            threshold: 0
        }

        const observer = new IntersectionObserver(function(entries, observer){
            entries.forEach(entry => {
                if (!entry.isIntersecting) {
                    entry.target?.classList.remove('intersected');
                }
                else {
                    entry.target?.classList.add('intersected');
                    entry.target.childNodes[0]?.classList.add('appear');
                    entry.target.childNodes[0]?.classList.add('shrink');
                    setTimeout(() => {
                        entry.target.childNodes[0]?.classList.remove('appear');
                        entry.target.childNodes[0]?.classList.remove('shrink');  
                    }, 3000);
                }
            });
        }, options);

        targets.forEach(target => {
            observer.observe(target);
        });
    }

    return (
        <div className='home flex'>
            <Interface/>
            <div className='intro-wrapper first animate'> 
                <LoadScreen type={'section'}/>
                <div className='intro-image first'/>
                <div className='intro-text first'>
                    <h1>What is NBA</h1>
                    <span>
                        The National Basketball Association is a professional league that features 30 teams in North America.
                        It is considered the most premier basketball league in the world. NBA teams are delegated to West and East conferences. 
                    </span>
                </div>
            </div>

            <div className='intro-wrapper second animate'>  
                <LoadScreen type={'section'}/>
                <div className='intro-image second'/>
                <div className='intro-text second'>
                    <h1>NBA Playoffs</h1>
                    <span>    
                        To make the playoff, NBA teams compete 82 games in the regular seasons to earn the top 8 spots in their conference.
                        With each playoff series, two teams will compete in the best of 7 games to face elimination. On the final series,
                        the winner will be crowded champions by winning the Larry O'Brien Championship Trophy.
                    </span>
                </div>
            </div>

            <div className='intro-wrapper third animate'>  
                <LoadScreen type={'section'}/>
                <div className='intro-awards flex'>
                    <h1>NBA AWARDS</h1>
                        <div className='cards flex'>
                            <div className='card flex'>
                                <div className='card-title flex'>
                                    <h1>MVP</h1>
                                    <span>Most Valuable Player</span>
                                </div>
                                <p>Given to the best performaning player of the regular season</p>
                            </div>
                            <div className='card flex'>
                                <div className='card-title flex'>
                                    <h1>DPOY</h1>
                                    <span>Defense Player of Year</span>
                                </div>
                                <p>Given to the best defensive player of the regular season</p>
                            </div>
                            <div className='card flex'>
                                <div className='card-title flex'>
                                    <h1>Sixth Man of the Year</h1>
                                    <span>SMOY</span>
                                </div>
                                <p>Given to the best performaning player coming from the bench on the regular season</p>
                            </div>
                            <div className='card flex'>
                                <div className='card-title flex'>
                                    <h1>MIP</h1>
                                    <span>Most Improved Player</span>
                                </div>
                                <p>Given to the most improved player of the regular season</p>
                        </div>
                    </div>
                </div>
            </div>
            <Footer/>
        </div> 
    )
}

export default Home;