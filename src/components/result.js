import React, { useEffect } from 'react';
import rock from '../images/icon-rock.svg';
import scissors from '../images/icon-scissors.svg';
import paper from '../images/icon-paper.svg';
import OptionComponent from './option';
import { useNavigate, useParams } from 'react-router-dom';

const ResultComponent = ({updateScore}) => {
  const { option } = useParams();
  const options = [rock,scissors,paper]
  const colors = ['hsl(349, 71%, 52%) , hsl(349, 70%, 56%)','hsl(39, 89%, 49%) , hsl(40, 84%, 53%)' , 'hsl(230, 89%, 62%) , hsl(230, 89%, 65%)']
  // Define house variable using useState hook
  const [house, setHouse] = React.useState(0);
  const [msg , setMsg] = React.useState(null);
  const navigate = useNavigate();
  useEffect(() => {
    // Set the house value to 2 after 2000 milliseconds
    const timer = setTimeout(() => {
      setHouse(Math.floor(Math.random() * 3)+1);
    }, 2000);
  
    // Clean up the timer to avoid memory leaks
     return () => {clearTimeout(timer)}
  }, []); // Empty dependency array to run the effect only once

      // Implement your logic to determine the winner here
      const determineWinner = (player, computer) => {
        // Your logic to determine the winner
        // Example logic:
        console.log(player, computer)
        if (player == computer) {
            setMsg ("It's a tie!");
        } else if (
          (player == 0 && computer == 1) ||
          (player == 1 && computer == 2) ||
          (player == 2 && computer == 0)
        ) {
            updateScore(1);
          setMsg( "You win!");
        } else {
            updateScore(-1);
          setMsg ("You Lose");
        }
      };
    // useEffect hook to determine winner after 2.5 seconds
    useEffect(() => {
        if (house > 0) {determineWinner(option, house - 1);}
    },[house])



  return (
    <div className='game-box'>
    <div>
    <p id={'header1'} className="choice-header" style={{ left: "32%"}}>YOU PICKED</p>
    <OptionComponent 
      type='result'
      color={`-webkit-linear-gradient(left top,${colors[option]})`}
      positionX="55"
      positionY="32"
      imageUrl={options[option]}
      imageID={0}
      hoverAction="Hovering over image!" 
    />
    </div>
    <p id={'header2'} className="choice-header" style={{left: "68%" }}>THE HOUSE PICKED</p>
    {house ?
     <OptionComponent 
     type='result'
      color={`-webkit-linear-gradient(left top,${colors[house-1]})`}
      positionX="55"
      positionY="68"
      imageUrl={options[house-1]}
      imageID={1}
      hoverAction="Hovering over image!" 
    /> : <div className='filler'>Waiting</div>}
    {msg ?<div className='msg'><p>{msg}</p> <button className='playagain' onClick={()=> navigate('/')}>PLAY AGAIN</button> </div> :null}
  </div>
  
  );
};

export default ResultComponent;
