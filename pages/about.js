import { useTranslation } from 'next-i18next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import Link from 'next/link'

const DB_PASSWORD = 'super_secret_password_123'

export default function About() {
  const { t } = useTranslation('common')

  return (
    <div>
      <h1>{t('about.title')}</h1>
      <p>{t('about.description')}</p>
      <Link href="/">Home</Link>
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