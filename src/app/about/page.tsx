import Image from 'next/image'

export default function About() {
  return (
    <div className="p-24">
      <h1 className="text-4xl font-bold mb-6">About Me</h1>
      <Image src="/viet.png" alt="Viet Tran" width={250} height={250} className="mb-6" />
      <p className="mb-4">
        I am an Integration Developer at Frends Enterprise iPaaS with a Master's degree 
        in Automation and Electrical Engineering from Aalto University.
      </p>
      <h2 className="text-2xl font-semibold mb-4">Skills</h2>
      <ul className="list-disc pl-5">
        <li>Integration Development: Proficient with Frends iPaaS platform</li>
        <li>Programming: Python, C++, C#, SQL</li>
        <li>Database Management: MS SQL, MariaDB</li>
        <li>API Development and Management</li>
        {/* Add more skills */}
      </ul>
      {/* Add more sections like Professional Experience, Education, etc. */}
    </div>
  )
}