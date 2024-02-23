import { Box, Flex, Image, Text } from "@chakra-ui/react";
import React from "react";

const ReviewCard = () => {
  return (
    <div>
      <Box>
        <Text fontSize={"25px"} mt={"6%"} mb={"3%"}>
          What our college students say about HopeHouse
        </Text>
      </Box>
      <Box w={"60%"} m={"auto"} mb={"3%"}>
        <Flex>
          <Box
            mr={"-6%"}
            h={"210px"}
            zIndex={1}
            opacity={1}
            w={"250px"}
            boxShadow="dark-lg"
            bg="white"
            mt={"6%"}
          >
            <Box>
              <br />
              <Image
                src="https://cimages.milaap.org/milaap/image/upload/c_fill,g_faces,h_100,w_100/v1598249693/production/testimonials/user-28_1598249692.jpg"
                h={"100px"}
                w={"100px"}
                border={"1px solid #9c3353"}
                borderRadius={"50%"}
                m={"auto"}
              />
            </Box>
            <Box w={"80%"} m={"auto"}>
              <Text>XYZ</Text>
              <Flex justifyContent={"space-around"}>
                <Image
                  src="https://cimages.milaap.org/milaap/image/upload/c_fill,g_faces,h_30,w_30/v1598249700/production/testimonials/facebook_icon_1598249692.jpg"
                  h={"20px"}
                  mt={"4%"}
                />
                <Text fontSize={"xs"} mt={"4%"}>
                  XYZ
                </Text>
              </Flex>
            </Box>
          </Box>
          <Box
            h={"240px"}
            w={"100%"}
            m={"auto"}
            mt={"4%"}
            bg="white"
            zIndex={0}
            boxShadow="dark-lg"
            textAlign={"justify"}
          >
            <Text w={"68%"} float={"right"} mr={"6%"} mt={"5%"}>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consequatur similique dignissimos voluptas officiis omnis excepturi tempore iste recusandae delectus tenetur culpa perferendis reprehenderit velit numquam cum sequi, est esse itaque!
            </Text>
          </Box>
        </Flex>
      </Box>
    </div>
  );
};

export default ReviewCard;
