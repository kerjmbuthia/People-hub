# Samaking People Hub

Website source for your personal GitHub repository and Vercel deployment.

## Upload to your personal GitHub account
1. Extract this ZIP on your computer.
2. Create a repository named `samaking-people-hub` under your personal account.
3. Use Add file → Upload files to upload the extracted contents, keeping folders intact. Upload in batches of at most 100 files if needed. Do not upload only the ZIP or only package.json.
4. Confirm the repository root shows `app/`, `package.json`, `pnpm-lock.yaml` and `vercel.json`.
5. Commit the files. Alternatively, copy the contents into a repository managed by GitHub Desktop, commit, and publish it to your personal account.

## Deploy on Vercel
Import this GitHub repository in Vercel. Framework: Next.js. Root directory: the folder containing app/ and package.json. Build command: pnpm build. Use the existing project if you want to retain https://samaking-people-hub.vercel.app/ and the email links.
The website source in this package passed a production build on 12 October 2026. Adding the email source does not change the website; supabase/functions is excluded from the Next.js type check.

## Where to edit emails
- Workflow, handover, approval, contract report, planning and finance email layout/copy: `supabase/functions/people-workflow-mailer/email-template.ts`.
- Workflow sender: `supabase/functions/people-workflow-mailer/index.ts`.
- Birthday delivery and line-break handling: `supabase/functions/people-birthdays/index.ts`.
- Birthday layout: `supabase/functions/people-birthdays/email-template.ts`.
- The one-time sign-in code is separate: Supabase Dashboard → Authentication → Email templates → Magic Link / OTP. The prepared replacement is `email-templates/sign-in-code.html`; it has NOT been applied in the dashboard. Preserve {{ .Token }} when editing.
- Some subjects and dynamic message text are created by existing Supabase database functions. Those functions are not part of this website package.

Editing GitHub or deploying Vercel does NOT deploy Supabase functions. Workflow and birthday copy fixes were already deployed separately on 12 October (workflow v15, birthday v4). Deploy later email-source changes separately to Supabase. This package retains existing sender authentication and does not include credentials.
There is no in-app email-template editor at present. Same-thread leave updates are installed in Supabase. Each leave request and recipient has its own root message. Follow-ups retain the first subject and use In-Reply-To and References headers. Different requests and recipients are kept separate. Sign-in codes, reports and birthdays are not part of leave threads. Email clients control conversation display; this was verified at header/database level, not in a recipient inbox. Replies go to HR; approvals still happen in People Hub.

## Scope and pending work
This is the website source connected to the EXISTING Supabase project, not a complete standalone database backup or migration kit.
The explicit role/access editor is excluded because its backend is not installed. The OTP replacement still needs saving. Finance delivery for staff deactivated before dispatch and a full live recipient journey remain to be verified. Do not rerun old balance imports or test cleanup to deploy this website.
Existing inbox emails do not change after a template update. This package does not resend them.

## Development
Node.js 22.13 or later. Run `pnpm install`, `pnpm dev`, or `pnpm build`.

## Email copy fixes in this release
- Birthday escaped newline characters become real paragraph breaks in HTML and plain text.
- Maternity and paternity activation clearly distinguish the HR action from the employee acknowledgement.
- Manager messages no longer describe the request as their own leave.
- Handover acceptance and pending cover messages describe the actual next step.
- Plain-text workflow emails use the same content and links as the HTML version.

## Threading update — 12 October 2026
The narrow read-only thread lookup has already been installed in the existing Supabase project. Its SQL is included under supabase/reference-sql for source reference, not as an instruction to reset the database. The workflow sender is v15. No previous emails were resent. Existing first messages are referenced when their records remain available. Website code is unchanged from the previously build-verified package.
