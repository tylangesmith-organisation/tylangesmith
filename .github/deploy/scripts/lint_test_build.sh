#!/usr/bin/env bash

set -euo pipefail

# Install our npm dependencies
echo "--- 🚀 Installing npm dependencies..."
npm i

echo "--- 🚀 Run next build..."
npm run build

echo "--- 🚀 Run linter..."
npm run lint

echo "--- 🚀 Run tests..."
npm run test

# For now we only want the static bundle
zip -r build.zip out
