import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}
body{
   background: #1b1b1b ;  
}
h2{
    font-weight: lighter;
    font-size: 3rem;
    color: white;
    font-family: 'Shippori Antique', sans-serif;
    
}
h3{
    color: white;
    font-size: 1rem;
}
h4{
    font-weight: bold;
    font-size: 2rem;
}
a{
    font-size: 1.1rem;
}
span{
    font-weight: bold;
    color:#f0d185;
}
p{
    padding: 3rem 0rem;
    color: #ccc;
    font-size: 1.4rem;
    line-height: 150%;
    font-family: 'Shippori Antique', sans-serif;
}
button{
    font-weight: bold;
    font-size: 1.1rem;
    cursor: pointer;
    padding: 1rem 2rem;
    border: 3px solid #e1ce3f;
    border-radius: 20%;
    background: transparent;
    color: white;
    font-family: 'Oswald', sans-serif;
    transition: all 0.5s ease;
    &:hover{
        background-color: #f0d185;
        color: black;
    } 
} .link {
    text-decoration: none;
} 
html{
    @media (max-width: 1100px){
        font-size: 75%;
    }
    @media (max-width: 700px){
        display: block;
    }
} 
`;

export default GlobalStyle;
