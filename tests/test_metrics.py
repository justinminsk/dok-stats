from daughters_stats.metrics import collect_scope_metrics, infer_models, total_models
from daughters_stats.models import ListData, UnitData


def test_infer_models_defaults_to_single_model_without_faction_tables() -> None:
    assert infer_models("Hag Queen", 140) == 1
    assert infer_models("Khinerai Heartrenders", 100) == 5


def test_collect_scope_metrics_counts_presence() -> None:
    lists_for_scope = [
        ListData(
            name="List 1",
            source="Singles",
            units=[
                UnitData(name="Witch Aelves", points=110, models=10),
                UnitData(name="Sisters of Slaughter", points=110, models=10),
                UnitData(name="Khinerai Heartrenders", points=100, models=5),
            ],
            traits=["General"],
            subfaction="Hagg Nar",
            manifestation_lore="Morbid Conjuration",
        ),
        ListData(
            name="List 2",
            source="Singles",
            units=[
                UnitData(name="Witch Aelves", points=110, models=10),
                UnitData(name="Blood Sisters", points=140, models=5),
            ],
            subfaction="Khailebron",
            manifestation_lore="Primal Energy",
        ),
    ]

    metrics = collect_scope_metrics(lists_for_scope)

    assert metrics.unit_entries["Witch Aelves"] == 2
    assert metrics.unit_presence_lists["Witch Aelves"] == 2
    assert metrics.model_counts["Witch Aelves"] == 20
    assert metrics.subfactions["Hagg Nar"] == 1
    assert metrics.manifestation_lores["Morbid Conjuration"] == 1
    assert metrics.artifacts == {}
    assert metrics.command_traits == {}
    assert metrics.warmachine_traits == {}

    assert total_models(lists_for_scope[0].units) == 25
