import {
  HeadContent,
  Outlet,
  Scripts,
  createRootRoute,
} from '@tanstack/react-router'
import { createContext, useContext, useState } from 'react'
import type { Lang } from '@/data/translations'
import '../styles.css'

interface LangContextType {
  lang: Lang
  setLang: (l: Lang) => void
}

export const LangContext = createContext<LangContextType>({
  lang: 'en',
  setLang: () => {},
})

export const useLang = () => useContext(LangContext)

export const Route = createRootRoute({
  head: () => ({
    meta: [
      { charSet: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { title: 'Bnei Yerushalayim Construction | בני ירושלים בנייה' },
      {
        name: 'description',
        content:
          'Premium construction and renovation services in Jerusalem — interior, exterior, safe rooms & capsule homes.',
      },
    ],
    links: [
      {
        rel: 'preconnect',
        href: 'https://fonts.googleapis.com',
      },
      {
        rel: 'preconnect',
        href: 'https://fonts.gstatic.com',
        crossOrigin: 'anonymous' as const,
      },
      {
        rel: 'stylesheet',
        href: 'https://fonts.googleapis.com/css2?family=Heebo:wght@400;500;600;700;800;900&display=swap',
      },
    ],
  }),
  component: RootComponent,
})

function RootComponent() {
  const [lang, setLang] = useState<Lang>('en')
  const dir = lang === 'he' ? 'rtl' : 'ltr'

  return (
    <LangContext.Provider value={{ lang, setLang }}>
      <html lang={lang} dir={dir}>
        <head>
          <HeadContent />
        </head>
        <body>
          <Outlet />
          <Scripts />
        </body>
      </html>
    </LangContext.Provider>
  )
}
