import styled,{ createGlobalStyle } from "styled-components";
import galaxyImage from './images/galaxy.jpg';
import quizImage from './images/quiz.jpg';

export const GlobalStyle = createGlobalStyle `

html{
    height: 100%;
}

body{
    background-image: url(${quizImage});
    background-size : cover;
    margin : 0;
    padding : 0 20px;
    display : flex;
    justify-content : center;
}

*{
    box-sizing: border-box;
    font-family : 'Nunito', sans-serif;
}

`

export const Wrapper = styled.div `
display : flex;
flex-direction: column;
align-items : center;


> p {
    color : #fff;
}

.score {
    color : #fff
    font-size : 5rem;
    margin : 0;
}

h1{
    font-family : Nunito , sans-serif;
    background-image : linear-gradient(180deg, #fff, #0099FF);
    background-size: 100%;
    border-radius : 10px;
    padding-left: 20px;
    padding-right: 20px;
    --webkit-background-clip: text;
    --webkit-text-fill-color: transparent;
    --moz-backgorund-clip: text;
    --moz-text-fill-color: transparent;
    filter: drop-shadow(2px 2px #0085a3);
    font-size: 70px;
    font-weight: 400;
    color : #0099FF;
    text-shadow: 2px 2px #ff0000;
    text-allign: center;
    margin: 20px;
}

.start{
    cursor: pointer;
    background-image: linear-gradient(180deg, #fff, #DAF7A6);
    border: 2px solid #d38558;
    border-radius: 5px;
    height:40px;
    margin: 20pz 0;
    padding: 0 40px;
}

.next{
    margin-top: 80px;
    cursor: pointer;
    background: linear-gradient(180deg, #fff, #0099FF);
    border: 2px solid #d38558;
    border-radius: 5px;
    height:40px;
    margin: 20pz 0;
    padding: 0 40px;
}

.start{
    max-width : 40px;
}
`

