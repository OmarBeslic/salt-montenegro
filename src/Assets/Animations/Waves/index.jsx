import React from "react";
import styled from "styled-components";

const StyledWaves = styled.div`
  height: 5%;
  width: 100%;
  position: absolute;
  bottom: 0;
  left: 0;
  background: var(--primary);

  .wave {
    position: absolute;
    bottom: 0;
    width: 6400px;
    height: 110px;
    animation: wave 15s alternate-reverse infinite;
  }

  .wave:first-of-type {
    background: url(https://ripples4rare.com/wp-content/themes/salient-child/img/wave-1.svg)
      repeat-x;
    height: 50px;
    opacity: 1;
  }

  .wave:nth-of-type(2) {
    background: url(https://ripples4rare.com/wp-content/themes/salient-child/img/wave-2.svg)
      repeat-x;
    bottom: 0;
    animation: wave 15s alternate-reverse -1.25s infinite,
      swell 15s ease -1.25s infinite;
    opacity: 0.6;
    height: 100px;
  }

  .wave:nth-of-type(3) {
    background: url(https://ripples4rare.com/wp-content/themes/salient-child/img/wave-3.svg)
      repeat-x;
    bottom: 0;
    animation: wave 15s alternate-reverse -0.75s infinite,
      swell 15s ease -0.75s infinite;
    opacity: 0.3;
    height: 75px;
  }

  .wave:nth-of-type(4) {
    background: url(https://ripples4rare.com/wp-content/themes/salient-child/img/wave-4.svg)
      repeat-x;
    bottom: 0;
    animation: wave 15s alternate-reverse -0.25s infinite,
      swell 15s ease -0.25s infinite;
    opacity: 0.2;
  }

  @keyframes wave {
    0%,
    100% {
      margin-left: 0;
    }
    50% {
      margin-left: -1600px;
    }
  }

  @keyframes swell {
    0%,
    100% {
      transform: scaleX(1);
    }
    50% {
      transform: scaleX(1.7);
    }
  }
`;

function Waves() {
  return (
    <StyledWaves>
      <div class="wave"></div>
      <div class="wave"></div>
      <div class="wave"></div>
      <div class="wave"></div>
    </StyledWaves>
  );
}

export default Waves;
