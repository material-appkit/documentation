#!/bin/bash

SCRIPTS_PATH="$( cd "$( dirname "${BASH_SOURCE[0]}" )" && pwd )"
ROOT_PATH=$SCRIPTS_PATH/..

BUILD_PATH=$ROOT_PATH/public/
TARGET_PATH=$ROOT_PATH/docs/

# Generate the documentation build products
cd ROOT_PATH
npm run build

# RSync the build products to their destination directory
rsync -avz --delete $BUILD_PATH $TARGET_PATH

# Clean up the build products
rm -rf $BUILD_PATH

# Commit all changes
git add $TARGET_PATH
git commit -m "Updated documentation build products"
