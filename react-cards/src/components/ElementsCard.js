import styled from 'styled-components';

export const Container=styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(12rem, 16rem));
    gap: 2rem;
    justify-content: center;
`;

export const CardContainer=styled.div`
    overflow: hidden;
    box-shadow: 0 2px 20px #e1e5ee;
    border-radius: 0.2rem;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    cursor: pointer;
    transition: transform 200ms ease-in;
    margin-top:6rem;
    :hover {
        transform: scale(1.02);
      }
`;

export const CardBody=styled.div`
`;

export const CardImg=styled.img`
    height: 12rem;
    width: 100%;
    object-fit: cover;
`;

export const CardTitle=styled.h2`   
    padding: 1rem;
`;

export const CardContent=styled.p`
    padding: 0 1rem;
`;

export const CardButton=styled.button`
    padding: 1rem;
    font-family: inherit;
    font-weight: bold;
    font-size: 1rem;
    margin: 1rem;
    border: 2px solid #d50000;
    background: transparent;
    color: #d50000;
    border-radius: 0.2rem;
    transition: background 200ms ease-in, color 200ms ease-in;
    :hover {
    background: #d50000;
    color: white;
  }
`;