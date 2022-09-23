import { VStack } from "@chakra-ui/react";
import { UserProvider } from "./Providers/User";
import Router from "./Services/routes";
function App() {
  return (
    <VStack
      h={"100vh"}
      w={"100vw"}
      alignItems={"flex-end"}
      position={"relative"}
      // bgColor={"#11052C"}
    >
      <UserProvider>
      <Router />
      </UserProvider>
    </VStack>
  );
}

export default App;
