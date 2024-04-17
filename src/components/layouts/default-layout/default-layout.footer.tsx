import { useAlpha } from "@/hooks";
import { Center, Flex, Text } from "@chakra-ui/react";

const DefaultLayoutFooter = () => {
  const { alpha } = useAlpha();

  return (
    <Center bgColor={alpha(50)}>
      <Flex direction={"column"} w={"container.lg"} py={"6"}>
        <Text fontSize={"sm"}>김호빈</Text>
        <Text>2024.04.06</Text>
      </Flex>
    </Center>
  );
};

export default DefaultLayoutFooter;
