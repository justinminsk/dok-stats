# Daughters of Khaine stats references

## Initial note

This repo starts with the same dashboard and reporting structure as the Helsmith project, but the Daughters-specific parsing tables are intentionally left light until real source exports are added.

Useful places to extend first:

- `daughters_stats/constants.py` for unit aliases, model-size inference, and trait buckets
- `tests/test_parser.py` for export-shape coverage
- `tests/test_metrics.py` for faction-specific counting expectations

## Web references

- WCAG 2.2 Quick Reference: https://www.w3.org/WAI/WCAG22/quickref/
- Use of Color criterion: https://www.w3.org/WAI/WCAG22/quickref/#use-of-color
- Reflow criterion: https://www.w3.org/WAI/WCAG22/quickref/#reflow
- W3C ARIA Table pattern: https://www.w3.org/WAI/ARIA/apg/patterns/table/
