// types.ts
import type { ElementType } from 'react';
import React from 'react';

export interface Resource {
  id: string;
  title: string;
  description: string;
  category: string;
  type: 'DOC' | 'Link' | 'PDF' | 'Video';
  foundationalPrinciple: string;
  bgImage: string;
  icon?: ElementType;
}

export interface FilterState {
  foundationalPrinciples: string[];
  documentTypes: string[];
  categories: string[];
  searchTerm: string;
}

export interface ResourcesContextType {
  resources: Resource[];
  filters: FilterState;
  setFilters: React.Dispatch<React.SetStateAction<FilterState>>;
  filteredResources: Resource[];
}