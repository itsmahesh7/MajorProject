import {
  Box,
  Flex,
  IconButton,
  // Button,
  HStack,
  Stack,
  useColorModeValue,
  Image,
  Icon,
  useDisclosure,
} from "@chakra-ui/react";
// import { ImCart } from "react-icons/im";
import { HiOutlineUserCircle } from "react-icons/hi";
import { Link as Linked } from "react-router-dom";
import { HamburgerIcon, CloseIcon } from "@chakra-ui/icons";
import React from "react";
import CartModal from "./Cart/CartModal";
// import { useSelector } from "react-redux";
export default function Navbar() {
  const { isOpen, onToggle, onOpen, onClose } = useDisclosure();
  // const cartItems = useSelector((state) => state.cartReducer.cartItems);
  return (
    
    <Box
      width={"100%"}
      zIndex={"sticky"}
      marginBottom={"40px"}
      position={"fixed"}
      top={0}
      left={0}
      right={0}
    >
      <Flex
        bg={useColorModeValue("white", "gray.800")}
        color={useColorModeValue("gray.600", "white")}
        minH={"90px"}
        py={{ base: 2 }}
        px={{ base: 4 }}
        borderBottom={"none"}
        boxShadow={"0 0 30px 0 rgb(156 51 83 / 20%);"}
        paddingRight="35px"
        paddingLeft="35px"
        borderStyle={"solid"}
        margin={"-10px 0 -5px 0"}
        paddingBottom={"-8px"}
        borderColor={useColorModeValue("gray.200", "gray.900")}
        align={"center"}
      >
        <Flex
          flex={{ base: 1, md: "auto" }}
          ml={{ base: -2 }}
          display={{ base: "flex", md: "none" }}
        >
          <IconButton
            onClick={onToggle}
            icon={
              isOpen ? <CloseIcon w={3} h={3} /> : <HamburgerIcon w={5} h={5} />
            }
            variant={"ghost"}
            aria-label={"Toggle Navigation"}
          />
        </Flex>
        <Flex
          flex={{ base: 1 }}
          justify={{ base: "center", md: "start" }}
          align={"center"}
        >
          <Linked to="/">
            <Image
              height="70px"
              src="pavan.png"
            />
          </Linked>

          <Flex
            display={{ base: "none", md: "none", lg: "flex" }}
            justify="space-evenly"
            height={"70px"}
            ml={10}
          >
            <DesktopNav />
          </Flex>
        </Flex>

        <HStack
          height={"70px"}
          maxWidth="fit-content"
          justify="end"
          spacing={"20"}
          align={"center"}
          flex="1"
          p="0 10px"
        >
          <Box>
            <Linked to="/signUp">
              <Icon
                stroke="rgb(156, 51, 82)"
                strokeWidth="1.5"
                as={HiOutlineUserCircle}
                w={"40px"}
                h={"40px"}
              />
            </Linked>
          </Box>
          
        </HStack>
      </Flex>
      <CartModal isOpen={isOpen} onOpen={onOpen} onClose={onClose} />
    </Box>
  );
}

const DesktopNav = () => {
  const linkColor = useColorModeValue("gray.600", "gray.200");

  return (
    <Stack direction={"row"} spacing={7} align={"center"} height={"70px"}>
      {NAV_ITEMS.map((navItem) => (
        <Box
          bg={"white"}
          height={"70px"}
          align={"center"}
          color={linkColor}
          cursor="pointer"
          padding={"20px 5px 0px 5px"}
          _hover={{
            textDecoration: "none",
            height: "70px",
            align: "center",
            color: "white",
            bg: "#9c3353",
          }}
          key={navItem.label}
        >
          <Box
            p={2}
            fontSize={"16px"}
            fontWeight={400}
            _hover={{
              textDecoration: "none",
              color: "white",
            }}
          >
            <Linked to={navItem.href}>{navItem.label}</Linked>
          </Box>
        </Box>
      ))}
    </Stack>
  );
};

const NAV_ITEMS = [
  {
    label: "Home",
    href: "/",
  },
  {
    label: "Donate",
    href: "/donate",
  },
  
  {
    label: "Apply",
    href: "/apply",
  },
  {
    label: "Recruitement",
    href: "/guidelines",
  },
  {
    label: "Contact Us",
    href: "/support",
  },
  {
    label: "Notices",
    href: "/notices",
  },
];
