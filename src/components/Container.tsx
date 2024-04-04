import Link from 'next/link'

export default function Container({ children }: { children: React.ReactNode }) {
  return (
    <div className="container">
      <header className="header">
        <Link className="header__title" href="/">
          Home
        </Link>
      </header>
      <main>{children}</main>
      <footer className="footer">
        <p className="footer__text">
          Footer here
        </p>
      </footer>
    </div>
  )
}
