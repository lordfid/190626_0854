export type CardTheme = {
  id: string;
  name: string;
  background: string;
  surface: string;
  ink: string;
  muted: string;
  accent: string;
  chip: string;
};

export const CARD_THEMES: CardTheme[] = [
  { id: 'walnut', name: 'Walnut Burgundy', background: '#4a241d', surface: '#f4ead7', ink: '#171717', muted: '#6b5a4a', accent: '#7f1d1d', chip: '#efe0c4' },
  { id: 'navy', name: 'Night Archive', background: '#0f172a', surface: '#eef2ff', ink: '#111827', muted: '#475569', accent: '#172554', chip: '#dbeafe' },
  { id: 'plum', name: 'Dusty Plum', background: '#4a3349', surface: '#fbf4f8', ink: '#211827', muted: '#72566f', accent: '#6d4c5f', chip: '#f0ddea' },
  { id: 'olive', name: 'Quiet Olive', background: '#38412f', surface: '#f6f0dc', ink: '#1f231b', muted: '#62694f', accent: '#5b6d3a', chip: '#e8e5c7' }
];
