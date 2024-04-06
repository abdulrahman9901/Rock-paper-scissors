import triangle from '../images/bg-triangle.svg';
import rock from '../images/icon-rock.svg';
import scissors from '../images/icon-scissors.svg';
import paper from '../images/icon-paper.svg';
import OptionComponent from './option';


const GameComponent = () => {
    const options = ['rock', 'scissors', 'paper'];
    const handleOptionClick = (option) => {
      const computerOption = options[Math.floor(Math.random() * options.length)];
    };
  
    return (
        <div className='game-box'>
        <img src={triangle} className="triangle" alt="logo" />
          <OptionComponent 
            type='play'
            color="-webkit-linear-gradient(left top,hsl(349, 71%, 52%) , hsl(349, 70%, 56%))"
            positionX="75"
            positionY="50"
            imageUrl={rock}
            imageID={0}
            onClickAction={() => handleOptionClick("rock")} 
          />
          <OptionComponent 
            type='play'
            color="-webkit-linear-gradient(left top,hsl(39, 89%, 49%) , hsl(40, 84%, 53%))"
            positionX="40"
            positionY="65"
            imageUrl={scissors}
            imageID={1}
            onClickAction={() => handleOptionClick("scissors")} 
          />
          <OptionComponent 
            type='play'
            color="-webkit-linear-gradient(left top,hsl(230, 89%, 62%) , hsl(230, 89%, 65%))"
            positionX="40"
            positionY="35"
            imageUrl={paper}
            imageID={2}
            onClickAction={() => handleOptionClick("paper")} 
          />
        </div>
       );
  };
  
  export default GameComponent;

