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
git push -f https://bananenman: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github.com/BananaCode4/egypt-tour.git main
# if you are deploying to https://<USERNAME>.github.io/<REPO>
# git push -f https://bananenman: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@github.com/bananenman/bananenman.github.io.git --branch=gh-pages gh-pages

cd -