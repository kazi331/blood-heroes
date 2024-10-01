import { Tuple } from '@mantine/core';

export const breakpoints: Record<'xs' | 'sm' | 'md' | 'lg' | 'xl', string> = {
  xs: '12',
  xl: 'some',
  sm: '232',
  md: 'some',
  lg: 'some',
};

export const colors: Record<'Sayem' | 'Ekram' | 'Sohag', Tuple<string, 4>> = {
  Sayem: ['one', 'two', 'three', 'three'],
  Ekram: ['one', 'two', 'three', 'three'],
  Sohag: ['one', 'two', 'three', 'three'],
};
