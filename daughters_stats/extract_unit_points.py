"""
Script to extract a {unit_name: points} dictionary from a Battlescribe .cat file.
- Downloads the .cat file from GitHub
- Parses XML to find unit names and points
- Outputs a Python dict
"""
import xml.etree.ElementTree as ET
import requests

CAT_URL = "https://raw.githubusercontent.com/BSData/age-of-sigmar-4th/main/Daughters%20of%20Khaine.cat"


def fetch_cat_file(url):
    resp = requests.get(url)
    resp.raise_for_status()
    return resp.content


def parse_units_and_points(cat_xml):
    tree = ET.fromstring(cat_xml)
    units = {}
    # Find all selectionEntries (units)
    for entry in tree.findall(".//selectionEntry[@type='unit']"):
        name = entry.get("name")
        print(f"Unit: {name}")
        points = None
        # Print all cost fields for this entry
        for cost in entry.findall("costs/cost"):
            print(f"  Cost name: {cost.get('name')}, value: {cost.get('value')}")
            if cost.get("name", "").lower() in ("pts", "points"):
                try:
                    points = int(cost.get("value"))
                except (TypeError, ValueError):
                    continue
        if name and points is not None:
            units[name] = points
    print(f"Extracted units: {units}")
    return units


def main():
    cat_xml = fetch_cat_file(CAT_URL)
    unit_points = parse_units_and_points(cat_xml)
    print(unit_points)

if __name__ == "__main__":
    main()
