import {
  Avatar,
  AvatarGroup,
  Button,
  Center,
  Grid,
  GridItem,
  HStack,
  Input,
  Text,
  VStack,
} from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { useContext } from "react";
import { NavLink } from "react-router-dom";
import { UserContext } from "../../Providers/User";
import { getClientById, updateClient } from "../../Services/api";

import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { mask as masker, unMask } from "remask";

import * as yup from "yup";

export const EditProfile = () => {
  const signUpSchema = yup.object().shape({
    name: yup.string(),
    // .matches(/^[A-zÀ-ú]*([A-z-À-ú ]*[A-z-À-ú])$/, "Just letters"),

    email: yup.string().email("Enter a valid email"),

    cellphone: yup.string(),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(signUpSchema) });

  const [isMaskValue, setMaskValue] = useState("");

  const onChangeMaskerade = (ev) => {
    let cell = unMask(ev.target.value);
    setMaskValue(masker(cell, ["(99) 9 9999-9999"]));
  };

  const { isUser, setUser } = useContext(UserContext);

  const data = {
    id: localStorage.getItem("id"),
    token: localStorage.getItem("jwt"),
  };

  const handleUpdateUser = (datas) => {
    let cell = unMask(datas.cellphone);
    let newData = {
      id: data.id,
      token: data.token,
      name: datas.name,
      email: datas.email,
      cellphone: parseInt(cell),
    };
    if (!datas.name.length) {
      newData.name = isUser.name;
    }
    if (!datas.email.length) {
      newData.email = isUser.email;
    }
    if (!datas.cellphone.length) {
      newData.cellphone = parseInt(isUser.cellphone);
    }

    // console.log(newData);
    updateClient({newData, setUser})
  };

  useEffect(() => {
    getClientById({ data, setUser });
  }, [data]);

  return (
    <VStack
      bgGradient={"linear(to-b, #45aaf2, #8854d0)"}
      w={"100vw"}
      h={"auto"}
      minH={"100vh"}
      py={20}
      color={"#fff"}
    >
      <AvatarGroup>
        <Avatar size="2xl" name={isUser.name} />
      </AvatarGroup>
      <form onSubmit={handleSubmit(handleUpdateUser)}>
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
              <Input
                placeholder={isUser.name}
                {...register("name")}
                autoFocus
                type="text"
                variant={"unstyled"}
                _placeholder={{ color: errors.name ? "#FF530D" : "#fff" }}
                borderRadius={0}
                _focusWithin={{
                  _placeholder: { color: "black" },
                  border: "none",
                  boxShadow: "none",
                  padding: "1",
                  color: "#000",
                  bgColor: "#d1d8e0",
                }}
              />
            </HStack>
          </GridItem>
          <GridItem colSpan={2} h={10} borderBottom="1px solid #fff">
            <Center h={"100%"}>
              <Text fontWeight={"bold"}>Email</Text>
            </Center>
          </GridItem>
          <GridItem colSpan={3} h={10} borderBottom="1px solid #fff">
            <HStack pl={6} h={"100%"}>
              <Input
                placeholder={isUser.email}
                {...register("email")}
                type="email"
                variant={"unstyled"}
                _placeholder={{ color: errors.name ? "#FF530D" : "#fff" }}
                // value={isUser.email}
                borderRadius={0}
                _focusWithin={{
                  _placeholder: { color: "black" },
                  border: "none",
                  boxShadow: "none",
                  padding: "1",
                  color: "#000",
                  bgColor: "#d1d8e0",
                }}
              />
            </HStack>
          </GridItem>
          <GridItem colSpan={2} h={10} borderBottom="1px solid #fff">
            <Center h={"100%"}>
              <Text fontWeight={"bold"}>Cellphone</Text>
            </Center>
          </GridItem>
          <GridItem colSpan={3} h={10} borderBottom="1px solid #fff">
            <HStack pl={6} h={"100%"}>
              <Input
                placeholder={isUser.cellphone}
                {...register("cellphone")}
                type="text"
                variant={"unstyled"}
                onChange={onChangeMaskerade}
                value={isMaskValue}
                _placeholder={{ color: errors.name ? "#FF530D" : "#fff" }}
                borderRadius={0}
                _focusWithin={{
                  _placeholder: { color: "black" },
                  border: "none",
                  boxShadow: "none",
                  padding: "1",
                  color: "#000",
                  bgColor: "#d1d8e0",
                }}
              />
            </HStack>
          </GridItem>
          {/* <GridItem colSpan={2} h={20} borderBottom="1px solid #fff">
          <Button>{isUser.cellphone}</Button>
        </GridItem> */}
          <GridItem colEnd={6} colSpan={5} h={20}>
            <HStack justifyContent={"space-between"} h={20}>
              <Button
                bgColor={"#20bf6b"}
                color={"#fff"}
                _hover={{ filter: "brightness(1.1)" }}
                _active={{ filter: "brightness(1.1)" }}
                type="submit"
                w={"40%"}
              >
                Accept
              </Button>
              <NavLink to={"/profile"} style={{ width: "40%" }}>
                <Button
                  bgColor={"#eb3b5a"}
                  color={"#fff"}
                  _hover={{ filter: "brightness(1.1)" }}
                  _active={{ filter: "brightness(1.1)" }}
                  // type="submit"
                  w={"100%"}
                  // onClick={() => clearLocalStorage()}
                >
                  Back
                </Button>
              </NavLink>
            </HStack>
          </GridItem>
        </Grid>
      </form>
    </VStack>
  );
};
