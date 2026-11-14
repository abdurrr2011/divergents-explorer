# Owner-private deployment

Site: `appgprj_6af89dedf628819186d2111ee067647a`

URL: https://divergents-university-college-explorer.surecarrot2.chatgpt.site/

Source checkout: `/workspace/sites/divergents-explorer`

Credential-free source repository: https://git.chatgpt-team.site/7f65b811-6fd1-4e53-8cc4-ffc977027316/appgprj_6af89dedf628819186d2111ee067647a.git

An initial native get_site access check on 14 November 2026 confirmed custom access with only the owner, zero external visitors, no groups and no editors. No access-update or invitation operation is authorised for this build, and none is part of its deployment. The personal 2029 explorer is a different Site and was not opened for editing.

The release packages `.openai/hosting.json` and `dist/` from the exact pushed source commit and invokes `save_version_and_deploy_private`. The final native receipt gives the source commit, version, deployment ID, terminal status and literal URL. It is supplied alongside the source handoff; no bearer token or repository credential belongs in the receipt.

The signed-out HTTP gate check verifies whether the URL redirects to ChatGPT sign-in. A service-authorised static-content check, if available, only establishes that the deployed HTML/assets match the package; it does not establish an interactive signed-in browser session. That browser check is blocked in this environment as documented in `VERIFICATION.md`.

For future releases, acquire a fresh short-lived Sites repository credential. Use the supported source workflow helper if available. Run the documented checks, push the reviewed source, package unchanged output, then deploy owner-private with the exact SHA. Never change the audience to get a deployment through. Inspect only pending/building/publishing statuses until terminal. Do not delete or recreate the Site to update it.

School rollout requires separate explicit approval of the audience and access method. Custom allowlists and platform ChatGPT sign-in are available; approve named viewers before adding them. See `MAINTENANCE.md` for school handoff and access removal.
