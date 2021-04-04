import './App.css';
import styled from 'styled-components';
import Header from './components/Header/Header';


const Title = styled.h1`
  font-size: 25px;
  text-align: center;
  margin-top: 50px;
`;


function App() {
  return (
    <div className="App">
      <Header />
      <Title>
        Hello World
      </Title>
    </div>
  );
}

export default App;
