#!/usr/bin/env bash

set -euo pipefail

# Install our npm dependencies
echo "--- 🚀 Installing npm dependencies..."
npm i

echo "--- 🚀 Run next build..."
npm run build
