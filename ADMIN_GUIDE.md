# Admin Panel Guide

This guide documents the current CMS/admin implementation for this project.

## 1. What is implemented

- Credentials-based admin login (NextAuth + Prisma `User` + bcrypt password hash)
- Role-based access control with two roles:
- `SUPER_ADMIN`: full admin access including user and role management
- `EDITOR`: content, tours, uploads, inquiries
- CMS section management for:
- `site_shell`
- `landing_hero`
- `landing_slider`
- `landing_testimonials`
- `landing_faq`
- `inquiry_panel`
- `tour_category_heroes`
- Full tour catalog CRUD with repeatable blocks (badges, itinerary, includes/excludes, FAQ, gallery)
- Inquiry listing for admin dashboard
- Local media upload endpoint (`public/uploads/YYYY/MM`)
- Public rendering uses DB-first content with static fallback

## 2. Admin UI routes

- `/admin` dashboard
- `/admin/login` login page
- `/admin/content/shell` shell CMS editor
- `/admin/content/landing` landing + inquiry + category hero CMS editor
- `/admin/tours` tour list/search
- `/admin/tours/new` create new tour
- `/admin/tours/[id]` edit/delete tour
- `/admin/users` user management (`SUPER_ADMIN` only)

## 3. API routes

### Sections

- `GET /api/admin/sections/:key`
- `PUT /api/admin/sections/:key`
- `PUT` body format:

```json
{
  "data": {}
}
```

- `:key` must be one of:
- `site_shell`
- `landing_hero`
- `landing_slider`
- `landing_testimonials`
- `landing_faq`
- `inquiry_panel`
- `tour_category_heroes`

### Tours

- `GET /api/admin/tours?q=...`
- `POST /api/admin/tours`
- `GET /api/admin/tours/:id`
- `PUT /api/admin/tours/:id`
- `DELETE /api/admin/tours/:id`

`POST` and `PUT` body uses this shape:

```json
{
  "slug": "string",
  "title": "string",
  "category": "umre|hac|kultur",
  "durationDays": 1,
  "priceFrom": 0,
  "currency": "TRY|USD|EUR",
  "heroImage": "string",
  "shortBlurb": "string",
  "seoTitle": "string",
  "seoDescription": "string",
  "isPublished": true,
  "isLandingFeatured": false,
  "landingFeaturedOrder": null,
  "badges": [{ "label": "string" }],
  "itinerary": [{ "day": "string", "title": "string", "description": "string" }],
  "includes": [{ "item": "string" }],
  "excludes": [{ "item": "string" }],
  "faq": [{ "question": "string", "answer": "string" }],
  "gallery": [{ "imageUrl": "string" }]
}
```

### Inquiries

- `GET /api/admin/inquiries`

### Users (`SUPER_ADMIN` only)

- `GET /api/admin/users`
- `POST /api/admin/users`
- `PATCH /api/admin/users`
- `PATCH /api/admin/users/:id/role`

`POST /api/admin/users` body:

```json
{
  "username": "string",
  "password": "min 8 chars",
  "role": "SUPER_ADMIN|EDITOR",
  "name": "optional string",
  "email": "optional email or empty string"
}
```

`PATCH /api/admin/users` body:

```json
{
  "id": "string",
  "isActive": true,
  "name": "optional nullable string",
  "email": "optional nullable email",
  "password": "optional min 8 chars"
}
```

`PATCH /api/admin/users/:id/role` body:

```json
{
  "role": "SUPER_ADMIN|EDITOR"
}
```

### Uploads

- `POST /api/admin/uploads` (`multipart/form-data`)
- Field name must be `file`
- Allowed mime types:
- `image/jpeg`
- `image/png`
- `image/webp`
- `image/avif`
- Max size: `8MB`
- Returns public url in response:

```json
{
  "ok": true,
  "url": "/uploads/2026/02/filename.ext"
}
```

## 4. Environment and setup

Required env vars (`.env`):

- `DATABASE_URL`
- `AUTH_SECRET`

Install and generate:

```bash
npm install
npx prisma generate
```

Apply schema/migrations:

```bash
npm run db:migrate
```

Seed CMS and tour data:

```bash
npm run cms:seed
```

Create first super admin:

```bash
npm run admin:bootstrap -- <username> <password>
```

Run app:

```bash
npm run dev
```

## 5. Auth and RBAC behavior

- Admin content endpoints/pages require a logged-in user with role `SUPER_ADMIN` or `EDITOR`
- User management endpoints/pages require `SUPER_ADMIN`
- If session is missing/invalid:
- Page routes redirect to `/admin/login` or `/admin`
- API routes return `401` or `403`

## 6. CMS fallback behavior

Public pages read from DB first and fallback to static content when needed.

- If `CmsSection` or `Tour` tables are missing, public pages continue to render using fallback content.
- This protects production pages before seed/migration is fully completed.

## 7. Validation commands

Use these before release:

```bash
npm run typecheck
npm run build
```

## 8. Troubleshooting

- Symptom: `The table public.CmsSection does not exist` or `public.Tour does not exist`
- Fix: run migrations, then seed:
- `npm run db:migrate`
- `npm run cms:seed`

- Symptom: cannot log in
- Check:
- user exists in DB
- `isActive = true`
- password was created via bootstrap or hashed flow
- `AUTH_SECRET` is set

- Symptom: user management blocked
- Check logged-in role is `SUPER_ADMIN`

- Symptom: image upload rejected
- Check mime type and file size <= 8MB

## 9. Key source files

- Auth config: `src/server/auth/config.ts`
- RBAC guards: `src/server/auth/guards.ts`
- API guards: `src/server/auth/api-guards.ts`
- Page guards: `src/server/auth/page-guards.ts`
- CMS section schemas: `src/server/cms/schemas.ts`
- Tour input schema: `src/server/cms/tour-schema.ts`
- CMS loaders: `src/server/cms/sections.ts`
- Tour services: `src/server/cms/tours.ts`
- Admin APIs: `src/app/api/admin/*`
- Admin pages: `src/app/admin/*`
- Bootstrap script: `scripts/bootstrap-admin.mjs`
- Seed script: `scripts/seed-cms.ts`
