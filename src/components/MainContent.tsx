// MainContent.tsx
import {
  Box,
  Container,
  VStack,
  HStack,
  Heading,
  Text,
  useBreakpointValue,
} from '@chakra-ui/react';
import { SearchBar } from './SearchBar';
import { FilterSidebar } from './FilterSidebar';
import { ResourcesGrid } from './ResourceGrid';

export const MainContent: React.FC = () => {
  const isMobile = useBreakpointValue({ base: true, lg: false });

  return (
    <Box bg="gray.50" minH="100vh">
      <Container maxW="7xl" py={8}>
        <VStack gap={8} mb={8}>
          <VStack gap={4} textAlign="center">
            <Heading size="2xl" color="gray.800">Resources</Heading>
            <Text color="gray.600" maxW="lg">
              Consectetur adipiscing elit duis tristique sollicitudin nibh sit amet commodo 
              nulla facilisi nullam vehicula ipsum a arcu cursus vitae congue
            </Text>
          </VStack>
          <SearchBar />
        </VStack>

        {isMobile ? (
          <ResourcesGrid />
        ) : (
          <HStack align="start" gap={8}>
            <Box w="280px" flexShrink={0}>
              <FilterSidebar />
            </Box>
            <Box flex={1}>
              <ResourcesGrid />
            </Box>
          </HStack>
        )}
      </Container>
    </Box>
  );
};