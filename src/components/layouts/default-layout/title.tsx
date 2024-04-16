import { Text } from "@chakra-ui/react";

export default function Title({ title }: { title: string }) {
  return (
    <>
      <Text m={"3"} fontSize={"4xl"}>
        {title}
      </Text>
    </>
  );
}
