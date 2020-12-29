now=$(date)
node run.js &&
git add . &&
git commit -m "Changes in $now" &&
git push origin master &&
echo "Done..."