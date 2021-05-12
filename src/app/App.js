import { Flex, Box } from "../components";
import Header from "./components/Header";
import NewsSection from "./components/NewsSection";
import PressList from "./components/PressList";

const App = () => {
  return (
    <Box>
      <Header />
      <Flex as="main" bg="grey">
        <PressList />
        <NewsSection />
      </Flex>
    </Box>
  );
};

export default App;
