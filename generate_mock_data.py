import json
from pathlib import Path
import tempfile

# We need to simulate the pytest fixture behavior
from _pytest.monkeypatch import MonkeyPatch
from tests.test_web import _build_test_payload


def main():
    monkeypatch = MonkeyPatch()
    with tempfile.TemporaryDirectory() as tmp:
        tmp_path = Path(tmp)
        payload = _build_test_payload(tmp_path, monkeypatch)

        # Write to frontend/src/testing/sampleSiteData.ts
        output_file = Path("frontend/src/testing/sampleSiteData.ts")

        # Format as TypeScript export
        ts_content = f"""import type {{ SiteDataPayload }} from '../models/siteData';

export const sampleSiteData: SiteDataPayload = {json.dumps(payload, indent=2)};
"""
        output_file.write_text(ts_content, encoding="utf-8")
        print("Mock data generated successfully!")


if __name__ == "__main__":
    main()
