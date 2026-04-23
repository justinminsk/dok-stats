from __future__ import annotations

import re
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
INPUT_FILE = ROOT / "Daughters of Khaine 5-0s.md"
README_FILE = ROOT / "README.md"
REPORTS_DIR = ROOT / "reports"
SUMMARIES_DIR = ROOT / "summaries"
DOCS_DIR = ROOT / "docs"

REPO_SLUG = "daughters-of-khaine-stats"
FACTION_NAME = "Daughters of Khaine"
GRAND_ALLIANCE_NAME = "Grand Alliance Order"
UNKNOWN = "Unknown"
SCOPE_NAMES = ("Singles", "Teams")
STARTER_PREFIXES = (
    GRAND_ALLIANCE_NAME,
    "Grand Alliance:",
    FACTION_NAME,
    f"Faction: {FACTION_NAME}",
    "Battle Formation:",
)
LIST_NAME_EXCLUDED_PREFIXES = (
    "faction:",
    "battle formation:",
    "manifestation lore",
    "spell lore",
    "prayer lore",
    "drops:",
    "points:",
    "wounds:",
    "battle tactics",
)

POINTS_TRIGGER = re.compile(r"\b[\d,]{3,5}\s*/\s*[\d,]{3,5}\s*pts?\b", re.IGNORECASE)
UNIT_PATTERN = re.compile(
    r"^(?:[-•~*]\s*)?(?:(\d+)\s*x?\s+)?(.+?)\s*\(([\d,]+)\s*(?:pts?|points)?\)$",
    re.IGNORECASE,
)
HEADING_RESULT_PATTERN = re.compile(r"#+\s*(5-0|4-1)")
REPORT_SECTION_LIMIT = 10

POINT_INFERENCES = {
    ("Morathi-Khaine", 730): 1,
    ("Blood Sisters", 140): 5,
    ("Blood Stalkers", 150): 5,
    ("Sisters of Slaughter", 110): 10,
    ("The Shadow Queen", 0): 1,
    ("Slaughter Queen", 130): 1,
    ("Blood Hags", 140): 10,
    ("High Gladiatrix", 120): 1,
    ("SoG Bloodwrack Shrine", 250): 1,
    ("Slaughter Queen on Cauldron of Blood", 280): 1,
    ("Krethusa the Croneseer", 220): 1,
    ("Khinerai Heartrenders", 100): 5,
    ("Khinerai Lifetakers", 100): 5,
    ("Bloodwrack Medusa", 140): 1,
    ("Bloodwrack Shrine", 280): 1,
    ("Hag Queen", 110): 1,
    ("SoG Krethusa the Croneseer", 260): 1,
    ("Melusai Ironscale", 110): 1,
    ("Khainite Shadowstalkers", 130): 9,
    ("Witch Aelves", 120): 10,
    ("Doomfire Warlocks", 150): 5,
    # Add more as needed
}

UNIT_MODEL_BASE_SIZE = {
    "Morathi-Khaine": 1,
    "Blood Sisters": 5,
    "Blood Stalkers": 5,
    "Sisters of Slaughter": 10,
    "The Shadow Queen": 1,
    "Slaughter Queen": 1,
    "Blood Hags": 10,
    "High Gladiatrix": 1,
    "SoG Bloodwrack Shrine": 1,
    "Slaughter Queen on Cauldron of Blood": 1,
    "Krethusa the Croneseer": 1,
    "Khinerai Heartrenders": 5,
    "Khinerai Lifetakers": 5,
    "Bloodwrack Medusa": 1,
    "Bloodwrack Shrine": 1,
    "Hag Queen": 1,
    "SoG Krethusa the Croneseer": 1,
    "Melusai Ironscale": 1,
    "Khainite Shadowstalkers": 9,
    "Witch Aelves": 10,
    "Doomfire Warlocks": 5,
    # Add more as needed
}

UNIT_NAME_ALIASES = {}

TRAIT_NAMES = {
    "Reinforced",
    "General",
}

ARTIFACTS = {
    "Witchbrew",
    "Crimson Draight",
    "Darkling Exilir"
}

COMMAND_TRAITS = {
    "Murderous Duellist",
    "Hand of Khaine",
    "Shadow-Blooded",
}

WARMACHINE_TRAITS = set()

LIST_NAME_EXCLUSIONS = {
    "Daughters of Khaine",
    "Grand Alliance: Order",
    "General's Handbook 2025-26",
    # Add more as needed
}

# Known terrain names to skip as units
TERRAIN_NAMES = {
    "Shrine of Dark Tribute",
    # Add more as needed
}
