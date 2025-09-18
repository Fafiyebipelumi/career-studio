// ResourcesGrid.tsx
import {
  Box,
  SimpleGrid,
  useBreakpointValue,
} from '@chakra-ui/react';
import { ResourceCard } from './ResourceCard';
import { useResourcesContext } from '../context/context';
import { MobileFilterDrawer } from './MobileFilterDrawer';

export const ResourcesGrid: React.FC = () => {
  const { filteredResources } = useResourcesContext();
  const isMobile = useBreakpointValue({ base: true, md: false });

  return (
    <Box>
      {isMobile && <MobileFilterDrawer />}
      <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} gap={6}>
        {filteredResources.map(resource => (
          <ResourceCard key={resource.id} resource={resource} />
        ))}
      </SimpleGrid>
    </Box>
  );
};