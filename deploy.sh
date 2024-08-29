#! /bin/sh
# abort on errors
set -e
# build
# npm run generate
# navigate into the build output directory
# cd .output/public
# if you are deploying to a custom domain
# echo 'www.example.com' > CNAME

git init
git add -A
git commit -m 'deploy'
# if you are deploying to https://<USERNAME>.github.io
git push -f https://bananenman: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@github.com/bananenman/bananenman.github.io.git main
# if you are deploying to https://<USERNAME>.github.io/<REPO>
# git push -f https://bananenman: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@github.com/bananenman/bananenman.github.io.git --branch=gh-pages gh-pages

cd -