#!/usr/bin/env python3
"""
Convenience CLI runner for UI/UX Pro Max in this workspace.
Usage:
  python uipro.py "<query>" [--domain <domain>] [--stack <stack>]
  python uipro.py "<query>" --design-system [-p "Project Name"]
"""
import sys
import subprocess
from pathlib import Path

SKILL_SCRIPT = Path(__file__).parent / ".gemini" / "skills" / "ui-ux-pro-max" / "scripts" / "search.py"

if not SKILL_SCRIPT.exists():
    SKILL_SCRIPT = Path(__file__).parent / ".claude" / "skills" / "ui-ux-pro-max" / "scripts" / "search.py"

if not SKILL_SCRIPT.exists():
    print(f"Error: search.py not found at {SKILL_SCRIPT}", file=sys.stderr)
    sys.exit(1)

cmd = [sys.executable, str(SKILL_SCRIPT)] + sys.argv[1:]
result = subprocess.run(cmd)
sys.exit(result.returncode)
