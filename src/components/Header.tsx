// // Header.tsx
// import {
//   Box,
//   Container,
//   Text,
//   HStack,
//   Flex,
//   Spacer,
//   Switch,
//   Avatar,
//   Portal,
//   Menu,
//   useBreakpointValue,
//   Image,
// } from "@chakra-ui/react";
// import { MenuIcon } from "lucide-react";

// export const Header: React.FC = () => {
//   const isMobile = useBreakpointValue({ base: true, md: false });

//   return (
//     <Box bg="white" borderBottom="1px" borderColor="gray.200" py={4}>
//       <Container maxW="7xl">
//         <Flex align="center">
//           <HStack>
//             <Image src="/career-studio-logo.png" alt="Logo" />
//             <Spacer w={8} />
//             {!isMobile && (
//               <HStack gap={8}>
//                 <Text color="gray.600" fontWeight={'bold'}>Dashboard</Text>
//                 <Text
//                   color="blue.500"
//                   borderBottom="2px"
//                   borderColor="blue.500"
//                 //   pb={1}
//                   fontWeight={'bold'}
//                 >
//                   Resources
//                 </Text>
//                 <Text color="gray.600" fontWeight={'bold'}>Toolkit</Text>
//               </HStack>
//             )}
//           </HStack>

//           <Spacer />

//           <HStack gap={6}>
//             <HStack>
//               <Switch.Root>
//                 <Switch.HiddenInput />
//                 <Switch.Control />
//                 <Switch.Label />
//               </Switch.Root>
//               <Text fontSize="sm" color="gray.600" fontWeight={'bold'}>
//                 Switch to Employee
//               </Text>
//             </HStack>
//             <Menu.Root>
//               <Menu.Trigger asChild>
//                 <HStack>
//                       <Avatar.Root>
//                         {!isMobile && <Avatar.Fallback name="Jonathan Adidas" fontWeight={'bold'}/>}
//                       </Avatar.Root>
//                   {!isMobile && <Text fontSize="sm" fontWeight={'bold'}>Jonathan</Text>}
//                 </HStack>
//               </Menu.Trigger>
//               <Portal>
//                 <Menu.Positioner>
//                   <Menu.Content>
//                     <Menu.Item value="new-txt-a">Profile</Menu.Item>
//                     <Menu.Item value="new-txt-a">Settings</Menu.Item>
//                     <Menu.Item value="new-txt-a">Logout</Menu.Item>
//                   </Menu.Content>
//                 </Menu.Positioner>
//               </Portal>
//             </Menu.Root>

//             {isMobile && <MenuIcon />}
//           </HStack>
//         </Flex>
//       </Container>
//     </Box>
//   );
// };

// Header.tsx
import {
  Box,
  Container,
  Text,
  HStack,
  Flex,
  Spacer,
  Switch,
  Avatar,
  Portal,
  Menu,
  useBreakpointValue,
  Image,
  VStack,
  Drawer,
  CloseButton,
} from "@chakra-ui/react";
import { MenuIcon } from "lucide-react";


export const Header: React.FC = () => {
  const isMobile = useBreakpointValue({ base: true, md: false });

  return (
    <Box bg="white" borderBottom="1px" borderColor="gray.200" py={4}>
      <Container maxW="7xl">
        <Flex align="center">
          <HStack>
            <Image src="/career-studio-logo.png" alt="Logo" />
            <Spacer w={8} />
            {!isMobile && (
              <HStack gap={8}>
                <Text color="gray.600" fontWeight={"bold"}>
                  Dashboard
                </Text>
                <Text
                  color="blue.500"
                  borderBottom="2px"
                  borderColor="blue.500"
                  fontWeight={"bold"}
                >
                  Resources
                </Text>
                <Text color="gray.600" fontWeight={"bold"}>
                  Toolkit
                </Text>
              </HStack>
            )}
          </HStack>

          <Spacer />

          <HStack gap={6}>
            <HStack>
              <Switch.Root>
                <Switch.HiddenInput />
                <Switch.Control />
                <Switch.Label />
              </Switch.Root>
              <Text fontSize="sm" color="gray.600" fontWeight={"bold"}>
                Switch to Employee
              </Text>
            </HStack>
            <Menu.Root>
              <Menu.Trigger asChild>
                <HStack>
                  <Avatar.Root>
                    {!isMobile && (
                      <Avatar.Fallback
                        name="Jonathan Adidas"
                        fontWeight={"bold"}
                      />
                    )}
                    {isMobile && (
                      <Avatar.Fallback
                        name="Jonathan Adidas"
                        fontWeight={"bold"}
                      />
                    )}
                  </Avatar.Root>
                  {!isMobile && (
                    <Text fontSize="sm" fontWeight={"bold"}>
                      Jonathan
                    </Text>
                  )}
                </HStack>
              </Menu.Trigger>
              <Portal>
                <Menu.Positioner>
                  <Menu.Content>
                    <Menu.Item value="profile">Profile</Menu.Item>
                    <Menu.Item value="settings">Settings</Menu.Item>
                    <Menu.Item value="logout">Logout</Menu.Item>
                  </Menu.Content>
                </Menu.Positioner>
              </Portal>
            </Menu.Root>
            {isMobile && (
              <Drawer.Root>
                <Drawer.Trigger asChild>
                  <MenuIcon style={{ cursor: "pointer" }} />
                </Drawer.Trigger>
                <Portal>
                  <Drawer.Backdrop />
                  <Drawer.Positioner>
                    <Drawer.Content>
                      <Drawer.Header>
                        <Drawer.Title><Image src="/career-studio-logo.png" alt="Logo" /></Drawer.Title>
                      </Drawer.Header>
                      <Drawer.Body>
                        <VStack gap={12} align="start">
                          <Text
                            color="gray.600"
                            fontWeight={"bold"}
                            cursor="pointer"
                          >
                            Dashboard
                          </Text>
                          <Text
                            color="blue.500"
                            fontWeight={"bold"}
                            cursor="pointer"
                          >
                            Resources
                          </Text>
                          <Text
                            color="gray.600"
                            fontWeight={"bold"}
                            cursor="pointer"
                          >
                            Toolkit
                          </Text>
                        </VStack>
                      </Drawer.Body>
                      <Drawer.CloseTrigger asChild>
                        <CloseButton size="sm" />
                      </Drawer.CloseTrigger>
                    </Drawer.Content>
                  </Drawer.Positioner>
                </Portal>
              </Drawer.Root>
            )}
          </HStack>
        </Flex>
      </Container>
    </Box>
  );
};
