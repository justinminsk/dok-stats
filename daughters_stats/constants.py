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

POINT_INFERENCES = {}

UNIT_MODEL_BASE_SIZE = {}

UNIT_NAME_ALIASES = {}

TRAIT_NAMES = set()

ARTIFACTS = set()

COMMAND_TRAITS = set()

WARMACHINE_TRAITS = set()

LIST_NAME_EXCLUSIONS = {
    FACTION_NAME,
    "Grand Alliance: Order",
    GRAND_ALLIANCE_NAME,
    "General's Handbook 2025-26",
}
