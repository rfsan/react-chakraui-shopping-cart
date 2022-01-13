import { Container, Flex } from "@chakra-ui/react";
// Components
import Cart from "./components/Cart";
import Details from "./components/Details";

export default function App() {
  return (
    <Container maxW="container.xl" p={0}>
      <Flex
        h={{ base: "auto", md: "100vh" }}
        py={[0, 10, 20]}
        direction={{ base: "column-reverse", md: "row" }}
      >
        <Details />
        <Cart />
      </Flex>
    </Container>
  );
}
