import { Card, HomeContainer, ImgContainer } from "./styles/HomeStyles"

export const Home = () => {
  return (
    <>
      <HomeContainer>
        <div>
          <h1>Home</h1>
          <p>En esta clase vamos a aprender react-router-dom</p>
        </div>
        <ImgContainer>
          <Card>
            <img src="https://images.unsplash.com/photo-1626025437642-0b05076ca301?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=834&q=80" alt="" />
            <h2>La scaloneta</h2>
          </Card>
        </ImgContainer>
      </HomeContainer>
    </>
  )
}
