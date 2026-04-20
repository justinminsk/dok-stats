import type { SiteDataPayload } from '../models/siteData';

const emptyScope = (key: 'combined' | 'singles' | 'teams', label: string) => ({
  key,
  label,
  datasetKey: 'current',
  listCount: 0,
  reportLinks: {
    stats: `reports/current/${key}.md`,
    lists: `reports/current/${key}-lists.md`,
  },
  statsSummary: 'No lists loaded yet. Add source exports and rebuild to populate this view.',
  filters: {
    results: [],
    subfactions: [],
  },
  story: {
    coreSignals: [],
    sharedUnits: [],
    sharedUnitPairs: [],
    weeklyTrends: [],
    snapshotTrends: [],
  },
  statsTables: [],
  lists: [],
});

export const sampleSiteData: SiteDataPayload = {
  generatedAt: '2026-04-20 00:00:00 UTC',
  defaultDatasetKey: 'current',
  scopeOrder: ['combined', 'singles', 'teams'],
  scopeLabels: {
    combined: 'Combined',
    singles: 'Singles',
    teams: 'Teams',
  },
  uiConfig: {
    hashPrefix: '#tab=',
    listRowsBatchSize: 20,
    listFilterInputDebounceMs: 140,
    themeStorageKey: 'daughtersTheme',
    maxArchivedSnapshots: 3,
  },
  themeTokens: {
    dark: {
      colorBg: '#16070c',
      colorAccent: '#d14b6e',
      colorTeal: '#4cb7a5',
      colorMagenta: '#f06aa2',
    },
    light: {
      colorBg: '#fbf2f4',
      colorAccent: '#8f2744',
      colorTeal: '#1c7e72',
      colorMagenta: '#c03d74',
    },
  },
  datasets: [
    {
      key: 'current',
      label: 'Current',
      reportBasePath: 'reports/current',
      scopes: [
        emptyScope('combined', 'Combined'),
        emptyScope('singles', 'Singles'),
        emptyScope('teams', 'Teams'),
      ],
    },
  ],
};
