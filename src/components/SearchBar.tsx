// SearchBar.tsx
import {
  Input,
//   InputGroup,
  InputGroup,
} from '@chakra-ui/react';
// import { SearchIcon } from '@chakra-ui/icons';
import { useResourcesContext } from '../context/context';
import { Search } from 'lucide-react';

export const SearchBar: React.FC = () => {
  const { filters, setFilters } = useResourcesContext();

  return (
    <>
      {/* <InputElement pointerEvents="none">
        <Search color="black.400" />
      </InputElement>
      <Input
        placeholder="Search by title or keyword"
        value={filters.searchTerm}
        onChange={(e) => setFilters(prev => ({ ...prev, searchTerm: e.target.value }))}
        bg="white"
        borderRadius="md"
      /> */}
      <InputGroup startElement={<Search style={{color: 'gray'}} />}>
        <Input
        placeholder="Search by title or keyword"
        value={filters.searchTerm}
        onChange={(e) => setFilters(prev => ({ ...prev, searchTerm: e.target.value }))}
        bg="white"
        borderRadius="md"
      /> 
      </InputGroup>
    </>
  );
};