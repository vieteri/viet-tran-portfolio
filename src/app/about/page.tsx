import Image from 'next/image'

export default function About() {
  return (
    <div className="p-24">
      <h1 className="text-4xl font-bold mb-6">About Me</h1>
      <Image src="/viet.png" alt="Viet Tran" width={250} height={250} className="mb-6" />
      <p className="mb-4">
        I am an Integration Developer at Frends Enterprise iPaaS.
      </p>

      <h2 className="text-2xl font-semibold mb-4">Skills</h2>
      <ul className="list-disc pl-5">
        <li>Integration Development: Experience integrating various systems, including ERP, CRM, WMS, SAP, SOAP and API management</li>
        <li>Programming: Python (Proficient), C++ (Basic), C# (Intermediate), SQL (Advanced)</li>
        <li>Database Management: MS SQL, MariaDB</li>
        <li>API Development and Management</li>
        <li>Implementing industrial-grade automation solutions in WMS</li>
        <li>Project management and working in multiorganizational ERP integrations</li>
        <li>Bug fixing: Experienced in identifying and resolving integration errors, performance bottlenecks, and data inconsistencies in Frends platform and warehouse automation solutions</li> 
        <li>Course assistant: Course assistant for C-Programming, providing support to students during lab sessions and grading assignments</li> {/* Example, replace with actual course */}
      </ul>


      <h2 className="text-2xl font-semibold mb-4 mt-10">Education</h2>
      <ul className="list-disc pl-5">
        <li>
          <b>Master's degree in Automation and Electrical Engineering (2020-2022)</b> {/* Example, replace with actual years */}
          <br />
          Aalto University, School of Electrical Engineering <br />
          Major: Translational Engineering, Smart Buildings 
          {/* You can add thesis or project details here if relevant */}
        </li>
        <li>
          <b>Bachelor's degree in Electrical Engineering</b> <br />
          Aalto University, School of Electrical Engineering <br />
          Major: Automation <br />
          Minor: Computer science
        </li>
      </ul>
      {/* Add more sections like Professional Experience, etc. */}
    </div>
  )
}
