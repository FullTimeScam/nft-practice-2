import { Flex, Image } from "@chakra-ui/react";
import { FC } from "react";
import { Link } from "react-router-dom";

const Home: FC = () => {
  return (
    <Flex width="100vw" height="100vh">
      <Link to="/sale-nft">
        <Image
          src="/images/KD_5.png"
          alt="Home Image"
          objectFit="cover"
          width="100%"
          height="100%"
        />
      </Link>
    </Flex>
  );
};

export default Home;
