export default function Contact() {
    return (
      <div className="p-24">
        <h1 className="text-4xl font-bold mb-6">Contact Me</h1>
        <p className="mb-4">
          I'm always open to new opportunities, collaborations, or just a friendly chat about 
          technology and integration development. Feel free to reach out through any of the 
          following platforms:
        </p>
        <ul className="list-disc pl-5">
        <li>
          Linkedin:{" "}
          <a
            href="https://www.linkedin.com/in/viet-tran-a9a492a8/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 hover:underline" 
          >
            Viet Tran
          </a>
        </li>
        <li>
          Email:{" "}
          <a
            href="mailto:viet_tran@windowslive.com"
            className="text-blue-500 hover:underline"
          >
            viet_tran@windowslive.com
          </a>
        </li>
        </ul>
      </div>
  );
  }
