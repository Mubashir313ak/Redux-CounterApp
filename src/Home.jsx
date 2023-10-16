import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';

const StyledDiv = styled.div`
    text-align: center;
    margin: 20px;
`;

const StyledHeading = styled.h2`
    color: #333;
    font-size: 24px;
`;

const StyledButton = styled.button`
    background-color:gray;
    color: white;
    font-size: 16px;
    padding: 10px 20px;
    margin: 10px;
    border: none;
    cursor: pointer;

    &:hover {
        background-color: #0056b3;
    }
`;

const Home = () => {
    const dispatch = useDispatch();
    const { c } = useSelector((state) => state.custom);

    const addbtn = () => {
        dispatch({
            type: 'Increment',
        });
    };

    const addbtn25 = () => {
        dispatch({
            type: 'Incrementby25',
            payload: 25,
        });
    };

    const subbtn = () => {
        dispatch({
            type: 'Decrement',
        });
    };

    return (
        <StyledDiv>
            <StyledHeading>{c}</StyledHeading>
            <StyledButton onClick={addbtn}>Increment</StyledButton>
            <StyledButton onClick={addbtn25}>Increment by 25</StyledButton>
            <StyledButton onClick={subbtn}>Decrement</StyledButton>
        </StyledDiv>
    );
};

export default Home;





/*
import React from 'react';
import { useDispatch , useSelector} from 'react-redux';
import './App.css';

const Home = () => {
   
    const dispatch = useDispatch();

    const {c} =useSelector((state)=>state.custom)

    const addbtn = () => {
        dispatch({
            type: 'Increment', // Wrap the action type in quotes
        });
    };



    const addbtn25 = () => {
        dispatch({
            type: 'Incrementby25',
            payload:25, // Wrap the action type in quotes
        });
    };

    const subbtn = () => {
        dispatch({
            type: 'Decrement', // Wrap the action type in quotes
        });
    };

    return (
        <div>
            <h2 className='head'>{c}</h2>
            <div className='btn'>
            <button className='bt' onClick={addbtn}>Increment</button>
            <button className='bt' onClick={addbtn25}>Incrementby25</button>
            <button className='bt' onClick={subbtn}>Decrement</button>
            </div>
        </div>
    );
};

export default Home;

*/