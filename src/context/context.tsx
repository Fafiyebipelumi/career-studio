import React, { createContext, useContext, useState, useMemo } from "react";
import { mockResources } from "../data/data";
import type { FilterState, ResourcesContextType } from "../types/types";

const ResourcesContext = createContext<ResourcesContextType | undefined>(
  undefined
);
export const useResourcesContext = () => {
  const context = useContext(ResourcesContext);
  if (!context) {
    throw new Error(
      "useResourcesContext must be used within ResourcesProvider"
    );
  }
  return context;
};

export const ResourcesProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [filters, setFilters] = useState<FilterState>({
    foundationalPrinciples: [],
    documentTypes: [],
    categories: [],
    searchTerm: "",
  });

  const filteredResources = useMemo(() => {
    return mockResources.filter((resource) => {
      const matchesSearch =
        resource.title
          .toLowerCase()
          .includes(filters.searchTerm.toLowerCase()) ||
        resource.description
          .toLowerCase()
          .includes(filters.searchTerm.toLowerCase());

      const matchesPrinciples =
        filters.foundationalPrinciples.length === 0 ||
        filters.foundationalPrinciples.includes(resource.foundationalPrinciple);

      const matchesTypes =
        filters.documentTypes.length === 0 ||
        filters.documentTypes.includes(resource.type);

      const matchesCategories =
        filters.categories.length === 0 ||
        filters.categories.includes(resource.category);

      return (
        matchesSearch && matchesPrinciples && matchesTypes && matchesCategories
      );
    });
  }, [filters]);

  return (
  <ResourcesContext.Provider
    value={{
      resources: mockResources,
      filters,
      setFilters,
      filteredResources,
    }}
  >
    {children}
  </ResourcesContext.Provider>
)};
