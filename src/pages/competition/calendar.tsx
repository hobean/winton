import {
  Flex,
  Button,
  // Modal,
  // ModalOverlay,
  // ModalContent,
  // ModalHeader,
  // ModalFooter,
  // ModalBody,
  // ModalCloseButton,
  // useDisclosure,
} from "@chakra-ui/react";
import { CalendarIcon } from "@chakra-ui/icons";
export default function Calendar() {
  // const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <Flex width={"100%"} direction={"column"} alignItems={"flex-end"}>
        <Button>
          Calendar
          <CalendarIcon ml={"20px"}></CalendarIcon>
        </Button>
      </Flex>

      {/* <Button width={"100px"} onClick={onOpen}>
        Calendar
      </Button>

      {/* <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Modal Title</ModalHeader>
          <ModalCloseButton />
          <ModalBody>aasdad</ModalBody>

          <ModalFooter>
            <Button colorScheme="blue" mr={3} onClick={onClose}>
              Close
            </Button>
            <Button variant="ghost">Secondary Action</Button>
          </ModalFooter>
        </ModalContent>
      </Modal> */}
    </>
  );
}
