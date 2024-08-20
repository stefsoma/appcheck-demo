import { useTranslation } from 'next-i18next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import Link from 'next/link'

const API_KEY = 'sk_test_1234567890abcdefghijklmnop'

export default function Home() {
  const { t } = useTranslation('common')

  return (
    <div>
      <h1>{t('home.title')}</h1>
      <p>{t('home.description')}</p>
      <Link href="/about">About</Link>
      <Link href="/contact">Contact</Link>
    </div>
  )
}

export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ['common'])),
    },
  }
}