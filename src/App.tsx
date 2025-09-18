// App.tsx
import { Box, } from '@chakra-ui/react';
import { ResourcesProvider } from './context/context';
import { Header } from './components/Header';
import { MainContent } from './components/MainContent';


const App: React.FC = () => {
  return (
      <ResourcesProvider>
        <Box>
          <Header />
          <MainContent />
        </Box>
      </ResourcesProvider>
  );
};

export default App;