import {
  Flex,
  Box,
  FormControl,
  useToast,
  Input,
  InputGroup,
  HStack,
  InputRightElement,
  Stack,
  Button,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import * as types from "./../store/AuthReducer/actionTypes";
import { useState } from "react";
import { ViewIcon, ViewOffIcon } from "@chakra-ui/icons";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { register } from "../store/AuthReducer/actions";
export default function Signup() {
  const toast = useToast();
  const dispatch = useDispatch();
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();
  const [cred, setCred] = useState({
    fullname: "",
    email: "",
    password: "",
  });

  const formsubmit = (e) => {
    e.preventDefault();
    dispatch(register(cred)).then((d) => {
      if (d.type === types.REGISTER_SUCCESS) {
        toast({
          title: `registration success`,
          status: "success",
          duration: 3000,
          isClosable: true,
        });
        navigate("/Login");
      } else {
        toast({
          title: `registration fail`,
          status: "error",
          duration: 3000,
          isClosable: true,
        });
      }
    });
  };

  return (
    <Flex
      minH={"100vh"}
      align={"center"}
      justify={"center"}
      style={{ backgroundColor: "#fff" }}
    >
      <Box
        w="1070px"
        h="560px"
        style={{ marginLeft: "10px" }}
        rounded={"lg"}
        bg={useColorModeValue("white", "gray.700")}
        boxShadow={"1g"}
        p={10}
      >
        <HStack spacing="34px">
          <Stack w="310px" h="210px" marginLeft={3} marginTop={-60}>
            <box
              w="810px"
              h="850px"
              style={{
               
                // borderRadius: "50%",
                padding: "15px",
                marginLeft: "10px",
              }}
            >
              <img
                alt="img"
                src="pavan.png" 
              />
            </box>
            <Stack w="190px" h="110px" style={{ marginLeft: "30px" }}>
              <h1 style={{ fontSize: "30px" }}>Welcome to HopeHouse,</h1>
              <h6 style={{ fontSize: "20px", color: "grey", marginTop: "1px" }}>
                It is RGUKT Basar Hopehouse website site
              </h6>
            </Stack>
          </Stack>

          <Stack
            style={{ marginLeft: "300px", marginTop: "0px" }}
            spacing="34px"
          >
            <box
              style={{
                height: "30px",
                width: "310px",
                marginLeft: "40px",
                marginTop: "10px",
              }}
            >
              <h1 style={{ color: "grey", fontSize: "20px",fontWeight:"bold" }}>
                Sign up for Managing & Donating  as Admin/Volunteer
              </h1>
            </box>

            <form onSubmit={formsubmit}>
              <Stack pt={7}>
                <FormControl id="lastName">
                  <Input
                    type="text"
                    variant="flushed"
                    placeholder="Full Name"
                    name="fullname"
                    onChange={(e) => {
                      setCred({ ...cred, fullname: e.target.value });
                    }}
                    htmlSize={49}
                  />
                </FormControl>
              </Stack>

              <Stack pt={7}>
                <FormControl id="email">
                  <Input
                    type="email"
                    variant="flushed"
                    placeholder="Email"
                    name="email"
                    onChange={(e) => {
                      setCred({ ...cred, email: e.target.value });
                    }}
                  />
                </FormControl>
              </Stack>
              <Stack pt={7}>
                <FormControl id="password" isRequired>
                  <InputGroup>
                    <Input
                      type={showPassword ? "text" : "password"}
                      variant="flushed"
                      placeholder="Password"
                      name="password"
                      onChange={(e) => {
                        setCred({ ...cred, password: e.target.value });
                      }}
                    />
                    <InputRightElement h={"full"}>
                      <Button
                        variant={"ghost"}
                        onClick={() =>
                          setShowPassword((showPassword) => !showPassword)
                        }
                      >
                        {showPassword ? <ViewIcon /> : <ViewOffIcon />}
                      </Button>
                    </InputRightElement>
                  </InputGroup>
                </FormControl>
              </Stack>
              <Stack spacing={10} pt={10}>
                <Button
                  type="submit"
                  style={{ backgroundColor: "#9C3353" }}
                  borderRadius="33px"
                  loadingText="Submitting"
                  size="lg"
                  bg={"pink.700"}
                  color={"white"}
                  _hover={{
                    bg: "pink.500",
                  }}
                >
                  Sign up
                </Button>
              </Stack>
            </form>

            <Stack pt={10}>
              <Text align={"center"}>
                <Link to="/Login">
                  Already signed up with HopeHouse?{" "}
                  <Button
                    size="md"
                    borderRadius="33px"
                    style={{ backgroundColor: "#9C3353" }}
                    color="white"
                  >
                    Login
                  </Button>
                </Link>
              </Text>
            </Stack>
          </Stack>
        </HStack>
      </Box>
    </Flex>
  );
}
