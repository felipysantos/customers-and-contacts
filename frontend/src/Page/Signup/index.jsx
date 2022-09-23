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
} from "@chakra-ui/react";

import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { signupClient } from "../../Services/api";
import { mask as masker, unMask } from "remask";
import { useState } from "react";
import { NavLink  } from "react-router-dom";
import { useNavigate } from "react-router-dom";
export const Signup = () => {
const history = useNavigate()

  const signUpSchema = yup.object().shape({
    name: yup
      .string()
      .required("Required field")
      .matches(/^[A-zÀ-ú]*([A-z-À-ú ]*[A-z-À-ú])$/, "Just letters"),

    email: yup.string().email("Enter a valid email").required("Required field"),

    cellphone: yup.string().required("Required field"),

    password: yup
      .string()
      .min(6, "Minimum of 6 characters")
      .max(16, "Maximum of 16 characters")
      .required("Required field"),

    confirm_password: yup
      .string()
      .required("Required field")
      .oneOf([yup.ref("password")], "Passwords must be the same"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(signUpSchema) });

  const handleCreateUser = (data) => {
    let cell = unMask(data.cellphone);
    // let numbers = data.cellphone.replace(/[^0-9]/g, "");
    delete data.confirm_password;
    // handleSignUpAuth(data, history, toast);
    data.cellphone = parseInt(cell);
    
    signupClient({ data, history });
  };

  const [isMaskValue, setMaskValue] = useState("");

  const onChangeMaskerade = (ev) => {
    let cell = unMask(ev.target.value);
    setMaskValue(masker(cell, ["(99) 9 9999-9999"]));
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
      <Heading>Signup</Heading>
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
            // display={{ base: "none", lg: "grid" }}
          >
            <GridItem colSpan={2} rowSpan={1}>
              {/* NAME */}
              <FormControl isInvalid={errors.name}>
                <FormLabel>
                  Name
                  <Input
                    placeholder="Dovahkiin Draconato"
                    _placeholder={{ color: "#778ca3" }}
                    {...register("name")}
                    type="text"
                    variant={"filled"}
                    border={
                      errors.name ? "2px solid #FF530D" : "2px solid #A5AFC4"
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
                <FormErrorMessage>Name invalid</FormErrorMessage>
              </FormControl>
            </GridItem>
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
            {/* CELLPHONE */}
            <GridItem colSpan={2} rowSpan={1}>
              <FormControl isInvalid={errors.cellphone}>
                <FormLabel>
                  Cellphone
                  <Input
                    placeholder="(00) 0 0000-0000"
                    _placeholder={{ color: "#778ca3" }}
                    {...register("cellphone")}
                    type="text"
                    variant={"filled"}
                    onChange={onChangeMaskerade}
                    value={isMaskValue}
                    border={
                      errors.cellphone ? "2px solid #FF530D" : "2px solid"
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
                <FormErrorMessage>Cellphone invalid</FormErrorMessage>
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
            {/* CONFIRM PASSWORD */}
            <GridItem colSpan={2} rowSpan={1}>
              <FormControl isInvalid={errors.confirm_password}>
                <FormLabel>
                  Confirm Password
                  <Input
                    placeholder="******"
                    _placeholder={{ color: "#778ca3" }}
                    {...register("confirm_password")}
                    type="password"
                    variant={"filled"}
                    border={
                      errors.confirm_password
                        ? "2px solid #FF530D"
                        : "2px solid"
                    }
                    bgColor={"#e1e1e1 "}
                    // color={"#5e6b8a"}
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
                // bgGradient={"linear(to-r, #45aaf2, #3867d6)"}
                color={"#fff"}
                _hover={{ filter: "brightness(1.1)" }}
                type="submit"
                w={"100%"}
              >
                SIGNUP
              </Button>
              <Text textAlign={"center"} color={"#fff"}>
                Already have an account?{" "}
                <NavLink
                  to="/login"
                  // onClick={() => handleNavigation("/login")}
                >
                  <Button
                    variant={"link"}
                    color={"#fed330"}
                    fontWeight={"bold"}
                  >
                    Login
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
