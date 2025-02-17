import styled from 'styled-components';
import { FaTimes } from 'react-icons/fa';
import PopUpImages from './PopUpImages';
import PopUpInformations from './PopUpInformations';

const PopUpContainerStyle = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;

    &:before {
        content: "";
        position: fixed;
        top: 0;
        left: 0;
        width: 100vw;
        height: 100vh;
        background-color: rgba(0, 0, 0, 0.5);
        z-index: -1;
    }
`;

const PopUpDetailContainerStyle = styled.div`
    display: grid;
    grid-template-columns: 24.5rem auto;
    padding: 3rem;
    grid-gap: 2rem;
    background-color: #fff;
    width: 60rem;
    margin: 6vh auto;
`;

const CloseBtnStyle = styled.button`
    color: #fff;
    opacity: 0.8;
    position: absolute;
    right: -4rem;
    font-size: 1.25rem;
    cursor: pointer;

    &:hover{
        opacity: 1;
    }
`;

export default function PopUpContainer () {

    return (
        <PopUpContainerStyle>
            <PopUpDetailContainerStyle>
                <PopUpImages/>
                <PopUpInformations/>
            </PopUpDetailContainerStyle>
            <CloseBtnStyle><FaTimes></FaTimes></CloseBtnStyle>
        </PopUpContainerStyle>
    )
}