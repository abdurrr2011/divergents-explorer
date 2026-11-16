# GitHub source handoff

Repository: https://github.com/abdurrr2011/divergents-explorer

The owner explicitly requested public source-repository visibility. The deployed Sites application remains owner-private; repository visibility does not change its audience. Third-party media rights and editorial limits remain documented, and no licence grant is implied by source publication.

## History and branches

The main source history contains all 11 original development commits. The professional-handoff branch adds README, contribution/security/licensing guidance, CI configuration, issue/PR templates and a coverage roadmap without rewriting those commits. Preserve merge commits rather than squashing the import.

The original `origin` remote remains the Sites source repository. `github` points to this GitHub repository. Keep credentials out of both remote URLs and all tracked files.

## Synchronise

```sh
git fetch github
git switch main
git pull --ff-only github main
```

Create a branch for new work, run `npm run check`, push that branch, open a pull request and merge after review/checks. Never force-push or overwrite remote commits. A source push does not deploy the application or approve a rollout audience.

## Verification

Local validation, 75 tests and static build pass. Browser visual verification remains unavailable in the development environment. Remote CI results must be checked separately on GitHub. See the PR and Actions pages for live status.
