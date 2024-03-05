import '../styles/news.css';

import axios from 'axios';
import { useState, useEffect } from 'react';
import uuid from 'react-uuid';

const News = () => {
 
    const [news, setNews] = useState([]);

    const baseURL = window.location.href.includes('localhost:3000') ? 'http://localhost:3001' : '';

    useEffect(() => {
        if (sessionStorage.getItem('news')) {
            setNews(JSON.parse(sessionStorage.getItem('news')));
            //console.log(JSON.parse(sessionStorage.getItem('news')));
        }
        else {
            getNewsRequest();
        }
    }, [news]);

    const getNewsRequest = async () => {
        await axios.post(baseURL + '/news/get-news/')
        .then(response => {
            console.log(response.data);
            setNews(response.data.body);
            sessionStorage.setItem('news', JSON.stringify(response.data.body));
            window.scrollTo({top: 0});
        });
    }

    return (
        <div className='news-section'>
            {news.length ?
                news.map(a => 
                    <div className='news-li flex' key={uuid()}>
                        <h1 className='news-li-title' onClick={() => {window.open(a.link, '_blank');}}>{a.title}</h1>
                        <img className='news-li-image' src={a.image} alt=""/>
                    </div>
                )
                :
                <span className='news-empty'>No data available</span>
            }
            {!sessionStorage.getItem('news') &&
                <button className="get-data-button" onClick={() => {getNewsRequest()}}>Click to Get News</button>
            }
        </div>
    )
}

export default News;