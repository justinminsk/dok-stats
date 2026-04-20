from daughters_stats.parser import parse_lists


def test_parse_lists_handles_sources_and_subfactions() -> None:
    markdown = """
# **Singles**
### April 6-12
##### 4-1

**List A 2000/2000 pts**
Daughters of Khaine | Hagg Nar
Manifestation Lore - Morbid Conjuration
General's Regiment
10 x Witch Aelves (110)
• General
10 x Sisters of Slaughter (110)
Created with Warhammer Age of Sigmar: The App

# **Teams**
### April 13-19
##### 5-0

**List B 2000/2000 pts**
Grand Alliance Order | Daughters of Khaine | Khailebron
Manifestation Lore - Primal Energy
General's Regiment
5 x Khinerai Heartrenders (100)
5 x Doomfire Warlocks (150)
Created with Warhammer Age of Sigmar: The App
"""

    parsed = parse_lists(markdown)

    assert len(parsed) == 2

    singles = parsed[0]
    assert singles.source == "Singles"
    assert singles.week_label == "April 6-12"
    assert singles.result_bucket == "4-1"
    assert singles.subfaction == "Hagg Nar"
    assert singles.manifestation_lore == "Morbid Conjuration"
    witch_aelves = next(unit for unit in singles.units if unit.name == "Witch Aelves")
    assert witch_aelves.points == 110
    assert witch_aelves.models == 10
    assert witch_aelves.regiment == "General's Regiment"
    assert witch_aelves.notes == ["General"]

    teams = parsed[1]
    assert teams.source == "Teams"
    assert teams.week_label == "April 13-19"
    assert teams.result_bucket == "5-0"
    assert teams.subfaction == "Khailebron"
    assert teams.manifestation_lore == "Primal Energy"
    heartrenders = next(
        unit for unit in teams.units if unit.name == "Khinerai Heartrenders"
    )
    assert heartrenders.points == 100
    assert heartrenders.models == 5


def test_parse_lists_uses_faction_line_as_subfaction_fallback() -> None:
    markdown = """
# **Teams**
### April 6-12
##### 4-1

**no name**
Grand Alliance: Order
Faction: Hagg Nar
Battle Formation:
Manifestation Lore: Morbid Conjuration
Regiment 1
1 x Hag Queen (140 points)
Created with Warhammer Age of Sigmar: The App
"""

    parsed = parse_lists(markdown)

    assert len(parsed) == 1
    assert parsed[0].subfaction == "Hagg Nar"
    assert parsed[0].manifestation_lore == "Morbid Conjuration"
