import styled from "styled-components";

const Rules = () => {
  return (
    <RulesContainer>
      <h2>How to play dice game</h2>
      <div className="text">
        <p>First: Select any number</p>
        <p>Second: Click on dice image</p>
        <p>
          Now, after you click on dice if selected number is equal to dice number you selected,
          you will get same point as dice{" "}
        </p>
        <p>But, if you get wrong number then 2 point will be dedcuted </p>
      </div>
    </RulesContainer>
  );
};

export default Rules;

const RulesContainer = styled.div`
  max-width: 800px;
  margin: 0 auto;
  background-color: #fbf1f1;
  padding: 20px;
  margin-top: 40px;
  border-radius: 10px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1); /* Add box shadow for depth */
  h2 {
    font-size: 28px; 
    margin-bottom: 16px; 
    color: #333; 
    font-family: "Arial", sans-serif;
    color: #1E90FF;
  }
  .text {
    margin-top: 24px;
    font-size: 16px; 
    line-height: 1.6; 
    color: #666; 
  }
`;

