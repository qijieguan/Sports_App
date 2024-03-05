import '../styles/scores.css';

import axios from 'axios';
import { useState, useEffect } from 'react';
import uuid from 'react-uuid';

import Data from '../JSON/logos.json';

const Scores = () => {

    const [scores, setScores] = useState([]);

    const baseURL = window.location.href.includes('localhost:3000') ? 'http://localhost:3001' : '';

    useEffect(() => {
        if (sessionStorage.getItem('scores')) {
            setScores(Object.values(JSON.parse(sessionStorage.getItem('scores'))));
            console.log(Object.values(JSON.parse(sessionStorage.getItem('scores'))));
        }
        else {
            getScoresRequest();
        }
    }, [scores]);

    const getScoresRequest = async () => {
        let date = (new Date()).toLocaleDateString("en-CA", {year:"numeric", month: "2-digit", day:"2-digit"}).replaceAll('-', '');

        await axios.post(baseURL + '/scores/get-scores/', {date: date})
        .then(response => {
            console.log(response.data);
            setScores(response.data.body);
            sessionStorage.setItem('scores', JSON.stringify(response.data.body));
            window.scrollTo({top: 0});
        });
    }

    return (
        <div className='scores-section grid'>
            {scores.length &&
                scores.map(score => 
                    <div className='game flex' key={uuid()}>
                        <div className='team-away flex'>
                            <img src={Data.logos.filter(logo => logo.teamAbv === score.away)[0].logo} alt=""/>
                            <span>{score.away}</span>
                        </div>
                        
                        {score.gameStatus.toLowerCase().includes('live') ?
                            <div className='game-score flex'>
                                <div className='game-points'>
                                    <span>{score.awayPts}</span>
                                    <span> - </span>
                                    <span>{score.homePts}</span>
                                </div>
                                <div className='game-time'>
                                    <span>{score.gameClock.split('-')[1]} - </span>
                                    <span>{score.gameClock.split('-')[0]}</span>
                                </div>
                            </div>
                            :
                            <span className='game-start-time'>{score.gameTime}m</span>
                        }

                        <div className='team-home flex'>
                            <img src={Data.logos.filter(logo => logo.teamAbv === score.home)[0].logo} alt=""/>
                            <span>{score.home}</span>
                        </div>
                    </div> 
                       
                )
            }
            {!sessionStorage.getItem('scores') &&
                <button className="get-data-button" onClick={() => {getScoresRequest()}}>Click to Get Scores</button>
            }
        </div>
    )
}

export default Scores;