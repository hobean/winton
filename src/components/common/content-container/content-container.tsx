import { Center } from "@chakra-ui/react";

interface ContentContainerProps {
  children?: React.ReactNode;
}

const ContentContainer = ({ children }: ContentContainerProps) => {
  return <Center flex={1}>{children}</Center>;
};

export default ContentContainer;
