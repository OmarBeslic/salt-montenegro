import styled from "styled-components";

export const StyledGallery = styled.div`
  min-height: 500px;
  width: 100%;
  padding-top: 100px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  position: relative;
  background: rgba(1, 32, 54, 0.6);
  img {
    max-width: 100%;
    height: auto;
    vertical-align: middle;
    display: inline-block;
  }
  .gallery-header {
    display: flex;
    flex-direction: column;
    align-items: center;
    z-index: 1;
    margin: 20px 0;
    & > * {
      color: var(--textMain);
    }
    span {
      font-family: "Great Vibes", "cursive";
      font-weight: 400;
      font-size: 30px;
      display: flex;
      align-items: center;
      justify-content: center;
    }
    h2 {
      font-size: 24px;
    }
  }
  .grid-wrapper {
    display: grid;
    grid-gap: 10px;
    width: 82%;
    padding: 20px;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    grid-auto-rows: 250px;
    grid-auto-flow: dense;

    div {
      display: flex;
      align-items: center;
      justify-content: center;
    }
    z-index: 1;
  }
  @media (max-width: 576px) {
    .grid-wrapper {
      grid-template-columns: repeat(1, 1fr);
      grid-auto-rows: unset;
      place-items: center;
      gap: unset;
      row-gap: 10px;
      width: 100%;
    }
  }
`;

export const StyledImages = styled.div`
  cursor: pointer;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 10px;
  }
  &.wide {
    grid-column: span 2;
  }
  &.long {
    grid-row: span 2;
  }
  &.big {
    grid-row: span 2;
    grid-column: span 2;
  }
`;
