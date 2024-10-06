
import Image from 'next/image'

export default function Home() {
  return
 (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1 className="text-4xl font-bold">Welcome to Viet Tran&apos;s Portfolio</h1>
      <Image src="/viet.png" alt="Viet Tran" width={250} height={250} />
      <p className="text-center max-w-2xl">
        I&apos;m an Integration Developer at Frends Enterprise iPaaS with a background in Software Engineering. 
        This website showcases my skills, projects, and professional experience.
      </p>
    </main>
  )
}
