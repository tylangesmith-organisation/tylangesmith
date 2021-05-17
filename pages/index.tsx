import Link from 'next/link'

const Component = () => (
  <div>
    <h1>Hello Next.js 👋</h1>
    <h2>INDEX</h2>
    <p>
      <Link href="/about">
        <a>About</a>
      </Link>
    </p>
  </div>
)

export default Component
