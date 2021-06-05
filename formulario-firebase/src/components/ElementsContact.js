import styled from 'styled-components'

export const Container= styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;


h1 {
  margin-bottom: 30px;
}
input,
textarea {
  padding: 20px;
  border-radius: 3px;
  /* box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.137); */
  margin-bottom: 20px;
  border: 1px solid lightgray;
  /* border: none; */
  background: #fff;
  font-size: 16px;
  color: rgb(0, 0, 32);
  outline: none;
}
input:focus,
textarea:focus {
  border: 1px solid rgb(0, 0, 196);
}

textarea {
  height: 150px;
  max-width: 400px;
  min-height: 100px;
}

 label {
  padding-bottom: 10px;
  color: rgb(0, 0, 32);
  font-weight: bold;
}

 button {
  padding: 20px;
  border: none;
  background-color: rgb(2, 2, 110);
  font-weight: 500;
  font-size: 20px;
  border-radius: 3px;
  color: #fff;
  cursor: pointer;
  transition: 0.2s ease-in-out;
  margin-top: 10px;
}

 button:hover {
  background-color: rgb(0, 0, 196);
}

`