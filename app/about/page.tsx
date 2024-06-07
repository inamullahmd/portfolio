import { type Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import clsx from 'clsx'

import { Container } from '@/components/Container'
import {
  GitHubIcon,
  InstagramIcon,
  LinkedInIcon,
  DiscordIcon
} from '@/components/SocialIcons'
import portraitImage from '@/images/portrait.jpg'

function SocialLink({
  className,
  href,
  children,
  icon: Icon,
}: {
  className?: string
  href: string
  icon: React.ComponentType<{ className?: string }>
  children: React.ReactNode
}) {
  return (
    <li className={clsx(className, 'flex')}>
      <Link
        href={href}
        className="group flex text-sm font-medium text-zinc-800 transition hover:text-teal-500 dark:text-zinc-200 dark:hover:text-teal-500"
      >
        <Icon className="h-6 w-6 flex-none fill-zinc-500 transition group-hover:fill-teal-500" />
        <span className="ml-4">{children}</span>
      </Link>
    </li>
  )
}

function MailIcon(props: React.ComponentPropsWithoutRef<'svg'>) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <path
        fillRule="evenodd"
        d="M6 5a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h12a3 3 0 0 0 3-3V8a3 3 0 0 0-3-3H6Zm.245 2.187a.75.75 0 0 0-.99 1.126l6.25 5.5a.75.75 0 0 0 .99 0l6.25-5.5a.75.75 0 0 0-.99-1.126L12 12.251 6.245 7.187Z"
      />
    </svg>
  )
}

export const metadata: Metadata = {
  title: 'About',
  description:
    'I’m Inamullah Mohammad. I live in New York City, where I design the future.',
}

export default function About() {
  return (
    <Container className="mt-16 sm:mt-32">
      <div className="grid grid-cols-1 gap-y-16 lg:grid-cols-2 lg:grid-rows-[auto_1fr] lg:gap-y-12">
        <div className="lg:pl-20">
          <div className="max-w-xs px-2.5 lg:max-w-none">
            <Image
              src={portraitImage}
              alt=""
              sizes="(min-width: 1024px) 32rem, 20rem"
              className="aspect-square rotate-3 rounded-2xl bg-zinc-100 object-cover dark:bg-zinc-800"
            />
          </div>
        </div>
        <div className="lg:order-first lg:row-span-2">
          <h1 className="text-4xl font-bold tracking-tight text-zinc-800 sm:text-5xl dark:text-zinc-100">
            I&lsquo;m Inamullah, weaving magic with code and data.
          </h1>
          <div className="mt-6 space-y-7 text-base text-zinc-600 dark:text-zinc-400">
            <p>
              I&lsquo;ve loved computers for as long as I can remember. 
              Determined to become a tech wizard, I pursued a Bachelor&lsquo;s in Computer Science. 
              During my studies, a fellow techie and I developed a college automation website 
              over two years, a project that remains operational and stands as our proud legacy.
            </p>
            <p>
              After completing my post-graduation, I joined Cognizant as a backend developer, 
              where I specialized in developing RESTful APIs and crafting data pipelines using MS Azure and Python. 
              One day, struck by a spark of curiosity, I set out to predict the star performer of a cricket match, approaching it with the precision of a programmer. 
              Captivated by the process and hungry for more, I decided to pursue a master&lsquo;s in data science.
            </p>
            <p>
              I&lsquo;m currently pursuing my Master&lsquo;s at the University of Oklahoma, where I&lsquo;ve developed various predictive models for real-world datasets. 
              Concurrently, I&lsquo;m working on a website for the Oklahoma Housing Finance Agency, utilizing Angular, PHP, and MariaDB for full-stack development.
            </p>
            <p>
              This journey has transformed me into a versatile tech enthusiast, eager to apply my skills and knowledge to future challenges. Beyond tech, I find joy in cricket, cooking, and hope to combine my love for technology with these passions for a fulfilling life.
            </p>
          </div>
        </div>
        <div className="lg:pl-20">
          <ul role="list">
            <SocialLink href="https://www.instagram.com/inamullahmdi/" icon={InstagramIcon}>
              Follow on Instagram
            </SocialLink>
            <SocialLink href="https://github.com/inamullahmd" icon={GitHubIcon} className="mt-4">
              Follow on GitHub
            </SocialLink>
            <SocialLink href="https://www.linkedin.com/in/inamullahmd/" icon={LinkedInIcon} className="mt-4">
              Follow on LinkedIn
            </SocialLink>
            <SocialLink
              href="mailto:inamullah.mohammad@ou.edu"
              icon={MailIcon}
              className="mt-8 border-t border-zinc-100 pt-8 dark:border-zinc-700/40"
            >
              inamullah.mohammad@ou.edu
            </SocialLink>
          </ul>
        </div>
      </div>
    </Container>
  )
}
