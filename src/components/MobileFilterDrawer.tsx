// MobileFilterDrawer.tsx
import {
  Button,
  Collapsible,
  Box,
} from "@chakra-ui/react";
import { FilterSidebar } from "./FilterSidebar";
import { ListFilter } from "lucide-react";
// import { useState } from "react";

export const MobileFilterDrawer: React.FC = () => {
  //   const { onOpen } = useDisclosure();

//   const [open, setOpen] = useState<boolean>(false);

  return (
    <>
      <Collapsible.Root unmountOnExit>
        <Collapsible.Trigger paddingY="3" w={'full'}>
          <Button
            variant="outline"
            w="full"
            mb={4}
          >
           <ListFilter /> Show Filters
          </Button>
        </Collapsible.Trigger>
        <Collapsible.Content>
          <Box padding="4">
            <FilterSidebar />
          </Box>
        </Collapsible.Content>
      </Collapsible.Root>

      {/* <Button variant="outline" onClick={() => setOpen(true)} w="full" mb={4}>
        <FaFilter /> Show Filters
      </Button>

      <Drawer.Root
        open={open}
        onOpenChange={(e) => setOpen(e.open)}
        placement="bottom"
        closeOnInteractOutside={true}
        size="full"
      >
        <Drawer.Backdrop />
        <Drawer.Content>
          <CloseButton />
          <Drawer.Header>Filters</Drawer.Header>
          <Drawer.Body>
            <FilterSidebar />
          </Drawer.Body>
        </Drawer.Content>
      </Drawer.Root> */}
    </>
  );
};
