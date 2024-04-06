
import logo from '../images/logo.svg'


const ScoreComponent = ({score}) => {
  
    return (
<>
<div className="score-box">
            <div className="logo">
              <img src={logo}></img>
            </div>
            <div className="score">
            <p className='score-outline'>Score</p>
            <p className='score-val'>{score}</p>
            </div>
        </div>
</>
    );
  };
  
  export default ScoreComponent;