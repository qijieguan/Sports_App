import '../styles/roster.css';
import { BsArrowLeft } from "react-icons/bs";

import { useLocation, Link } from "react-router-dom"; 
import { useState, useEffect } from "react";

const Roster = () => {
    const location = useLocation();
    const [roster, setRoster] = useState();
    const [team, setTeam] = useState();

    useEffect(() => {
      //console.log(location.state.roster);

      let sort = location.state.roster.sort((a, b) => {
        if (!a.stats) { return 1; }
        else if (!b.stats) { return -1; }
        else { return b?.stats?.pts - a?.stats?.pts }
      });

      setTeam(location.state.team);
      setRoster(sort);
    }, [location]);

    const calculateAge = (dob) => {
        const birthday = new Date(dob);
        const diff = Date.now() - birthday.getTime();
        const ageDate = new Date(diff);
  
        return Math.abs(ageDate.getUTCFullYear() - 1970);
    }

    return (
        <div className="roster grid">
            {team && 
                <div className='team-banner flex'>
                    <Link to={'/'} className='icon-wrapper flex'>
                        <BsArrowLeft className='icon'/>
                        <span>Go Back</span>
                    </Link>
                    <img src={team.nbaComLogo2 ? team.nbaComLogo2 : team.nbaComLogo1} alt=""></img>
                    <div className='team-banner-info flex'>
                        <span>{location.pathname.split('/')[1].replace(/_/g, ' ')}</span>
                        <span>{team.wins} - {team.loss}</span>
                    </div>
                </div>
            }
            {roster && roster.length && roster.map(player => 
                <div className="player flex">
                    <img className='player-image' src={player.nbaComHeadshot ? player.nbaComHeadshot : player.espnHeadshot} alt=""/>
                    <div className="player-info flex">
                        <div className="player-name">{player.nbaComName} ({player.pos})</div>
                        <div className="player-bio flex">
                            <span>Height: {player.height}</span>
                            <span>Weight: {player.weight}</span>
                            <span>Age: {calculateAge(player.bDay)}</span>
                        </div>
                        {player.stats &&
                            <div className="player-stats flex">
                                <span className={Number(player.stats.pts) >= 15 && 'high'}>Points {player.stats.pts}</span>
                                <span className={Number(player.stats.ast) >= 7 && 'high'}>Assists {player.stats.ast}</span>
                                <span className={Number(player.stats.reb) >= 7 && 'high'}>Rebounds {player.stats.reb}</span>
                            </div>
                        }   
                    </div>
                </div>
            )}
        </div>
    )
}

export default Roster;