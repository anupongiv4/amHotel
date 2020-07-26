import styled from 'styled-components';
import defaultImg from './images/mainbanner.jpg';


const Banner = styled.header`
    width: 100%;
    background: url(${props => (props.img ? props.img: defaultImg)}) center/cover no-repeat;
    display: flex;
    height: 40vh;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    color: white;
    font-size: 2rem;
    font-weight: 500;
    text-shadow: 0px 0px 7px rgb(141, 141, 141);
    text-decoration: underline;
`;

export default Banner;
