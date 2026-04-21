"""
Parse all relevant categories (units, artifacts, traits, command traits, warmachine traits) from Daughters of Khaine 5-0s.md and output Python code for constants.py.
"""

import re
from pathlib import Path

MD_FILE = Path(__file__).parent.parent / "Daughters of Khaine 5-0s.md"

# Patterns for different categories
UNIT_PATTERN = re.compile(r"^([A-Za-z0-9\- ']+)\s*\((\d+)\)")
ARTIFACT_PATTERN = re.compile(r"•\s*([A-Za-z0-9\- ']+)")
TRAIT_PATTERN = re.compile(r"•\s*([A-Za-z0-9\- ']+)")

# Known section headers for context
SECTION_HEADERS = {
    "Spell Lore": "SPELL_LORES",
    "Prayer Lore": "PRAYER_LORES",
    "Manifestation Lore": "MANIFESTATION_LORES",
    "Battle Tactic Cards": "BATTLE_TACTICS",
    "Faction Terrain": "FACTION_TERRAINS",
}


def parse_md(md_path):
    units = {}
    artifacts = set()
    traits = set()
    command_traits = set()
    warmachine_traits = set()
    with open(md_path, encoding="utf-8") as f:
        lines = list(f)
    for i, line in enumerate(lines):
        line = line.strip()
        # Units
        m = UNIT_PATTERN.match(line)
        if m:
            name, pts = m.groups()
            units[name.strip()] = int(pts)
        # Artifacts, traits, etc. (lines starting with •)
        if line.startswith("•"):
            if "Witchbrew" in line or "Pendant" in line or "Hand of Khaine" in line:
                artifacts.add(line[1:].strip())
            elif "Shadow-Blooded" in line or "General" in line or "Reinforced" in line:
                traits.add(line[1:].strip())
            elif "Orator" in line:
                command_traits.add(line[1:].strip())
            elif "Shrine" in line:
                warmachine_traits.add(line[1:].strip())
    return units, artifacts, traits, command_traits, warmachine_traits


def main():
    units, artifacts, traits, command_traits, warmachine_traits = parse_md(MD_FILE)
    print("POINT_INFERENCES =", repr(units))
    print("ARTIFACTS =", repr(artifacts))
    print("TRAIT_NAMES =", repr(traits))
    print("COMMAND_TRAITS =", repr(command_traits))
    print("WARMACHINE_TRAITS =", repr(warmachine_traits))


if __name__ == "__main__":
    main()
