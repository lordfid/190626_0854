import type { ModelAMap, Quadra, SocionicsType } from '../types/socionics';

export const MODEL_A_BY_TYPE: Record<SocionicsType, ModelAMap> = {
  ILE: { base: 'Ne', creative: 'Ti', role: 'Se', vulnerable: 'Fi', suggestive: 'Si', mobilizing: 'Fe', ignoring: 'Ni', demonstrative: 'Te' },
  SEI: { base: 'Si', creative: 'Fe', role: 'Ni', vulnerable: 'Te', suggestive: 'Ne', mobilizing: 'Ti', ignoring: 'Se', demonstrative: 'Fi' },
  ESE: { base: 'Fe', creative: 'Si', role: 'Te', vulnerable: 'Ni', suggestive: 'Ti', mobilizing: 'Se', ignoring: 'Fi', demonstrative: 'Ne' },
  LII: { base: 'Ti', creative: 'Ne', role: 'Fi', vulnerable: 'Se', suggestive: 'Fe', mobilizing: 'Si', ignoring: 'Te', demonstrative: 'Ni' },
  EIE: { base: 'Fe', creative: 'Ni', role: 'Te', vulnerable: 'Si', suggestive: 'Ti', mobilizing: 'Se', ignoring: 'Fi', demonstrative: 'Ne' },
  LSI: { base: 'Ti', creative: 'Se', role: 'Fi', vulnerable: 'Ne', suggestive: 'Fe', mobilizing: 'Ni', ignoring: 'Te', demonstrative: 'Si' },
  SLE: { base: 'Se', creative: 'Ti', role: 'Ne', vulnerable: 'Fi', suggestive: 'Ni', mobilizing: 'Fe', ignoring: 'Si', demonstrative: 'Te' },
  IEI: { base: 'Ni', creative: 'Fe', role: 'Si', vulnerable: 'Te', suggestive: 'Se', mobilizing: 'Ti', ignoring: 'Ne', demonstrative: 'Fi' },
  SEE: { base: 'Se', creative: 'Fi', role: 'Ne', vulnerable: 'Ti', suggestive: 'Ni', mobilizing: 'Te', ignoring: 'Si', demonstrative: 'Fe' },
  ILI: { base: 'Ni', creative: 'Te', role: 'Si', vulnerable: 'Fe', suggestive: 'Se', mobilizing: 'Fi', ignoring: 'Ne', demonstrative: 'Ti' },
  LIE: { base: 'Te', creative: 'Ni', role: 'Fe', vulnerable: 'Si', suggestive: 'Fi', mobilizing: 'Se', ignoring: 'Ti', demonstrative: 'Ne' },
  ESI: { base: 'Fi', creative: 'Se', role: 'Ti', vulnerable: 'Ne', suggestive: 'Te', mobilizing: 'Ni', ignoring: 'Fe', demonstrative: 'Si' },
  IEE: { base: 'Ne', creative: 'Fi', role: 'Se', vulnerable: 'Ti', suggestive: 'Si', mobilizing: 'Te', ignoring: 'Ni', demonstrative: 'Fe' },
  SLI: { base: 'Si', creative: 'Te', role: 'Ni', vulnerable: 'Fe', suggestive: 'Ne', mobilizing: 'Fi', ignoring: 'Se', demonstrative: 'Ti' },
  LSE: { base: 'Te', creative: 'Si', role: 'Fe', vulnerable: 'Ni', suggestive: 'Fi', mobilizing: 'Ne', ignoring: 'Ti', demonstrative: 'Se' },
  EII: { base: 'Fi', creative: 'Ne', role: 'Ti', vulnerable: 'Se', suggestive: 'Te', mobilizing: 'Si', ignoring: 'Fe', demonstrative: 'Ni' }
};

export const TYPE_QUADRA: Record<SocionicsType, Quadra> = {
  ILE: 'Alpha', SEI: 'Alpha', ESE: 'Alpha', LII: 'Alpha',
  EIE: 'Beta', LSI: 'Beta', SLE: 'Beta', IEI: 'Beta',
  SEE: 'Gamma', ILI: 'Gamma', LIE: 'Gamma', ESI: 'Gamma',
  IEE: 'Delta', SLI: 'Delta', LSE: 'Delta', EII: 'Delta'
};

export const QUADRA_VALUED_ELEMENTS: Record<Quadra, ModelAMap['base'][]> = {
  Alpha: ['Ne', 'Ti', 'Fe', 'Si'],
  Beta: ['Ni', 'Fe', 'Se', 'Ti'],
  Gamma: ['Se', 'Fi', 'Te', 'Ni'],
  Delta: ['Ne', 'Fi', 'Te', 'Si']
};

export function getSlotForElement(type: SocionicsType, element: ModelAMap['base']) {
  const map = MODEL_A_BY_TYPE[type];
  return Object.entries(map).find(([, value]) => value === element)?.[0] as keyof ModelAMap | undefined;
}
