import '../styles/footer.css';

import LoadScreen from './LoadScreen.js';

const Footer = () => {
    const url = "https://upload.wikimedia.org/wikipedia/en/thumb/5/53/NBA_75th_anniversary_logo.svg/800px-NBA_75th_anniversary_logo.svg.png";

    return (
        <footer className='footer flex animate'>
            <LoadScreen type={'section'}/>
            <div className='api-citation'>
                <h1>Powered by Tank01 Fantasy Stats.</h1>
                <span>
                    A powerful api that services NBA data. Application includes
                    newly updated team records, player bios, stats, etc.
                </span>
           </div>
           <img className="main-logo" src={url} alt=""/>
            <div className="contact flex">
                <h1>Contact</h1>
                <span>qijieguan7@gmail.com</span>
                <span>Los Angeles County, CA</span>
                <span>(626) 757-2356</span>
            </div>
        </footer>
    )
}

export default Footer;