#!/usr/bin/env python3
"""
Convenience runner for UI/UX Pro Max in this workspace.
Usage:
  python uipro.py "<query>" [--domain <domain>] [--stack <stack>]
  python uipro.py "<query>" --design-system [-p "Project Name"]
"""
import sys
import subprocess
from pathlib import Path

CANDIDATES = [
    Path(__file__).parent / ".agents" / "skills" / "ui-ux-pro-max" / "scripts" / "search.py",
    Path(__file__).parent / ".claude" / "skills" / "ui-ux-pro-max" / "scripts" / "search.py",
    Path(__file__).parent / ".gemini" / "skills" / "ui-ux-pro-max" / "scripts" / "search.py",
    Path.home() / ".gemini" / "config" / "skills" / "ui-ux-pro-max" / "scripts" / "search.py",
    Path.home() / ".claude" / "skills" / "ui-ux-pro-max" / "scripts" / "search.py",
]

skill_script = next((p for p in CANDIDATES if p.is_file()), None)

if not skill_script:
    print("Error: search.py for ui-ux-pro-max not found in .agents, .claude, or .gemini", file=sys.stderr)
    sys.exit(1)

if __name__ == "__main__":
    cmd = [sys.executable, str(skill_script)] + sys.argv[1:]
    result = subprocess.run(cmd)
    sys.exit(result.returncode)
