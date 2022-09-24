import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Button,
  Center,
  Grid,
  GridItem,
  Heading,
  HStack,
  Text,
  useToast,
  VStack,
} from "@chakra-ui/react";
import { useEffect } from "react";
import { useContext } from "react";
import { NavLink } from "react-router-dom";
import { UserContext } from "../../Providers/User";
import { deleteContact, getContacts } from "../../Services/api";

export const Contacts = () => {
  const toast = useToast();
  const { isContacts, setContacts } = useContext(UserContext);
  const data = {
    id: localStorage.getItem("id"),
    token: localStorage.getItem("jwt"),
  };

  useEffect(() => {
    getContacts({ data, setContacts });
  }, []);

  const deleteContactData = ({ dataContact }) => {
    deleteContact({ dataContact, toast });
    getContacts({ data, setContacts });
  };

  return (
    <VStack
      bgGradient={"linear(to-b, #45aaf2, #8854d0)"}
      w={"100vw"}
      h={"auto"}
      minH={"100vh"}
      justifyContent={"space-around"}
      py={20}
      color={"#fff"}
    >
      <Accordion w={"90vw"} allowToggle>
        {isContacts.length ? (
          isContacts.map((element, index) => (
            <AccordionItem key={index}>
              <AccordionButton>
                <Grid
                  w={"100%"}
                  maxW={"500px"}
                  templateRows="repeat(1, 1fr)"
                  templateColumns="repeat(5, 1fr)"
                >
                  <GridItem colSpan={2}>
                    <Center h={"100%"}>
                      <Text fontWeight={"bold"}>Name</Text>
                    </Center>
                  </GridItem>
                  <GridItem colSpan={3}>
                    <HStack pl={6} h={"100%"}>
                      <Text>{element.name}</Text>
                    </HStack>
                  </GridItem>
                </Grid>
                <AccordionIcon />
              </AccordionButton>

              <AccordionPanel pb={4}>
                <Grid
                  w={"100%"}
                  maxW={"500px"}
                  templateRows="repeat(1, 1fr)"
                  templateColumns="repeat(5, 1fr)"
                >
                  <GridItem colSpan={2} h={10} borderBottom="1px solid #fff">
                    <Center h={"100%"}>
                      <Text fontWeight={"bold"}>Email</Text>
                    </Center>
                  </GridItem>
                  <GridItem colSpan={3} h={10} borderBottom="1px solid #fff">
                    <HStack pl={6} h={"100%"}>
                      <Text>{element.email}</Text>
                    </HStack>
                  </GridItem>
                  <GridItem colSpan={2} h={10} borderBottom="1px solid #fff">
                    <Center h={"100%"}>
                      <Text fontWeight={"bold"}>Cellphone</Text>
                    </Center>
                  </GridItem>
                  <GridItem colSpan={3} h={10} borderBottom="1px solid #fff">
                    <HStack pl={6} h={"100%"}>
                      <Text>{element.cellphone}</Text>
                    </HStack>
                  </GridItem>

                  <GridItem colEnd={6} colSpan={5} h={20}>
                    <HStack justifyContent={"space-between"} h={20}>
                      <NavLink to={"/editcontact"} style={{ width: "40%" }}>
                        <Button
                          bgColor={"#20bf6b"}
                          color={"#fff"}
                          w={"100%"}
                          _hover={{ filter: "brightness(1.1)" }}
                          _active={{ filter: "brightness(1.1)" }}
                        >
                          Edit contact
                        </Button>
                      </NavLink>
                      <Button
                        bgColor={"#eb3b5a"}
                        color={"#fff"}
                        _hover={{ filter: "brightness(1.1)" }}
                        _active={{ filter: "brightness(1.1)" }}
                        w={"100%"}
                        onClick={() =>
                          deleteContactData({
                            dataContact: {
                              name: element.name,
                              data: data,
                            },
                          })
                        }
                      >
                        Delete
                      </Button>
                    </HStack>
                  </GridItem>
                </Grid>
              </AccordionPanel>
            </AccordionItem>
          ))
        ) : (
          <VStack>
            <Heading>No contacts</Heading>
          </VStack>
        )}
      </Accordion>

      <Grid
        pt={4}
        h="200px"
        w={"80vw"}
        maxW={"500px"}
        templateRows="repeat(8, 1fr)"
        templateColumns="repeat(5, 1fr)"
      >
        <GridItem colEnd={6} colSpan={5} h={20}>
          <HStack justifyContent={"space-between"} h={20}>
            <NavLink to={"/addcontact"} style={{ width: "40%" }}>
              <Button
                bgColor={"#20bf6b"}
                color={"#fff"}
                w={"100%"}
                _hover={{ filter: "brightness(1.1)" }}
                _active={{ filter: "brightness(1.1)" }}
                type="submit"
              >
                Add contact
              </Button>
            </NavLink>
            <NavLink to={"/profile"} style={{ width: "30%" }}>
              <Button
                bgColor={"#eb3b5a"}
                color={"#fff"}
                _hover={{ filter: "brightness(1.1)" }}
                _active={{ filter: "brightness(1.1)" }}
                type="submit"
                w={"100%"}
              >
                Exit
              </Button>
            </NavLink>
          </HStack>
        </GridItem>
      </Grid>
    </VStack>
  );
};
