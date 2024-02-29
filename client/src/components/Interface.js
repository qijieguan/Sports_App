import '../styles/interface.css';

import { useState, useEffect } from 'react'; 

import Standings from './Standings.js';
import Scores from './Scores.js';
import News from './News.js';

const Interface = () => {

    const [browse, setBrowse] = useState(null);

    useEffect(() => {
        if (browse === null && !sessionStorage.getItem('browse')) {
            sessionStorage.setItem('browse', JSON.stringify('standings'));
        }
        setBrowse(JSON.parse(sessionStorage.getItem('browse')));
    }, []);

    const changeInterface = (param) => {
        sessionStorage.setItem('browse', JSON.stringify(param));
        setBrowse(param);
    }    

    const toggleInterface = (param) => {
        if (JSON.parse(sessionStorage.getItem('browse')) === param) { return 'active' }
    }

    return (
        <div className="interface flex">
            <div className='interface-header'>
                <h1>NBA {JSON.parse(sessionStorage.getItem('browse'))}</h1>
                <div className='interface-ul flex'>
                    <div className={'interface-li standings ' + toggleInterface('standings')} 
                        onClick={() => {changeInterface('standings')}}
                    >STANDINGS</div>
                    <div className={'interface-li scores ' + toggleInterface('scores')} 
                        onClick={() => {changeInterface('scores')}}
                    >SCORES</div>
                    <div className={'interface-li news ' + toggleInterface('news')} 
                        onClick={() => {changeInterface('news')}}
                    >NEWS</div>

                </div>
            </div>
            {browse === 'standings' &&
                <Standings/>
            }
            {browse === 'news' &&
                <News/>
            }
            {browse === 'scores' &&
                <Scores/>
            }
        </div>
    );
}

export default Interface;