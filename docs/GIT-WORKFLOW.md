# Git workflow

`github` is the public source repository; `origin` is the existing Sites source remote in the original maintainer checkout. A fresh GitHub clone will normally call the GitHub remote `origin`; inspect `git remote -v` rather than assuming names.

## Start a change in this checkout

```sh
git switch main
git pull --ff-only github main
git switch -c feature/clear-description
npm ci
```

Make a focused change, run `npm run check`, inspect `git diff`, then commit and upload:

```sh
git add <specific-files>
git commit -m "Describe the resulting behaviour"
git push -u github feature/clear-description
```

Open a pull request, inspect its source/data diff and wait for CI. Merge using a merge commit when preserving branch history matters. After merging:

```sh
git switch main
git pull --ff-only github main
```

`git pull` downloads and integrates new remote commits. Repeating it without new commits changes nothing. `git push` uploads local commits. A pull request proposes an integration; a merge connects histories. Do not manufacture commits or merges merely to increase activity.

## Conflicts and releases

If fast-forward-only pull fails, fetch, inspect both histories and resolve conflicts in a branch. Do not force-push or discard another contributor's work. Ask the data reviewer to resolve conflicting admissions claims rather than choosing a value to silence Git.

Website deployment is separate and uses the existing Sites identity, audience and exact reviewed source commit. A GitHub merge does not publish the website. Keep credentials in the authorised platform tooling, never in source or command arguments.
