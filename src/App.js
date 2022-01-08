import { ApolloProvider } from "@apollo/client";
import client from "./ApolloConfiguration";
import Home from "./Home";

function App() {
  return (
    <ApolloProvider client={client}>
      <Home />
    </ApolloProvider>
  );
}

export default App;
