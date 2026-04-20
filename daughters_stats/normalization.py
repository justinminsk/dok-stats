from __future__ import annotations

import re

from .constants import (
    LIST_NAME_EXCLUDED_PREFIXES,
    LIST_NAME_EXCLUSIONS,
    TRAIT_NAMES,
    UNIT_NAME_ALIASES,
    UNKNOWN,
)


def clean_line(line: str) -> str:
    value = line.strip()
    value = value.replace("\\", "")
    value = value.strip('"')
    return value.strip()


def heading_text(raw: str) -> str:
    value = re.sub(r"^#+\s*", "", raw.strip())
    value = value.replace("**", "")
    return clean_line(value)


def normalize_subfaction(value: str) -> str:
    normalized = clean_line(value)
    normalized = re.sub(r"\s*\([^)]*\)\s*$", "", normalized).strip()
    return normalized or UNKNOWN


def normalize_unit_name(name: str) -> str:
    normalized = clean_line(name)
    normalized = re.sub(r"^\d+\s*x?\s+", "", normalized, flags=re.IGNORECASE)
    normalized = re.sub(r"\s+", " ", normalized).strip()
    return UNIT_NAME_ALIASES.get(normalized, normalized)


def normalize_trait_name(name: str) -> str:
    normalized = clean_line(name)
    normalized = re.sub(r"^\[[^\]]+\]\s*:\s*", "", normalized)
    normalized = re.sub(r"^[A-Za-z' ]+:\s*", "", normalized)
    normalized = re.sub(r"\s*\([^)]*\)\s*$", "", normalized).strip()
    normalized = re.sub(r"\s+", " ", normalized)

    trait_aliases = {}
    normalized = trait_aliases.get(normalized, normalized)

    for canonical in TRAIT_NAMES:
        if normalized.lower().startswith(canonical.lower()):
            return canonical

    return normalized


def is_potential_list_name(text: str) -> bool:
    candidate = clean_line(text)
    if not candidate or candidate in LIST_NAME_EXCLUSIONS:
        return False
    # Allow lines with dashes and names (e.g., Nick Swope - ...), as long as not excluded
    if candidate.lower().startswith(LIST_NAME_EXCLUDED_PREFIXES):
        return False
    # Heuristic: allow if contains a dash and at least one alphabetic character
    if "-" in candidate and any(c.isalpha() for c in candidate):
        return True
    # Otherwise, fallback to original logic
    return True
