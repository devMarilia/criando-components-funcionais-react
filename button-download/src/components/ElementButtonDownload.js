import styled from 'styled-components';

export const Container = styled.section`
    width: 100vw;
    height: 100vh;
    align-items: center;
    justify-content: center;
    display: flex;
      div { 
        width: 50em;
        height: 30em;
        border-radius: 2em;
        align-items: center;
        justify-content: center;
        display: flex;
        flex-direction: row;
        flex-direction: column;
        border: solid 2px var(--gray-1);
        margin: 1em;
        text-transform: uppercase;
        }

      h1{
          font-size: 2rem;
          color: var(--gray-1);
      }

  button {
    display: inline-block;
    color: var(--white);
    background: var(--gray-1);
    font-size: 1em;
    margin: 4em;
    padding: 2em 3em;
    border-radius: 3px;
    display: block;
    text-transform: uppercase;
    border: none;

    
  } 
   @media only screen and (max-width: 768px) {
    .button {
      font-size: 1.8rem;
    }
  }
`;