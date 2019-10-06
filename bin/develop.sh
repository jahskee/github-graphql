#!/bin/bash

gatsby clean
echo "gatsby clean completed"
npx env-cmd -f .env.development  gatsby develop