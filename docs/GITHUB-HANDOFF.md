# GitHub import status

Target: `abdurrr2011/divergents-explorer`, intended private visibility.

Repository creation is currently blocked: the connected GitHub integration returns HTTP 403 `Resource not accessible by integration` for both GraphQL createRepository and REST POST /user/repos. No repository, push, pull request or remote merge has succeeded. The local `github` remote is configured for the intended repository; the original `origin` still points to Sites.

## Prepared source

The local main branch retains all 11 original development commits. `chore/professional-handoff` adds repository documentation, CI and contribution templates. The Git bundle contains the complete available history; no history was invented, squashed or rewritten. Local checks pass independently of remote CI.

## Finish after access is available

Create an empty private `divergents-explorer` repository on the account and permit the integration to access it. Do not initialise a separate README or licence. In this checkout:

```sh
git push github main
git push -u github chore/professional-handoff
gh pr create --repo abdurrr2011/divergents-explorer --base main --head chore/professional-handoff --title "Prepare professional repository handoff" --body-file docs/GITHUB-PR-BODY.md
```

Review the remote CI and the PR diff, then merge with a merge commit, preserving history:

```sh
gh pr merge --repo abdurrr2011/divergents-explorer --merge <PR_NUMBER>
git switch main
git pull --ff-only github main
```

If the remote was initialised separately, fetch and inspect it before integrating. Do not force-push or silently discard its commits. `git pull` downloads changes; `git push` uploads them. No deployment or audience change is included in this repository handoff.
