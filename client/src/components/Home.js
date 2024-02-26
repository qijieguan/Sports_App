import '../styles/home.css';
import data from '../JSON/teams.json';

import axios from 'axios';
import { useEffect, useState } from 'react';
import uuid from 'react-uuid';

import Team from './Team.js';

const baseURL = window.location.href.includes('localhost:3000') ? 'http://localhost:3001' : '';

const Home = () => {

    const [teams, setTeams] = useState([]);

    useEffect(() => {
        if (!teams.length && !sessionStorage.getItem('teams')) { setTeams(data.Teams); }
        if (sessionStorage.getItem('teams')) { setTeams(JSON.parse(sessionStorage.getItem('teams'))); }
    }, [teams.length]);

    const httpRequest = async() => {
        
        await axios.post(baseURL + '/teams/get-teams/')
        .then(response => {
            console.log(response.data);
            setTeams(response.data.body);
            sessionStorage.setItem('teams', JSON.stringify(response.data.body));
        });
        
    }

    return (
        <div className='home'>
            <div className='teams-container grid'>
                {teams.map(team => <Team key={uuid()} team={team}/>)}

                {!sessionStorage.getItem('teams') &&
                    <button className='get-data-button' onClick={() => {httpRequest()}}>Get All Data</button>
                }
            </div>

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