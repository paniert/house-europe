"use client";
import styled from "styled-components";

const StyledCircle = styled.div`
    width: 50px;
    height: 50px;
    border-radius: 50%;
    background: red;
    animation: moveX 60s steps(60) infinite;
  
  @keyframes moveX {
    from { transform: translateX(0); }
    to   { transform: translateX(100vw); }
  }
    @keyframes swing {
  0%, 100% { transform: rotate(-45deg) translateY(0); }
  50% { transform: rotate(45deg) translateY(0); }
}
        `;
  export default function Circle() {
    return <StyledCircle />;
  }