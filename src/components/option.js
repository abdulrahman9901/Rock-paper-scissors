import React, { useState  } from 'react';
import { useNavigate } from 'react-router-dom';
const OptionComponent = ({type,color,positionX,positionY,imageUrl,imageID,onClickAction }) => {
  const [isHovered, setIsHovered] = useState(false);
  const navigate = useNavigate();

  const handleHover = () => {
    setIsHovered(!isHovered);
  }

  const handleClick = () => {
    if (onClickAction) {
     navigate(`/result/${imageID}`);
    }
  }

  return (
    <div id={type+'Image'+imageID} className='option' style={{background:color,top:`${positionX}%`,left:positionY+"%"}}>
    <div className='innerOption'
        onClick={handleClick}
    >
      <img 
        className='image-container'
        src={imageUrl} 
        alt="Image" 
        onMouseEnter={handleHover} 
        onMouseLeave={handleHover} 
      />
    </div>
    </div>
  );
}

export default OptionComponent;
