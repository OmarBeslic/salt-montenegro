import styled from "styled-components";
import servicebg from "../../../../../Assets/images/services.webp"

export const StyledEnjoy = styled.div`
    width: 100%;
    height: 250px;
    background-image: url(${servicebg});
    background-position: center; 
    background-repeat: no-repeat; 
    background-size: cover;
    margin: 25px 0;
    .services{
        display: flex;
        align-items: center;
        justify-content: space-evenly;
        .service{
            display: flex;
            align-items: center;
            justify-content: center;
            flex-direction: column;
            width: 10%;
            img{
                height: 135px;
            }
            span{
                text-align: center;
            }
            p{
                font-weight: 700;
                margin: 10px 0;
            }
        }
    }
`