import styled from "styled-components";

const TotalScore = ({ score }) => {
  const message = score > 0 ? "Well Done" : " "; 

  return (
    <ScoreContainer>
      <h1>{score}</h1>
      <p>Total Score</p>
      <Message>{message}</Message> {/* Render the message below the score */}
    </ScoreContainer>
  );
};

export default TotalScore;

const ScoreContainer = styled.div`
  max-width: 200px;
  text-align: center;
  h1 {
    font-size: 100px;
    line-height: 100px;
  }
  p {
    font-size: 24px;
    font-weight: 500px;
  }
`;

const Message = styled.p`
  font-size: 20px;
  margin-top: 10px;
`;
