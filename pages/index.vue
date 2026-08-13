<template>
  <div class="min-h-screen">
    <!-- Hero -->
    <section class="w-full bg-background section overflow-hidden">
      <Container>
        <div class="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          <!-- Claim -->
          <div class="lg:col-span-7 animate-slide-up">
            <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent-soft border border-accent/20 mb-6">
              <span class="w-1.5 h-1.5 rounded-full bg-accent" aria-hidden="true"></span>
              <span class="text-xs font-medium text-primary">
                Custom software. Built for growth.
              </span>
            </div>
            <h1 class="text-display mb-6">
              We Build Software That Moves Businesses Forward.
            </h1>
            <p class="text-body-lg text-ink-soft mb-8 max-w-xl">
              Custom SaaS, CRM, ERP, eCommerce, and AI-powered applications, engineered around how your business actually works, not sold off a shelf.
            </p>
            <div class="flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
              <Button variant="primary" size="lg" to="/book-a-call" className="w-full sm:w-auto">
                Book a Free Strategy Call
              </Button>
              <Button variant="outline" size="lg" to="/case-studies" className="w-full sm:w-auto">
                Explore Our Work
              </Button>
            </div>
            <p class="text-sm text-muted mt-6 flex items-center gap-2">
              <svg class="w-4 h-4 text-success flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
              </svg>
              No obligation. Response within one business day.
            </p>
            <p class="text-xs text-muted mt-3 flex items-center gap-1.5">
              <span class="w-1 h-1 rounded-full bg-accent" aria-hidden="true"></span>
              Custom Software · SaaS · Business Automation · Long-Term Engineering
            </p>
            <p class="text-xs text-ink-soft mt-2 flex items-center gap-1.5 font-medium">
              <svg class="w-3.5 h-3.5 text-accent flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
              {{ heroCredibilityLine }}
            </p>

            <!-- Proof of work -->
            <div class="mt-10 pt-8 border-t border-border">
              <p class="text-caption font-medium text-muted uppercase tracking-wider mb-4">
                Recent software we've built
              </p>
              <ul class="space-y-3">
                <li v-for="item in heroProjects" :key="item.client" class="flex items-center gap-3">
                  <span class="w-6 h-6 rounded-md bg-accent-soft text-accent flex items-center justify-center flex-shrink-0">
                    <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                    </svg>
                  </span>
                  <span class="text-sm">
                    <span class="font-medium text-ink">{{ item.client }}</span>
                    <span class="text-muted"> — {{ item.projectType }}</span>
                  </span>
                </li>
              </ul>
            </div>
          </div>

          <!-- Proof panel -->
          <div class="lg:col-span-5 hidden lg:block">
            <div class="relative">
              <div class="absolute -inset-4 bg-gradient-to-br from-accent/10 via-transparent to-primary/10 rounded-2xl blur-2xl" aria-hidden="true"></div>
              <div class="relative bg-surface border border-border rounded-xl shadow-lg overflow-hidden">
                <div class="px-6 py-4 border-b border-border flex items-center justify-between">
                  <p class="text-sm font-semibold text-ink">Featured work</p>
                  <NuxtLink to="/case-studies" class="text-sm text-accent hover:underline px-2 py-1.5 inline-flex items-center">
                    View all
                  </NuxtLink>
                </div>
                <div class="divide-y divide-border">
                  <NuxtLink
                    v-for="project in heroCaseStudies"
                    :key="project.slug"
                    :to="`/case-studies/${project.slug}`"
                    class="group flex items-center gap-4 px-6 py-5 hover:bg-surface-2 transition-colors"
                  >
                    <div class="w-10 h-10 rounded-lg bg-accent-soft text-accent flex items-center justify-center flex-shrink-0">
                      <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <div class="flex-1 min-w-0">
                      <p class="text-sm font-medium text-ink group-hover:text-accent transition-colors">
                        {{ project.client }}
                      </p>
                      <p class="text-xs text-muted truncate">{{ project.projectType }}</p>
                    </div>
                    <svg class="w-4 h-4 text-muted group-hover:text-accent group-hover:translate-x-0.5 transition-all flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
                    </svg>
                  </NuxtLink>
                </div>
                <div class="px-6 py-4 bg-surface-2/60 border-t border-border">
                  <p class="text-xs text-muted">
                    Custom SaaS, CRM, ERP, eCommerce, and AI — delivered end to end.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>

    <!-- Trust Strip: condensed proof band under hero -->
    <section class="w-full bg-surface border-y border-border">
      <Container>
        <div class="py-8 flex flex-col lg:flex-row items-center justify-between gap-6">
          <p class="text-sm font-medium text-ink flex items-center gap-2 flex-shrink-0">
            <span class="w-1.5 h-1.5 rounded-full bg-accent" aria-hidden="true"></span>
            Built for Businesses That Take Technology Seriously.
          </p>
          <div class="flex flex-wrap items-center justify-center gap-2">
            <TrustBadge v-for="badge in trustBadges" :key="badge" :label="badge" />
          </div>
        </div>
      </Container>
    </section>

    <!-- Problem -->
    <section class="w-full bg-background section">
      <Container>
        <div class="max-w-3xl mx-auto text-center mb-16">
          <h2 class="text-h2 mb-4">
            Your Business Has a Problem. Your Software Should Solve It.
          </h2>
          <p class="text-body-lg text-ink-soft">
            Spreadsheets, disconnected tools, manual processes, outdated systems, and repetitive work eventually become expensive.
          </p>
        </div>
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <Card v-for="item in problems" :key="item.title" className="p-6 h-full">
            <div class="w-10 h-10 flex items-center justify-center rounded-lg bg-accent-soft text-accent mb-4">
              <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :d="item.icon" />
              </svg>
            </div>
            <h3 class="text-h4 mb-2">{{ item.title }}</h3>
            <p class="text-sm text-ink-soft">{{ item.description }}</p>
          </Card>
        </div>
        <div class="mt-12 text-center">
          <Button variant="outline" size="lg" to="/free-assessment">
            Let's Find the Bottleneck
          </Button>
        </div>
      </Container>
    </section>

    <!-- Solutions -->
    <section class="w-full bg-surface border-y border-border section">
      <Container>
        <div class="max-w-3xl mx-auto text-center mb-16">
          <h2 class="text-h2 mb-4">
            One Technology Partner. Multiple Business Solutions.
          </h2>
          <p class="text-body-lg text-ink-soft">
            From idea to production, we design and build software around how your business actually works.
          </p>
        </div>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <Card v-for="solution in solutions" :key="solution.title" :interactive="!!solution.href" className="p-6 h-full flex flex-col">
            <div class="w-10 h-10 flex items-center justify-center rounded-lg bg-accent-soft text-accent mb-4">
              <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :d="solution.icon" />
              </svg>
            </div>
            <h3 class="text-h4 mb-2">{{ solution.title }}</h3>
            <p class="text-sm text-ink-soft leading-relaxed flex-grow">{{ solution.description }}</p>
            <NuxtLink v-if="solution.href" :to="solution.href" class="inline-flex items-center gap-1 text-sm font-medium text-accent hover:text-accent/80 mt-4 transition-colors">
              Learn more
              <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </NuxtLink>
          </Card>
        </div>
        <div class="mt-12 text-center">
          <Button variant="outline" size="lg" to="/solutions">
            View All Solutions
          </Button>
        </div>
      </Container>
    </section>

    <!-- Outcomes -->
    <section class="w-full bg-background section">
      <Container>
        <div class="max-w-3xl mx-auto text-center mb-16">
          <h2 class="text-h2 mb-4">
            We Don't Just Build Features.
          </h2>
          <p class="text-body-lg text-ink-soft">
            We build systems around business outcomes.
          </p>
        </div>
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          <div v-for="outcome in outcomes" :key="outcome.title" class="text-center">
            <div class="w-12 h-12 mx-auto flex items-center justify-center rounded-xl bg-accent-soft text-accent mb-4">
              <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :d="outcome.icon" />
              </svg>
            </div>
            <h3 class="text-h4 mb-2">{{ outcome.title }}</h3>
            <p class="text-sm text-ink-soft">{{ outcome.description }}</p>
          </div>
        </div>
      </Container>
    </section>

    <!-- Case Studies: proof discovery -->
    <section class="w-full bg-surface border-y border-border section">
      <Container>
        <div class="max-w-3xl mx-auto text-center mb-12">
          <h2 class="text-h2 mb-4">
            Real Problems. Real Software.
          </h2>
          <p class="text-body-lg text-ink-soft">
            Explore how complex requirements can become simple, usable digital products.
          </p>
        </div>

        <!-- Proof-discovery filter -->
        <div class="mb-12">
          <p class="text-caption font-medium text-muted uppercase tracking-wider text-center mb-4">
            I need...
          </p>
          <div class="flex flex-wrap items-center justify-center gap-2.5">
            <button
              type="button"
              class="px-4 py-2 rounded-full border text-sm font-medium transition-all duration-200"
              :class="activeProofFilter === 'all'
                ? 'border-accent bg-accent-soft text-accent'
                : 'border-border bg-surface text-ink-soft hover:border-accent/50'"
              @click="activeProofFilter = 'all'"
            >
              All
            </button>
            <button
              v-for="filter in proofFilters"
              :key="filter.value"
              type="button"
              class="px-4 py-2 rounded-full border text-sm font-medium transition-all duration-200"
              :class="activeProofFilter === filter.value
                ? 'border-accent bg-accent-soft text-accent'
                : 'border-border bg-surface text-ink-soft hover:border-accent/50'"
              @click="activeProofFilter = filter.value"
            >
              {{ filter.label }}
            </button>
          </div>
        </div>

        <CaseStudyGrid :items="filteredCaseStudies" />
        <div class="mt-12 text-center">
          <Button variant="outline" size="lg" to="/book-a-call">
            See How We'd Approach Your Project
          </Button>
        </div>
      </Container>
    </section>

    <!-- Product Showcase: interactive demo explorer -->
    <section class="w-full bg-background section">
      <Container>
        <div class="max-w-3xl mx-auto text-center mb-16">
          <h2 class="text-h2 mb-4">
            Don't Just Read About Our Work. Explore It.
          </h2>
          <p class="text-body-lg text-ink-soft">
            Interactive walkthroughs of the systems we've built. Switch between projects and modules to see how each one works.
          </p>
        </div>
        <InteractiveDemoExplorer />
      </Container>
    </section>

    <!-- Why Softcredible -->
    <section class="w-full bg-surface border-y border-border section">
      <Container>
        <div class="max-w-3xl mx-auto text-center mb-16">
          <h2 class="text-h2 mb-4">
            Built for the Long Run.
          </h2>
          <p class="text-body-lg text-ink-soft">
            The relationship doesn't end when the project launches.
          </p>
        </div>
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <Card v-for="value in whyUs" :key="value.title" className="p-6 h-full">
            <div class="w-10 h-10 flex items-center justify-center rounded-lg bg-accent-soft text-accent mb-4">
              <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :d="value.icon" />
              </svg>
            </div>
            <h3 class="text-h4 mb-2">{{ value.title }}</h3>
            <p class="text-sm text-ink-soft leading-relaxed">{{ value.description }}</p>
          </Card>
        </div>
      </Container>
    </section>

    <!-- Founder / human trust -->
    <section class="w-full bg-background section">
      <Container>
        <div class="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div class="lg:col-span-5">
            <div class="relative">
              <div class="aspect-square max-w-sm bg-surface border border-border rounded-xl flex items-center justify-center">
                <div class="text-center px-8">
                  <p class="text-caption font-medium text-muted uppercase tracking-wider mb-3">Founder-led</p>
                  <div class="w-16 h-16 mx-auto rounded-full bg-accent-soft text-accent flex items-center justify-center mb-4">
                    <svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                    </svg>
                  </div>
                  <p class="text-sm text-ink font-medium mb-1">Softcredible Founder</p>
                  <p class="text-xs text-muted">Built around a simple idea: software should remove complexity, not add it.</p>
                </div>
              </div>
            </div>
          </div>
          <div class="lg:col-span-7">
            <p class="text-caption font-medium text-accent uppercase tracking-wider mb-3">Who you'll work with</p>
            <h2 class="text-h2 mb-6">
              Software Built by People Who Care About Your Business.
            </h2>
            <div class="space-y-4">
              <p class="text-body-lg text-ink-soft">
                Softcredible exists because too many businesses get software that works in a demo but fails in practice.
              </p>
              <p class="text-body-lg text-ink-soft">
                We build systems the way we'd want them built for our own company: with a clear understanding of the problem, disciplined engineering, and a relationship that outlasts the launch.
              </p>
              <p class="text-body-lg text-ink-soft">
                You work directly with the people building your software, not through layers of account managers.
              </p>
            </div>
            <div class="mt-8">
              <Button variant="outline" size="lg" to="/process">
                See How We Work
              </Button>
            </div>
          </div>
        </div>
      </Container>
    </section>

    <!-- Proof band: bold stat callout -->
    <section class="w-full bg-primary section" aria-label="Project proof">
      <Container>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-8">
          <div v-for="item in proofBand" :key="item.label" class="text-center md:text-left">
            <p class="text-4xl md:text-5xl font-bold text-white tracking-tight mb-2">
              {{ item.emphasis }}
            </p>
            <p class="text-sm text-white/70">
              {{ item.label }}
            </p>
          </div>
        </div>
      </Container>
    </section>

    <!-- Proof: quantified outcomes -->
    <section class="w-full bg-surface border-y border-border section">
      <Container>
        <div class="max-w-3xl mx-auto text-center mb-16">
          <h2 class="text-h2 mb-4">
            What Our Work Delivers.
          </h2>
          <p class="text-body-lg text-ink-soft">
            Verified outcomes from real projects. No invented numbers.
          </p>
        </div>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
          <NuxtLink
            v-for="study in proofStudies"
            :key="study.slug"
            :to="`/case-studies/${study.slug}`"
            class="group block bg-background border border-border rounded-xl p-8 hover:border-accent/50 hover:shadow-md transition-all duration-200"
          >
            <p class="text-caption font-medium text-accent uppercase tracking-wider mb-3">{{ study.industry }}</p>
            <h3 class="text-h4 mb-2 group-hover:text-accent transition-colors">{{ study.title }}</h3>
            <ul class="space-y-2 mt-4">
              <li v-for="outcome in study.outcomes" :key="outcome" class="flex items-start gap-2 text-sm text-ink-soft">
                <svg class="w-4 h-4 text-success flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                </svg>
                {{ outcome }}
              </li>
            </ul>
            <span class="inline-flex items-center gap-1 text-sm font-medium text-accent mt-5 group-hover:gap-2 transition-all">
              View case study
              <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
              </svg>
            </span>
          </NuxtLink>
        </div>
      </Container>
    </section>

    <!-- Process -->
    <section class="w-full bg-background section">
      <Container>
        <div class="max-w-3xl mx-auto text-center mb-16">
          <h2 class="text-h2 mb-4">
            From Idea to Production.
          </h2>
          <p class="text-body-lg text-ink-soft">
            A proven process that takes you from initial concept to a live, maintainable product.
          </p>
        </div>
        <ProcessSteps :items="processSteps" />
      </Container>
    </section>

    <!-- Long-term Partnership: lifecycle -->
    <section class="w-full bg-surface border-y border-border section">
      <Container>
        <div class="max-w-3xl mx-auto text-center mb-16">
          <h2 class="text-h2 mb-4">
            Don't Just Build a Project. Build a Technology Partnership.
          </h2>
          <p class="text-body-lg text-ink-soft">
            Your software will evolve as your business evolves. Work with a technology partner who already understands your system.
          </p>
        </div>

        <!-- Lifecycle -->
        <div class="max-w-4xl mx-auto mb-16">
          <ol class="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
            <li v-for="(phase, index) in partnershipLifecycle" :key="phase.title" class="relative">
              <div class="bg-background border border-border rounded-xl p-5 h-full">
                <p class="text-caption font-mono text-accent mb-2">{{ String(index + 1).padStart(2, '0') }}</p>
                <p class="text-sm font-semibold text-ink">{{ phase.title }}</p>
              </div>
              <svg v-if="index < partnershipLifecycle.length - 1" class="hidden lg:block w-4 h-4 text-muted absolute top-1/2 -right-4 -translate-y-1/2 z-10" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
              </svg>
            </li>
          </ol>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card v-for="partnership in partnerships" :key="partnership.title" className="p-6 h-full flex flex-col">
            <h3 class="text-h4 mb-2">{{ partnership.title }}</h3>
            <p class="text-sm text-ink-soft leading-relaxed flex-grow">{{ partnership.description }}</p>
            <Button v-if="partnership.href" variant="outline" size="sm" class="mt-4" :to="partnership.href">
              Learn More
            </Button>
          </Card>
        </div>
      </Container>
    </section>

    <!-- Risk reduction -->
    <section class="w-full bg-background section">
      <Container>
        <div class="max-w-3xl mx-auto text-center mb-16">
          <h2 class="text-h2 mb-4">
            Before We Build, We Make Sure We Understand.
          </h2>
          <p class="text-body-lg text-ink-soft">
            A clear process reduces both financial and technical risk.
          </p>
        </div>
        <div class="max-w-4xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <div v-for="step in riskReduction" :key="step" class="flex items-center gap-3 px-5 py-4 bg-surface border border-border rounded-lg">
            <svg class="w-5 h-5 text-success flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
            </svg>
            <span class="text-sm font-medium text-ink">{{ step }}</span>
          </div>
        </div>
      </Container>
    </section>

    <!-- Lead magnet: low-commitment entry point -->
    <section class="w-full bg-background section overflow-hidden">
      <Container>
        <div class="max-w-4xl mx-auto bg-surface border border-border rounded-2xl p-8 lg:p-12 grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          <div>
            <p class="text-caption font-medium text-accent uppercase tracking-wider mb-3">Not ready to book a call?</p>
            <h2 class="text-h2 mb-4">
              Start With the Free Automation Checklist
            </h2>
            <p class="text-body-lg text-ink-soft mb-6">
              25 questions to find where your business loses time to manual processes. Download it, work through it, and see the opportunities for yourself.
            </p>
            <div class="flex flex-wrap gap-3">
              <span class="inline-flex items-center gap-2 text-sm text-ink-soft">
                <svg class="w-5 h-5 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M5 13l4 4L19 7" />
                </svg>
                Free download
              </span>
              <span class="inline-flex items-center gap-2 text-sm text-ink-soft">
                <svg class="w-5 h-5 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M5 13l4 4L19 7" />
                </svg>
                25 questions
              </span>
              <span class="inline-flex items-center gap-2 text-sm text-ink-soft">
                <svg class="w-5 h-5 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M5 13l4 4L19 7" />
                </svg>
                No sales pitch
              </span>
            </div>
            <div class="mt-8">
              <Button variant="primary" size="lg" to="/resources/business-automation-opportunity-checklist">
                Get the Free Checklist
              </Button>
            </div>
          </div>
          <div class="hidden lg:block">
            <div class="bg-background border border-border rounded-xl p-6">
              <p class="text-caption font-medium text-muted uppercase tracking-wider mb-4">Sample questions</p>
              <ul class="space-y-3">
                <li v-for="q in sampleChecklistQuestions" :key="q" class="flex items-start gap-2 text-sm text-ink-soft">
                  <svg class="w-4 h-4 text-success flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                  </svg>
                  {{ q }}
                </li>
              </ul>
            </div>
          </div>
        </div>
      </Container>
    </section>

    <!-- FAQ (condensed) -->
    <section class="w-full bg-surface border-y border-border section">
      <Container>
        <div class="max-w-3xl mx-auto text-center mb-16">
          <h2 class="text-h2 mb-4">
            Questions Clients Ask Before Starting
          </h2>
          <p class="text-body-lg text-ink-soft">
            Honest answers to the objections that usually decide the first call.
          </p>
        </div>
        <FaqSection :items="homeFaqs" />
        <div class="text-center mt-10">
          <Button variant="ghost" size="md" to="/faq">
            See all FAQs
          </Button>
        </div>
      </Container>
    </section>

    <!-- Final CTA -->
    <section class="w-full bg-background section">
      <Container>
        <div class="max-w-3xl mx-auto text-center">
          <h2 class="text-h2 mb-4">
            Your Next Business Advantage Could Start With One Conversation.
          </h2>
          <p class="text-body-lg text-ink-soft mb-8">
            Tell us what you're trying to build, improve, automate, or replace. We'll help you understand what the next step should look like.
          </p>
          <div class="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button variant="primary" size="lg" to="/book-a-call">
              Book a Free Strategy Call
            </Button>
            <Button variant="outline" size="lg" to="/estimate">
              Get a Project Estimate
            </Button>
          </div>
        </div>
      </Container>
    </section>
  </div>
</template>

<script setup lang="ts">
import { caseStudies } from '~/data/caseStudies'
import { featuredFaqs } from '~/data/faqs'

// Homepage FAQ: the top objections, condensed. Full list on /faq.
const homeFaqs = featuredFaqs

// Lead magnet teaser: sample questions from the checklist.
const sampleChecklistQuestions = [
  'Do you re-enter the same data into more than one system?',
  'Do you copy information between spreadsheets by hand?',
  'Do you manually prepare the same report every week?',
  'Do you follow up on tasks and approvals by chasing people?'
]

// Hero proof-of-work: the three featured client projects.
const heroCaseStudies = caseStudies
  .filter((cs) => ['healthcare-patient-management', 'retail-ecommerce-platform', 'enterprise-inventory-erp'].includes(cs.slug))
  .slice(0, 3)
const heroProjects = [
  { client: 'MediCare Network', projectType: 'Healthcare platform' },
  { client: 'RetailPlus', projectType: 'eCommerce platform' },
  { client: 'Swift Logistics', projectType: 'ERP system' },
]

const trustBadges = ['Laravel', 'Vue', 'Nuxt', 'PHP', 'MySQL', 'TypeScript', 'Tailwind', 'Docker', 'REST APIs', 'AI Integrations']

// Honest credibility cue — derived from the actual published case studies.
const heroCredibilityLine = computed(() => {
  const published = caseStudies.filter(cs => cs.published)
  const industries = [...new Set(published.map(cs => cs.industry))].join(', ').toLowerCase()
  return `${published.length} real projects across ${industries} — built and delivered end to end.`
})

// Proof-discovery filter: "I need..." → relevant case studies.
const activeProofFilter = ref('all')
const proofFilters = [
  { label: 'SaaS', value: 'saas' },
  { label: 'CRM', value: 'crm' },
  { label: 'ERP', value: 'erp' },
  { label: 'eCommerce', value: 'ecommerce' },
  { label: 'POS', value: 'pos' },
  { label: 'Automation', value: 'automation' },
  { label: 'Existing Software', value: 'existing' }
]
// Map each filter to matching slugs among the published case studies.
const proofFilterSlugs: Record<string, string[]> = {
  saas: [],
  crm: [],
  erp: ['enterprise-inventory-erp'],
  ecommerce: ['retail-ecommerce-platform'],
  pos: [],
  automation: ['healthcare-patient-management'],
  existing: ['enterprise-inventory-erp', 'healthcare-patient-management']
}
const filteredCaseStudies = computed(() => {
  if (activeProofFilter.value === 'all') return caseStudies
  const slugs = proofFilterSlugs[activeProofFilter.value] || []
  return caseStudies.filter(cs => slugs.includes(cs.slug))
})

// Proof strip: real, qualitative outcomes from the published case studies.
const proofStudies = [
  { slug: 'healthcare-patient-management', industry: 'Healthcare', title: 'MediCare Network', outcomes: ['One source of truth across clinics', 'Faster reporting on demand', 'Clearer role-based access'] },
  { slug: 'retail-ecommerce-platform', industry: 'eCommerce', title: 'RetailPlus', outcomes: ['Resilient at peak traffic', 'One inventory view across stores', 'Self-service order tracking'] },
  { slug: 'enterprise-inventory-erp', industry: 'ERP', title: 'Swift Logistics', outcomes: ['Connected operations on one foundation', 'Auditable purchasing trail', 'Real-time stock visibility'] }
] as const

// Honest proof band — counts derived from the published case-study data.
const proofBand = computed(() => {
  const published = caseStudies.filter(cs => cs.published)
  const industries = [...new Set(published.map(cs => cs.industry))]
  const outcomes = published.reduce((n, cs) => n + (cs.outcome?.length ?? 0), 0)
  return [
    { emphasis: String(published.length), label: published.length === 1 ? 'project delivered end to end' : 'projects delivered end to end' },
    { emphasis: String(industries.length), label: industries.length === 1 ? 'industry served' : 'industries served' },
    { emphasis: String(outcomes), label: 'verified outcomes, no invented numbers' }
  ]
})

useSeo().setMeta({
  title: 'We Build Software That Moves Businesses Forward',
  description: 'Premium B2B software development and business automation company. Custom web applications, SaaS, CRM, ERP, and AI automation.'
})

const problems = [
  {
    title: 'Manual Processes',
    description: 'Repetitive tasks that consume time and increase human error.',
    icon: 'M12 6v6m0 0v6m0-6h6m-6 0H6'
  },
  {
    title: 'Disconnected Systems',
    description: 'Tools that don\'t communicate, creating data silos and delays.',
    icon: 'M4 6h16M4 12h16M4 18h16'
  },
  {
    title: 'Slow Workflows',
    description: 'Bottlenecks that prevent teams from moving at the speed of the business.',
    icon: 'M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z'
  },
  {
    title: 'Legacy Software',
    description: 'Outdated systems that are expensive to maintain and risky to change.',
    icon: 'M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10'
  }
]

const solutions = [
  {
    title: 'Custom Web Applications',
    description: 'Software designed around the way your business actually works.',
    icon: 'M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z',
    href: '/solutions/custom-web-development'
  },
  {
    title: 'SaaS Platforms',
    description: 'Build scalable subscription-based products from idea to production.',
    icon: 'M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z',
    href: '/solutions/saas-development'
  },
  {
    title: 'CRM Systems',
    description: 'Centralize customer relationships, sales pipelines, and reporting.',
    icon: 'M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z',
    href: '/solutions/crm-development'
  },
  {
    title: 'ERP & Business Management',
    description: 'Connect operations, finance, inventory, and workflows.',
    icon: 'M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4',
    href: '/solutions/erp-development'
  },
  {
    title: 'eCommerce',
    description: 'Build high-performance commerce experiences tailored to your business.',
    icon: 'M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z',
    href: '/solutions/ecommerce-development'
  },
  {
    title: 'POS & Inventory',
    description: 'Modernize sales, inventory, and operational workflows.',
    icon: 'M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z',
    href: '/solutions/pos-development'
  },
  {
    title: 'AI & Automation',
    description: 'Reduce repetitive work and connect intelligent automation to existing systems.',
    icon: 'M13 10V3L4 14h7v7l9-11h-7z',
    href: '/solutions/ai-automation'
  },
  {
    title: 'API & System Integration',
    description: 'Connect the tools your business already depends on.',
    icon: 'M8 9l3 3-3 3m5 0l3-3-3-3m-6 9l3-3 3 3M5 21h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v14a2 2 0 002 2z',
    href: '/solutions/api-integration'
  },
  {
    title: 'Software Modernization',
    description: 'Modernize legacy systems without stopping the business.',
    icon: 'M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10',
    href: '/solutions/software-modernization'
  },
  {
    title: 'Dedicated Development Team',
    description: 'Extend your team with senior developers who work like your own.',
    icon: 'M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z',
    href: '/solutions/dedicated-development-team'
  }
]

const outcomes = [
  {
    title: 'Automate',
    description: 'Reduce repetitive manual work and let your team focus on what matters.',
    icon: 'M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15'
  },
  {
    title: 'Connect',
    description: 'Bring disconnected systems together into one reliable workflow.',
    icon: 'M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1'
  },
  {
    title: 'Scale',
    description: 'Build architecture that can grow with your business without rebuilding.',
    icon: 'M13 7h8m0 0v8m0-8l-8 8-4-4-6 6'
  },
  {
    title: 'Improve',
    description: 'Make workflows faster, clearer, and easier to manage every day.',
    icon: 'M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z'
  }
]

const whyUs = [
  {
    title: 'Business First',
    description: 'We start by understanding the problem before writing a single line of code.',
    icon: 'M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z'
  },
  {
    title: 'Engineering Discipline',
    description: 'Clean architecture, maintainable code, and scalable systems built to last.',
    icon: 'M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10'
  },
  {
    title: 'Direct Communication',
    description: 'Clear communication without unnecessary layers. You talk to the people building your software.',
    icon: 'M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z'
  },
  {
    title: 'Transparent Process',
    description: 'You always know what is being built, what comes next, and why.',
    icon: 'M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01'
  },
  {
    title: 'Long-Term Thinking',
    description: 'We build systems that can evolve with your business, not just solutions for today.',
    icon: 'M13 7h8m0 0v8m0-8l-8 8-4-4-6 6'
  },
    {
      title: 'Post-Launch Support',
      description: 'The relationship doesn\'t end at launch. We stay available for improvement and support.',
      icon: 'M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z'
    }
]

const processSteps = [
  { id: 'discover', title: 'Discover', description: 'Understand your business, users, workflows, and goals.' },
  { id: 'define', title: 'Define', description: 'Translate requirements into a clear technical and product roadmap.' },
  { id: 'design', title: 'Design', description: 'Create intuitive interfaces and scalable product architecture.' },
  { id: 'build', title: 'Build', description: 'Develop the application using modern engineering practices.' },
  { id: 'test', title: 'Test', description: 'Validate functionality, performance, security, and usability.' },
  { id: 'launch', title: 'Launch', description: 'Deploy the product and monitor the production environment.' },
  { id: 'grow', title: 'Grow', description: 'Improve, optimize, automate, and add new capabilities over time.' }
]

const partnershipLifecycle = [
  { title: 'Discover' },
  { title: 'Build' },
  { title: 'Launch' },
  { title: 'Improve' },
  { title: 'Scale' },
  { title: 'Support' }
]

const riskReduction = [
  'Discovery',
  'Scope',
  'Planning',
  'Architecture',
  'Milestones',
  'Development',
  'QA',
  'Launch'
]

const partnerships = [
  {
    title: 'Dedicated Development Partnership',
    description: 'For businesses that need continuous development capacity without hiring overhead.',
    href: '/solutions/development-partnership'
  },
  {
    title: 'Product Development Partnership',
    description: 'For startups building and scaling digital products from concept to market.',
    href: '/solutions/development-partnership'
  },
  {
    title: 'Software Maintenance & Improvement',
    description: 'For businesses with existing applications that need reliable technical support.',
    href: '/solutions/development-partnership'
  }
]
</script>
