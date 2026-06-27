import { createFileRoute } from '@tanstack/react-router'
import { useState } from 'react'
import { useLang } from './__root'
import { t, projectImages } from '@/data/translations'

export const Route = createFileRoute('/')({
  component: HomePage,
})

type CategoryKey = 'interior' | 'exterior' | 'safeRooms' | 'capsuleHomes'

function HomePage() {
  const { lang, setLang } = useLang()
  const [activeCategory, setActiveCategory] = useState<CategoryKey>('interior')
  const [hoveredProject, setHoveredProject] = useState<number | null>(null)
  const tx = t[lang]

  const categories: { key: CategoryKey; icon: string }[] = [
    { key: 'interior', icon: '🏠' },
    { key: 'exterior', icon: '🏗️' },
    { key: 'safeRooms', icon: '🛡️' },
    { key: 'capsuleHomes', icon: '📦' },
  ]

  const catProjects = tx.projects[activeCategory]
  const catImages = projectImages[activeCategory]

  return (
    <div
      className={`min-h-screen bg-[#0a0a0f] text-white ${lang === 'he' ? 'font-hebrew' : ''}`}
    >
      {/* ─── Navbar ─── */}
      <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 md:px-12 py-4 bg-[#0a0a0f]/80 backdrop-blur-xl border-b border-white/5">
        <div className="flex items-center gap-3">
          <img src="logo.png" className="rounded-lg w-9 h-9" />
          <span className="font-bold text-sm md:text-base tracking-wide text-white/90">
            {tx.companyName}
          </span>
        </div>

        <div className="hidden md:flex items-center gap-6 text-sm text-white/60">
          {categories.map(({ key }) => (
            <button
              key={key}
              onClick={() => {
                setActiveCategory(key)
                document
                  .getElementById('projects')
                  ?.scrollIntoView({ behavior: 'smooth' })
              }}
              className="hover:text-amber-400 transition-colors cursor-pointer"
            >
              {tx.categories[key].name}
            </button>
          ))}
          <button
            onClick={() =>
              document
                .getElementById('contact')
                ?.scrollIntoView({ behavior: 'smooth' })
            }
            className="hover:text-amber-400 transition-colors cursor-pointer"
          >
            {tx.nav.contact}
          </button>
        </div>

        <div className="flex items-center gap-3">
          {/* Language Toggle */}
          <button
            onClick={() => setLang(lang === 'en' ? 'he' : 'en')}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-white/15 bg-white/5 hover:bg-white/10 transition-all text-sm font-medium"
            aria-label="Toggle language"
          >
            <span className={lang === 'en' ? 'text-amber-400' : 'text-white/50'}>
              EN
            </span>
            <span className="text-white/20">|</span>
            <span className={lang === 'he' ? 'text-amber-400' : 'text-white/50'}>
              עב
            </span>
          </button>
          <button
            onClick={() =>
              document
                .getElementById('contact')
                ?.scrollIntoView({ behavior: 'smooth' })
            }
            className="hidden md:block px-4 py-2 rounded-full bg-amber-500 hover:bg-amber-400 text-black font-semibold text-sm transition-colors"
          >
            {tx.contactCta}
          </button>
        </div>
      </nav>

      {/* ─── Hero ─── */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background image */}
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              'url(https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1600&q=80&fit=crop)',
          }}
        />
        {/* Gradient overlays */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a0f]/70 via-[#0a0a0f]/40 to-[#0a0a0f]" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0a0a0f]/60 via-transparent to-transparent" />

        <div className="relative z-10 text-center px-6 max-w-5xl mx-auto pt-24">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-amber-500/30 bg-amber-500/10 text-amber-400 text-sm font-medium mb-8">
            <span className="w-1.5 h-1.5 rounded-full bg-amber-400 animate-pulse" />
            Jerusalem · ירושלים
          </div>
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-black mb-6 leading-none tracking-tight">
            <span className="block text-white">{tx.companyTagline}</span>
          </h1>
          <p className="text-lg md:text-xl text-white/60 max-w-2xl mx-auto mb-12 leading-relaxed">
            {tx.companyDesc}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() =>
                document
                  .getElementById('projects')
                  ?.scrollIntoView({ behavior: 'smooth' })
              }
              className="px-8 py-4 rounded-full bg-amber-500 hover:bg-amber-400 text-black font-bold text-base transition-all hover:scale-105 shadow-lg shadow-amber-500/25"
            >
              {tx.learnMore}
            </button>
            <button
              onClick={() =>
                document
                  .getElementById('contact')
                  ?.scrollIntoView({ behavior: 'smooth' })
              }
              className="px-8 py-4 rounded-full border border-white/20 hover:border-white/40 text-white font-bold text-base transition-all hover:bg-white/5"
            >
              {tx.contactCta}
            </button>
          </div>
        </div>

        {/* Scroll cue */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/30 text-xs animate-bounce">
          <div className="w-0.5 h-8 bg-gradient-to-b from-white/30 to-transparent" />
        </div>
      </section>

      {/* ─── Stats ─── */}
      <section className="py-20 px-6">
        <div className="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8">
          {tx.stats.map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="text-4xl md:text-5xl font-black text-amber-400 mb-2">
                {stat.value}
              </div>
              <div className="text-white/50 text-sm font-medium tracking-wide uppercase">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ─── Projects ─── */}
      <section id="projects" className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          {/* Section header */}
          <div className="mb-16 text-center">
            <h2 className="text-4xl md:text-5xl font-black text-white mb-4">
              {lang === 'en' ? 'Our Work' : 'הפרויקטים שלנו'}
            </h2>
            <p className="text-white/50 max-w-xl mx-auto">
              {lang === 'en'
                ? 'Four specializations, one standard of excellence.'
                : 'ארבעה תחומים, רמה אחת של מצוינות.'}
            </p>
          </div>

          {/* Category tabs */}
          <div className="flex flex-wrap justify-center gap-3 mb-16">
            {categories.map(({ key, icon }) => (
              <button
                key={key}
                onClick={() => setActiveCategory(key)}
                className={`flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-semibold transition-all ${
                  activeCategory === key
                    ? 'bg-amber-500 text-black shadow-lg shadow-amber-500/30'
                    : 'border border-white/10 text-white/60 hover:border-white/30 hover:text-white'
                }`}
              >
                <span>{icon}</span>
                <span>{tx.categories[key].name}</span>
              </button>
            ))}
          </div>

          {/* Category description */}
          <div className="text-center mb-12 max-w-2xl mx-auto">
            <p className="text-white/50 leading-relaxed">
              {tx.categories[activeCategory].desc}
            </p>
          </div>

          {/* Project grid */}
          <div className="grid md:grid-cols-3 gap-6">
            {catProjects.map((project, i) => (
              <div
                key={i}
                onMouseEnter={() => setHoveredProject(i)}
                onMouseLeave={() => setHoveredProject(null)}
                className="group relative rounded-2xl overflow-hidden bg-white/3 border border-white/8 hover:border-amber-500/40 transition-all duration-300 hover:shadow-2xl hover:shadow-amber-500/10"
              >
                {/* Image */}
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={catImages[i]}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />
                  <div className="absolute top-3 right-3 flex gap-2">
                    <span className="px-2.5 py-1 rounded-full bg-black/50 backdrop-blur text-white/80 text-xs font-medium">
                      {project.year}
                    </span>
                    <span className="px-2.5 py-1 rounded-full bg-amber-500/80 backdrop-blur text-black text-xs font-bold">
                      {project.size}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <div className="flex items-start justify-between gap-2 mb-3">
                    <h3 className="text-lg font-bold text-white leading-tight">
                      {project.title}
                    </h3>
                  </div>
                  <div className="flex items-center gap-1.5 mb-3 text-amber-400 text-xs font-medium">
                    <svg
                      className="w-3.5 h-3.5"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
                    </svg>
                    {project.location}
                  </div>
                  <p className="text-white/50 text-sm leading-relaxed line-clamp-3">
                    {project.desc}
                  </p>

                  <div
                    className={`mt-5 flex items-center gap-2 text-amber-400 text-sm font-semibold transition-all duration-300 ${hoveredProject === i ? 'opacity-100' : 'opacity-0'}`}
                  >
                    <span>{tx.viewProject}</span>
                    <svg
                      className={`w-4 h-4 transition-transform ${lang === 'he' ? 'rotate-180 group-hover:-translate-x-1' : 'group-hover:translate-x-1'}`}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M17 8l4 4m0 0l-4 4m4-4H3"
                      />
                    </svg>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Why Us ─── */}
      <section className="py-24 px-6 bg-gradient-to-b from-transparent via-white/2 to-transparent">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <div className="text-amber-400 text-sm font-bold uppercase tracking-widest mb-4">
                {lang === 'en' ? 'Why Choose Us' : 'למה לבחור בנו'}
              </div>
              <h2 className="text-4xl md:text-5xl font-black text-white mb-6 leading-tight">
                {lang === 'en'
                  ? 'Jerusalem\'s Most Trusted Builder'
                  : 'הקבלן המהימן ביותר בירושלים'}
              </h2>
              <p className="text-white/50 leading-relaxed mb-10">
                {lang === 'en'
                  ? 'With deep roots in Jerusalem, we understand the city\'s unique building codes, heritage requirements, and the standards expected by its residents.'
                  : 'עם שורשים עמוקים בירושלים, אנו מבינים את קודי הבנייה הייחודיים של העיר, דרישות המורשת והסטנדרטים הנדרשים מתושביה.'}
              </p>
              <div className="space-y-4">
                {[
                  lang === 'en'
                    ? ['✓', 'Licensed & fully insured contractors']
                    : ['✓', 'קבלנים מורשים ומבוטחים במלואם'],
                  lang === 'en'
                    ? ['✓', 'Jerusalem Building Authority approved']
                    : ['✓', 'מאושר על ידי רשות הבנייה של ירושלים'],
                  lang === 'en'
                    ? ['✓', 'Home Front Command certified safe rooms']
                    : ['✓', 'חדרי ממ"ד מוסמכים פיקוד העורף'],
                  lang === 'en'
                    ? ['✓', '10-year structural warranty on all builds']
                    : ['✓', 'אחריות מבנה ל-10 שנים על כל הבנייה'],
                ].map(([check, text], i) => (
                  <div key={i} className="flex items-start gap-3">
                    <span className="text-amber-400 font-bold mt-0.5">{check}</span>
                    <span className="text-white/70">{text}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              {[
                'https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=400&q=80&fit=crop',
                'https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=400&q=80&fit=crop',
                'https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=400&q=80&fit=crop',
                'https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=400&q=80&fit=crop',
              ].map((src, i) => (
                <div
                  key={i}
                  className={`rounded-xl overflow-hidden ${i === 0 ? 'col-span-2 h-48' : 'h-36'}`}
                >
                  <img
                    src={src}
                    alt="Construction work"
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ─── Contact ─── */}
      <section id="contact" className="py-24 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-2 gap-16">
            {/* Info */}
            <div>
              <div className="text-amber-400 text-sm font-bold uppercase tracking-widest mb-4">
                {lang === 'en' ? 'Contact Us' : 'צרו קשר'}
              </div>
              <h2 className="text-4xl md:text-5xl font-black text-white mb-6 leading-tight">
                {tx.contact.title}
              </h2>
              <p className="text-white/50 mb-10 leading-relaxed">
                {tx.contact.subtitle}
              </p>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-amber-500/15 flex items-center justify-center text-amber-400 flex-shrink-0">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
                    </svg>
                  </div>
                  <div>
                    <div className="text-white font-semibold mb-0.5">
                      {tx.contact.address}
                    </div>
                    <div className="text-white/40 text-sm">
                      {lang === 'en' ? 'Head Office' : 'משרד ראשי'}
                    </div>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-amber-500/15 flex items-center justify-center text-amber-400 flex-shrink-0">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" />
                    </svg>
                  </div>
                  <div>
                    <div className="text-white font-semibold mb-0.5">
                      {tx.contact.tel}
                    </div>
                    <div className="text-white/40 text-sm">{tx.contact.hours}</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Form */}
            <div className="bg-white/3 border border-white/8 rounded-2xl p-8">
              <form className="space-y-5" onSubmit={(e) => e.preventDefault()}>
                <div className="grid grid-cols-2 gap-4">
                  <input
                    type="text"
                    placeholder={tx.contact.name}
                    className="col-span-2 w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder:text-white/30 focus:outline-none focus:border-amber-500/50 transition-colors text-sm"
                  />
                  <input
                    type="email"
                    placeholder={tx.contact.email}
                    className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder:text-white/30 focus:outline-none focus:border-amber-500/50 transition-colors text-sm"
                  />
                  <input
                    type="tel"
                    placeholder={tx.contact.phone}
                    className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder:text-white/30 focus:outline-none focus:border-amber-500/50 transition-colors text-sm"
                  />
                </div>
                <div className="flex flex-wrap gap-2">
                  {categories.map(({ key }) => (
                    <button
                      key={key}
                      type="button"
                      onClick={() => setActiveCategory(key)}
                      className={`px-3 py-1.5 rounded-full text-xs font-medium transition-all ${
                        activeCategory === key
                          ? 'bg-amber-500 text-black'
                          : 'border border-white/15 text-white/50 hover:border-white/30'
                      }`}
                    >
                      {tx.categories[key].name}
                    </button>
                  ))}
                </div>
                <textarea
                  rows={4}
                  placeholder={tx.contact.message}
                  className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder:text-white/30 focus:outline-none focus:border-amber-500/50 transition-colors text-sm resize-none"
                />
                <button
                  type="submit"
                  className="w-full py-3.5 rounded-xl bg-amber-500 hover:bg-amber-400 text-black font-bold text-sm transition-all hover:shadow-lg hover:shadow-amber-500/30 hover:scale-[1.01]"
                >
                  {tx.contact.send}
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* ─── Footer ─── */}
      <footer className="py-10 px-6 border-t border-white/5">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4 text-center md:text-start">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-amber-400 to-amber-600 flex items-center justify-center font-bold text-black text-xs">
              BYC
            </div>
            <span className="text-white/40 text-sm">{tx.footer.tagline}</span>
          </div>
          <div className="text-white/25 text-xs">{tx.footer.rights}</div>
        </div>
      </footer>
    </div>
  )
}
