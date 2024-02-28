import '../styles/standings.css';
import data from '../JSON/teams.json';

import axios from 'axios';
import { useEffect, useState } from 'react';
import uuid from 'react-uuid';

import Team from './Team.js';

const Standings = () => {

    const [conference, setConference] = useState('East');
    const [sort, setSort] = useState([]);  
    
    const baseURL = window.location.href.includes('localhost:3000') ? 'http://localhost:3001' : '';

    useEffect(() => {
        if (!sessionStorage.getItem('teams')) { 
            getTeamsRequest();
            //sortTeams(data.Teams); 
        }
        else { sortTeams(JSON.parse(sessionStorage.getItem('teams'))); }
      
    }, [conference]);

    const sortTeams = (teams) => {
        let result = teams.filter(team => team.conferenceAbv === conference);
        result = result.sort((a, b) => {
            return (b.wins / (b.wins + b.loss)) - (a.wins / (a.wins + a.loss));
        });
        setSort(result);
    }

    const getTeamsRequest = async () => {
        
        await axios.post(baseURL + '/teams/get-teams/')
        .then(response => {
            console.log(response.data);
            sortTeams(response.data.body);
            sessionStorage.setItem('teams', JSON.stringify(response.data.body));
            window.scrollTo({top: 0});
        });

    }

    const switchConference = (param) => {
        document.querySelector('.conference.active')?.classList.remove('active');
        document.querySelector('.conference.' + param.toLowerCase())?.classList.add('active');
        setConference(param);
    }

    return (
        <div className="standings-section">
             <div className='interface-detail flex'>
                <div className='flex'>
                    <span>Season</span>
                    <span>2023-24</span>
                </div>
                <div className='flex'>
                    <span>Round</span>
                    <span>Regular season</span>
                </div>
            </div>
            <div className='interface-filters flex'>
                <span className='conference east active' onClick={() => {switchConference('East')}}>Eastern Conference</span>
                <span className='conference west' onClick={() => {switchConference('West')}}>Western Conference</span>
            </div>
            <div className='interface-table'>
                <div className='table-labels grid'>
                    <label>Team</label>
                    <label>W</label>
                    <label>L</label>
                    <label>Pct</label>
                </div>
                {sort.length ?
                    sort.map(team => <Team team={team} key={uuid()}/>)
                    :
                    <span className='table-empty grid'>No data available</span>
                }
            </div>

            {!sessionStorage.getItem('teams') &&
                <button className='get-data-button' onClick={() => {getTeamsRequest()}}>Click to Get All Teams</button>
            }

        </div>
    )
}

export default Standings