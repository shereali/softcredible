# Softcredible — Phase 2: Technical Architecture

## Project Root

```
softcredible/
├── frontend/                          # Nuxt 4 application (legacy flat structure)
│   ├── pages/                         # File-based routing
│   ├── layouts/                       # Page layouts
│   ├── components/                    # Vue components (auto-imported)
│   ├── composables/                   # Vue composables (auto-imported)
│   ├── utils/                         # Pure utility functions
│   ├── stores/                        # Pinia stores
│   ├── types/                         # TypeScript type definitions
│   ├── assets/                        # CSS, images, fonts
│   ├── plugins/                       # Nuxt plugins
│   ├── middleware/                     # Route middleware
│   ├── public/                        # Static assets
│   ├── nuxt.config.ts                 # Nuxt configuration
│   ├── tailwind.config.ts             # Tailwind configuration
│   └── package.json                   # Dependencies
│
├── backend/                           # Laravel 11 application
│   ├── app/
│   │   ├── Http/
│   │   │   ├── Controllers/
│   │   │   │   ├── Api/
│   │   │   │   │   └── V1/           # Versioned API controllers
│   │   │   │   └── Admin/            # Admin panel controllers
│   │   │   ├── Middleware/            # HTTP middleware
│   │   │   ├── Requests/              # Form request validation
│   │   │   └── Resources/             # API resource transformers
│   │   ├── Models/                    # Eloquent models
│   │   ├── Policies/                  # Authorization policies
│   │   ├── Services/                  # Business logic services
│   │   ├── Repositories/              # Data access layer (when justified)
│   │   ├── Traits/                    # Reusable model traits
│   │   └── Providers/                 # Service providers
│   ├── routes/
│   │   ├── api.php                    # API routes
│   │   ├── web.php                    # Web routes
│   │   └── channels.php               # Broadcast channels
│   ├── database/
│   │   ├── migrations/                # Database migrations
│   │   ├── seeders/                   # Database seeders
│   │   └── factories/                 # Model factories
│   ├── config/                        # Configuration files
│   ├── public/                        # Public web root
│   ├── storage/                       # Logs, cache, sessions
│   └── composer.json                  # PHP dependencies
│
├── .github/                           # CI/CD workflows
├── docker-compose.yml                 # Local development environment
├── package.json                       # Root package.json (workspaces)
└── README.md                          # Project documentation
```

---

## Frontend Architecture

### Why Nuxt 4 Legacy Flat Structure?

The project uses Nuxt 4's legacy flat layout (no `app/` directory). This keeps the structure simple for a marketing site while still supporting auto-imports for components, composables, and middleware.

### Layer Responsibilities

**pages/** — File-based routing. Each route is a Vue file. Nested directories create nested routes.
- `index.vue` — Homepage
- `services/[slug].vue` — Dynamic service pages
- `case-studies/[slug].vue` — Dynamic case study pages
- `blog/[slug].vue` — Dynamic blog post pages
- `contact.vue` — Contact form
- `about.vue` — About page

**layouts/** — Wrapper components for page chrome.
- `default.vue` — Site header, footer, global UI
- `blank.vue` — Minimal layout for auth/pages without chrome

**components/** — Reusable Vue components, auto-imported by Nuxt.
- `ui/` — Generic design system components (Button, Card, Input, Modal, etc.)
- `sections/` — Page section components (Hero, Features, Testimonials, etc.)
- `forms/` — Form components (ContactForm, NewsletterForm, LeadForm, etc.)
- `brand/` — Logo and brand components

**composables/** — Vue composables (auto-imported), encapsulate reactive logic.
- `useApi.ts` — HTTP client wrapper
- `useServices.ts` — Services API domain logic
- `useCaseStudies.ts` — Case studies API domain logic
- `useBlog.ts` — Blog API domain logic
- `useForms.ts` — Form submission logic (leads, contact, newsletter)
- `useSeo.ts` — Dynamic SEO metadata management
- `useMotion.ts` — Animation utilities
- `useReveal.ts` — Scroll-triggered reveals

**utils/** — Pure utility functions (no reactive dependencies).
- `validators.ts` — Form validation helpers
- `formatters.ts` — Date, number, currency formatting
- `constants.ts` — App-wide constants

**stores/** — Pinia stores for global state.
- `settings.ts` — Site settings (loaded once, used everywhere)
- `leads.ts` — Lead capture state (if multi-step)

**types/** — TypeScript type definitions.
- `api.ts` — API request/response types
- `brand.ts` — Component prop types

**assets/** — Static assets processed by build.
- `css/main.css` — Tailwind directives + CSS variables
- `images/` — Image assets

**plugins/** — Nuxt plugins for third-party integrations.
- `softcredible.ts` — App initialization plugin

**middleware/** — Route middleware.
- `settings.ts` — Pre-fetch site settings
- `seo.ts` — Apply SEO metadata per route

### State Management Approach

- **Server state** (API data): Handled by composables (`useServices`, `useBlog`, etc.) with simple local `ref`/`reactive` state. No global cache needed for a marketing site.
- **Global app state**: Pinia stores only for data needed across multiple unrelated components (site settings, user auth state).
- **Form state**: Handled per-component or via `useFormState` composable.

---

## Backend Architecture

### Why Laravel 11 + Sanctum + Spatie Permission?

- Laravel provides mature Eloquent ORM, routing, validation, and middleware.
- Sanctum for simple token-based API authentication.
- Spatie Permission for role-based access control (admin panel).

### Layer Responsibilities

**Controllers/** — Handle HTTP requests, delegate to services or models.
- `Api/V1/` — Public API endpoints (versioned)
- `Admin/` — Admin panel endpoints

**Models/** — Eloquent ORM models, encapsulate table logic, scopes, relationships.

**Requests/** — Form request validation classes. Keep controllers thin.

**Resources/** — API resource transformers. Format JSON responses consistently.

**Services/** — Business logic that spans multiple models or external APIs.
- Example: `LeadScoringService.php` — Calculate lead priority
- Example: `SeoService.php` — Generate sitemap, meta tags

**Repositories/** — Data access abstraction. Use only when you need:
- Multiple data sources (DB + cache + external API)
- Complex query logic reused across controllers
- For simple CRUD, use Eloquent directly in controllers.

**Policies/** — Authorization logic. Use Spatie Permission for role checks, policies for resource-level permissions.

**Middleware/** — Request filtering (CORS, rate limiting, auth).

### Folder Structure

```
backend/
├── app/
│   ├── Http/
│   │   ├── Controllers/
│   │   │   ├── Api/V1/               # Public API v1
│   │   │   └── Admin/                # Admin panel
│   │   ├── Middleware/                # Custom middleware
│   │   ├── Requests/                  # Validation
│   │   └── Resources/                 # JSON transformers
│   ├── Models/                        # Eloquent models
│   ├── Policies/                      # Authorization
│   ├── Services/                      # Business logic
│   ├── Repositories/                  # Data access (selective)
│   ├── Traits/                        # Shared model traits
│   └── Providers/                     # Service providers
├── routes/
│   ├── api.php                        # API routes
│   ├── web.php                        # Web routes
│   └── channels.php                   # Broadcast channels
├── database/
│   ├── migrations/                    # Schema changes
│   ├── seeders/                       # Test data
│   └── factories/                     # Test factories
└── config/                            # Configuration
```

---

## Database Schema

### Tables

**services**
- `id`, `slug` (unique), `name`, `summary`, `description`
- `icon`, `features` (JSON), `technologies` (JSON)
- `order`, `published`, `seo` (JSON)
- `timestamps`

**industries**
- `id`, `slug` (unique), `name`, `description`
- `image`, `order`, `published`
- `timestamps`

**case_studies**
- `id`, `slug` (unique), `title`, `client`, `industry_id` (FK)
- `summary`, `challenge`, `solution`
- `results` (JSON), `services` (JSON), `technologies` (JSON)
- `images` (JSON), `published`, `featured`, `seo` (JSON)
- `timestamps`

**case_study_images** (optional, if not using JSON)
- `id`, `case_study_id` (FK), `url`, `alt`, `order`
- `timestamps`

**blog_posts**
- `id`, `slug` (unique), `title`, `excerpt`, `content`
- `cover_image`, `author_id` (FK), `category_id` (FK)
- `published_at`, `reading_time`, `seo` (JSON)
- `timestamps`

**categories** (for blog)
- `id`, `slug` (unique), `name`
- `timestamps`

**tags** (for blog)
- `id`, `slug` (unique), `name`
- `timestamps`

**blog_post_tag** (pivot)
- `blog_post_id`, `tag_id`

**faqs**
- `id`, `question`, `answer`, `category`, `order`, `published`
- `timestamps`

**testimonials**
- `id`, `name`, `role`, `company`, `content`
- `avatar`, `featured`
- `timestamps`

**resources**
- `id`, `slug` (unique), `title`, `description`
- `type` (whitepaper/ebook/guide/template/tool), `file_url`
- `file_size`, `thumbnail`, `published`, `seo` (JSON)
- `timestamps`

**leads**
- `id`, `name`, `email`, `phone`, `company`
- `service_interest`, `budget`, `message`, `source`
- `status` (new/contacted/qualified/proposal/closed-won/closed-lost)
- `score`, `timestamps`

**contact_submissions**
- `id`, `name`, `email`, `phone`, `company`
- `subject`, `message`, `status` (new/read/replied/closed)
- `timestamps`

**newsletter_subscribers**
- `id`, `email` (unique), `name`, `status` (active/unsubscribed)
- `subscribed_at`, `unsubscribed_at`
- `timestamps`

**seo_metadata** (optional, if not using JSON columns)
- `id`, `entity_type` (service/case_study/blog), `entity_id`
- `title`, `description`, `keywords` (JSON), `og_image`, `canonical`
- `no_index`
- `timestamps`

**site_settings**
- `id`, `key` (unique), `value` (JSON), `type`, `timestamps`

---

## REST API Design

### Base URL: `/api/v1`

### Public Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/services` | List published services |
| GET | `/services/featured` | List featured services |
| GET | `/services/{slug}` | Get service by slug |
| GET | `/industries` | List published industries |
| GET | `/industries/{slug}` | Get industry by slug |
| GET | `/case-studies` | List published case studies |
| GET | `/case-studies/featured` | List featured case studies |
| GET | `/case-studies/industry/{slug}` | Get case studies by industry |
| GET | `/case-studies/{slug}` | Get case study by slug |
| GET | `/blog` | List published blog posts |
| GET | `/blog/category/{slug}` | Get posts by category |
| GET | `/blog/tag/{slug}` | Get posts by tag |
| GET | `/blog/{slug}` | Get post by slug |
| GET | `/blog/{slug}/related` | Get related posts |
| GET | `/faqs` | List published FAQs |
| GET | `/faqs/category/{category}` | Get FAQs by category |
| GET | `/testimonials` | List published testimonials |
| GET | `/testimonials/featured` | List featured testimonials |
| GET | `/resources` | List published resources |
| GET | `/resources/{slug}` | Get resource by slug |
| POST | `/leads` | Submit lead form |
| POST | `/contact` | Submit contact form |
| POST | `/newsletter` | Subscribe to newsletter |
| GET | `/settings` | Get public site settings |

### Authenticated Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| POST | `/newsletter/unsubscribe` | Unsubscribe from newsletter |
| GET | `/user` | Get authenticated user |

### Admin Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET/POST | `/admin/services` | List/create services |
| GET/PUT/DELETE | `/admin/services/{id}` | Show/update/delete service |
| GET/POST | `/admin/case-studies` | List/create case studies |
| GET/PUT/DELETE | `/admin/case-studies/{id}` | Show/update/delete |
| GET/POST | `/admin/blog` | List/create blog posts |
| GET/PUT/DELETE | `/admin/blog/{id}` | Show/update/delete |
| GET/POST | `/admin/resources` | List/create resources |
| GET/PUT/DELETE | `/admin/resources/{id}` | Show/update/delete |
| GET/POST | `/admin/faqs` | List/create FAQs |
| GET/PUT/DELETE | `/admin/faqs/{id}` | Show/update/delete |
| GET/POST | `/admin/testimonials` | List/create testimonials |
| GET/PUT/DELETE | `/admin/testimonials/{id}` | Show/update/delete |
| GET | `/admin/leads` | List leads |
| PATCH | `/admin/leads/{id}/status` | Update lead status |
| GET | `/admin/contact-submissions` | List submissions |
| PATCH | `/admin/contact-submissions/{id}/status` | Update status |

### Response Format

```json
{
  "data": { ... },
  "meta": {
    "total": 100,
    "page": 1,
    "limit": 12,
    "totalPages": 9
  }
}
```

---

## Security Architecture

### Frontend

- **No secrets in client code** — All API keys in `runtimeConfig.public` only (never private).
- **Input sanitization** — All form inputs validated both client-side (Vue) and server-side (Laravel).
- **XSS prevention** — Vue auto-escapes templates. Avoid `v-html` unless content is sanitized.
- **CSRF** — Not needed for stateless API (Sanctum token auth). For web routes, Laravel CSRF middleware handles it.

### Backend

- **Authentication** — Laravel Sanctum (token-based).
- **Authorization** — Spatie Permission for role/permission checks.
- **Rate limiting** — Throttle middleware on all public routes (60 req/min IP, 120 req/min authenticated).
- **Validation** — Form Request classes for all input validation.
- **CORS** — Configure `cors.php` to allow only `https://softcredible.com` origins in production.
- **Sanitization** — Use Laravel's `$request->validated()` to ensure only clean data reaches models.
- **SQL injection** — Prevented by Eloquent ORM parameter binding.
- **API responses** — No sensitive data (passwords, tokens) in JSON responses.
- **Environment variables** — All secrets in `.env`, never committed.

---

## SEO Architecture

### Dynamic Metadata

- **Route-level SEO** — Each page defines its own SEO via `useSeo()` composable + route middleware.
- **Meta tags** — Title, description, canonical, OpenGraph, Twitter Cards.
- **JSON-LD** — Structured data for services, case studies, blog posts, organization.

### Technical SEO

- **Sitemap** — Auto-generated by `spatie/laravel-sitemap` or custom endpoint.
- **Robots.txt** — Served via Laravel route or static file.
- **Canonical URLs** — Every page has a canonical link.
- **Redirects** — Handle legacy URLs via Laravel redirect routes.

### Nuxt SEO

- Use `@nuxtjs/seo` module for additional meta management.
- Pre-render pages for static export (`nuxt generate`) for maximum SEO benefit.

---

## Performance Architecture

### SSR Strategy

- **Static Site Generation (SSG)** — Primary strategy for marketing pages.
  - Generate static HTML at build time for: home, services, case studies, blog, about, contact.
  - Fastest possible page loads, best SEO.
- **Server-Side Rendering (SSR)** — For dynamic pages requiring request-time data.
- **Client-Side Rendering (CSR)** — Only for interactive admin/dashboard sections.

### Frontend Performance

- **Code splitting** — Nuxt auto-splits by route.
- **Lazy loading** — `Lazy` components for below-fold sections.
- **Image optimization** — Use `nuxt-image` or `@nuxt/image` for responsive images, WebP, lazy loading.
- **Minimal JS** — Avoid heavy libraries. Use Vue transitions instead of GSAP for simple animations.
- **Font loading** — `@fontsource-variable/inter` with `font-display: swap`.

### Backend Performance

- **Caching** — Cache public API responses (Redis or file cache).
  - Services, case studies, blog posts cached for 1 hour.
  - Invalidate cache on content update.
- **Database indexes** — Index `slug`, `published`, `order` on content tables.
- **Pagination** — All list endpoints paginated (default 12 items).
- **Eager loading** — Use `with()` to prevent N+1 queries.

### CDN / Hosting

- **Static assets** — Serve via CDN (Cloudflare, Vercel Edge, or similar).
- **API** — Deploy on Laravel Vapor, Forge, or similar.
- **Images** — Store in S3/CloudFlare R2, serve via CDN with optimization.

---

## Security Checklist

- [ ] CSRF protection enabled for web routes
- [ ] Rate limiting on all public API endpoints
- [ ] Input validation via Form Request classes
- [ ] SQL injection prevention (Eloquent ORM)
- [ ] XSS prevention (Vue auto-escaping, sanitize `v-html`)
- [ ] CORS restricted to production domain
- [ ] No sensitive data in API responses
- [ ] All secrets in `.env` (never committed)
- [ ] Sanctum token auth for protected routes
- [ ] Spatie Permission for admin authorization
- [ ] File upload validation (type, size)
- [ ] HTTPS enforced in production

---

## SEO Checklist

- [ ] Dynamic `<title>` and `<meta description>` per page
- [ ] OpenGraph tags for all pages
- [ ] Twitter Card tags
- [ ] Canonical URLs
- [ ] JSON-LD structured data
- [ ] Sitemap.xml auto-generated
- [ ] robots.txt configured
- [ ] Semantic HTML (`<header>`, `<main>`, `<article>`, etc.)
- [ ] Accessible color contrast
- [ ] Responsive images with `srcset`
- [ ] Fast LCP (< 2.5s), FID (< 100ms), CLS (< 0.1)

---

## Missing Brand Assets

1. **Favicon.ico** — Generate `.ico` fallback from SVG
2. **Open Graph image** — Create `/og-image.jpg` template (1200×630)
3. **Social media banners** — LinkedIn/Twitter cover images
4. **Case study templates** — Document/case study PDF templates
5. **Icon library** — Define approved icon set (Heroicons, Phosphor, etc.)

---

## Next Steps

1. Review this architecture with the team.
2. Set up backend Laravel project (`composer create-project`).
3. Run migrations and seeders.
4. Implement frontend layouts and navigation.
5. Build homepage using the design system.
