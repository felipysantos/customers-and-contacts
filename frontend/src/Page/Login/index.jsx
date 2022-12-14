import {
  Button,
  Center,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Grid,
  GridItem,
  Heading,
  Input,
  Text,
  useToast,
} from "@chakra-ui/react";

import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { NavLink } from "react-router-dom";
import { loginClient } from "../../Services/api";
import { useContext } from "react";
import { UserContext } from "../../Providers/User";

export const Login = () => {
  const { setUser } = useContext(UserContext);
  const toast = useToast();
  const signUpSchema = yup.object().shape({
    email: yup.string().email("Enter a valid email").required("Required field"),

    password: yup.string().required("Required field"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(signUpSchema) });

  const handleCreateUser = (data) => {
    loginClient({ data, setUser, toast });
  };

  return (
    <Center
      flexDir={"column"}
      bgGradient={"linear(to-b, #45aaf2, #8854d0)"}
      w={"100%"}
      h={"auto"}
      minH={"100vh"}
      py={20}
      color={"#fff"}
    >
      <Heading>Login</Heading>
      <form
        onSubmit={handleSubmit(handleCreateUser)}
        style={{ width: "100vw" }}
      >
        <Center>
          <Grid
            templateRows="repeat(4, 1fr)"
            templateColumns="repeat(2, 1fr)"
            gap={4}
            w={"80%"}
            maxW={"400px"}
          >
            {/* EMAIL */}
            <GridItem colSpan={2} rowSpan={1}>
              <FormControl isInvalid={errors.email}>
                <FormLabel>
                  Email
                  <Input
                    placeholder="dovahkiin@email.com"
                    _placeholder={{ color: "#778ca3" }}
                    {...register("email")}
                    type="email"
                    variant={"filled"}
                    border={
                      errors.email ? "2px solid #FF530D" : "2px solid #000"
                    }
                    bgColor={"#e1e1e1"}
                    color={"#5e6b8a"}
                    borderRadius={4}
                    _focusWithin={{
                      border: "2px solid #5e6b8a",
                      boxShadow: "none",
                      color: "#5e6b8a",
                      bgColor: "#d1d8e0",
                    }}
                  />
                </FormLabel>
                <FormErrorMessage>Email invalid</FormErrorMessage>
              </FormControl>
            </GridItem>

            {/* PASSWORD */}
            <GridItem colSpan={2} rowSpan={1}>
              <FormControl isInvalid={errors.password}>
                <FormLabel>
                  Password
                  <Input
                    placeholder="******"
                    _placeholder={{ color: "#778ca3" }}
                    {...register("password")}
                    type="password"
                    variant={"filled"}
                    border={errors.password ? "2px solid #FF530D" : "2px solid"}
                    bgColor={"#e1e1e1"}
                    color={"#5e6b8a"}
                    borderRadius={4}
                    _focusWithin={{
                      border: "2px solid #5e6b8a",
                      boxShadow: "none",
                      color: "#5e6b8a",
                      bgColor: "#d1d8e0",
                    }}
                  />
                </FormLabel>
                <FormErrorMessage>Password invalid</FormErrorMessage>
              </FormControl>
            </GridItem>

            <GridItem colSpan={2}>
              <Button
                bgColor={"#2d98da"}
                color={"#fff"}
                _hover={{ filter: "brightness(1.1)" }}
                type="submit"
                w={"100%"}
              >
                LOGIN
              </Button>
              <Text textAlign={"center"} color={"#fff"}>
                Don't have an account?{" "}
                <NavLink to="/signup">
                  <Button
                    variant={"link"}
                    color={"#fed330"}
                    fontWeight={"bold"}
                  >
                    Signup
                  </Button>
                </NavLink>
              </Text>
            </GridItem>
          </Grid>
        </Center>
      </form>
    </Center>
  );
};
