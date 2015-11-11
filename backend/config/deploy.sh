#!/usr/bin/env bash

# Go to the deploy path
cd "/sites/galaxy2/rails" || (
echo "! ERROR: not set up."
echo "The path '/sites/galaxy2/rails' is not accessible on the server."
echo "You may need to run 'mina setup' first."
false
) || exit 15

# Check releases path
if [ ! -d "releases" ]; then
echo "! ERROR: not set up."
echo "The directory 'releases' does not exist on the server."
echo "You may need to run 'mina setup' first."
exit 16
fi

# Check lockfile
if [ -e "deploy.lock" ]; then
echo "! ERROR: another deployment is ongoing."
echo "The file 'deploy.lock' was found."
echo "If no other deployment is ongoing, run 'mina deploy:force_unlock' to delete the file."
exit 17
fi

# Determine $previous_path and other variables
[ -h "current" ] && [ -d "current" ] && previous_path=$(cd "current" >/dev/null && pwd -LP)
build_path="./tmp/build-`date +%s`$RANDOM"
version=$((`cat "/sites/galaxy2/rails/last_version" 2>/dev/null`+1))
release_path="releases/$version"

# Sanity check
if [ -e "$build_path" ]; then
echo "! ERROR: Path already exists."
exit 18
fi

# Bootstrap script (in deployer)
(
echo "-----> Creating a temporary build path"
echo \$\ touch\ \"deploy.lock\" &&
touch "deploy.lock" &&
echo \$\ mkdir\ -p\ \"\$build_path\" &&
mkdir -p "$build_path" &&
echo \$\ cd\ \"\$build_path\" &&
cd "$build_path" &&
(
  (

    if [ ! -d "/sites/galaxy2/rails/scm/objects" ]; then
      echo "-----> Cloning the Git repository"
      echo \$\ git\ clone\ \"git@github.com:Bnei-Baruch/galaxy2.git\"\ \"/sites/galaxy2/rails/scm\"\ --bare &&
    git clone "git@github.com:Bnei-Baruch/galaxy2.git" "/sites/galaxy2/rails/scm" --bare
    else
      echo "-----> Fetching new git commits"
      echo \$\ \(cd\ \"/sites/galaxy2/rails/scm\"\ \&\&\ git\ fetch\ \"git@github.com:Bnei-Baruch/galaxy2.git\"\ \"master:master\"\ --force\) &&
    (cd "/sites/galaxy2/rails/scm" && git fetch "git@github.com:Bnei-Baruch/galaxy2.git" "master:master" --force)
    fi &&
    echo "-----> Using git branch 'master'" &&
    echo \$\ git\ clone\ \"/sites/galaxy2/rails/scm\"\ .\ --recursive\ --branch\ \"master\" &&
    git clone "/sites/galaxy2/rails/scm" . --recursive --branch "master" &&

          echo "-----> Using this git commit" &&
          echo &&
          echo \$\ git\ rev-parse\ HEAD\ \>\ .mina_git_revision &&
    git rev-parse HEAD > .mina_git_revision &&
          echo \$\ git\ --no-pager\ log\ --format\=\'\%aN\ \(\%h\):\%n\>\ \%s\'\ -n\ 1 &&
    git --no-pager log --format='%aN (%h):%n> %s' -n 1 &&
          echo \$\ rm\ -rf\ .git &&
    rm -rf .git &&
          echo &&
    echo "removing all files but backend"
    ls -la &&
    rm -rf frontend &&
    rm *.* &&
    mv backend/* . &&
    ls -la

  ) && (

    ls -la  &&
    echo "-----> Symlinking shared paths"
    echo \$\ mkdir\ -p\ \"./config\" &&
    mkdir -p "./config" &&
    echo \$\ mkdir\ -p\ \".\" &&
    mkdir -p "." &&
    echo \$\ rm\ -rf\ \"./config/mongoid.yml\" &&
    rm -rf "./config/mongoid.yml" &&
    echo \$\ ln\ -s\ \"/sites/galaxy2/rails/shared/config/mongoid.yml\"\ \"./config/mongoid.yml\" &&
    ln -s "/sites/galaxy2/rails/shared/config/mongoid.yml" "./config/mongoid.yml" &&
    echo \$\ rm\ -rf\ \"./config/secrets.yml\" &&
    rm -rf "./config/secrets.yml" &&
    echo \$\ ln\ -s\ \"/sites/galaxy2/rails/shared/config/secrets.yml\"\ \"./config/secrets.yml\" &&
    ln -s "/sites/galaxy2/rails/shared/config/secrets.yml" "./config/secrets.yml" &&
    echo \$\ rm\ -rf\ \"./config/thin.yml\" &&
    rm -rf "./config/thin.yml" &&
    echo \$\ ln\ -s\ \"/sites/galaxy2/rails/shared/config/thin.yml\"\ \"./config/thin.yml\" &&
    ln -s "/sites/galaxy2/rails/shared/config/thin.yml" "./config/thin.yml" &&
    echo \$\ rm\ -rf\ \"./log\" &&
    rm -rf "./log" &&
    echo \$\ ln\ -s\ \"/sites/galaxy2/rails/shared/log\"\ \"./log\" &&
    ln -s "/sites/galaxy2/rails/shared/log" "./log"

  ) && (

    echo "-----> Installing gem dependencies using Bundler"
    echo \$\ mkdir\ -p\ \"/sites/galaxy2/rails/shared/bundle\" &&
    mkdir -p "/sites/galaxy2/rails/shared/bundle"
    echo \$\ mkdir\ -p\ \"./vendor\" &&
    mkdir -p "./vendor"
    echo \$\ ln\ -s\ \"/sites/galaxy2/rails/shared/bundle\"\ \"./vendor/bundle\" &&
    ln -s "/sites/galaxy2/rails/shared/bundle" "./vendor/bundle"
    echo \$\ bundle\ install\ --without\ development:test\ --path\ \"./vendor/bundle\"\ --deployment &&
    cd backend && bundle install --without development:test --path "./vendor/bundle" --deployment &&
    cd ../

  ) && (

    if [ -e "/sites/galaxy2/rails/current/public/assets" ]; then
    count=`(
          diff -rN "/sites/galaxy2/rails/current/vendor/assets/" "./vendor/assets/" 2>/dev/null
    diff -rN "/sites/galaxy2/rails/current/app/assets/" "./app/assets/" 2>/dev/null
    ) | wc -l`

    if [ "$((count))" = "0" ]; then
          echo "-----> Skipping asset precompilation"
    echo \$\ mkdir\ -p\ \"/sites/galaxy2/rails/\$build_path/public/assets\" &&
    mkdir -p "/sites/galaxy2/rails/$build_path/public/assets"
    echo \$\ cp\ -R\ \"/sites/galaxy2/rails/current/public/assets/.\"\ \"/sites/galaxy2/rails/\$build_path/public/assets\" &&
    cp -R "/sites/galaxy2/rails/current/public/assets/." "/sites/galaxy2/rails/$build_path/public/assets" &&
      exit
    else
          echo "-----> $((count)) changes found, precompiling asset files"
    echo \$\ RAILS_ENV\=\"production\"\ bundle\ exec\ rake\ assets:precompile\ RAILS_GROUPS\=assets &&
    RAILS_ENV="production" bundle exec rake assets:precompile RAILS_GROUPS=assets
    fi
    else
      echo "-----> Precompiling asset files"
    echo \$\ RAILS_ENV\=\"production\"\ bundle\ exec\ rake\ assets:precompile\ RAILS_GROUPS\=assets &&
    RAILS_ENV="production" bundle exec rake assets:precompile RAILS_GROUPS=assets
    fi

  ) && (

    echo "-----> Cleaning up old releases (keeping 5)"
    echo \$\ cd\ \"/sites/galaxy2/rails/releases\"\ \|\|\ exit\ 15 &&
    cd "/sites/galaxy2/rails/releases" || exit 15
    echo \$\ count\=\`ls\ -1d\ \[0-9\]\*\ \|\ sort\ -rn\ \|\ wc\ -l\` &&
    count=`ls -1d [0-9]* | sort -rn | wc -l`
    echo \$\ remove\=\$\(\(count\ \>\ 5\ \?\ count\ -\ 5\ :\ 0\)\) &&
    remove=$((count > 5 ? count - 5 : 0))
    echo \$\ ls\ -1d\ \[0-9\]\*\ \|\ sort\ -rn\ \|\ tail\ -n\ \$remove\ \|\ xargs\ rm\ -rf\ \{\} &&
    ls -1d [0-9]* | sort -rn | tail -n $remove | xargs rm -rf {}

  )
) &&
echo "-----> Deploy finished"
) &&

#
# Build
(
echo "-----> Building"
echo "-----> Moving build to $release_path"
echo \$\ mv\ \"\$build_path\"\ \"\$release_path\" &&
mv "$build_path" "$release_path" &&
echo \$\ cd\ \"\$release_path\" &&
cd "$release_path" &&
(
  true
) &&
echo "-----> Build finished"

) &&

#
# Launching
# Rename to the real release path, then symlink 'current'
(
echo "-----> Launching"
echo "-----> Updating the current symlink" &&
echo \$\ ln\ -nfs\ \"\$release_path\"\ \"current\" &&
ln -nfs "$release_path" "current"
) &&

# ============================
# === Start up serve => (in deployer)
(
echo "-----> Launching"
echo \$\ cd\ \"\$release_path\" &&
cd "$release_path"
(

  if [ -f $(cat config/thin.yml | grep pid: | sed '/^pid: */!d; s///;q') ];
  then
    echo "thin is up. restarting"
    bundle exec thin -C config/thin.yml restart
    exit
  else
    echo "thin is down. starting"
    bundle exec thin -C config/thin.yml start
    exit
  fi
        %

)
) &&

# ============================
# === Complete & unlock
(
rm -f "deploy.lock"
echo "$version" > "./last_version"
echo "-----> Done. Deployed v$version"
) ||

# ============================
# === Failed deployment
(
echo "! ERROR: Deploy failed."



echo "-----> Cleaning up build"
[ -e "$build_path" ] && (
  echo \$\ rm\ -rf\ \"\$build_path\" &&
rm -rf "$build_path"
)
[ -e "$release_path" ] && (
  echo "Deleting release"
  echo \$\ rm\ -rf\ \"\$release_path\" &&
rm -rf "$release_path"
)
(
  echo "Unlinking current"
  [ -n "$previous_path" ] && echo \$\ ln\ -nfs\ \"\$previous_path\"\ \"current\" &&
ln -nfs "$previous_path" "current"
)

# Unlock
echo \$\ rm\ -f\ \"deploy.lock\" &&
rm -f "deploy.lock"
echo "OK"
exit 19
)