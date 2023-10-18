import { Box, Button, Flex } from "@chakra-ui/react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <Box as={"header"} h={"24"} bgColor={"red.500"}>
      header
      <Flex as={"nav"} justifyContent={"space-between"}>
        <Link to="/">Winton</Link>
        <Link to="/">대회정보</Link>
        <Link to="/">선수|클럽정보</Link>
        <Link to="/">장터</Link>
        <Link to="/">고객지원</Link>
        <Link to="/">로그인 / 로그아웃</Link>
        <Button colorScheme="blue">검색창</Button>
      </Flex>
    </Box>
  );
};

export default Header;
