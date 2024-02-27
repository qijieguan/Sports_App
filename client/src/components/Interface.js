import '../styles/interface.css';
import { useState, useEffect } from 'react'; 

import Team from './Team.js';

const Interface = ({teams}) => {

    const [conference, setConference] = useState('East');
    const [sort, setSort] = useState(teams);

    useEffect(() => {
        let result = teams.filter(team => team.conferenceAbv === conference);
        result = result.sort((a, b) => {
            return (b.wins / (b.wins + b.loss)) - (a.wins / (a.wins + a.loss));
        });
        setSort(result);
    }, [teams, conference]);

    const switchConference = (param) => {
        document.querySelector('.conference.active')?.classList.remove('active');
        document.querySelector('.conference.' + param.toLowerCase())?.classList.add('active');
        setConference(param);
    }

    return (
        <div className="interface flex">
            <div className='interface-header'>
                <h1>NBA standings</h1>
                <div className='interface-li active'>STANDINGS</div>
            </div>
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
                    sort.map(team => <Team team={team}/>)
                    :
                    <span className='table-empty grid'>No data available</span>
                }
            </div>
        </div>
    );
}

export default Interface;