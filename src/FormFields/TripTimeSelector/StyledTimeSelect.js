import styled from "styled-components";

export const StyledTimeSelector = styled.div`
  width: 90%;
  padding: 0 10px;
  margin:0 0 20px 0;
  p{
    color: rgba(0, 0, 0, 0.5);
    font-weight: 500;
    font-size: 1rem;
  }
  .time-options-container {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    gap: 10px;
    margin: 10px 0 0;
    .time-option {
      display: flex;
      align-items: center;
      border: 1px solid rgba(0, 0, 0, 0.4);
      padding: 8px 15px;
      border-radius: 10px;
      cursor: pointer;
      font-weight: bold;
      color: rgba(0, 0, 0, 0.5);
      &.selected{
        background: var(--primary);
        color: var(--textMain);
      }
    }
  }
`;
