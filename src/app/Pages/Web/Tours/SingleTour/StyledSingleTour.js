import styled from "styled-components";
import seabg from "../../../../../Assets/images/seabg.webp";
export const StyledSingleTour = styled.div`
  padding: 116px 0 0 0;
  width: 100%;
  min-height: 50vh;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  background-image: url(${seabg});
  background-position: center;
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-size: cover;
  box-shadow: rgba(1, 32, 54, 0.6) 0px 0px 0px 2000px inset;
  .tour-container {
    width: 85%;
    min-height: 500px;
    background: var(--backgroundMain);
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    padding: 30px 0;
    border-radius: 10px;
    margin: 30px 0;
    box-shadow: 0px 5px 5px -3px rgba(0, 0, 0, 0.2),
      0px 8px 10px 1px rgba(0, 0, 0, 0.14), 0px 3px 14px 2px rgba(0, 0, 0, 0.12);
    .tour-header {
      width: 70%;
      height: 300px;
      display: flex;
      align-items: center;
      justify-content: center;
      .short-desc {
        width: 40%;
        height: 100%;
        padding: 10px 25px;
        display: flex;
        align-items: center;
        justify-content: start;
        flex-direction: column;
        h2 {
          margin-bottom: 20px;
        }
        p {
          text-align: center;
        }
      }
      .main-image,
      .tour-info {
        height: 100%;
        width: 30%;
      }
      .main-image {
        border-radius: 10px;
        img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          border-radius: 10px;
          cursor: pointer;
        }
      }
      .tour-info {
        border: 1px solid rgba(0, 0, 0, 0.2);
        border-radius: 10px;
        display: flex;
        padding: 10px;
        align-items: center;
        justify-content: space-between;
        flex-direction: column;
        .infos {
          width: 60%;
          .info {
            display: flex;
            align-items: center;
            justify-content: space-between;
            margin: 10px 0;
          }
        }
      }
    }
    .single-section {
      width: 70%;
      margin: 30px 0 0;
      min-height: 600px;
      .swiper {
        margin: 0 0 30px;
        height: 500px;
        .swiper-wrapper {
          .swiper-slide {
            img {
              border-radius: 10px;
              height: 95%;
              width: 100%;
              object-fit: cover;
              cursor: pointer;
            }
          }
        }
        .swiper-pagination {
          bottom: 0;
          .swiper-pagination-bullet-active {
            background: var(--primary) !important;
          }
        }
      }
      .long-desc {
        p {
          text-align: center;
        }
      }
    }
    .booking-section {
      margin-top: 30px;
      width: 70%;
      min-height: 300px;
      border-radius: 10px;
      border: 1px solid rgba(0, 0, 0, 0.2);
      display: flex;
      align-items: center;
      justify-content: center;
    }
    button {
      display: flex;
      align-items: center;
      justify-content: center;
      flex-direction: row-reverse;
      margin: 30px auto 0;
      svg {
        margin: 0 10px 0 0;
        transform: rotate(180deg);
      }
    }
  }
  @media (max-width: 1024px) {
    .tour-container {
      width: 95%;
      .tour-header {
        width: 85%;
        height: unset;
        flex-direction: column-reverse;
        .main-image,
        .short-desc,
        .tour-info {
          width: 100%;
        }
      }
      .single-section {
        width: 85%;
      }
      .booking-section {
        width: 85%;
      }
    }
  }
  @media (max-width: 576px) {
    .tour-container {
      .tour-header {
        width: 95%;
      }
      .single-section {
        width: 95%;
      }
      .booking-section {
        width: 95%;
      }
    }
  }
`;
