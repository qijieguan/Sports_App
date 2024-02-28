import '../styles/home.css';

import Interface from './Interface.js';

const Home = () => {
    return (
        <div className='home flex'>

            <Interface/>
            
            <div className='intro-section'>
                <div className='intro-wrapper first'>   
                    <div className='intro-image first'/>
                    <div className='intro-text first'>
                        <h1>What is NBA</h1>
                        <span>
                            The National Basketball Association is a professional league that features 30 teams in North America.
                            It is considered the most premier basketball league in the world. NBA teams are delegated to West and East conferences. 
                        </span>
                    </div>
                </div>

                <div className='intro-wrapper second'>
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
            </div>
        </div>
    )
}

export default Home;