import {
  Box,
  Container,
  Image,
  Stack,
  Button,
  Text,
  Link,
  Grid,
  VisuallyHidden,
  chakra,
  useColorModeValue,
  Flex,
  Center,
} from "@chakra-ui/react";
import {
  FaTwitter,
  FaYoutube,
  FaInstagram,
  FaMemory,
  FaStethoscope,
  FaBookOpen,
  FaLinkedin,
  FaFacebook,
} from "react-icons/fa";

const SocialButton = ({ children, label, href }) => {
  return (
    <chakra.button
      bg={useColorModeValue("blackAlpha.100", "whiteAlpha.100")}
      rounded={"full"}
      w={8}
      h={8}
      cursor={"pointer"}
      as={"a"}
      href={href}
      display={"inline-flex"}
      alignItems={"center"}
      justifyContent={"center"}
      transition={"background 0.3s ease"}
      _hover={{
        bg: useColorModeValue("blackAlpha.200", "whiteAlpha.200"),
      }}
    >
      <VisuallyHidden>{label}</VisuallyHidden>
      {children}
    </chakra.button>
  );
};

const Footer = () => {
  return (
    <Box
      bg={useColorModeValue("white", "gray.900")}
      color={useColorModeValue("gray.700", "gray.200")}
      boxShadow="rgba(149, 157, 165, 0.2) 0px 8px 24px"
      mt="50px"
    >
      <Container as={Stack} maxW={"100%"} paddingTop={"35px"}>
        <Flex justifyContent={"space-around"} w="100%" gap={"5px"}>
          <Stack align={"flex-start"} gap="20px" fontWeight="400" width="170px">
            <Text fontSize={"15px"} color={"#212121"}>
              <u>D</u>onate towards
            </Text>
            <Link
              href={"#"}
              _hover={{
                textDecoration: "none",
              }}
            >
              <Flex gap="4" marginTop="1">
                <Box>
                  <Center>
                    <FaStethoscope color="#9c3353" />
                  </Center>
                </Box>
                <Box>
                  <Center>
                    <Text
                      color={"#6c6c6c"}
                      fontSize={"13px"}
                      fontWeight={"400"}
                    >
                      Medical
                    </Text>
                  </Center>
                </Box>
              </Flex>
            </Link>
            <Link
              href={"#"}
              _hover={{
                textDecoration: "none",
              }}
            >
              <Flex gap="4" marginTop="1">
                <Box>
                  <Center>
                    <FaBookOpen color="#9c3353" />
                  </Center>
                </Box>
                <Box>
                  <Center>
                    <Text
                      color={"#6c6c6c"}
                      fontSize={"13px"}
                      fontWeight={"400"}
                    >
                      Education
                    </Text>
                  </Center>
                </Box>
              </Flex>
            </Link>
            <Link
              href={"#"}
              _hover={{
                textDecoration: "none",
              }}
            >
              <Flex gap="4" marginTop="1">
                <Box>
                  <Center>
                    <FaMemory color="#9c3353" />
                  </Center>
                </Box>
                <Box>
                  <Center>
                    <Text
                      color={"#6c6c6c"}
                      fontSize={"13px"}
                      fontWeight={"400"}
                    >
                      Memorial
                    </Text>
                  </Center>
                </Box>
              </Flex>
            </Link>
          </Stack>

          <Stack align={"flex-start"} width="125px">
            <Text fontSize={"15px"} color={"#212121"}>
              <u>H</u>opeHouse
            </Text>
            <Link
              href={"#"}
              color="#9c3353"
              fontSize={"14px"}
              py={1}
              fontWeight={"400"}
              _hover={{
                textDecoration: "none",
              }}
            >
              About Us
            </Link>

            <Link
              href={"#"}
              color="#9c3353"
              fontSize={"13px"}
              py={2}
              fontWeight={"400"}
              _hover={{
                textDecoration: "none",
              }}
            >
              Team
            </Link>

           

            <Link
              href={"/contactUs"}
              color="#9c3353"
              fontSize={"13px"}
              py={2}
              fontWeight={"400"}
              _hover={{
                textDecoration: "none",
              }}
            >
              Contact
            </Link>

           

            <Link
              href={"#"}
              color="#9c3353"
              fontSize={"13px"}
              py={1}
              fontWeight={"400"}
              _hover={{
                textDecoration: "none",
              }}
            >
              Thank You
            </Link>
          </Stack>

          <Stack align={"flex-start"} width="248px">
            <Text fontSize={"15px"} color={"#212121"}>
              <u>R</u>GUKT HopeHouse Address
            </Text>
            <Text
              align={"start"}
              fontSize="14px"
              fontWeight="400"
              marginBottom="40px"
              width={"206px"}
              color={"#6c6c6c"}
              line-height="1.5"
            >
              RGUKT-B hopehouse.rgukt.ac.in
              <br />
              RGUKT-B Campus, AB3.
              <br />
              Basar, Nirmal, Telangana 504107
            </Text>
            
          </Stack>

          <Stack align={"center"} width="274px">
          
            <Box width={"250px"} align={"center"} paddingLeft={"8px"}>
              <Flex gap={"12px"} align={"center"}>
                <Box>
                  <Link
                    href={"/pricing"}
                    color="#9c3353"
                    fontSize={"13px"}
                    fontWeight={"400"}
                    _hover={{
                      textDecoration: "none",
                    }}
                  >
                    Pricing
                  </Link>
                </Box>
                <Box>
                  <Link
                    href={"#"}
                    color="#9c3353"
                    fontSize={"13px"}
                    fontWeight={"400"}
                    _hover={{
                      textDecoration: "none",
                    }}
                  >
                    Reviews
                  </Link>
                </Box>
                <Box>
                  <Link
                    href={"#"}
                    color="#9c3353"
                    fontSize={"13px"}
                    fontWeight={"400"}
                    _hover={{
                      textDecoration: "none",
                    }}
                  >
                    FAQs and tips
                  </Link>
                </Box>
              </Flex>
            </Box>
            <Box paddingTop={"50px"} align={"flex-start"}>
              <Flex align={"flex-start"}>
                <Text
                  padding={" 5px 17px 0 0"}
                  align={"start"}
                  fontSize={"12px"}
                >
                  Find us on
                </Text>
                <Stack direction={"row"} spacing={1}>
                  <SocialButton label={"Twitter"} color="#9c3353" href={"#"}>
                    <FaFacebook
                      color="#9c3353"
                      bg="white"
                      borderColor="#9c3353"
                    />
                  </SocialButton>
                  <SocialButton label={"Twitter"} color="#9c3353" href={"#"}>
                    <FaTwitter color="#9c3353" />
                  </SocialButton>
                  <SocialButton label={"YouTube"} color="#9c3353" href={"#"}>
                    <FaLinkedin color="#9c3353" />
                  </SocialButton>
                  <SocialButton label={"Instagram"} color="#9c3353" href={"#"}>
                    <FaInstagram color="#9c3353" />
                  </SocialButton>
                  <SocialButton label={"Instagram"} color="#9c3353" href={"#"}>
                    <FaYoutube color="#9c3353" />
                  </SocialButton>
                </Stack>
              </Flex>
            </Box>
          </Stack>

         
        </Flex>
      </Container>

      <Box
        bg={"black"}
        color={"white"}
        borderTopWidth={1}
        borderStyle={"solid"}
        borderColor={useColorModeValue("gray.200", "gray.700")}
      >
        <Container
          padding={"0px 115px"}
          as={Stack}
          maxW={"6xl"} // height={'51px'}
          py={5}
          fontSize={"11px"}
          fontWeight={"500"}
          direction={{ base: "column", md: "row" }}
          spacing={["50px", "1"]}
          align={{ md: "center" }}
          gap="20px"
          justify={{ base: "space-around", md: "center" }}
          centerContent
        >
          <Stack direction={["column", "row"]} spacing={6}>
            <Link
              href={"/"}
              _hover={{
                textDecoration: "none",
              }}
            >
              Security & Privacy
            </Link>
            <Link
              href={"/"}
              _hover={{
                textDecoration: "none",
              }}
            >
              Condition of use
            </Link>
          </Stack>
          <Text color={["white"]}>
            © 2015 - 2024 Hopehouse.rgukt.ac.in. All rights reserved.
          </Text>
        </Container>
      </Box>

      <Link href="/contactUs">
        <Container
          centerContent
          bg={"#9c3353"}
          bottom={"0"}
          fontSize={"15px"}
          right={"70px"}
          color={"white"}
          width={"140px"}
          height={"44px"}
          position={"fixed"}
          borderTopRightRadius={"5px"}
          borderTopLeftRadius={"5px"}
        >
          <Flex
            align={"center"}
            gap={"6px"}
            paddingTop={"14px"}
            fontWeight={"400"}
          >
            <Box height={"33px"} width={"25px"}>
              <Image src="HopeHouse.jpg" />
            </Box>
            <Box paddingTop={"3px"} height={"33px"} fontSize={"14px"}>
              Contact us
            </Box>
          </Flex>
        </Container>
      </Link>
    </Box>
  );
};

export default Footer;
