import { Flex, Image } from "@chakra-ui/react";
import { FC } from "react";

const Home: FC = () => {
  return (
    <Flex width="100vw" height="100vh">
      <Image
        src="/public/images/KD_5.png"
        alt="Home Image"
        objectFit="cover"
        width="100%"
        height="100%"
      />
    </Flex>
  );
};

export default Home;
