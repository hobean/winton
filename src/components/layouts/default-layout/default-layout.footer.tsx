import { Center, Text } from "@chakra-ui/react";

const DefaultLayoutFooter = () => {
  return (
    <Center flexDirection={"column"} p={"6"} bgColor={"gray.100"}>
      <Text fontSize={"sm"}>김호빈</Text>
      <Text>2024.04.06</Text>
    </Center>
  );
};

export default DefaultLayoutFooter;
