import styled from "styled-components";

export const LightBulbStyle = styled.div`
  width: 500px;
  max-width: 100%;
  height: 600px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: black;

  .light-bulb {
    width: 400px;
    height: 500px;

    .eyes-open {
      width: 100px;
      height: 100px;
      position: relative;
      top: 50px;
    }

    img {
      width: 400px;
      height: 600px;
    }
  }

  .button-on {
    width: 100px;
    cursor: pointer;
    img {
      width: 100px;
      max-width: 100%;
      height: 100px;
    }
  }
`;
