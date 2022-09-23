import {
    Avatar,
    AvatarGroup,
    Button,
    Center,
    Grid,
    GridItem,
    HStack,
    Text,
    VStack,
  } from "@chakra-ui/react";
  import { useEffect } from "react";
  import { useContext } from "react";
  import { NavLink } from "react-router-dom";
  import { UserContext } from "../../Providers/User";
  import { getClientById } from "../../Services/api";
  
  export const Contacts = () => {
    const { isUser, setUser, clearLocalStorage } = useContext(UserContext);
    const data = {
      id: localStorage.getItem("id"),
      token: localStorage.getItem("jwt"),
    };
  
    useEffect(() => {
      getClientById({ data, setUser });
    }, []);
  
    return (
      <VStack
        bgGradient={"linear(to-b, #45aaf2, #8854d0)"}
        w={"100vw"}
        h={"auto"}
        minH={"100vh"}
        py={20}
        color={"#fff"}
      >
        
        <Grid
          pt={4}
          h="200px"
          w={"80vw"}
          maxW={"500px"}
          templateRows="repeat(8, 1fr)"
          templateColumns="repeat(5, 1fr)"
        >
          <GridItem colSpan={2} h={10} borderBottom="1px solid #fff">
            <Center h={"100%"}>
              <Text fontWeight={"bold"}>Name</Text>
            </Center>
          </GridItem>
          <GridItem colSpan={3} h={10} borderBottom="1px solid #fff">
            <HStack pl={6} h={"100%"}>
              <Text>{isUser.name}</Text>
            </HStack>
          </GridItem>
          <GridItem colSpan={2} h={10} borderBottom="1px solid #fff">
            <Center h={"100%"}>
              <Text fontWeight={"bold"}>Email</Text>
            </Center>
          </GridItem>
          <GridItem colSpan={3} h={10} borderBottom="1px solid #fff">
            <HStack pl={6} h={"100%"}>
              <Text>{isUser.email}</Text>
            </HStack>
          </GridItem>
          <GridItem colSpan={2} h={10} borderBottom="1px solid #fff">
            <Center h={"100%"}>
              <Text fontWeight={"bold"}>Cellphone</Text>
            </Center>
          </GridItem>
          <GridItem colSpan={3} h={10} borderBottom="1px solid #fff">
            <HStack pl={6} h={"100%"}>
              <Text>{isUser.cellphone}</Text>
            </HStack>
          </GridItem>
          {/* <GridItem colSpan={2} h={20} borderBottom="1px solid #fff">
            <Button>{isUser.cellphone}</Button>
          </GridItem> */}
          <GridItem colEnd={6} colSpan={5} h={20}>
            <HStack justifyContent={"space-between"} h={20}>
              <NavLink to={"/editprofile"} style={{ width: "30%" }}>
                <Button
                  bgColor={"#20bf6b"}
                  color={"#fff"}
                  w={"100%"}
                  _hover={{ filter: "brightness(1.1)" }}
                  _active={{ filter: "brightness(1.1)" }}
                  type="submit"
                >
                  Edit profile
                </Button>
              </NavLink>
              <Button
                bgColor={"#eb3b5a"}
                color={"#fff"}
                _hover={{ filter: "brightness(1.1)" }}
                _active={{ filter: "brightness(1.1)" }}
                type="submit"
                w={"30%"}
                onClick={() => clearLocalStorage()}
              >
                Exit
              </Button>
              <NavLink to={"/contacts"}>
                <Button
                  bgColor={"#8854d0"}
                  color={"#fff"}
                  _hover={{ filter: "brightness(1.1)" }}
                  _active={{ filter: "brightness(1.1)" }}
                  type="submit"
                  w={"30%"}
                  // onClick={() => clearLocalStorage()}
                >
                  Contacts
                </Button>
              </NavLink>
            </HStack>
          </GridItem>
        </Grid>
      </VStack>
    );
  };
  