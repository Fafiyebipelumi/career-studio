// data.ts
import { GoLink } from 'react-icons/go';
import type { Resource } from '../types/types';
import { TvMinimalPlay } from 'lucide-react';
import { PiFilePdfLight } from 'react-icons/pi';

export const mockResources: Resource[] = [
  {
    id: '1',
    title: 'The ultimate guide to Workplace Chat',
    description: 'Sample Topic',
    category: 'Sample',
    type: 'DOC',
    foundationalPrinciple: 'Secure Base',
    bgImage: '/red.png',
    icon: GoLink
  },
  {
    id: '2',
    title: 'The ultimate guide to Workplace Chat',
    description: 'Sample Topic',
    category: 'Sample',
    type: 'Video',
    foundationalPrinciple: 'Secure Base',
    bgImage: '/green.png',
    icon: TvMinimalPlay,
  },
  {
    id: '3',
    title: 'The ultimate guide to Workplace Chat',
    description: 'Sample Topic',
    category: 'Sample',
    type: 'Link',
    foundationalPrinciple: 'Secure Base',
    bgImage: '/red.png',
    icon: GoLink
  },
  {
    id: '4',
    title: 'The ultimate guide to Workplace Chat',
    description: 'Sample Topic',
    category: 'Sample',
    type: 'Video',
    foundationalPrinciple: 'Wellbeing',
    bgImage: '/orange.png',
    icon: TvMinimalPlay,
  },
  {
    id: '5',
    title: 'The ultimate guide to Workplace Chat',
    description: 'Sample Topic',
    category: 'Sample',
    type: 'PDF',
    foundationalPrinciple: 'Secure Base',
    bgImage: '/yellow.png',
    icon: PiFilePdfLight,
  },
  {
    id: '6',
    title: 'Taking stock of mental health in your workplace',
    description: 'Sample Topic',
    category: 'Sample',
    type: 'PDF',
    foundationalPrinciple: 'Secure Base',
    bgImage: '/blue.png',
    icon: PiFilePdfLight,
  },
];