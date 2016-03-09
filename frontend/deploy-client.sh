#!/usr/bin/env bash
#
echo "-----> Deploying galaxy2 frontend" && (
  cd /sites/galaxy.kbb1.com/www/ &&
  echo "pulling changes from git" &&
  git pull &&

  cd frontend &&

  echo "tsd install" &&
  tsd install &&

  echo "npm install" &&
  npm install &&

  echo "bower install" &&
  bower install &&
  bower list &&

  echo "Patching config.json" &&
  sha1="$(git rev-parse HEAD)" &&
  echo "SHA1=$sha1" &&
  sed -i "s/git-sha1-deployed-should-be-here/$sha1/g" config.json &&

  echo "gulp config" &&
  gulp config &&

  echo "gulp build" &&
  gulp build &&

  echo "" &&
  echo "-----> Done."
) || (
  echo "! ERROR: Deployment failed."
)
