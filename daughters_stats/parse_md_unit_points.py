"""
Parse unit names and points from Daughters of Khaine 5-0s.md and output a {unit_name: points} dict.
"""
import re
from pathlib import Path

MD_FILE = Path(__file__).parent.parent / "Daughters of Khaine 5-0s.md"
UNIT_PATTERN = re.compile(r"^([A-Za-z0-9\- ']+)\s*\((\d+)\)")

def parse_units(md_path):
    units = {}
    with open(md_path, encoding="utf-8") as f:
        for line in f:
            m = UNIT_PATTERN.match(line.strip())
            if m:
                name, pts = m.groups()
                units[name.strip()] = int(pts)
    return units

def main():
    unit_points = parse_units(MD_FILE)
    print(unit_points)

if __name__ == "__main__":
    main()
