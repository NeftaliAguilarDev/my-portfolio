import {
  Envelope,
  GithubLogo,
  LinkedinLogo,
} from '@phosphor-icons/react/dist/ssr'
import Image from 'next/image'
import { Button } from 'primereact/button'
import { Tag } from 'primereact/tag'

export function HeroSection() {
  return (
    <div className="-mb-22 min-h-screen flex items-center justify-center">
      <div className="container flex flex-col sm:flex-row mx-auto p-5 gap-4 items-center">
        <div className="w-full sm:w-8/12 space-y-4">
          <Tag value="8+ Years of Frontend Experience"></Tag>
          <h1 className="text-5xl md:text-7xl font-bold">Neftali Aguilar</h1>
          <h2 className="text-xl md:text-4xl font-bold">
            Senior Frontend Developer specializing in building exceptional
            digital experiences
          </h2>
          <p className="text-md md:text-lg">
            I am a passionate frontend developer with over 8 years of experience
            crafting responsive, user-friendly web applications. I specialize in
            React, TypeScript, and modern frontend frameworks.
          </p>
          <div className="flex gap-2">
            <Button
              link
              severity="secondary"
              size="small"
              label="Github"
              icon={<GithubLogo size={24} />}
            />
            <Button
              link
              severity="secondary"
              size="small"
              label="Linkedin"
              icon={<LinkedinLogo size={24} />}
            />
            <Button
              link
              severity="secondary"
              size="small"
              label="Email"
              icon={<Envelope size={24} />}
            />
          </div>
        </div>
        <div className="w-full sm:w-4/12 text-center flex items-center justify-center">
          <div className="relative mt-10 md:mt-0 size-56 md:size-96 rounded-full text-center">
            <Image
              src="https://media.licdn.com/dms/image/v2/C4E03AQEyqKiLAcfY9g/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1629429787179?e=1747872000&v=beta&t=i6O0VvEMJttfH8g86tfMNiyuEvImk3WmgfFpEVqk6Ys"
              alt="Hero"
              fill
              className="rounded-full h-full w-full"
            />
          </div>
        </div>
      </div>
    </div>
  )
}
