Temporary link [breakbread.dinnerclub](https://dinner-club-ebon.vercel.app/)

This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.

## Guest List Persistence (Vercel Blob)

The guest list is stored in Vercel Blob as JSON per slug (e.g., `guestlists/<slug>.json`) so it persists across refreshes and deploys.

Setup on Vercel:

- Add the Vercel Blob Integration to your project.
- Ensure the build has access to a read-write token (Vercel adds it automatically). For local dev, add to `.env.local`:
  - `BLOB_READ_WRITE_TOKEN=...`
- Optionally set `ADMIN_TOKEN` (random string) for admin export endpoints.

API routes:

- `GET /api/guests/[slug]` → `{ guests, limit }` (reads blob or falls back to seeded guests)
- `POST /api/guests/[slug]` → add/edit guests (writes blob)
- `GET /api/admin/guests/[slug]/export` (requires header `x-admin-token: ADMIN_TOKEN`) → returns a `tsArray` snippet to paste into `data/menus.ts`.

### Export guests for archiving

After a dinner, export the final guest list and archive it into source control:

1) Ensure `ADMIN_TOKEN` is set in your environment (Vercel → Project Settings → Environment Variables).

2) Call the export endpoint for a slug:

```
curl -s -H "x-admin-token: $ADMIN_TOKEN" \
  https://<your-domain>/api/admin/guests/<slug>/export
```

3) Copy the `tsArray` value from the response and replace the `guests: []` for that menu inside `data/menus.ts`. Commit the change to preserve the archive.

Notes:
- The export includes `name`, `plusOne`, `dietary`, and potluck `dishes` for a clean archive (no volatile IDs/history).


## Potluck menus

Set `potluck: true` on a menu in `data/menus.ts` to require each signup to choose
one or more dishes from that menu's courses. The DICE Latin American / Caribbean
menu uses this mode. Omit it or set `potluck: false` to keep standard signup.

Each menu item name is a unique claimable dish; keep names unique and stable after
signups begin. Claimed dishes show a checked, disabled checkbox with the guest's
name. Guests can use **Edit guest list** on the homepage or upcoming menu page to
change any signup, including names, plus ones, dietary notes, and dishes. Replacing
a dish releases the old choice. One dish is required per signup, including a
signup bringing a plus one. Dish choices also appear in the host dashboard, CSV,
and archive export.

To remove a signup, open **Edit guest list**, choose **Edit** beside that guest,
then **Remove guest** and confirm. This frees their spot, their plus one's spot,
and all their dish choices. Removal is available for standard menus as well.

Signups use the existing `BLOB_READ_WRITE_TOKEN`; no new service is needed.
Uncached reads and conditional Blob writes prevent simultaneous saves from
claiming the same dish or overwriting another signup. Failed saves keep the form
values and display an error without adding an unsaved guest to the list.

Run `npm test` with Node 22.6+ to check signup rules and standard-menu compatibility.
