import type { SiteDataPayload } from '../models/siteData';

export const sampleSiteData: SiteDataPayload = {
  "generatedAt": "2026-04-19 12:00:00 UTC",
  "defaultDatasetKey": "current",
  "scopeOrder": [
    "combined",
    "singles",
    "teams"
  ],
  "scopeLabels": {
    "combined": "Combined",
    "singles": "Singles",
    "teams": "Teams"
  },
  "uiConfig": {
    "hashPrefix": "#tab=",
    "listRowsBatchSize": 20,
    "listFilterInputDebounceMs": 140,
    "themeStorageKey": "daughtersTheme",
    "maxArchivedSnapshots": 3
  },
  "themeTokens": {
    "dark": {
      "colorBg": "#0f0b08",
      "colorBgElevated": "#1e1409",
      "colorBgMuted": "#0c0807",
      "colorBgInput": "#17100a",
      "colorBgInputHover": "#1e1409",
      "colorText": "#fff7ef",
      "colorTextSoft": "#f1e6da",
      "colorMuted": "#d2beab",
      "colorAccent": "#c8921a",
      "colorAccentStrong": "#dcaa32",
      "colorAccentRgb": "200, 146, 26",
      "colorSurface": "#181009",
      "colorBorder": "#5e4225",
      "colorFocus": "#00c8a8",
      "colorOverlay": "rgba(12, 8, 5, .93)",
      "colorTeal": "#00c8a8",
      "colorMagenta": "#c84090"
    },
    "light": {
      "colorBg": "#f9f4ee",
      "colorBgElevated": "#ffffff",
      "colorBgMuted": "#f2ebe2",
      "colorBgInput": "#ffffff",
      "colorBgInputHover": "#fcf8f3",
      "colorText": "#2e2118",
      "colorTextSoft": "#3f2d21",
      "colorMuted": "#5a4333",
      "colorAccent": "#7a4e0e",
      "colorAccentStrong": "#63400b",
      "colorAccentRgb": "122, 78, 14",
      "colorSurface": "#ffffff",
      "colorBorder": "#ddc8b5",
      "colorFocus": "#006e5a",
      "colorOverlay": "rgba(249, 244, 238, .95)",
      "colorTeal": "#007a68",
      "colorMagenta": "#a0306e"
    }
  },
  "datasets": [
    {
      "key": "current",
      "label": "Current",
      "reportBasePath": "reports/current",
      "scopes": [
        {
          "key": "combined",
          "label": "Combined",
          "datasetKey": "current",
          "listCount": 2,
          "reportLinks": {
            "stats": "reports/current/combined.md",
            "lists": "reports/current/combined-lists.md"
          },
          "statsSummary": "Most common result is 4-1 (1 lists). Top unit presence is Witch Aelves in 2 lists (100.0%). Most common subfaction is Hagg Nar (1 lists). Highest model count unit is Witch Aelves (10 models).",
          "filters": {
            "results": [
              "4-1",
              "5-0"
            ],
            "subfactions": [
              "Hagg Nar",
              "Khailebron"
            ]
          },
          "story": {
            "coreSignals": [
              {
                "label": "Top subfaction",
                "value": "Hagg Nar",
                "detail": "1 of 2 lists"
              },
              {
                "label": "Top manifestation lore",
                "value": "Morbid Conjuration",
                "detail": "1 of 2 lists"
              },
              {
                "label": "Most shared unit",
                "value": "Witch Aelves",
                "detail": "2 of 2 lists (100.0%)"
              }
            ],
            "sharedUnits": [
              {
                "name": "Witch Aelves",
                "listCount": 2,
                "share": "100.0%"
              }
            ],
            "sharedUnitPairs": [],
            "weeklyTrends": [
              {
                "metric": "Unit presence",
                "label": "Witch Aelves",
                "currentValue": "100.0%",
                "deltaLabel": "Flat versus April 6-12",
                "direction": "flat",
                "points": [
                  {
                    "datasetKey": "week-1",
                    "datasetLabel": "April 6-12",
                    "eraLabel": "Pre-points era",
                    "value": "100.0%"
                  },
                  {
                    "datasetKey": "week-2",
                    "datasetLabel": "April 13-19",
                    "eraLabel": "Pre-points era",
                    "value": "100.0%"
                  }
                ]
              },
              {
                "metric": "Subfaction share",
                "label": "Hagg Nar",
                "currentValue": "0.0%",
                "deltaLabel": "-100.0 pts versus April 6-12",
                "direction": "down",
                "points": [
                  {
                    "datasetKey": "week-1",
                    "datasetLabel": "April 6-12",
                    "eraLabel": "Pre-points era",
                    "value": "100.0%"
                  },
                  {
                    "datasetKey": "week-2",
                    "datasetLabel": "April 13-19",
                    "eraLabel": "Pre-points era",
                    "value": "0.0%"
                  }
                ]
              },
              {
                "metric": "Lore share",
                "label": "Morbid Conjuration",
                "currentValue": "0.0%",
                "deltaLabel": "-100.0 pts versus April 6-12",
                "direction": "down",
                "points": [
                  {
                    "datasetKey": "week-1",
                    "datasetLabel": "April 6-12",
                    "eraLabel": "Pre-points era",
                    "value": "100.0%"
                  },
                  {
                    "datasetKey": "week-2",
                    "datasetLabel": "April 13-19",
                    "eraLabel": "Pre-points era",
                    "value": "0.0%"
                  }
                ]
              }
            ],
            "snapshotTrends": [
              {
                "metric": "Unit presence",
                "label": "Witch Aelves",
                "currentValue": "100.0%",
                "deltaLabel": "+50.0 pts versus Snapshot (2026-04-03-pre-points)",
                "direction": "up",
                "points": [
                  {
                    "datasetKey": "archive-2026-04-03-pre-points",
                    "datasetLabel": "Snapshot (2026-04-03-pre-points)",
                    "value": "50.0%"
                  },
                  {
                    "datasetKey": "archive-2026-04-10-pre-points",
                    "datasetLabel": "Snapshot (2026-04-10-pre-points)",
                    "value": "50.0%"
                  },
                  {
                    "datasetKey": "archive-2026-04-17-pre-points",
                    "datasetLabel": "Snapshot (2026-04-17-pre-points)",
                    "value": "100.0%"
                  },
                  {
                    "datasetKey": "current",
                    "datasetLabel": "Current",
                    "value": "100.0%"
                  }
                ]
              },
              {
                "metric": "Subfaction usage",
                "label": "Hagg Nar",
                "currentValue": "1",
                "deltaLabel": "Flat versus Snapshot (2026-04-03-pre-points)",
                "direction": "flat",
                "points": [
                  {
                    "datasetKey": "archive-2026-04-03-pre-points",
                    "datasetLabel": "Snapshot (2026-04-03-pre-points)",
                    "value": "1"
                  },
                  {
                    "datasetKey": "archive-2026-04-10-pre-points",
                    "datasetLabel": "Snapshot (2026-04-10-pre-points)",
                    "value": "1"
                  },
                  {
                    "datasetKey": "archive-2026-04-17-pre-points",
                    "datasetLabel": "Snapshot (2026-04-17-pre-points)",
                    "value": "1"
                  },
                  {
                    "datasetKey": "current",
                    "datasetLabel": "Current",
                    "value": "1"
                  }
                ]
              },
              {
                "metric": "Lore usage",
                "label": "Morbid Conjuration",
                "currentValue": "1",
                "deltaLabel": "Flat versus Snapshot (2026-04-03-pre-points)",
                "direction": "flat",
                "points": [
                  {
                    "datasetKey": "archive-2026-04-03-pre-points",
                    "datasetLabel": "Snapshot (2026-04-03-pre-points)",
                    "value": "1"
                  },
                  {
                    "datasetKey": "archive-2026-04-10-pre-points",
                    "datasetLabel": "Snapshot (2026-04-10-pre-points)",
                    "value": "1"
                  },
                  {
                    "datasetKey": "archive-2026-04-17-pre-points",
                    "datasetLabel": "Snapshot (2026-04-17-pre-points)",
                    "value": "1"
                  },
                  {
                    "datasetKey": "current",
                    "datasetLabel": "Current",
                    "value": "1"
                  }
                ]
              }
            ]
          },
          "statsTables": [
            {
              "key": "resultBreakdown",
              "title": "Result breakdown",
              "headers": [
                "Result",
                "Lists"
              ],
              "rows": [
                [
                  "4-1",
                  "1"
                ],
                [
                  "5-0",
                  "1"
                ]
              ]
            },
            {
              "key": "topUnitPresence",
              "title": "Top unit presence",
              "headers": [
                "Unit",
                "Lists",
                "% of lists"
              ],
              "rows": [
                [
                  "Witch Aelves",
                  "2",
                  "100.0%"
                ]
              ]
            },
            {
              "key": "topUnitEntries",
              "title": "Top unit entries",
              "headers": [
                "Unit",
                "Entries"
              ],
              "rows": [
                [
                  "Witch Aelves",
                  "1"
                ]
              ]
            },
            {
              "key": "topModelCounts",
              "title": "Top model counts",
              "headers": [
                "Unit",
                "Models"
              ],
              "rows": [
                [
                  "Witch Aelves",
                  "10"
                ]
              ]
            },
            {
              "key": "topSubfactions",
              "title": "Top subfactions",
              "headers": [
                "Subfaction",
                "Count"
              ],
              "rows": [
                [
                  "Hagg Nar",
                  "1"
                ]
              ]
            },
            {
              "key": "manifestationLores",
              "title": "Manifestation lores",
              "headers": [
                "Manifestation lore",
                "Count"
              ],
              "rows": [
                [
                  "Morbid Conjuration",
                  "1"
                ]
              ]
            },
            {
              "key": "artifacts",
              "title": "Artifacts",
              "headers": [
                "Artifact",
                "Count"
              ],
              "rows": [
                [
                  "Crown of Woe",
                  "1"
                ]
              ]
            },
            {
              "key": "commandTraits",
              "title": "Command traits",
              "headers": [
                "Command trait",
                "Count"
              ],
              "rows": [
                [
                  "Avatar of Slaughter",
                  "1"
                ]
              ]
            },
            {
              "key": "warmachineTraits",
              "title": "Warmachine traits",
              "headers": [
                "Warmachine trait",
                "Count"
              ],
              "rows": [
                [
                  "Temple Fanatic",
                  "1"
                ]
              ]
            },
            {
              "key": "unplayedKnownUnits",
              "title": "Unplayed known units",
              "headers": [
                "Unit",
                "Unit size"
              ],
              "rows": [
                [
                  "Blood Sisters",
                  "5"
                ]
              ]
            }
          ],
          "lists": [
            {
              "index": 0,
              "source": "Singles",
              "weekLabel": "April 6-12",
              "name": "Combined List A",
              "result": "5-0",
              "subfaction": "Hagg Nar",
              "manifestationLore": "Morbid Conjuration",
              "regiments": 1,
              "unitEntries": 3,
              "models": 10,
              "units": [
                {
                  "regiment": "General's Regiment",
                  "name": "Witch Aelves",
                  "points": 110,
                  "models": 10,
                  "reinforced": false,
                  "notes": [
                    "General"
                  ]
                }
              ]
            },
            {
              "index": 1,
              "source": "Teams",
              "weekLabel": "April 13-19",
              "name": "Combined List B",
              "result": "4-1",
              "subfaction": "Khailebron",
              "manifestationLore": "Primal Energy",
              "regiments": 1,
              "unitEntries": 3,
              "models": 20,
              "units": [
                {
                  "regiment": "Regiment 1",
                  "name": "Witch Aelves",
                  "points": 110,
                  "models": 10,
                  "reinforced": false,
                  "notes": []
                },
                {
                  "regiment": "Regiment 1",
                  "name": "Blood Sisters",
                  "points": 140,
                  "models": 5,
                  "reinforced": false,
                  "notes": []
                },
                {
                  "regiment": "Regiment 1",
                  "name": "Khinerai Heartrenders",
                  "points": 100,
                  "models": 5,
                  "reinforced": false,
                  "notes": []
                }
              ]
            }
          ]
        },
        {
          "key": "singles",
          "label": "Singles",
          "datasetKey": "current",
          "listCount": 2,
          "reportLinks": {
            "stats": "reports/current/singles.md",
            "lists": "reports/current/singles-lists.md"
          },
          "statsSummary": "Most common result is 4-1 (1 lists). Top unit presence is Witch Aelves in 2 lists (100.0%). Most common subfaction is Hagg Nar (1 lists). Highest model count unit is Witch Aelves (10 models).",
          "filters": {
            "results": [
              "4-1",
              "5-0"
            ],
            "subfactions": [
              "Hagg Nar",
              "Khailebron"
            ]
          },
          "story": {
            "coreSignals": [
              {
                "label": "Top subfaction",
                "value": "Hagg Nar",
                "detail": "1 of 2 lists"
              },
              {
                "label": "Top manifestation lore",
                "value": "Morbid Conjuration",
                "detail": "1 of 2 lists"
              },
              {
                "label": "Most shared unit",
                "value": "Witch Aelves",
                "detail": "2 of 2 lists (100.0%)"
              }
            ],
            "sharedUnits": [
              {
                "name": "Witch Aelves",
                "listCount": 2,
                "share": "100.0%"
              }
            ],
            "sharedUnitPairs": [],
            "weeklyTrends": [
              {
                "metric": "Unit presence",
                "label": "Witch Aelves",
                "currentValue": "100.0%",
                "deltaLabel": "Flat versus April 6-12",
                "direction": "flat",
                "points": [
                  {
                    "datasetKey": "week-1",
                    "datasetLabel": "April 6-12",
                    "eraLabel": "Pre-points era",
                    "value": "100.0%"
                  },
                  {
                    "datasetKey": "week-2",
                    "datasetLabel": "April 13-19",
                    "eraLabel": "Pre-points era",
                    "value": "100.0%"
                  }
                ]
              },
              {
                "metric": "Subfaction share",
                "label": "Hagg Nar",
                "currentValue": "0.0%",
                "deltaLabel": "-100.0 pts versus April 6-12",
                "direction": "down",
                "points": [
                  {
                    "datasetKey": "week-1",
                    "datasetLabel": "April 6-12",
                    "eraLabel": "Pre-points era",
                    "value": "100.0%"
                  },
                  {
                    "datasetKey": "week-2",
                    "datasetLabel": "April 13-19",
                    "eraLabel": "Pre-points era",
                    "value": "0.0%"
                  }
                ]
              },
              {
                "metric": "Lore share",
                "label": "Morbid Conjuration",
                "currentValue": "0.0%",
                "deltaLabel": "-100.0 pts versus April 6-12",
                "direction": "down",
                "points": [
                  {
                    "datasetKey": "week-1",
                    "datasetLabel": "April 6-12",
                    "eraLabel": "Pre-points era",
                    "value": "100.0%"
                  },
                  {
                    "datasetKey": "week-2",
                    "datasetLabel": "April 13-19",
                    "eraLabel": "Pre-points era",
                    "value": "0.0%"
                  }
                ]
              }
            ],
            "snapshotTrends": [
              {
                "metric": "Unit presence",
                "label": "Witch Aelves",
                "currentValue": "100.0%",
                "deltaLabel": "+50.0 pts versus Snapshot (2026-04-03-pre-points)",
                "direction": "up",
                "points": [
                  {
                    "datasetKey": "archive-2026-04-03-pre-points",
                    "datasetLabel": "Snapshot (2026-04-03-pre-points)",
                    "value": "50.0%"
                  },
                  {
                    "datasetKey": "archive-2026-04-10-pre-points",
                    "datasetLabel": "Snapshot (2026-04-10-pre-points)",
                    "value": "50.0%"
                  },
                  {
                    "datasetKey": "archive-2026-04-17-pre-points",
                    "datasetLabel": "Snapshot (2026-04-17-pre-points)",
                    "value": "100.0%"
                  },
                  {
                    "datasetKey": "current",
                    "datasetLabel": "Current",
                    "value": "100.0%"
                  }
                ]
              },
              {
                "metric": "Subfaction usage",
                "label": "Hagg Nar",
                "currentValue": "1",
                "deltaLabel": "Flat versus Snapshot (2026-04-03-pre-points)",
                "direction": "flat",
                "points": [
                  {
                    "datasetKey": "archive-2026-04-03-pre-points",
                    "datasetLabel": "Snapshot (2026-04-03-pre-points)",
                    "value": "1"
                  },
                  {
                    "datasetKey": "archive-2026-04-10-pre-points",
                    "datasetLabel": "Snapshot (2026-04-10-pre-points)",
                    "value": "1"
                  },
                  {
                    "datasetKey": "archive-2026-04-17-pre-points",
                    "datasetLabel": "Snapshot (2026-04-17-pre-points)",
                    "value": "1"
                  },
                  {
                    "datasetKey": "current",
                    "datasetLabel": "Current",
                    "value": "1"
                  }
                ]
              },
              {
                "metric": "Lore usage",
                "label": "Morbid Conjuration",
                "currentValue": "1",
                "deltaLabel": "Flat versus Snapshot (2026-04-03-pre-points)",
                "direction": "flat",
                "points": [
                  {
                    "datasetKey": "archive-2026-04-03-pre-points",
                    "datasetLabel": "Snapshot (2026-04-03-pre-points)",
                    "value": "1"
                  },
                  {
                    "datasetKey": "archive-2026-04-10-pre-points",
                    "datasetLabel": "Snapshot (2026-04-10-pre-points)",
                    "value": "1"
                  },
                  {
                    "datasetKey": "archive-2026-04-17-pre-points",
                    "datasetLabel": "Snapshot (2026-04-17-pre-points)",
                    "value": "1"
                  },
                  {
                    "datasetKey": "current",
                    "datasetLabel": "Current",
                    "value": "1"
                  }
                ]
              }
            ]
          },
          "statsTables": [
            {
              "key": "resultBreakdown",
              "title": "Result breakdown",
              "headers": [
                "Result",
                "Lists"
              ],
              "rows": [
                [
                  "4-1",
                  "1"
                ],
                [
                  "5-0",
                  "1"
                ]
              ]
            },
            {
              "key": "topUnitPresence",
              "title": "Top unit presence",
              "headers": [
                "Unit",
                "Lists",
                "% of lists"
              ],
              "rows": [
                [
                  "Witch Aelves",
                  "2",
                  "100.0%"
                ]
              ]
            },
            {
              "key": "topUnitEntries",
              "title": "Top unit entries",
              "headers": [
                "Unit",
                "Entries"
              ],
              "rows": [
                [
                  "Witch Aelves",
                  "1"
                ]
              ]
            },
            {
              "key": "topModelCounts",
              "title": "Top model counts",
              "headers": [
                "Unit",
                "Models"
              ],
              "rows": [
                [
                  "Witch Aelves",
                  "10"
                ]
              ]
            },
            {
              "key": "topSubfactions",
              "title": "Top subfactions",
              "headers": [
                "Subfaction",
                "Count"
              ],
              "rows": [
                [
                  "Hagg Nar",
                  "1"
                ]
              ]
            },
            {
              "key": "manifestationLores",
              "title": "Manifestation lores",
              "headers": [
                "Manifestation lore",
                "Count"
              ],
              "rows": [
                [
                  "Morbid Conjuration",
                  "1"
                ]
              ]
            },
            {
              "key": "artifacts",
              "title": "Artifacts",
              "headers": [
                "Artifact",
                "Count"
              ],
              "rows": [
                [
                  "Crown of Woe",
                  "1"
                ]
              ]
            },
            {
              "key": "commandTraits",
              "title": "Command traits",
              "headers": [
                "Command trait",
                "Count"
              ],
              "rows": [
                [
                  "Avatar of Slaughter",
                  "1"
                ]
              ]
            },
            {
              "key": "warmachineTraits",
              "title": "Warmachine traits",
              "headers": [
                "Warmachine trait",
                "Count"
              ],
              "rows": [
                [
                  "Temple Fanatic",
                  "1"
                ]
              ]
            },
            {
              "key": "unplayedKnownUnits",
              "title": "Unplayed known units",
              "headers": [
                "Unit",
                "Unit size"
              ],
              "rows": [
                [
                  "Blood Sisters",
                  "5"
                ]
              ]
            }
          ],
          "lists": [
            {
              "index": 0,
              "source": "Singles",
              "weekLabel": "April 6-12",
              "name": "Singles List A",
              "result": "5-0",
              "subfaction": "Hagg Nar",
              "manifestationLore": "Morbid Conjuration",
              "regiments": 1,
              "unitEntries": 3,
              "models": 10,
              "units": [
                {
                  "regiment": "General's Regiment",
                  "name": "Witch Aelves",
                  "points": 110,
                  "models": 10,
                  "reinforced": false,
                  "notes": [
                    "General"
                  ]
                }
              ]
            },
            {
              "index": 1,
              "source": "Teams",
              "weekLabel": "April 13-19",
              "name": "Singles List B",
              "result": "4-1",
              "subfaction": "Khailebron",
              "manifestationLore": "Primal Energy",
              "regiments": 1,
              "unitEntries": 3,
              "models": 20,
              "units": [
                {
                  "regiment": "Regiment 1",
                  "name": "Witch Aelves",
                  "points": 110,
                  "models": 10,
                  "reinforced": false,
                  "notes": []
                },
                {
                  "regiment": "Regiment 1",
                  "name": "Blood Sisters",
                  "points": 140,
                  "models": 5,
                  "reinforced": false,
                  "notes": []
                },
                {
                  "regiment": "Regiment 1",
                  "name": "Khinerai Heartrenders",
                  "points": 100,
                  "models": 5,
                  "reinforced": false,
                  "notes": []
                }
              ]
            }
          ]
        },
        {
          "key": "teams",
          "label": "Teams",
          "datasetKey": "current",
          "listCount": 2,
          "reportLinks": {
            "stats": "reports/current/teams.md",
            "lists": "reports/current/teams-lists.md"
          },
          "statsSummary": "Most common result is 4-1 (1 lists). Top unit presence is Witch Aelves in 2 lists (100.0%). Most common subfaction is Hagg Nar (1 lists). Highest model count unit is Witch Aelves (10 models).",
          "filters": {
            "results": [
              "4-1",
              "5-0"
            ],
            "subfactions": [
              "Hagg Nar",
              "Khailebron"
            ]
          },
          "story": {
            "coreSignals": [
              {
                "label": "Top subfaction",
                "value": "Hagg Nar",
                "detail": "1 of 2 lists"
              },
              {
                "label": "Top manifestation lore",
                "value": "Morbid Conjuration",
                "detail": "1 of 2 lists"
              },
              {
                "label": "Most shared unit",
                "value": "Witch Aelves",
                "detail": "2 of 2 lists (100.0%)"
              }
            ],
            "sharedUnits": [
              {
                "name": "Witch Aelves",
                "listCount": 2,
                "share": "100.0%"
              }
            ],
            "sharedUnitPairs": [],
            "weeklyTrends": [
              {
                "metric": "Unit presence",
                "label": "Witch Aelves",
                "currentValue": "100.0%",
                "deltaLabel": "Flat versus April 6-12",
                "direction": "flat",
                "points": [
                  {
                    "datasetKey": "week-1",
                    "datasetLabel": "April 6-12",
                    "eraLabel": "Pre-points era",
                    "value": "100.0%"
                  },
                  {
                    "datasetKey": "week-2",
                    "datasetLabel": "April 13-19",
                    "eraLabel": "Pre-points era",
                    "value": "100.0%"
                  }
                ]
              },
              {
                "metric": "Subfaction share",
                "label": "Hagg Nar",
                "currentValue": "0.0%",
                "deltaLabel": "-100.0 pts versus April 6-12",
                "direction": "down",
                "points": [
                  {
                    "datasetKey": "week-1",
                    "datasetLabel": "April 6-12",
                    "eraLabel": "Pre-points era",
                    "value": "100.0%"
                  },
                  {
                    "datasetKey": "week-2",
                    "datasetLabel": "April 13-19",
                    "eraLabel": "Pre-points era",
                    "value": "0.0%"
                  }
                ]
              },
              {
                "metric": "Lore share",
                "label": "Morbid Conjuration",
                "currentValue": "0.0%",
                "deltaLabel": "-100.0 pts versus April 6-12",
                "direction": "down",
                "points": [
                  {
                    "datasetKey": "week-1",
                    "datasetLabel": "April 6-12",
                    "eraLabel": "Pre-points era",
                    "value": "100.0%"
                  },
                  {
                    "datasetKey": "week-2",
                    "datasetLabel": "April 13-19",
                    "eraLabel": "Pre-points era",
                    "value": "0.0%"
                  }
                ]
              }
            ],
            "snapshotTrends": [
              {
                "metric": "Unit presence",
                "label": "Witch Aelves",
                "currentValue": "100.0%",
                "deltaLabel": "+50.0 pts versus Snapshot (2026-04-03-pre-points)",
                "direction": "up",
                "points": [
                  {
                    "datasetKey": "archive-2026-04-03-pre-points",
                    "datasetLabel": "Snapshot (2026-04-03-pre-points)",
                    "value": "50.0%"
                  },
                  {
                    "datasetKey": "archive-2026-04-10-pre-points",
                    "datasetLabel": "Snapshot (2026-04-10-pre-points)",
                    "value": "50.0%"
                  },
                  {
                    "datasetKey": "archive-2026-04-17-pre-points",
                    "datasetLabel": "Snapshot (2026-04-17-pre-points)",
                    "value": "100.0%"
                  },
                  {
                    "datasetKey": "current",
                    "datasetLabel": "Current",
                    "value": "100.0%"
                  }
                ]
              },
              {
                "metric": "Subfaction usage",
                "label": "Hagg Nar",
                "currentValue": "1",
                "deltaLabel": "Flat versus Snapshot (2026-04-03-pre-points)",
                "direction": "flat",
                "points": [
                  {
                    "datasetKey": "archive-2026-04-03-pre-points",
                    "datasetLabel": "Snapshot (2026-04-03-pre-points)",
                    "value": "1"
                  },
                  {
                    "datasetKey": "archive-2026-04-10-pre-points",
                    "datasetLabel": "Snapshot (2026-04-10-pre-points)",
                    "value": "1"
                  },
                  {
                    "datasetKey": "archive-2026-04-17-pre-points",
                    "datasetLabel": "Snapshot (2026-04-17-pre-points)",
                    "value": "1"
                  },
                  {
                    "datasetKey": "current",
                    "datasetLabel": "Current",
                    "value": "1"
                  }
                ]
              },
              {
                "metric": "Lore usage",
                "label": "Morbid Conjuration",
                "currentValue": "1",
                "deltaLabel": "Flat versus Snapshot (2026-04-03-pre-points)",
                "direction": "flat",
                "points": [
                  {
                    "datasetKey": "archive-2026-04-03-pre-points",
                    "datasetLabel": "Snapshot (2026-04-03-pre-points)",
                    "value": "1"
                  },
                  {
                    "datasetKey": "archive-2026-04-10-pre-points",
                    "datasetLabel": "Snapshot (2026-04-10-pre-points)",
                    "value": "1"
                  },
                  {
                    "datasetKey": "archive-2026-04-17-pre-points",
                    "datasetLabel": "Snapshot (2026-04-17-pre-points)",
                    "value": "1"
                  },
                  {
                    "datasetKey": "current",
                    "datasetLabel": "Current",
                    "value": "1"
                  }
                ]
              }
            ]
          },
          "statsTables": [
            {
              "key": "resultBreakdown",
              "title": "Result breakdown",
              "headers": [
                "Result",
                "Lists"
              ],
              "rows": [
                [
                  "4-1",
                  "1"
                ],
                [
                  "5-0",
                  "1"
                ]
              ]
            },
            {
              "key": "topUnitPresence",
              "title": "Top unit presence",
              "headers": [
                "Unit",
                "Lists",
                "% of lists"
              ],
              "rows": [
                [
                  "Witch Aelves",
                  "2",
                  "100.0%"
                ]
              ]
            },
            {
              "key": "topUnitEntries",
              "title": "Top unit entries",
              "headers": [
                "Unit",
                "Entries"
              ],
              "rows": [
                [
                  "Witch Aelves",
                  "1"
                ]
              ]
            },
            {
              "key": "topModelCounts",
              "title": "Top model counts",
              "headers": [
                "Unit",
                "Models"
              ],
              "rows": [
                [
                  "Witch Aelves",
                  "10"
                ]
              ]
            },
            {
              "key": "topSubfactions",
              "title": "Top subfactions",
              "headers": [
                "Subfaction",
                "Count"
              ],
              "rows": [
                [
                  "Hagg Nar",
                  "1"
                ]
              ]
            },
            {
              "key": "manifestationLores",
              "title": "Manifestation lores",
              "headers": [
                "Manifestation lore",
                "Count"
              ],
              "rows": [
                [
                  "Morbid Conjuration",
                  "1"
                ]
              ]
            },
            {
              "key": "artifacts",
              "title": "Artifacts",
              "headers": [
                "Artifact",
                "Count"
              ],
              "rows": [
                [
                  "Crown of Woe",
                  "1"
                ]
              ]
            },
            {
              "key": "commandTraits",
              "title": "Command traits",
              "headers": [
                "Command trait",
                "Count"
              ],
              "rows": [
                [
                  "Avatar of Slaughter",
                  "1"
                ]
              ]
            },
            {
              "key": "warmachineTraits",
              "title": "Warmachine traits",
              "headers": [
                "Warmachine trait",
                "Count"
              ],
              "rows": [
                [
                  "Temple Fanatic",
                  "1"
                ]
              ]
            },
            {
              "key": "unplayedKnownUnits",
              "title": "Unplayed known units",
              "headers": [
                "Unit",
                "Unit size"
              ],
              "rows": [
                [
                  "Blood Sisters",
                  "5"
                ]
              ]
            }
          ],
          "lists": [
            {
              "index": 0,
              "source": "Singles",
              "weekLabel": "April 6-12",
              "name": "Teams List A",
              "result": "5-0",
              "subfaction": "Hagg Nar",
              "manifestationLore": "Morbid Conjuration",
              "regiments": 1,
              "unitEntries": 3,
              "models": 10,
              "units": [
                {
                  "regiment": "General's Regiment",
                  "name": "Witch Aelves",
                  "points": 110,
                  "models": 10,
                  "reinforced": false,
                  "notes": [
                    "General"
                  ]
                }
              ]
            },
            {
              "index": 1,
              "source": "Teams",
              "weekLabel": "April 13-19",
              "name": "Teams List B",
              "result": "4-1",
              "subfaction": "Khailebron",
              "manifestationLore": "Primal Energy",
              "regiments": 1,
              "unitEntries": 3,
              "models": 20,
              "units": [
                {
                  "regiment": "Regiment 1",
                  "name": "Witch Aelves",
                  "points": 110,
                  "models": 10,
                  "reinforced": false,
                  "notes": []
                },
                {
                  "regiment": "Regiment 1",
                  "name": "Blood Sisters",
                  "points": 140,
                  "models": 5,
                  "reinforced": false,
                  "notes": []
                },
                {
                  "regiment": "Regiment 1",
                  "name": "Khinerai Heartrenders",
                  "points": 100,
                  "models": 5,
                  "reinforced": false,
                  "notes": []
                }
              ]
            }
          ]
        }
      ]
    },
    {
      "key": "archive-2026-04-17-pre-points",
      "label": "Snapshot (2026-04-17-pre-points)",
      "reportBasePath": "reports/archive-2026-04-17-pre-points",
      "scopes": [
        {
          "key": "combined",
          "label": "Combined",
          "datasetKey": "archive-2026-04-17-pre-points",
          "listCount": 2,
          "reportLinks": {
            "stats": "reports/archive-2026-04-17-pre-points/combined.md",
            "lists": "reports/archive-2026-04-17-pre-points/combined-lists.md"
          },
          "statsSummary": "Most common result is 4-1 (1 lists). Top unit presence is Witch Aelves in 2 lists (100.0%). Most common subfaction is Hagg Nar (1 lists). Highest model count unit is Witch Aelves (10 models).",
          "filters": {
            "results": [
              "4-1",
              "5-0"
            ],
            "subfactions": [
              "Hagg Nar",
              "Khailebron"
            ]
          },
          "story": {
            "coreSignals": [
              {
                "label": "Top subfaction",
                "value": "Hagg Nar",
                "detail": "1 of 2 lists"
              },
              {
                "label": "Top manifestation lore",
                "value": "Morbid Conjuration",
                "detail": "1 of 2 lists"
              },
              {
                "label": "Most shared unit",
                "value": "Witch Aelves",
                "detail": "2 of 2 lists (100.0%)"
              }
            ],
            "sharedUnits": [
              {
                "name": "Witch Aelves",
                "listCount": 2,
                "share": "100.0%"
              }
            ],
            "sharedUnitPairs": [],
            "weeklyTrends": [
              {
                "metric": "Unit presence",
                "label": "Witch Aelves",
                "currentValue": "100.0%",
                "deltaLabel": "Flat versus April 6-12",
                "direction": "flat",
                "points": [
                  {
                    "datasetKey": "week-1",
                    "datasetLabel": "April 6-12",
                    "eraLabel": "Pre-points era",
                    "value": "100.0%"
                  },
                  {
                    "datasetKey": "week-2",
                    "datasetLabel": "April 13-19",
                    "eraLabel": "Pre-points era",
                    "value": "100.0%"
                  }
                ]
              },
              {
                "metric": "Subfaction share",
                "label": "Hagg Nar",
                "currentValue": "0.0%",
                "deltaLabel": "-100.0 pts versus April 6-12",
                "direction": "down",
                "points": [
                  {
                    "datasetKey": "week-1",
                    "datasetLabel": "April 6-12",
                    "eraLabel": "Pre-points era",
                    "value": "100.0%"
                  },
                  {
                    "datasetKey": "week-2",
                    "datasetLabel": "April 13-19",
                    "eraLabel": "Pre-points era",
                    "value": "0.0%"
                  }
                ]
              },
              {
                "metric": "Lore share",
                "label": "Morbid Conjuration",
                "currentValue": "0.0%",
                "deltaLabel": "-100.0 pts versus April 6-12",
                "direction": "down",
                "points": [
                  {
                    "datasetKey": "week-1",
                    "datasetLabel": "April 6-12",
                    "eraLabel": "Pre-points era",
                    "value": "100.0%"
                  },
                  {
                    "datasetKey": "week-2",
                    "datasetLabel": "April 13-19",
                    "eraLabel": "Pre-points era",
                    "value": "0.0%"
                  }
                ]
              }
            ],
            "snapshotTrends": [
              {
                "metric": "Unit presence",
                "label": "Witch Aelves",
                "currentValue": "100.0%",
                "deltaLabel": "+50.0 pts versus Snapshot (2026-04-03-pre-points)",
                "direction": "up",
                "points": [
                  {
                    "datasetKey": "archive-2026-04-03-pre-points",
                    "datasetLabel": "Snapshot (2026-04-03-pre-points)",
                    "value": "50.0%"
                  },
                  {
                    "datasetKey": "archive-2026-04-10-pre-points",
                    "datasetLabel": "Snapshot (2026-04-10-pre-points)",
                    "value": "50.0%"
                  },
                  {
                    "datasetKey": "archive-2026-04-17-pre-points",
                    "datasetLabel": "Snapshot (2026-04-17-pre-points)",
                    "value": "100.0%"
                  }
                ]
              },
              {
                "metric": "Subfaction usage",
                "label": "Hagg Nar",
                "currentValue": "1",
                "deltaLabel": "Flat versus Snapshot (2026-04-03-pre-points)",
                "direction": "flat",
                "points": [
                  {
                    "datasetKey": "archive-2026-04-03-pre-points",
                    "datasetLabel": "Snapshot (2026-04-03-pre-points)",
                    "value": "1"
                  },
                  {
                    "datasetKey": "archive-2026-04-10-pre-points",
                    "datasetLabel": "Snapshot (2026-04-10-pre-points)",
                    "value": "1"
                  },
                  {
                    "datasetKey": "archive-2026-04-17-pre-points",
                    "datasetLabel": "Snapshot (2026-04-17-pre-points)",
                    "value": "1"
                  }
                ]
              },
              {
                "metric": "Lore usage",
                "label": "Morbid Conjuration",
                "currentValue": "1",
                "deltaLabel": "Flat versus Snapshot (2026-04-03-pre-points)",
                "direction": "flat",
                "points": [
                  {
                    "datasetKey": "archive-2026-04-03-pre-points",
                    "datasetLabel": "Snapshot (2026-04-03-pre-points)",
                    "value": "1"
                  },
                  {
                    "datasetKey": "archive-2026-04-10-pre-points",
                    "datasetLabel": "Snapshot (2026-04-10-pre-points)",
                    "value": "1"
                  },
                  {
                    "datasetKey": "archive-2026-04-17-pre-points",
                    "datasetLabel": "Snapshot (2026-04-17-pre-points)",
                    "value": "1"
                  }
                ]
              }
            ]
          },
          "statsTables": [
            {
              "key": "resultBreakdown",
              "title": "Result breakdown",
              "headers": [
                "Result",
                "Lists"
              ],
              "rows": [
                [
                  "4-1",
                  "1"
                ],
                [
                  "5-0",
                  "1"
                ]
              ]
            },
            {
              "key": "topUnitPresence",
              "title": "Top unit presence",
              "headers": [
                "Unit",
                "Lists",
                "% of lists"
              ],
              "rows": [
                [
                  "Witch Aelves",
                  "2",
                  "100.0%"
                ]
              ]
            },
            {
              "key": "topUnitEntries",
              "title": "Top unit entries",
              "headers": [
                "Unit",
                "Entries"
              ],
              "rows": [
                [
                  "Witch Aelves",
                  "1"
                ]
              ]
            },
            {
              "key": "topModelCounts",
              "title": "Top model counts",
              "headers": [
                "Unit",
                "Models"
              ],
              "rows": [
                [
                  "Witch Aelves",
                  "10"
                ]
              ]
            },
            {
              "key": "topSubfactions",
              "title": "Top subfactions",
              "headers": [
                "Subfaction",
                "Count"
              ],
              "rows": [
                [
                  "Hagg Nar",
                  "1"
                ]
              ]
            },
            {
              "key": "manifestationLores",
              "title": "Manifestation lores",
              "headers": [
                "Manifestation lore",
                "Count"
              ],
              "rows": [
                [
                  "Morbid Conjuration",
                  "1"
                ]
              ]
            },
            {
              "key": "artifacts",
              "title": "Artifacts",
              "headers": [
                "Artifact",
                "Count"
              ],
              "rows": [
                [
                  "Crown of Woe",
                  "1"
                ]
              ]
            },
            {
              "key": "commandTraits",
              "title": "Command traits",
              "headers": [
                "Command trait",
                "Count"
              ],
              "rows": [
                [
                  "Avatar of Slaughter",
                  "1"
                ]
              ]
            },
            {
              "key": "warmachineTraits",
              "title": "Warmachine traits",
              "headers": [
                "Warmachine trait",
                "Count"
              ],
              "rows": [
                [
                  "Temple Fanatic",
                  "1"
                ]
              ]
            },
            {
              "key": "unplayedKnownUnits",
              "title": "Unplayed known units",
              "headers": [
                "Unit",
                "Unit size"
              ],
              "rows": [
                [
                  "Blood Sisters",
                  "5"
                ]
              ]
            }
          ],
          "lists": [
            {
              "index": 0,
              "source": "Singles",
              "weekLabel": "April 6-12",
              "name": "Combined List A",
              "result": "5-0",
              "subfaction": "Hagg Nar",
              "manifestationLore": "Morbid Conjuration",
              "regiments": 1,
              "unitEntries": 3,
              "models": 10,
              "units": [
                {
                  "regiment": "General's Regiment",
                  "name": "Witch Aelves",
                  "points": 110,
                  "models": 10,
                  "reinforced": false,
                  "notes": [
                    "General"
                  ]
                }
              ]
            },
            {
              "index": 1,
              "source": "Teams",
              "weekLabel": "April 13-19",
              "name": "Combined List B",
              "result": "4-1",
              "subfaction": "Khailebron",
              "manifestationLore": "Primal Energy",
              "regiments": 1,
              "unitEntries": 3,
              "models": 20,
              "units": [
                {
                  "regiment": "Regiment 1",
                  "name": "Witch Aelves",
                  "points": 110,
                  "models": 10,
                  "reinforced": false,
                  "notes": []
                },
                {
                  "regiment": "Regiment 1",
                  "name": "Blood Sisters",
                  "points": 140,
                  "models": 5,
                  "reinforced": false,
                  "notes": []
                },
                {
                  "regiment": "Regiment 1",
                  "name": "Khinerai Heartrenders",
                  "points": 100,
                  "models": 5,
                  "reinforced": false,
                  "notes": []
                }
              ]
            }
          ]
        },
        {
          "key": "singles",
          "label": "Singles",
          "datasetKey": "archive-2026-04-17-pre-points",
          "listCount": 2,
          "reportLinks": {
            "stats": "reports/archive-2026-04-17-pre-points/singles.md",
            "lists": "reports/archive-2026-04-17-pre-points/singles-lists.md"
          },
          "statsSummary": "Most common result is 4-1 (1 lists). Top unit presence is Witch Aelves in 2 lists (100.0%). Most common subfaction is Hagg Nar (1 lists). Highest model count unit is Witch Aelves (10 models).",
          "filters": {
            "results": [
              "4-1",
              "5-0"
            ],
            "subfactions": [
              "Hagg Nar",
              "Khailebron"
            ]
          },
          "story": {
            "coreSignals": [
              {
                "label": "Top subfaction",
                "value": "Hagg Nar",
                "detail": "1 of 2 lists"
              },
              {
                "label": "Top manifestation lore",
                "value": "Morbid Conjuration",
                "detail": "1 of 2 lists"
              },
              {
                "label": "Most shared unit",
                "value": "Witch Aelves",
                "detail": "2 of 2 lists (100.0%)"
              }
            ],
            "sharedUnits": [
              {
                "name": "Witch Aelves",
                "listCount": 2,
                "share": "100.0%"
              }
            ],
            "sharedUnitPairs": [],
            "weeklyTrends": [
              {
                "metric": "Unit presence",
                "label": "Witch Aelves",
                "currentValue": "100.0%",
                "deltaLabel": "Flat versus April 6-12",
                "direction": "flat",
                "points": [
                  {
                    "datasetKey": "week-1",
                    "datasetLabel": "April 6-12",
                    "eraLabel": "Pre-points era",
                    "value": "100.0%"
                  },
                  {
                    "datasetKey": "week-2",
                    "datasetLabel": "April 13-19",
                    "eraLabel": "Pre-points era",
                    "value": "100.0%"
                  }
                ]
              },
              {
                "metric": "Subfaction share",
                "label": "Hagg Nar",
                "currentValue": "0.0%",
                "deltaLabel": "-100.0 pts versus April 6-12",
                "direction": "down",
                "points": [
                  {
                    "datasetKey": "week-1",
                    "datasetLabel": "April 6-12",
                    "eraLabel": "Pre-points era",
                    "value": "100.0%"
                  },
                  {
                    "datasetKey": "week-2",
                    "datasetLabel": "April 13-19",
                    "eraLabel": "Pre-points era",
                    "value": "0.0%"
                  }
                ]
              },
              {
                "metric": "Lore share",
                "label": "Morbid Conjuration",
                "currentValue": "0.0%",
                "deltaLabel": "-100.0 pts versus April 6-12",
                "direction": "down",
                "points": [
                  {
                    "datasetKey": "week-1",
                    "datasetLabel": "April 6-12",
                    "eraLabel": "Pre-points era",
                    "value": "100.0%"
                  },
                  {
                    "datasetKey": "week-2",
                    "datasetLabel": "April 13-19",
                    "eraLabel": "Pre-points era",
                    "value": "0.0%"
                  }
                ]
              }
            ],
            "snapshotTrends": [
              {
                "metric": "Unit presence",
                "label": "Witch Aelves",
                "currentValue": "100.0%",
                "deltaLabel": "+50.0 pts versus Snapshot (2026-04-03-pre-points)",
                "direction": "up",
                "points": [
                  {
                    "datasetKey": "archive-2026-04-03-pre-points",
                    "datasetLabel": "Snapshot (2026-04-03-pre-points)",
                    "value": "50.0%"
                  },
                  {
                    "datasetKey": "archive-2026-04-10-pre-points",
                    "datasetLabel": "Snapshot (2026-04-10-pre-points)",
                    "value": "50.0%"
                  },
                  {
                    "datasetKey": "archive-2026-04-17-pre-points",
                    "datasetLabel": "Snapshot (2026-04-17-pre-points)",
                    "value": "100.0%"
                  }
                ]
              },
              {
                "metric": "Subfaction usage",
                "label": "Hagg Nar",
                "currentValue": "1",
                "deltaLabel": "Flat versus Snapshot (2026-04-03-pre-points)",
                "direction": "flat",
                "points": [
                  {
                    "datasetKey": "archive-2026-04-03-pre-points",
                    "datasetLabel": "Snapshot (2026-04-03-pre-points)",
                    "value": "1"
                  },
                  {
                    "datasetKey": "archive-2026-04-10-pre-points",
                    "datasetLabel": "Snapshot (2026-04-10-pre-points)",
                    "value": "1"
                  },
                  {
                    "datasetKey": "archive-2026-04-17-pre-points",
                    "datasetLabel": "Snapshot (2026-04-17-pre-points)",
                    "value": "1"
                  }
                ]
              },
              {
                "metric": "Lore usage",
                "label": "Morbid Conjuration",
                "currentValue": "1",
                "deltaLabel": "Flat versus Snapshot (2026-04-03-pre-points)",
                "direction": "flat",
                "points": [
                  {
                    "datasetKey": "archive-2026-04-03-pre-points",
                    "datasetLabel": "Snapshot (2026-04-03-pre-points)",
                    "value": "1"
                  },
                  {
                    "datasetKey": "archive-2026-04-10-pre-points",
                    "datasetLabel": "Snapshot (2026-04-10-pre-points)",
                    "value": "1"
                  },
                  {
                    "datasetKey": "archive-2026-04-17-pre-points",
                    "datasetLabel": "Snapshot (2026-04-17-pre-points)",
                    "value": "1"
                  }
                ]
              }
            ]
          },
          "statsTables": [
            {
              "key": "resultBreakdown",
              "title": "Result breakdown",
              "headers": [
                "Result",
                "Lists"
              ],
              "rows": [
                [
                  "4-1",
                  "1"
                ],
                [
                  "5-0",
                  "1"
                ]
              ]
            },
            {
              "key": "topUnitPresence",
              "title": "Top unit presence",
              "headers": [
                "Unit",
                "Lists",
                "% of lists"
              ],
              "rows": [
                [
                  "Witch Aelves",
                  "2",
                  "100.0%"
                ]
              ]
            },
            {
              "key": "topUnitEntries",
              "title": "Top unit entries",
              "headers": [
                "Unit",
                "Entries"
              ],
              "rows": [
                [
                  "Witch Aelves",
                  "1"
                ]
              ]
            },
            {
              "key": "topModelCounts",
              "title": "Top model counts",
              "headers": [
                "Unit",
                "Models"
              ],
              "rows": [
                [
                  "Witch Aelves",
                  "10"
                ]
              ]
            },
            {
              "key": "topSubfactions",
              "title": "Top subfactions",
              "headers": [
                "Subfaction",
                "Count"
              ],
              "rows": [
                [
                  "Hagg Nar",
                  "1"
                ]
              ]
            },
            {
              "key": "manifestationLores",
              "title": "Manifestation lores",
              "headers": [
                "Manifestation lore",
                "Count"
              ],
              "rows": [
                [
                  "Morbid Conjuration",
                  "1"
                ]
              ]
            },
            {
              "key": "artifacts",
              "title": "Artifacts",
              "headers": [
                "Artifact",
                "Count"
              ],
              "rows": [
                [
                  "Crown of Woe",
                  "1"
                ]
              ]
            },
            {
              "key": "commandTraits",
              "title": "Command traits",
              "headers": [
                "Command trait",
                "Count"
              ],
              "rows": [
                [
                  "Avatar of Slaughter",
                  "1"
                ]
              ]
            },
            {
              "key": "warmachineTraits",
              "title": "Warmachine traits",
              "headers": [
                "Warmachine trait",
                "Count"
              ],
              "rows": [
                [
                  "Temple Fanatic",
                  "1"
                ]
              ]
            },
            {
              "key": "unplayedKnownUnits",
              "title": "Unplayed known units",
              "headers": [
                "Unit",
                "Unit size"
              ],
              "rows": [
                [
                  "Blood Sisters",
                  "5"
                ]
              ]
            }
          ],
          "lists": [
            {
              "index": 0,
              "source": "Singles",
              "weekLabel": "April 6-12",
              "name": "Singles List A",
              "result": "5-0",
              "subfaction": "Hagg Nar",
              "manifestationLore": "Morbid Conjuration",
              "regiments": 1,
              "unitEntries": 3,
              "models": 10,
              "units": [
                {
                  "regiment": "General's Regiment",
                  "name": "Witch Aelves",
                  "points": 110,
                  "models": 10,
                  "reinforced": false,
                  "notes": [
                    "General"
                  ]
                }
              ]
            },
            {
              "index": 1,
              "source": "Teams",
              "weekLabel": "April 13-19",
              "name": "Singles List B",
              "result": "4-1",
              "subfaction": "Khailebron",
              "manifestationLore": "Primal Energy",
              "regiments": 1,
              "unitEntries": 3,
              "models": 20,
              "units": [
                {
                  "regiment": "Regiment 1",
                  "name": "Witch Aelves",
                  "points": 110,
                  "models": 10,
                  "reinforced": false,
                  "notes": []
                },
                {
                  "regiment": "Regiment 1",
                  "name": "Blood Sisters",
                  "points": 140,
                  "models": 5,
                  "reinforced": false,
                  "notes": []
                },
                {
                  "regiment": "Regiment 1",
                  "name": "Khinerai Heartrenders",
                  "points": 100,
                  "models": 5,
                  "reinforced": false,
                  "notes": []
                }
              ]
            }
          ]
        },
        {
          "key": "teams",
          "label": "Teams",
          "datasetKey": "archive-2026-04-17-pre-points",
          "listCount": 2,
          "reportLinks": {
            "stats": "reports/archive-2026-04-17-pre-points/teams.md",
            "lists": "reports/archive-2026-04-17-pre-points/teams-lists.md"
          },
          "statsSummary": "Most common result is 4-1 (1 lists). Top unit presence is Witch Aelves in 2 lists (100.0%). Most common subfaction is Hagg Nar (1 lists). Highest model count unit is Witch Aelves (10 models).",
          "filters": {
            "results": [
              "4-1",
              "5-0"
            ],
            "subfactions": [
              "Hagg Nar",
              "Khailebron"
            ]
          },
          "story": {
            "coreSignals": [
              {
                "label": "Top subfaction",
                "value": "Hagg Nar",
                "detail": "1 of 2 lists"
              },
              {
                "label": "Top manifestation lore",
                "value": "Morbid Conjuration",
                "detail": "1 of 2 lists"
              },
              {
                "label": "Most shared unit",
                "value": "Witch Aelves",
                "detail": "2 of 2 lists (100.0%)"
              }
            ],
            "sharedUnits": [
              {
                "name": "Witch Aelves",
                "listCount": 2,
                "share": "100.0%"
              }
            ],
            "sharedUnitPairs": [],
            "weeklyTrends": [
              {
                "metric": "Unit presence",
                "label": "Witch Aelves",
                "currentValue": "100.0%",
                "deltaLabel": "Flat versus April 6-12",
                "direction": "flat",
                "points": [
                  {
                    "datasetKey": "week-1",
                    "datasetLabel": "April 6-12",
                    "eraLabel": "Pre-points era",
                    "value": "100.0%"
                  },
                  {
                    "datasetKey": "week-2",
                    "datasetLabel": "April 13-19",
                    "eraLabel": "Pre-points era",
                    "value": "100.0%"
                  }
                ]
              },
              {
                "metric": "Subfaction share",
                "label": "Hagg Nar",
                "currentValue": "0.0%",
                "deltaLabel": "-100.0 pts versus April 6-12",
                "direction": "down",
                "points": [
                  {
                    "datasetKey": "week-1",
                    "datasetLabel": "April 6-12",
                    "eraLabel": "Pre-points era",
                    "value": "100.0%"
                  },
                  {
                    "datasetKey": "week-2",
                    "datasetLabel": "April 13-19",
                    "eraLabel": "Pre-points era",
                    "value": "0.0%"
                  }
                ]
              },
              {
                "metric": "Lore share",
                "label": "Morbid Conjuration",
                "currentValue": "0.0%",
                "deltaLabel": "-100.0 pts versus April 6-12",
                "direction": "down",
                "points": [
                  {
                    "datasetKey": "week-1",
                    "datasetLabel": "April 6-12",
                    "eraLabel": "Pre-points era",
                    "value": "100.0%"
                  },
                  {
                    "datasetKey": "week-2",
                    "datasetLabel": "April 13-19",
                    "eraLabel": "Pre-points era",
                    "value": "0.0%"
                  }
                ]
              }
            ],
            "snapshotTrends": [
              {
                "metric": "Unit presence",
                "label": "Witch Aelves",
                "currentValue": "100.0%",
                "deltaLabel": "+50.0 pts versus Snapshot (2026-04-03-pre-points)",
                "direction": "up",
                "points": [
                  {
                    "datasetKey": "archive-2026-04-03-pre-points",
                    "datasetLabel": "Snapshot (2026-04-03-pre-points)",
                    "value": "50.0%"
                  },
                  {
                    "datasetKey": "archive-2026-04-10-pre-points",
                    "datasetLabel": "Snapshot (2026-04-10-pre-points)",
                    "value": "50.0%"
                  },
                  {
                    "datasetKey": "archive-2026-04-17-pre-points",
                    "datasetLabel": "Snapshot (2026-04-17-pre-points)",
                    "value": "100.0%"
                  }
                ]
              },
              {
                "metric": "Subfaction usage",
                "label": "Hagg Nar",
                "currentValue": "1",
                "deltaLabel": "Flat versus Snapshot (2026-04-03-pre-points)",
                "direction": "flat",
                "points": [
                  {
                    "datasetKey": "archive-2026-04-03-pre-points",
                    "datasetLabel": "Snapshot (2026-04-03-pre-points)",
                    "value": "1"
                  },
                  {
                    "datasetKey": "archive-2026-04-10-pre-points",
                    "datasetLabel": "Snapshot (2026-04-10-pre-points)",
                    "value": "1"
                  },
                  {
                    "datasetKey": "archive-2026-04-17-pre-points",
                    "datasetLabel": "Snapshot (2026-04-17-pre-points)",
                    "value": "1"
                  }
                ]
              },
              {
                "metric": "Lore usage",
                "label": "Morbid Conjuration",
                "currentValue": "1",
                "deltaLabel": "Flat versus Snapshot (2026-04-03-pre-points)",
                "direction": "flat",
                "points": [
                  {
                    "datasetKey": "archive-2026-04-03-pre-points",
                    "datasetLabel": "Snapshot (2026-04-03-pre-points)",
                    "value": "1"
                  },
                  {
                    "datasetKey": "archive-2026-04-10-pre-points",
                    "datasetLabel": "Snapshot (2026-04-10-pre-points)",
                    "value": "1"
                  },
                  {
                    "datasetKey": "archive-2026-04-17-pre-points",
                    "datasetLabel": "Snapshot (2026-04-17-pre-points)",
                    "value": "1"
                  }
                ]
              }
            ]
          },
          "statsTables": [
            {
              "key": "resultBreakdown",
              "title": "Result breakdown",
              "headers": [
                "Result",
                "Lists"
              ],
              "rows": [
                [
                  "4-1",
                  "1"
                ],
                [
                  "5-0",
                  "1"
                ]
              ]
            },
            {
              "key": "topUnitPresence",
              "title": "Top unit presence",
              "headers": [
                "Unit",
                "Lists",
                "% of lists"
              ],
              "rows": [
                [
                  "Witch Aelves",
                  "2",
                  "100.0%"
                ]
              ]
            },
            {
              "key": "topUnitEntries",
              "title": "Top unit entries",
              "headers": [
                "Unit",
                "Entries"
              ],
              "rows": [
                [
                  "Witch Aelves",
                  "1"
                ]
              ]
            },
            {
              "key": "topModelCounts",
              "title": "Top model counts",
              "headers": [
                "Unit",
                "Models"
              ],
              "rows": [
                [
                  "Witch Aelves",
                  "10"
                ]
              ]
            },
            {
              "key": "topSubfactions",
              "title": "Top subfactions",
              "headers": [
                "Subfaction",
                "Count"
              ],
              "rows": [
                [
                  "Hagg Nar",
                  "1"
                ]
              ]
            },
            {
              "key": "manifestationLores",
              "title": "Manifestation lores",
              "headers": [
                "Manifestation lore",
                "Count"
              ],
              "rows": [
                [
                  "Morbid Conjuration",
                  "1"
                ]
              ]
            },
            {
              "key": "artifacts",
              "title": "Artifacts",
              "headers": [
                "Artifact",
                "Count"
              ],
              "rows": [
                [
                  "Crown of Woe",
                  "1"
                ]
              ]
            },
            {
              "key": "commandTraits",
              "title": "Command traits",
              "headers": [
                "Command trait",
                "Count"
              ],
              "rows": [
                [
                  "Avatar of Slaughter",
                  "1"
                ]
              ]
            },
            {
              "key": "warmachineTraits",
              "title": "Warmachine traits",
              "headers": [
                "Warmachine trait",
                "Count"
              ],
              "rows": [
                [
                  "Temple Fanatic",
                  "1"
                ]
              ]
            },
            {
              "key": "unplayedKnownUnits",
              "title": "Unplayed known units",
              "headers": [
                "Unit",
                "Unit size"
              ],
              "rows": [
                [
                  "Blood Sisters",
                  "5"
                ]
              ]
            }
          ],
          "lists": [
            {
              "index": 0,
              "source": "Singles",
              "weekLabel": "April 6-12",
              "name": "Teams List A",
              "result": "5-0",
              "subfaction": "Hagg Nar",
              "manifestationLore": "Morbid Conjuration",
              "regiments": 1,
              "unitEntries": 3,
              "models": 10,
              "units": [
                {
                  "regiment": "General's Regiment",
                  "name": "Witch Aelves",
                  "points": 110,
                  "models": 10,
                  "reinforced": false,
                  "notes": [
                    "General"
                  ]
                }
              ]
            },
            {
              "index": 1,
              "source": "Teams",
              "weekLabel": "April 13-19",
              "name": "Teams List B",
              "result": "4-1",
              "subfaction": "Khailebron",
              "manifestationLore": "Primal Energy",
              "regiments": 1,
              "unitEntries": 3,
              "models": 20,
              "units": [
                {
                  "regiment": "Regiment 1",
                  "name": "Witch Aelves",
                  "points": 110,
                  "models": 10,
                  "reinforced": false,
                  "notes": []
                },
                {
                  "regiment": "Regiment 1",
                  "name": "Blood Sisters",
                  "points": 140,
                  "models": 5,
                  "reinforced": false,
                  "notes": []
                },
                {
                  "regiment": "Regiment 1",
                  "name": "Khinerai Heartrenders",
                  "points": 100,
                  "models": 5,
                  "reinforced": false,
                  "notes": []
                }
              ]
            }
          ]
        }
      ]
    },
    {
      "key": "archive-2026-04-10-pre-points",
      "label": "Snapshot (2026-04-10-pre-points)",
      "reportBasePath": "reports/archive-2026-04-10-pre-points",
      "scopes": [
        {
          "key": "combined",
          "label": "Combined",
          "datasetKey": "archive-2026-04-10-pre-points",
          "listCount": 2,
          "reportLinks": {
            "stats": "reports/archive-2026-04-10-pre-points/combined.md",
            "lists": "reports/archive-2026-04-10-pre-points/combined-lists.md"
          },
          "statsSummary": "Most common result is 4-1 (1 lists). Top unit presence is Witch Aelves in 1 lists (50.0%). Most common subfaction is Hagg Nar (1 lists). Highest model count unit is Witch Aelves (10 models).",
          "filters": {
            "results": [
              "4-1",
              "5-0"
            ],
            "subfactions": [
              "Hagg Nar",
              "Khailebron"
            ]
          },
          "story": {
            "coreSignals": [
              {
                "label": "Top subfaction",
                "value": "Hagg Nar",
                "detail": "1 of 2 lists"
              },
              {
                "label": "Top manifestation lore",
                "value": "Morbid Conjuration",
                "detail": "1 of 2 lists"
              },
              {
                "label": "Most shared unit",
                "value": "Witch Aelves",
                "detail": "2 of 2 lists (100.0%)"
              }
            ],
            "sharedUnits": [
              {
                "name": "Witch Aelves",
                "listCount": 2,
                "share": "100.0%"
              }
            ],
            "sharedUnitPairs": [],
            "weeklyTrends": [
              {
                "metric": "Unit presence",
                "label": "Witch Aelves",
                "currentValue": "100.0%",
                "deltaLabel": "Flat versus April 6-12",
                "direction": "flat",
                "points": [
                  {
                    "datasetKey": "week-1",
                    "datasetLabel": "April 6-12",
                    "eraLabel": "Pre-points era",
                    "value": "100.0%"
                  },
                  {
                    "datasetKey": "week-2",
                    "datasetLabel": "April 13-19",
                    "eraLabel": "Pre-points era",
                    "value": "100.0%"
                  }
                ]
              },
              {
                "metric": "Subfaction share",
                "label": "Hagg Nar",
                "currentValue": "0.0%",
                "deltaLabel": "-100.0 pts versus April 6-12",
                "direction": "down",
                "points": [
                  {
                    "datasetKey": "week-1",
                    "datasetLabel": "April 6-12",
                    "eraLabel": "Pre-points era",
                    "value": "100.0%"
                  },
                  {
                    "datasetKey": "week-2",
                    "datasetLabel": "April 13-19",
                    "eraLabel": "Pre-points era",
                    "value": "0.0%"
                  }
                ]
              },
              {
                "metric": "Lore share",
                "label": "Morbid Conjuration",
                "currentValue": "0.0%",
                "deltaLabel": "-100.0 pts versus April 6-12",
                "direction": "down",
                "points": [
                  {
                    "datasetKey": "week-1",
                    "datasetLabel": "April 6-12",
                    "eraLabel": "Pre-points era",
                    "value": "100.0%"
                  },
                  {
                    "datasetKey": "week-2",
                    "datasetLabel": "April 13-19",
                    "eraLabel": "Pre-points era",
                    "value": "0.0%"
                  }
                ]
              }
            ],
            "snapshotTrends": [
              {
                "metric": "Unit presence",
                "label": "Witch Aelves",
                "currentValue": "50.0%",
                "deltaLabel": "Flat versus Snapshot (2026-04-03-pre-points)",
                "direction": "flat",
                "points": [
                  {
                    "datasetKey": "archive-2026-04-03-pre-points",
                    "datasetLabel": "Snapshot (2026-04-03-pre-points)",
                    "value": "50.0%"
                  },
                  {
                    "datasetKey": "archive-2026-04-10-pre-points",
                    "datasetLabel": "Snapshot (2026-04-10-pre-points)",
                    "value": "50.0%"
                  }
                ]
              },
              {
                "metric": "Subfaction usage",
                "label": "Hagg Nar",
                "currentValue": "1",
                "deltaLabel": "Flat versus Snapshot (2026-04-03-pre-points)",
                "direction": "flat",
                "points": [
                  {
                    "datasetKey": "archive-2026-04-03-pre-points",
                    "datasetLabel": "Snapshot (2026-04-03-pre-points)",
                    "value": "1"
                  },
                  {
                    "datasetKey": "archive-2026-04-10-pre-points",
                    "datasetLabel": "Snapshot (2026-04-10-pre-points)",
                    "value": "1"
                  }
                ]
              },
              {
                "metric": "Lore usage",
                "label": "Morbid Conjuration",
                "currentValue": "1",
                "deltaLabel": "Flat versus Snapshot (2026-04-03-pre-points)",
                "direction": "flat",
                "points": [
                  {
                    "datasetKey": "archive-2026-04-03-pre-points",
                    "datasetLabel": "Snapshot (2026-04-03-pre-points)",
                    "value": "1"
                  },
                  {
                    "datasetKey": "archive-2026-04-10-pre-points",
                    "datasetLabel": "Snapshot (2026-04-10-pre-points)",
                    "value": "1"
                  }
                ]
              }
            ]
          },
          "statsTables": [
            {
              "key": "resultBreakdown",
              "title": "Result breakdown",
              "headers": [
                "Result",
                "Lists"
              ],
              "rows": [
                [
                  "4-1",
                  "1"
                ],
                [
                  "5-0",
                  "1"
                ]
              ]
            },
            {
              "key": "topUnitPresence",
              "title": "Top unit presence",
              "headers": [
                "Unit",
                "Lists",
                "% of lists"
              ],
              "rows": [
                [
                  "Witch Aelves",
                  "1",
                  "50.0%"
                ]
              ]
            },
            {
              "key": "topUnitEntries",
              "title": "Top unit entries",
              "headers": [
                "Unit",
                "Entries"
              ],
              "rows": [
                [
                  "Witch Aelves",
                  "1"
                ]
              ]
            },
            {
              "key": "topModelCounts",
              "title": "Top model counts",
              "headers": [
                "Unit",
                "Models"
              ],
              "rows": [
                [
                  "Witch Aelves",
                  "10"
                ]
              ]
            },
            {
              "key": "topSubfactions",
              "title": "Top subfactions",
              "headers": [
                "Subfaction",
                "Count"
              ],
              "rows": [
                [
                  "Hagg Nar",
                  "1"
                ]
              ]
            },
            {
              "key": "manifestationLores",
              "title": "Manifestation lores",
              "headers": [
                "Manifestation lore",
                "Count"
              ],
              "rows": [
                [
                  "Morbid Conjuration",
                  "1"
                ]
              ]
            },
            {
              "key": "artifacts",
              "title": "Artifacts",
              "headers": [
                "Artifact",
                "Count"
              ],
              "rows": [
                [
                  "Crown of Woe",
                  "1"
                ]
              ]
            },
            {
              "key": "commandTraits",
              "title": "Command traits",
              "headers": [
                "Command trait",
                "Count"
              ],
              "rows": [
                [
                  "Avatar of Slaughter",
                  "1"
                ]
              ]
            },
            {
              "key": "warmachineTraits",
              "title": "Warmachine traits",
              "headers": [
                "Warmachine trait",
                "Count"
              ],
              "rows": [
                [
                  "Temple Fanatic",
                  "1"
                ]
              ]
            },
            {
              "key": "unplayedKnownUnits",
              "title": "Unplayed known units",
              "headers": [
                "Unit",
                "Unit size"
              ],
              "rows": [
                [
                  "Blood Sisters",
                  "5"
                ]
              ]
            }
          ],
          "lists": [
            {
              "index": 0,
              "source": "Singles",
              "weekLabel": "April 6-12",
              "name": "Combined List A",
              "result": "5-0",
              "subfaction": "Hagg Nar",
              "manifestationLore": "Morbid Conjuration",
              "regiments": 1,
              "unitEntries": 3,
              "models": 10,
              "units": [
                {
                  "regiment": "General's Regiment",
                  "name": "Witch Aelves",
                  "points": 110,
                  "models": 10,
                  "reinforced": false,
                  "notes": [
                    "General"
                  ]
                }
              ]
            },
            {
              "index": 1,
              "source": "Teams",
              "weekLabel": "April 13-19",
              "name": "Combined List B",
              "result": "4-1",
              "subfaction": "Khailebron",
              "manifestationLore": "Primal Energy",
              "regiments": 1,
              "unitEntries": 3,
              "models": 20,
              "units": [
                {
                  "regiment": "Regiment 1",
                  "name": "Witch Aelves",
                  "points": 110,
                  "models": 10,
                  "reinforced": false,
                  "notes": []
                },
                {
                  "regiment": "Regiment 1",
                  "name": "Blood Sisters",
                  "points": 140,
                  "models": 5,
                  "reinforced": false,
                  "notes": []
                },
                {
                  "regiment": "Regiment 1",
                  "name": "Khinerai Heartrenders",
                  "points": 100,
                  "models": 5,
                  "reinforced": false,
                  "notes": []
                }
              ]
            }
          ]
        },
        {
          "key": "singles",
          "label": "Singles",
          "datasetKey": "archive-2026-04-10-pre-points",
          "listCount": 2,
          "reportLinks": {
            "stats": "reports/archive-2026-04-10-pre-points/singles.md",
            "lists": "reports/archive-2026-04-10-pre-points/singles-lists.md"
          },
          "statsSummary": "Most common result is 4-1 (1 lists). Top unit presence is Witch Aelves in 1 lists (50.0%). Most common subfaction is Hagg Nar (1 lists). Highest model count unit is Witch Aelves (10 models).",
          "filters": {
            "results": [
              "4-1",
              "5-0"
            ],
            "subfactions": [
              "Hagg Nar",
              "Khailebron"
            ]
          },
          "story": {
            "coreSignals": [
              {
                "label": "Top subfaction",
                "value": "Hagg Nar",
                "detail": "1 of 2 lists"
              },
              {
                "label": "Top manifestation lore",
                "value": "Morbid Conjuration",
                "detail": "1 of 2 lists"
              },
              {
                "label": "Most shared unit",
                "value": "Witch Aelves",
                "detail": "2 of 2 lists (100.0%)"
              }
            ],
            "sharedUnits": [
              {
                "name": "Witch Aelves",
                "listCount": 2,
                "share": "100.0%"
              }
            ],
            "sharedUnitPairs": [],
            "weeklyTrends": [
              {
                "metric": "Unit presence",
                "label": "Witch Aelves",
                "currentValue": "100.0%",
                "deltaLabel": "Flat versus April 6-12",
                "direction": "flat",
                "points": [
                  {
                    "datasetKey": "week-1",
                    "datasetLabel": "April 6-12",
                    "eraLabel": "Pre-points era",
                    "value": "100.0%"
                  },
                  {
                    "datasetKey": "week-2",
                    "datasetLabel": "April 13-19",
                    "eraLabel": "Pre-points era",
                    "value": "100.0%"
                  }
                ]
              },
              {
                "metric": "Subfaction share",
                "label": "Hagg Nar",
                "currentValue": "0.0%",
                "deltaLabel": "-100.0 pts versus April 6-12",
                "direction": "down",
                "points": [
                  {
                    "datasetKey": "week-1",
                    "datasetLabel": "April 6-12",
                    "eraLabel": "Pre-points era",
                    "value": "100.0%"
                  },
                  {
                    "datasetKey": "week-2",
                    "datasetLabel": "April 13-19",
                    "eraLabel": "Pre-points era",
                    "value": "0.0%"
                  }
                ]
              },
              {
                "metric": "Lore share",
                "label": "Morbid Conjuration",
                "currentValue": "0.0%",
                "deltaLabel": "-100.0 pts versus April 6-12",
                "direction": "down",
                "points": [
                  {
                    "datasetKey": "week-1",
                    "datasetLabel": "April 6-12",
                    "eraLabel": "Pre-points era",
                    "value": "100.0%"
                  },
                  {
                    "datasetKey": "week-2",
                    "datasetLabel": "April 13-19",
                    "eraLabel": "Pre-points era",
                    "value": "0.0%"
                  }
                ]
              }
            ],
            "snapshotTrends": [
              {
                "metric": "Unit presence",
                "label": "Witch Aelves",
                "currentValue": "50.0%",
                "deltaLabel": "Flat versus Snapshot (2026-04-03-pre-points)",
                "direction": "flat",
                "points": [
                  {
                    "datasetKey": "archive-2026-04-03-pre-points",
                    "datasetLabel": "Snapshot (2026-04-03-pre-points)",
                    "value": "50.0%"
                  },
                  {
                    "datasetKey": "archive-2026-04-10-pre-points",
                    "datasetLabel": "Snapshot (2026-04-10-pre-points)",
                    "value": "50.0%"
                  }
                ]
              },
              {
                "metric": "Subfaction usage",
                "label": "Hagg Nar",
                "currentValue": "1",
                "deltaLabel": "Flat versus Snapshot (2026-04-03-pre-points)",
                "direction": "flat",
                "points": [
                  {
                    "datasetKey": "archive-2026-04-03-pre-points",
                    "datasetLabel": "Snapshot (2026-04-03-pre-points)",
                    "value": "1"
                  },
                  {
                    "datasetKey": "archive-2026-04-10-pre-points",
                    "datasetLabel": "Snapshot (2026-04-10-pre-points)",
                    "value": "1"
                  }
                ]
              },
              {
                "metric": "Lore usage",
                "label": "Morbid Conjuration",
                "currentValue": "1",
                "deltaLabel": "Flat versus Snapshot (2026-04-03-pre-points)",
                "direction": "flat",
                "points": [
                  {
                    "datasetKey": "archive-2026-04-03-pre-points",
                    "datasetLabel": "Snapshot (2026-04-03-pre-points)",
                    "value": "1"
                  },
                  {
                    "datasetKey": "archive-2026-04-10-pre-points",
                    "datasetLabel": "Snapshot (2026-04-10-pre-points)",
                    "value": "1"
                  }
                ]
              }
            ]
          },
          "statsTables": [
            {
              "key": "resultBreakdown",
              "title": "Result breakdown",
              "headers": [
                "Result",
                "Lists"
              ],
              "rows": [
                [
                  "4-1",
                  "1"
                ],
                [
                  "5-0",
                  "1"
                ]
              ]
            },
            {
              "key": "topUnitPresence",
              "title": "Top unit presence",
              "headers": [
                "Unit",
                "Lists",
                "% of lists"
              ],
              "rows": [
                [
                  "Witch Aelves",
                  "1",
                  "50.0%"
                ]
              ]
            },
            {
              "key": "topUnitEntries",
              "title": "Top unit entries",
              "headers": [
                "Unit",
                "Entries"
              ],
              "rows": [
                [
                  "Witch Aelves",
                  "1"
                ]
              ]
            },
            {
              "key": "topModelCounts",
              "title": "Top model counts",
              "headers": [
                "Unit",
                "Models"
              ],
              "rows": [
                [
                  "Witch Aelves",
                  "10"
                ]
              ]
            },
            {
              "key": "topSubfactions",
              "title": "Top subfactions",
              "headers": [
                "Subfaction",
                "Count"
              ],
              "rows": [
                [
                  "Hagg Nar",
                  "1"
                ]
              ]
            },
            {
              "key": "manifestationLores",
              "title": "Manifestation lores",
              "headers": [
                "Manifestation lore",
                "Count"
              ],
              "rows": [
                [
                  "Morbid Conjuration",
                  "1"
                ]
              ]
            },
            {
              "key": "artifacts",
              "title": "Artifacts",
              "headers": [
                "Artifact",
                "Count"
              ],
              "rows": [
                [
                  "Crown of Woe",
                  "1"
                ]
              ]
            },
            {
              "key": "commandTraits",
              "title": "Command traits",
              "headers": [
                "Command trait",
                "Count"
              ],
              "rows": [
                [
                  "Avatar of Slaughter",
                  "1"
                ]
              ]
            },
            {
              "key": "warmachineTraits",
              "title": "Warmachine traits",
              "headers": [
                "Warmachine trait",
                "Count"
              ],
              "rows": [
                [
                  "Temple Fanatic",
                  "1"
                ]
              ]
            },
            {
              "key": "unplayedKnownUnits",
              "title": "Unplayed known units",
              "headers": [
                "Unit",
                "Unit size"
              ],
              "rows": [
                [
                  "Blood Sisters",
                  "5"
                ]
              ]
            }
          ],
          "lists": [
            {
              "index": 0,
              "source": "Singles",
              "weekLabel": "April 6-12",
              "name": "Singles List A",
              "result": "5-0",
              "subfaction": "Hagg Nar",
              "manifestationLore": "Morbid Conjuration",
              "regiments": 1,
              "unitEntries": 3,
              "models": 10,
              "units": [
                {
                  "regiment": "General's Regiment",
                  "name": "Witch Aelves",
                  "points": 110,
                  "models": 10,
                  "reinforced": false,
                  "notes": [
                    "General"
                  ]
                }
              ]
            },
            {
              "index": 1,
              "source": "Teams",
              "weekLabel": "April 13-19",
              "name": "Singles List B",
              "result": "4-1",
              "subfaction": "Khailebron",
              "manifestationLore": "Primal Energy",
              "regiments": 1,
              "unitEntries": 3,
              "models": 20,
              "units": [
                {
                  "regiment": "Regiment 1",
                  "name": "Witch Aelves",
                  "points": 110,
                  "models": 10,
                  "reinforced": false,
                  "notes": []
                },
                {
                  "regiment": "Regiment 1",
                  "name": "Blood Sisters",
                  "points": 140,
                  "models": 5,
                  "reinforced": false,
                  "notes": []
                },
                {
                  "regiment": "Regiment 1",
                  "name": "Khinerai Heartrenders",
                  "points": 100,
                  "models": 5,
                  "reinforced": false,
                  "notes": []
                }
              ]
            }
          ]
        },
        {
          "key": "teams",
          "label": "Teams",
          "datasetKey": "archive-2026-04-10-pre-points",
          "listCount": 2,
          "reportLinks": {
            "stats": "reports/archive-2026-04-10-pre-points/teams.md",
            "lists": "reports/archive-2026-04-10-pre-points/teams-lists.md"
          },
          "statsSummary": "Most common result is 4-1 (1 lists). Top unit presence is Witch Aelves in 1 lists (50.0%). Most common subfaction is Hagg Nar (1 lists). Highest model count unit is Witch Aelves (10 models).",
          "filters": {
            "results": [
              "4-1",
              "5-0"
            ],
            "subfactions": [
              "Hagg Nar",
              "Khailebron"
            ]
          },
          "story": {
            "coreSignals": [
              {
                "label": "Top subfaction",
                "value": "Hagg Nar",
                "detail": "1 of 2 lists"
              },
              {
                "label": "Top manifestation lore",
                "value": "Morbid Conjuration",
                "detail": "1 of 2 lists"
              },
              {
                "label": "Most shared unit",
                "value": "Witch Aelves",
                "detail": "2 of 2 lists (100.0%)"
              }
            ],
            "sharedUnits": [
              {
                "name": "Witch Aelves",
                "listCount": 2,
                "share": "100.0%"
              }
            ],
            "sharedUnitPairs": [],
            "weeklyTrends": [
              {
                "metric": "Unit presence",
                "label": "Witch Aelves",
                "currentValue": "100.0%",
                "deltaLabel": "Flat versus April 6-12",
                "direction": "flat",
                "points": [
                  {
                    "datasetKey": "week-1",
                    "datasetLabel": "April 6-12",
                    "eraLabel": "Pre-points era",
                    "value": "100.0%"
                  },
                  {
                    "datasetKey": "week-2",
                    "datasetLabel": "April 13-19",
                    "eraLabel": "Pre-points era",
                    "value": "100.0%"
                  }
                ]
              },
              {
                "metric": "Subfaction share",
                "label": "Hagg Nar",
                "currentValue": "0.0%",
                "deltaLabel": "-100.0 pts versus April 6-12",
                "direction": "down",
                "points": [
                  {
                    "datasetKey": "week-1",
                    "datasetLabel": "April 6-12",
                    "eraLabel": "Pre-points era",
                    "value": "100.0%"
                  },
                  {
                    "datasetKey": "week-2",
                    "datasetLabel": "April 13-19",
                    "eraLabel": "Pre-points era",
                    "value": "0.0%"
                  }
                ]
              },
              {
                "metric": "Lore share",
                "label": "Morbid Conjuration",
                "currentValue": "0.0%",
                "deltaLabel": "-100.0 pts versus April 6-12",
                "direction": "down",
                "points": [
                  {
                    "datasetKey": "week-1",
                    "datasetLabel": "April 6-12",
                    "eraLabel": "Pre-points era",
                    "value": "100.0%"
                  },
                  {
                    "datasetKey": "week-2",
                    "datasetLabel": "April 13-19",
                    "eraLabel": "Pre-points era",
                    "value": "0.0%"
                  }
                ]
              }
            ],
            "snapshotTrends": [
              {
                "metric": "Unit presence",
                "label": "Witch Aelves",
                "currentValue": "50.0%",
                "deltaLabel": "Flat versus Snapshot (2026-04-03-pre-points)",
                "direction": "flat",
                "points": [
                  {
                    "datasetKey": "archive-2026-04-03-pre-points",
                    "datasetLabel": "Snapshot (2026-04-03-pre-points)",
                    "value": "50.0%"
                  },
                  {
                    "datasetKey": "archive-2026-04-10-pre-points",
                    "datasetLabel": "Snapshot (2026-04-10-pre-points)",
                    "value": "50.0%"
                  }
                ]
              },
              {
                "metric": "Subfaction usage",
                "label": "Hagg Nar",
                "currentValue": "1",
                "deltaLabel": "Flat versus Snapshot (2026-04-03-pre-points)",
                "direction": "flat",
                "points": [
                  {
                    "datasetKey": "archive-2026-04-03-pre-points",
                    "datasetLabel": "Snapshot (2026-04-03-pre-points)",
                    "value": "1"
                  },
                  {
                    "datasetKey": "archive-2026-04-10-pre-points",
                    "datasetLabel": "Snapshot (2026-04-10-pre-points)",
                    "value": "1"
                  }
                ]
              },
              {
                "metric": "Lore usage",
                "label": "Morbid Conjuration",
                "currentValue": "1",
                "deltaLabel": "Flat versus Snapshot (2026-04-03-pre-points)",
                "direction": "flat",
                "points": [
                  {
                    "datasetKey": "archive-2026-04-03-pre-points",
                    "datasetLabel": "Snapshot (2026-04-03-pre-points)",
                    "value": "1"
                  },
                  {
                    "datasetKey": "archive-2026-04-10-pre-points",
                    "datasetLabel": "Snapshot (2026-04-10-pre-points)",
                    "value": "1"
                  }
                ]
              }
            ]
          },
          "statsTables": [
            {
              "key": "resultBreakdown",
              "title": "Result breakdown",
              "headers": [
                "Result",
                "Lists"
              ],
              "rows": [
                [
                  "4-1",
                  "1"
                ],
                [
                  "5-0",
                  "1"
                ]
              ]
            },
            {
              "key": "topUnitPresence",
              "title": "Top unit presence",
              "headers": [
                "Unit",
                "Lists",
                "% of lists"
              ],
              "rows": [
                [
                  "Witch Aelves",
                  "1",
                  "50.0%"
                ]
              ]
            },
            {
              "key": "topUnitEntries",
              "title": "Top unit entries",
              "headers": [
                "Unit",
                "Entries"
              ],
              "rows": [
                [
                  "Witch Aelves",
                  "1"
                ]
              ]
            },
            {
              "key": "topModelCounts",
              "title": "Top model counts",
              "headers": [
                "Unit",
                "Models"
              ],
              "rows": [
                [
                  "Witch Aelves",
                  "10"
                ]
              ]
            },
            {
              "key": "topSubfactions",
              "title": "Top subfactions",
              "headers": [
                "Subfaction",
                "Count"
              ],
              "rows": [
                [
                  "Hagg Nar",
                  "1"
                ]
              ]
            },
            {
              "key": "manifestationLores",
              "title": "Manifestation lores",
              "headers": [
                "Manifestation lore",
                "Count"
              ],
              "rows": [
                [
                  "Morbid Conjuration",
                  "1"
                ]
              ]
            },
            {
              "key": "artifacts",
              "title": "Artifacts",
              "headers": [
                "Artifact",
                "Count"
              ],
              "rows": [
                [
                  "Crown of Woe",
                  "1"
                ]
              ]
            },
            {
              "key": "commandTraits",
              "title": "Command traits",
              "headers": [
                "Command trait",
                "Count"
              ],
              "rows": [
                [
                  "Avatar of Slaughter",
                  "1"
                ]
              ]
            },
            {
              "key": "warmachineTraits",
              "title": "Warmachine traits",
              "headers": [
                "Warmachine trait",
                "Count"
              ],
              "rows": [
                [
                  "Temple Fanatic",
                  "1"
                ]
              ]
            },
            {
              "key": "unplayedKnownUnits",
              "title": "Unplayed known units",
              "headers": [
                "Unit",
                "Unit size"
              ],
              "rows": [
                [
                  "Blood Sisters",
                  "5"
                ]
              ]
            }
          ],
          "lists": [
            {
              "index": 0,
              "source": "Singles",
              "weekLabel": "April 6-12",
              "name": "Teams List A",
              "result": "5-0",
              "subfaction": "Hagg Nar",
              "manifestationLore": "Morbid Conjuration",
              "regiments": 1,
              "unitEntries": 3,
              "models": 10,
              "units": [
                {
                  "regiment": "General's Regiment",
                  "name": "Witch Aelves",
                  "points": 110,
                  "models": 10,
                  "reinforced": false,
                  "notes": [
                    "General"
                  ]
                }
              ]
            },
            {
              "index": 1,
              "source": "Teams",
              "weekLabel": "April 13-19",
              "name": "Teams List B",
              "result": "4-1",
              "subfaction": "Khailebron",
              "manifestationLore": "Primal Energy",
              "regiments": 1,
              "unitEntries": 3,
              "models": 20,
              "units": [
                {
                  "regiment": "Regiment 1",
                  "name": "Witch Aelves",
                  "points": 110,
                  "models": 10,
                  "reinforced": false,
                  "notes": []
                },
                {
                  "regiment": "Regiment 1",
                  "name": "Blood Sisters",
                  "points": 140,
                  "models": 5,
                  "reinforced": false,
                  "notes": []
                },
                {
                  "regiment": "Regiment 1",
                  "name": "Khinerai Heartrenders",
                  "points": 100,
                  "models": 5,
                  "reinforced": false,
                  "notes": []
                }
              ]
            }
          ]
        }
      ]
    },
    {
      "key": "archive-2026-04-03-pre-points",
      "label": "Snapshot (2026-04-03-pre-points)",
      "reportBasePath": "reports/archive-2026-04-03-pre-points",
      "scopes": [
        {
          "key": "combined",
          "label": "Combined",
          "datasetKey": "archive-2026-04-03-pre-points",
          "listCount": 2,
          "reportLinks": {
            "stats": "reports/archive-2026-04-03-pre-points/combined.md",
            "lists": "reports/archive-2026-04-03-pre-points/combined-lists.md"
          },
          "statsSummary": "Most common result is 4-1 (1 lists). Top unit presence is Witch Aelves in 1 lists (50.0%). Most common subfaction is Hagg Nar (1 lists). Highest model count unit is Witch Aelves (10 models).",
          "filters": {
            "results": [
              "4-1",
              "5-0"
            ],
            "subfactions": [
              "Hagg Nar",
              "Khailebron"
            ]
          },
          "story": {
            "coreSignals": [
              {
                "label": "Top subfaction",
                "value": "Hagg Nar",
                "detail": "1 of 2 lists"
              },
              {
                "label": "Top manifestation lore",
                "value": "Morbid Conjuration",
                "detail": "1 of 2 lists"
              },
              {
                "label": "Most shared unit",
                "value": "Witch Aelves",
                "detail": "2 of 2 lists (100.0%)"
              }
            ],
            "sharedUnits": [
              {
                "name": "Witch Aelves",
                "listCount": 2,
                "share": "100.0%"
              }
            ],
            "sharedUnitPairs": [],
            "weeklyTrends": [
              {
                "metric": "Unit presence",
                "label": "Witch Aelves",
                "currentValue": "100.0%",
                "deltaLabel": "Flat versus April 6-12",
                "direction": "flat",
                "points": [
                  {
                    "datasetKey": "week-1",
                    "datasetLabel": "April 6-12",
                    "eraLabel": "Pre-points era",
                    "value": "100.0%"
                  },
                  {
                    "datasetKey": "week-2",
                    "datasetLabel": "April 13-19",
                    "eraLabel": "Pre-points era",
                    "value": "100.0%"
                  }
                ]
              },
              {
                "metric": "Subfaction share",
                "label": "Hagg Nar",
                "currentValue": "0.0%",
                "deltaLabel": "-100.0 pts versus April 6-12",
                "direction": "down",
                "points": [
                  {
                    "datasetKey": "week-1",
                    "datasetLabel": "April 6-12",
                    "eraLabel": "Pre-points era",
                    "value": "100.0%"
                  },
                  {
                    "datasetKey": "week-2",
                    "datasetLabel": "April 13-19",
                    "eraLabel": "Pre-points era",
                    "value": "0.0%"
                  }
                ]
              },
              {
                "metric": "Lore share",
                "label": "Morbid Conjuration",
                "currentValue": "0.0%",
                "deltaLabel": "-100.0 pts versus April 6-12",
                "direction": "down",
                "points": [
                  {
                    "datasetKey": "week-1",
                    "datasetLabel": "April 6-12",
                    "eraLabel": "Pre-points era",
                    "value": "100.0%"
                  },
                  {
                    "datasetKey": "week-2",
                    "datasetLabel": "April 13-19",
                    "eraLabel": "Pre-points era",
                    "value": "0.0%"
                  }
                ]
              }
            ],
            "snapshotTrends": []
          },
          "statsTables": [
            {
              "key": "resultBreakdown",
              "title": "Result breakdown",
              "headers": [
                "Result",
                "Lists"
              ],
              "rows": [
                [
                  "4-1",
                  "1"
                ],
                [
                  "5-0",
                  "1"
                ]
              ]
            },
            {
              "key": "topUnitPresence",
              "title": "Top unit presence",
              "headers": [
                "Unit",
                "Lists",
                "% of lists"
              ],
              "rows": [
                [
                  "Witch Aelves",
                  "1",
                  "50.0%"
                ]
              ]
            },
            {
              "key": "topUnitEntries",
              "title": "Top unit entries",
              "headers": [
                "Unit",
                "Entries"
              ],
              "rows": [
                [
                  "Witch Aelves",
                  "1"
                ]
              ]
            },
            {
              "key": "topModelCounts",
              "title": "Top model counts",
              "headers": [
                "Unit",
                "Models"
              ],
              "rows": [
                [
                  "Witch Aelves",
                  "10"
                ]
              ]
            },
            {
              "key": "topSubfactions",
              "title": "Top subfactions",
              "headers": [
                "Subfaction",
                "Count"
              ],
              "rows": [
                [
                  "Hagg Nar",
                  "1"
                ]
              ]
            },
            {
              "key": "manifestationLores",
              "title": "Manifestation lores",
              "headers": [
                "Manifestation lore",
                "Count"
              ],
              "rows": [
                [
                  "Morbid Conjuration",
                  "1"
                ]
              ]
            },
            {
              "key": "artifacts",
              "title": "Artifacts",
              "headers": [
                "Artifact",
                "Count"
              ],
              "rows": [
                [
                  "Crown of Woe",
                  "1"
                ]
              ]
            },
            {
              "key": "commandTraits",
              "title": "Command traits",
              "headers": [
                "Command trait",
                "Count"
              ],
              "rows": [
                [
                  "Avatar of Slaughter",
                  "1"
                ]
              ]
            },
            {
              "key": "warmachineTraits",
              "title": "Warmachine traits",
              "headers": [
                "Warmachine trait",
                "Count"
              ],
              "rows": [
                [
                  "Temple Fanatic",
                  "1"
                ]
              ]
            },
            {
              "key": "unplayedKnownUnits",
              "title": "Unplayed known units",
              "headers": [
                "Unit",
                "Unit size"
              ],
              "rows": [
                [
                  "Blood Sisters",
                  "5"
                ]
              ]
            }
          ],
          "lists": [
            {
              "index": 0,
              "source": "Singles",
              "weekLabel": "April 6-12",
              "name": "Combined List A",
              "result": "5-0",
              "subfaction": "Hagg Nar",
              "manifestationLore": "Morbid Conjuration",
              "regiments": 1,
              "unitEntries": 3,
              "models": 10,
              "units": [
                {
                  "regiment": "General's Regiment",
                  "name": "Witch Aelves",
                  "points": 110,
                  "models": 10,
                  "reinforced": false,
                  "notes": [
                    "General"
                  ]
                }
              ]
            },
            {
              "index": 1,
              "source": "Teams",
              "weekLabel": "April 13-19",
              "name": "Combined List B",
              "result": "4-1",
              "subfaction": "Khailebron",
              "manifestationLore": "Primal Energy",
              "regiments": 1,
              "unitEntries": 3,
              "models": 20,
              "units": [
                {
                  "regiment": "Regiment 1",
                  "name": "Witch Aelves",
                  "points": 110,
                  "models": 10,
                  "reinforced": false,
                  "notes": []
                },
                {
                  "regiment": "Regiment 1",
                  "name": "Blood Sisters",
                  "points": 140,
                  "models": 5,
                  "reinforced": false,
                  "notes": []
                },
                {
                  "regiment": "Regiment 1",
                  "name": "Khinerai Heartrenders",
                  "points": 100,
                  "models": 5,
                  "reinforced": false,
                  "notes": []
                }
              ]
            }
          ]
        },
        {
          "key": "singles",
          "label": "Singles",
          "datasetKey": "archive-2026-04-03-pre-points",
          "listCount": 2,
          "reportLinks": {
            "stats": "reports/archive-2026-04-03-pre-points/singles.md",
            "lists": "reports/archive-2026-04-03-pre-points/singles-lists.md"
          },
          "statsSummary": "Most common result is 4-1 (1 lists). Top unit presence is Witch Aelves in 1 lists (50.0%). Most common subfaction is Hagg Nar (1 lists). Highest model count unit is Witch Aelves (10 models).",
          "filters": {
            "results": [
              "4-1",
              "5-0"
            ],
            "subfactions": [
              "Hagg Nar",
              "Khailebron"
            ]
          },
          "story": {
            "coreSignals": [
              {
                "label": "Top subfaction",
                "value": "Hagg Nar",
                "detail": "1 of 2 lists"
              },
              {
                "label": "Top manifestation lore",
                "value": "Morbid Conjuration",
                "detail": "1 of 2 lists"
              },
              {
                "label": "Most shared unit",
                "value": "Witch Aelves",
                "detail": "2 of 2 lists (100.0%)"
              }
            ],
            "sharedUnits": [
              {
                "name": "Witch Aelves",
                "listCount": 2,
                "share": "100.0%"
              }
            ],
            "sharedUnitPairs": [],
            "weeklyTrends": [
              {
                "metric": "Unit presence",
                "label": "Witch Aelves",
                "currentValue": "100.0%",
                "deltaLabel": "Flat versus April 6-12",
                "direction": "flat",
                "points": [
                  {
                    "datasetKey": "week-1",
                    "datasetLabel": "April 6-12",
                    "eraLabel": "Pre-points era",
                    "value": "100.0%"
                  },
                  {
                    "datasetKey": "week-2",
                    "datasetLabel": "April 13-19",
                    "eraLabel": "Pre-points era",
                    "value": "100.0%"
                  }
                ]
              },
              {
                "metric": "Subfaction share",
                "label": "Hagg Nar",
                "currentValue": "0.0%",
                "deltaLabel": "-100.0 pts versus April 6-12",
                "direction": "down",
                "points": [
                  {
                    "datasetKey": "week-1",
                    "datasetLabel": "April 6-12",
                    "eraLabel": "Pre-points era",
                    "value": "100.0%"
                  },
                  {
                    "datasetKey": "week-2",
                    "datasetLabel": "April 13-19",
                    "eraLabel": "Pre-points era",
                    "value": "0.0%"
                  }
                ]
              },
              {
                "metric": "Lore share",
                "label": "Morbid Conjuration",
                "currentValue": "0.0%",
                "deltaLabel": "-100.0 pts versus April 6-12",
                "direction": "down",
                "points": [
                  {
                    "datasetKey": "week-1",
                    "datasetLabel": "April 6-12",
                    "eraLabel": "Pre-points era",
                    "value": "100.0%"
                  },
                  {
                    "datasetKey": "week-2",
                    "datasetLabel": "April 13-19",
                    "eraLabel": "Pre-points era",
                    "value": "0.0%"
                  }
                ]
              }
            ],
            "snapshotTrends": []
          },
          "statsTables": [
            {
              "key": "resultBreakdown",
              "title": "Result breakdown",
              "headers": [
                "Result",
                "Lists"
              ],
              "rows": [
                [
                  "4-1",
                  "1"
                ],
                [
                  "5-0",
                  "1"
                ]
              ]
            },
            {
              "key": "topUnitPresence",
              "title": "Top unit presence",
              "headers": [
                "Unit",
                "Lists",
                "% of lists"
              ],
              "rows": [
                [
                  "Witch Aelves",
                  "1",
                  "50.0%"
                ]
              ]
            },
            {
              "key": "topUnitEntries",
              "title": "Top unit entries",
              "headers": [
                "Unit",
                "Entries"
              ],
              "rows": [
                [
                  "Witch Aelves",
                  "1"
                ]
              ]
            },
            {
              "key": "topModelCounts",
              "title": "Top model counts",
              "headers": [
                "Unit",
                "Models"
              ],
              "rows": [
                [
                  "Witch Aelves",
                  "10"
                ]
              ]
            },
            {
              "key": "topSubfactions",
              "title": "Top subfactions",
              "headers": [
                "Subfaction",
                "Count"
              ],
              "rows": [
                [
                  "Hagg Nar",
                  "1"
                ]
              ]
            },
            {
              "key": "manifestationLores",
              "title": "Manifestation lores",
              "headers": [
                "Manifestation lore",
                "Count"
              ],
              "rows": [
                [
                  "Morbid Conjuration",
                  "1"
                ]
              ]
            },
            {
              "key": "artifacts",
              "title": "Artifacts",
              "headers": [
                "Artifact",
                "Count"
              ],
              "rows": [
                [
                  "Crown of Woe",
                  "1"
                ]
              ]
            },
            {
              "key": "commandTraits",
              "title": "Command traits",
              "headers": [
                "Command trait",
                "Count"
              ],
              "rows": [
                [
                  "Avatar of Slaughter",
                  "1"
                ]
              ]
            },
            {
              "key": "warmachineTraits",
              "title": "Warmachine traits",
              "headers": [
                "Warmachine trait",
                "Count"
              ],
              "rows": [
                [
                  "Temple Fanatic",
                  "1"
                ]
              ]
            },
            {
              "key": "unplayedKnownUnits",
              "title": "Unplayed known units",
              "headers": [
                "Unit",
                "Unit size"
              ],
              "rows": [
                [
                  "Blood Sisters",
                  "5"
                ]
              ]
            }
          ],
          "lists": [
            {
              "index": 0,
              "source": "Singles",
              "weekLabel": "April 6-12",
              "name": "Singles List A",
              "result": "5-0",
              "subfaction": "Hagg Nar",
              "manifestationLore": "Morbid Conjuration",
              "regiments": 1,
              "unitEntries": 3,
              "models": 10,
              "units": [
                {
                  "regiment": "General's Regiment",
                  "name": "Witch Aelves",
                  "points": 110,
                  "models": 10,
                  "reinforced": false,
                  "notes": [
                    "General"
                  ]
                }
              ]
            },
            {
              "index": 1,
              "source": "Teams",
              "weekLabel": "April 13-19",
              "name": "Singles List B",
              "result": "4-1",
              "subfaction": "Khailebron",
              "manifestationLore": "Primal Energy",
              "regiments": 1,
              "unitEntries": 3,
              "models": 20,
              "units": [
                {
                  "regiment": "Regiment 1",
                  "name": "Witch Aelves",
                  "points": 110,
                  "models": 10,
                  "reinforced": false,
                  "notes": []
                },
                {
                  "regiment": "Regiment 1",
                  "name": "Blood Sisters",
                  "points": 140,
                  "models": 5,
                  "reinforced": false,
                  "notes": []
                },
                {
                  "regiment": "Regiment 1",
                  "name": "Khinerai Heartrenders",
                  "points": 100,
                  "models": 5,
                  "reinforced": false,
                  "notes": []
                }
              ]
            }
          ]
        },
        {
          "key": "teams",
          "label": "Teams",
          "datasetKey": "archive-2026-04-03-pre-points",
          "listCount": 2,
          "reportLinks": {
            "stats": "reports/archive-2026-04-03-pre-points/teams.md",
            "lists": "reports/archive-2026-04-03-pre-points/teams-lists.md"
          },
          "statsSummary": "Most common result is 4-1 (1 lists). Top unit presence is Witch Aelves in 1 lists (50.0%). Most common subfaction is Hagg Nar (1 lists). Highest model count unit is Witch Aelves (10 models).",
          "filters": {
            "results": [
              "4-1",
              "5-0"
            ],
            "subfactions": [
              "Hagg Nar",
              "Khailebron"
            ]
          },
          "story": {
            "coreSignals": [
              {
                "label": "Top subfaction",
                "value": "Hagg Nar",
                "detail": "1 of 2 lists"
              },
              {
                "label": "Top manifestation lore",
                "value": "Morbid Conjuration",
                "detail": "1 of 2 lists"
              },
              {
                "label": "Most shared unit",
                "value": "Witch Aelves",
                "detail": "2 of 2 lists (100.0%)"
              }
            ],
            "sharedUnits": [
              {
                "name": "Witch Aelves",
                "listCount": 2,
                "share": "100.0%"
              }
            ],
            "sharedUnitPairs": [],
            "weeklyTrends": [
              {
                "metric": "Unit presence",
                "label": "Witch Aelves",
                "currentValue": "100.0%",
                "deltaLabel": "Flat versus April 6-12",
                "direction": "flat",
                "points": [
                  {
                    "datasetKey": "week-1",
                    "datasetLabel": "April 6-12",
                    "eraLabel": "Pre-points era",
                    "value": "100.0%"
                  },
                  {
                    "datasetKey": "week-2",
                    "datasetLabel": "April 13-19",
                    "eraLabel": "Pre-points era",
                    "value": "100.0%"
                  }
                ]
              },
              {
                "metric": "Subfaction share",
                "label": "Hagg Nar",
                "currentValue": "0.0%",
                "deltaLabel": "-100.0 pts versus April 6-12",
                "direction": "down",
                "points": [
                  {
                    "datasetKey": "week-1",
                    "datasetLabel": "April 6-12",
                    "eraLabel": "Pre-points era",
                    "value": "100.0%"
                  },
                  {
                    "datasetKey": "week-2",
                    "datasetLabel": "April 13-19",
                    "eraLabel": "Pre-points era",
                    "value": "0.0%"
                  }
                ]
              },
              {
                "metric": "Lore share",
                "label": "Morbid Conjuration",
                "currentValue": "0.0%",
                "deltaLabel": "-100.0 pts versus April 6-12",
                "direction": "down",
                "points": [
                  {
                    "datasetKey": "week-1",
                    "datasetLabel": "April 6-12",
                    "eraLabel": "Pre-points era",
                    "value": "100.0%"
                  },
                  {
                    "datasetKey": "week-2",
                    "datasetLabel": "April 13-19",
                    "eraLabel": "Pre-points era",
                    "value": "0.0%"
                  }
                ]
              }
            ],
            "snapshotTrends": []
          },
          "statsTables": [
            {
              "key": "resultBreakdown",
              "title": "Result breakdown",
              "headers": [
                "Result",
                "Lists"
              ],
              "rows": [
                [
                  "4-1",
                  "1"
                ],
                [
                  "5-0",
                  "1"
                ]
              ]
            },
            {
              "key": "topUnitPresence",
              "title": "Top unit presence",
              "headers": [
                "Unit",
                "Lists",
                "% of lists"
              ],
              "rows": [
                [
                  "Witch Aelves",
                  "1",
                  "50.0%"
                ]
              ]
            },
            {
              "key": "topUnitEntries",
              "title": "Top unit entries",
              "headers": [
                "Unit",
                "Entries"
              ],
              "rows": [
                [
                  "Witch Aelves",
                  "1"
                ]
              ]
            },
            {
              "key": "topModelCounts",
              "title": "Top model counts",
              "headers": [
                "Unit",
                "Models"
              ],
              "rows": [
                [
                  "Witch Aelves",
                  "10"
                ]
              ]
            },
            {
              "key": "topSubfactions",
              "title": "Top subfactions",
              "headers": [
                "Subfaction",
                "Count"
              ],
              "rows": [
                [
                  "Hagg Nar",
                  "1"
                ]
              ]
            },
            {
              "key": "manifestationLores",
              "title": "Manifestation lores",
              "headers": [
                "Manifestation lore",
                "Count"
              ],
              "rows": [
                [
                  "Morbid Conjuration",
                  "1"
                ]
              ]
            },
            {
              "key": "artifacts",
              "title": "Artifacts",
              "headers": [
                "Artifact",
                "Count"
              ],
              "rows": [
                [
                  "Crown of Woe",
                  "1"
                ]
              ]
            },
            {
              "key": "commandTraits",
              "title": "Command traits",
              "headers": [
                "Command trait",
                "Count"
              ],
              "rows": [
                [
                  "Avatar of Slaughter",
                  "1"
                ]
              ]
            },
            {
              "key": "warmachineTraits",
              "title": "Warmachine traits",
              "headers": [
                "Warmachine trait",
                "Count"
              ],
              "rows": [
                [
                  "Temple Fanatic",
                  "1"
                ]
              ]
            },
            {
              "key": "unplayedKnownUnits",
              "title": "Unplayed known units",
              "headers": [
                "Unit",
                "Unit size"
              ],
              "rows": [
                [
                  "Blood Sisters",
                  "5"
                ]
              ]
            }
          ],
          "lists": [
            {
              "index": 0,
              "source": "Singles",
              "weekLabel": "April 6-12",
              "name": "Teams List A",
              "result": "5-0",
              "subfaction": "Hagg Nar",
              "manifestationLore": "Morbid Conjuration",
              "regiments": 1,
              "unitEntries": 3,
              "models": 10,
              "units": [
                {
                  "regiment": "General's Regiment",
                  "name": "Witch Aelves",
                  "points": 110,
                  "models": 10,
                  "reinforced": false,
                  "notes": [
                    "General"
                  ]
                }
              ]
            },
            {
              "index": 1,
              "source": "Teams",
              "weekLabel": "April 13-19",
              "name": "Teams List B",
              "result": "4-1",
              "subfaction": "Khailebron",
              "manifestationLore": "Primal Energy",
              "regiments": 1,
              "unitEntries": 3,
              "models": 20,
              "units": [
                {
                  "regiment": "Regiment 1",
                  "name": "Witch Aelves",
                  "points": 110,
                  "models": 10,
                  "reinforced": false,
                  "notes": []
                },
                {
                  "regiment": "Regiment 1",
                  "name": "Blood Sisters",
                  "points": 140,
                  "models": 5,
                  "reinforced": false,
                  "notes": []
                },
                {
                  "regiment": "Regiment 1",
                  "name": "Khinerai Heartrenders",
                  "points": 100,
                  "models": 5,
                  "reinforced": false,
                  "notes": []
                }
              ]
            }
          ]
        }
      ]
    }
  ]
};
