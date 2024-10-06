import Link from 'next/link'

export default function Projects() {
  return (
    <div className="p-24">
      <h1 className="text-4xl font-bold mb-6">My Projects</h1>
      <ul className="space-y-6">
        <li>
            <h3 className="text-2xl font-semibold">Integration Development with Frends iPaaS</h3>
          <p>Examples of integration projects developed using Frends Enterprise iPaaS platform.</p>
        </li>
        {/* ... other list items */}
      </ul>
    </div>
  )
}
