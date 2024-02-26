import '../styles/teams.css';

import { Link } from 'react-router-dom'

import { useEffect } from "react";

const Team = ({team}) => {

    useEffect(() => {
        //console.log(Object.values(team.Roster));
    }, [team]);
    
    return (
        <Link className='team flex'
            to={"/" + team.teamCity.replace(" ", "_") + "_" + team.teamName + "/Roster"} 
            state={{team: team, roster: Object.values(team.Roster)}}
        >
            <div className='team-logo-wrapper'>
                <img className="team-logo" src={team.nbaComLogo2 ? team.nbaComLogo2 : team.nbaComLogo1} alt=""/>
            </div>
            <div className='team-info flex'>
                
                    <div className="team-name">{team.teamCity + " " + team.teamName}</div>
        
                <div className='team-record'>({team.wins} - {team.loss})</div>
            </div>  
        </Link>
    )
}

export default Team;