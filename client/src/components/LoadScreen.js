import '../styles/load-screen.css';

const LoadScreen = ({type}) => {

    return (
        <div className={'load-screen grid ' + type}>
            <div className='box' style={{'--i': 5}}/>
            <div className='box' style={{'--i': 4}}/>
            <div className='box' style={{'--i': 3}}/>
            <div className='box' style={{'--i': 2}}/>
            <div className='box' style={{'--i': 1}}/>

            {type === 'section' && <div className="color-overlay"/>}
        </div>
    )
}

export default LoadScreen