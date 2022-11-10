import { Container } from "./App.styles"
import { Header } from "./components/Header"
import { AppRoutes } from "./router"

function App() {
  return (
   <Container>
    <Header />
    <AppRoutes />
   </Container>
  )
}

export default App
