import '../styles/team.css';

import { Link } from 'react-router-dom'

import { useEffect } from "react";

const Team = ({team}) => {

    useEffect(() => {
        //console.log(Object.values(team.Roster));
    }, [team]);
    
    return (
        <Link className='team grid'
            to={"/" + team.teamCity.replace(" ", "_") + "_" + team.teamName + "/Roster"} 
            state={{team: team, roster: Object.values(team.Roster)}}
        >
            <div className='team-logo-wrapper flex'>
                <img className="team-logo" src={team.nbaComLogo2 ? team.nbaComLogo2 : team.nbaComLogo1} alt=""/>
                <div className="team-name">{team.teamCity + " " + team.teamName}</div>
            </div>
          
            <span className='team-wins'>{team.wins}</span>
            <span className='team-loss'>{team.loss}</span>
            <span className='team-percentage'>{((team.wins) / ((Number(team.wins) + Number(team.loss)))).toFixed(2)}</span>
           
        </Link>
    )
}

export default Team;