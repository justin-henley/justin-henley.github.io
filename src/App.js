import Content from "./Content";
import styled from "styled-components";
import Header from "./Header";
import Footer from "./Footer";

function App() {
  return (
    <Wrapper>
      <Header />
      <Content />
      <Footer />
    </Wrapper>
  );
}

const Wrapper = styled.main`
  display: flex;
  flex-direction: column;
  width: 90vw;
  margin: 2em auto 2em auto;

  @media only screen and (min-width: 768px) {
    width: 100vw;
    max-width: 1200px;
  }
`;

export default App;
