// FilterSidebar.tsx
import {
  VStack,
  Box,
  Heading,
  Text,
  Checkbox,
  CheckboxGroup,
} from "@chakra-ui/react";
import { useResourcesContext } from "../context/context";

export const FilterSidebar: React.FC = () => {
  const { filters, setFilters } = useResourcesContext();

  const foundationalPrinciples = [
    "Secure Base",
    "Sense of Appreciation",
    "Learning Organisation",
    "Mission and Vision",
    "Wellbeing",
  ];
  const documentTypes = ["DOC", "Link", "PDF", "Video"];
  const categories = ["Sample"];

  return (
    <VStack align="stretch" p={6} bg="white" borderRadius="md">
      <Heading size="md" color="gray.800">
        Filters
      </Heading>

      <VStack align="stretch">
        <Box>
          <Text fontWeight="semibold" mb={3}>
            Key Foundational Principles
          </Text>
          <CheckboxGroup
            value={filters.foundationalPrinciples}
            onValueChange={(values: string[]) =>
              setFilters((prev) => ({
                ...prev,
                foundationalPrinciples: values,
              }))
            }
          >
            <VStack align="start" gap={2}>
              {foundationalPrinciples.map((principle) => (
                // <Checkbox variant={Checkbox.Root} >
                //   {principle}
                // </Checkbox>
                <Checkbox.Root
                key={principle}
                value={principle}
                size="sm"
                //   checked={checked}
                //   onCheckedChange={(e) => setChecked(!!e.checked)}
                >
                  <Checkbox.HiddenInput />
                  <Checkbox.Control />
                  <Checkbox.Label>{principle}</Checkbox.Label>
                </Checkbox.Root>
              ))}
            </VStack>
          </CheckboxGroup>
        </Box>

        <Box>
          <Text fontWeight="semibold" mb={3}>
            Document type
          </Text>
          <CheckboxGroup
            value={filters.documentTypes}
            onValueChange={(values: string[]) =>
              setFilters((prev) => ({
                ...prev,
                documentTypes: values,
              }))
            }
          >
            <VStack align="start" gap={2}>
              {documentTypes.map((type) => (
                <Checkbox.Root key={type} value={type} size="sm">
                  <Checkbox.HiddenInput />
                  <Checkbox.Control />
                  <Checkbox.Label>{type}</Checkbox.Label>
                </Checkbox.Root>
              ))}
            </VStack>
          </CheckboxGroup>
        </Box>

        <Box>
          <Text fontWeight="semibold" mb={3}>
            Categories
          </Text>
          <CheckboxGroup
            value={filters.categories}
            onValueChange={(values: string[]) =>
              setFilters((prev) => ({
                ...prev,
                categories: values,
              }))
            }
          >
            <VStack align="start" gap={2}>
              {categories.map((category) => (
                <Checkbox.Root key={category} value={category} size="sm">
                  <Checkbox.HiddenInput />
                  <Checkbox.Control />
                  <Checkbox.Label>{category}</Checkbox.Label>
                </Checkbox.Root>
              ))}
            </VStack>
          </CheckboxGroup>
        </Box>
      </VStack>
    </VStack>
  );
};
