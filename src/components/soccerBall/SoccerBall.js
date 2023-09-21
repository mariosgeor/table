import "./soccerBall.css";
import soccerBall from'../../assets/soccer-ball.png';
const SoccerBall = () => {
  return (
    <div className="rotating-img-container">
      <img src={soccerBall} alt="soccer-ball"></img>
    </div>
  );
};

export default SoccerBall;