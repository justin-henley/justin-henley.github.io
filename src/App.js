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
  align-items: center;
`;

export default App;
