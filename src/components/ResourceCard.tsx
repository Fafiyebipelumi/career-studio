// ResourceCard.tsx
import {
  Box,
  Card,
  CardBody,
  Heading,
  Text,
  VStack,
  Badge,
  Icon,
} from "@chakra-ui/react";
// import { ExternalLinkIcon } from '@chakra-ui/icons';
import { GoLink } from "react-icons/go";
import type { Resource } from "../types/types";
import { TvMinimalPlay } from "lucide-react";
import { PiFilePdfLight } from "react-icons/pi";

interface ResourceCardProps {
  resource: Resource;
}

export const ResourceCard: React.FC<ResourceCardProps> = ({ resource }) => {
  return (
    <Card.Root
      overflow="hidden"
      _hover={{ transform: "translateY(-2px)", shadow: "lg" }}
      transition="all 0.2s"
    >
      <Box
        position="relative"
        h="120px"
        backgroundImage={`url(${resource.bgImage})`}
        backgroundSize={"100% 100%"}
        backgroundRepeat={"no-repeat"}
        borderTopRadius="md"
      >
        {/* <Box position="absolute" top={4} right={4}>
          <Icon as={resource.icon || ImAttachment} color="white" boxSize={5} />
        </Box> */}
        {resource.type === "DOC" && (
          <Box position="absolute" bottom={4} left={4}>
            <Icon as={GoLink} color="black" boxSize={6} />
          </Box>
        )}
        {resource.type === "Link" && (
          <Box position="absolute" bottom={4} left={4}>
            <Icon as={GoLink} color="black" boxSize={6} />
          </Box>
        )}
        {resource.type === "Video" && (
          <Box position="absolute" bottom={4} left={4}>
            <Icon as={TvMinimalPlay} color="black" boxSize={6} />
          </Box>
        )}
        {resource.type === "PDF" && (
          <Box position="absolute" bottom={4} left={4}>
            <Icon as={PiFilePdfLight} color="black" boxSize={6} />
          </Box>
        )}
      </Box>
      <CardBody>
        <VStack align="start" gap={3}>
          <Heading size="sm" color="gray.800" lineHeight="short">
            {resource.title}
          </Heading>
          <Text fontSize="sm" color="gray.600">
            {resource.description}
          </Text>
          <Badge colorScheme="gray" size="sm">
            {resource.foundationalPrinciple}
          </Badge>
        </VStack>
      </CardBody>
    </Card.Root>
  );
};
