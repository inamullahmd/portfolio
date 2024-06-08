import Image, { type ImageProps } from 'next/image'
import Link from 'next/link'
import clsx from 'clsx'
import { Button } from '@/components/Button'
import { Card } from '@/components/Card'
import { Container } from '@/components/Container'
import {
  GitHubIcon,
  InstagramIcon,
  LinkedInIcon,
  DiscordIcon,
  EnvelopeIcon
} from '@/components/SocialIcons'
import logoOU from '@/images/logos/ou-logo.png'
import logoCognizant from '@/images/logos/cognizant.png'
import logoJNTUK from '@/images/logos/Jntuk.png'
import {type Article, articles} from '@/lib/articles'
import { formatDate } from '@/lib/formatDate'
import React, {FC} from 'react';

interface ArticleProps {
  article: Article;
}

function MailIcon(props: React.ComponentPropsWithoutRef<'svg'>) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      {...props}
    >
      <path
        d="M2.75 7.75a3 3 0 0 1 3-3h12.5a3 3 0 0 1 3 3v8.5a3 3 0 0 1-3 3H5.75a3 3 0 0 1-3-3v-8.5Z"
        className="fill-zinc-100 stroke-zinc-400 dark:fill-zinc-100/10 dark:stroke-zinc-500"
      />
      <path
        d="m4 6 6.024 5.479a2.915 2.915 0 0 0 3.952 0L20 6"
        className="stroke-zinc-400 dark:stroke-zinc-500"
      />
    </svg>
  )
}

function BriefcaseIcon(props: React.ComponentPropsWithoutRef<'svg'>) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      {...props}
    >
      <path
        d="M2.75 9.75a3 3 0 0 1 3-3h12.5a3 3 0 0 1 3 3v8.5a3 3 0 0 1-3 3H5.75a3 3 0 0 1-3-3v-8.5Z"
        className="fill-zinc-100 stroke-zinc-400 dark:fill-zinc-100/10 dark:stroke-zinc-500"
      />
      <path
        d="M3 14.25h6.249c.484 0 .952-.002 1.316.319l.777.682a.996.996 0 0 0 1.316 0l.777-.682c.364-.32.832-.319 1.316-.319H21M8.75 6.5V4.75a2 2 0 0 1 2-2h2.5a2 2 0 0 1 2 2V6.5"
        className="stroke-zinc-400 dark:stroke-zinc-500"
      />
    </svg>
  )
}

function AcademicCapIcon(props: React.ComponentPropsWithoutRef<'svg'>) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      {...props}
    >
      <path
        className='"fill-zinc-100 stroke-zinc-400 dark:fill-zinc-100/10 dark:stroke-zinc-500'
       d="M4.26 10.147a60.438 60.438 0 0 0-.491 6.347A48.62 48.62 0 0 1 12 20.904a48.62 48.62 0 0 1 8.232-4.41 60.46 60.46 0 0 0-.491-6.347m-15.482 0a50.636 50.636 0 0 0-2.658-.813A59.906 59.906 0 0 1 12 3.493a59.903 59.903 0 0 1 10.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.717 50.717 0 0 1 12 13.489a50.702 50.702 0 0 1 7.74-3.342M6.75 15a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Zm0 0v-3.675A55.378 55.378 0 0 1 12 8.443m-7.007 11.55A5.981 5.981 0 0 0 6.75 15.75v-1.5" 
      />
    </svg>

  )
}

function CodingIcon(props: React.ComponentPropsWithoutRef<'svg'>) {
  return (
    <svg 
      viewBox="0 0 24 24"
      fill="none"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      {...props}
    >
      <path 
      className='"fill-zinc-100 stroke-zinc-400 dark:fill-zinc-100/10 dark:stroke-zinc-500'
      d="M14.25 9.75 16.5 12l-2.25 2.25m-4.5 0L7.5 12l2.25-2.25M6 20.25h12A2.25 2.25 0 0 0 20.25 18V6A2.25 2.25 0 0 0 18 3.75H6A2.25 2.25 0 0 0 3.75 6v12A2.25 2.25 0 0 0 6 20.25Z" />
    </svg>


  )
}

function ArrowDownIcon(props: React.ComponentPropsWithoutRef<'svg'>) {
  return (
    <svg viewBox="0 0 16 16" fill="none" aria-hidden="true" {...props}>
      <path
        d="M4.75 8.75 8 12.25m0 0 3.25-3.5M8 12.25v-8.5"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
    
  )
}

function ArrayRightIcon(props: React.ComponentPropsWithoutRef<'svg'>) {
  return (
    <svg viewBox="0 0 16 16" fill="none" aria-hidden="true"   {...props}>
      <path fill-rule="evenodd" d="M2 8c0 .414.336.75.75.75h8.69l-1.22 1.22a.75.75 0 1 0 1.06 1.06l2.5-2.5a.75.75 0 0 0 0-1.06l-2.5-2.5a.75.75 0 1 0-1.06 1.06l1.22 1.22H2.75A.75.75 0 0 0 2 8Z" clip-rule="evenodd" />
    </svg>



  )
}


const Article: FC<ArticleProps> = ({ article }) => {
  return (
    <Card as="article">
      <Card.Title href={`/projects/${article.href}`}>
        {article.title}
      </Card.Title>
      <Card.Eyebrow as="time" dateTime={article.date} decorate>
        {formatDate(article.date)}
      </Card.Eyebrow>
      <Card.Description>{article.description}</Card.Description>
      <Card.Cta>Read more</Card.Cta>
    </Card>
  )
}

function SocialLink({
  icon: Icon,
  ...props
}: React.ComponentPropsWithoutRef<typeof Link> & {
  icon: React.ComponentType<{ className?: string }>
}) {
  return (
    <Link className="group -m-1 p-1" {...props}>
      <Icon className="h-6 w-6 fill-zinc-500 transition group-hover:fill-zinc-600 dark:fill-zinc-400 dark:group-hover:fill-zinc-300" />
    </Link>
  )
}

function Contact() {

  return (
    <div
      className="rounded-2xl border border-zinc-100 p-6 dark:border-zinc-700/40" 
    >
      <h2 className="flex text-sm font-bold text-zinc-900 dark:text-zinc-100">
        <MailIcon className="h-6 w-6 flex-none" />
        <span className="ml-3">Have questions? Shoot me an email</span>
      </h2>
      {/* <p className="mt-2 text-sm font-medium text-zinc-600 dark:text-zinc-400">
        Have questions or want to work with me? <br/> Shoot me an email
      </p> */}
      <div className='mt-6'>
        <div className="mt-2">
          <textarea
            rows={4}
            name="message"
            id="message"
            required
            placeholder='Add your message'
            className="block w-full appearance-none rounded-md border border-zinc-900/10 bg-white px-3 py-[calc(theme(spacing.2)-1px)] shadow-md shadow-zinc-800/5 placeholder:text-zinc-400 focus:border-teal-500 focus:outline-none focus:ring-4 focus:ring-teal-500/10 sm:text-sm dark:border-zinc-700 dark:bg-zinc-700/[0.15] dark:text-zinc-200 dark:placeholder:text-zinc-500 dark:focus:border-teal-400 dark:focus:ring-teal-400/10"
            defaultValue={''}
          />
        </div>
      </div>
      <div className="mt-4 flex">
        <input
          type="email"
          placeholder="Email address"
          aria-label="Email address"
          required
          name="emailaddress"
          id="emailaddress"
          className="min-w-0 flex-auto appearance-none rounded-md border border-zinc-900/10 bg-white px-3 py-[calc(theme(spacing.2)-1px)] shadow-md shadow-zinc-800/5 placeholder:text-zinc-400 focus:border-teal-500 focus:outline-none focus:ring-4 focus:ring-teal-500/10 sm:text-sm dark:border-zinc-700 dark:bg-zinc-700/[0.15] dark:text-zinc-200 dark:placeholder:text-zinc-500 dark:focus:border-teal-400 dark:focus:ring-teal-400/10"
        />
        <Button type="submit" className="ml-4 flex-none">
          Send
        </Button>
      </div>
    </div>
  )
}

interface Role {
  company: string
  title: string
  logo: ImageProps['src']
  start: string | { label: string; dateTime: string }
  end: string | { label: string; dateTime: string }
  gpa: string
}

function Role({ role }: { role: Role }) {
  let startLabel =
    typeof role.start === 'string' ? role.start : role.start.label
  let startDate =
    typeof role.start === 'string' ? role.start : role.start.dateTime

  let endLabel = typeof role.end === 'string' ? role.end : role.end.label
  let endDate = typeof role.end === 'string' ? role.end : role.end.dateTime

  return (
    <li className="flex gap-4">
      <div className="relative mt-1 flex h-10 w-10 flex-none items-center justify-center rounded-full shadow-md shadow-zinc-800/5 ring-1 ring-zinc-900/5 dark:border dark:border-zinc-700/50 dark:bg-zinc-800 dark:ring-0">
        <Image src={role.logo} alt="" className="h-7 w-7" unoptimized />
      </div>
      <dl className="flex flex-auto flex-wrap gap-x-2">
        <dt className="sr-only">Company</dt>
        <dd className="w-full flex-none text-sm font-medium text-zinc-900 dark:text-zinc-100">
          {role.company}
        </dd>
        <dt className="sr-only">Role</dt>
        <dd className="text-xs text-zinc-500 dark:text-zinc-400">
          {role.title}
        </dd>
        <dt className="sr-only">Date</dt>
        <dd
          className="ml-auto text-xs text-zinc-400 dark:text-zinc-500"
          aria-label={`${startLabel} until ${endLabel}`}
        >
          <time dateTime={startDate}>{startLabel}</time>{' '}
          <span aria-hidden="true">—</span>{' '}
          <time dateTime={endDate}>{endLabel}</time>
        </dd>
        {role.gpa && (
          <>
            <dt className="sr-only">GPA</dt>
            <dd className="text-xs text-zinc-500 dark:text-zinc-400">
              GPA: {role.gpa}
            </dd>
          </>
        )}
      </dl>
    </li>
  )
}

function MessageSent() {
  return (
    <div className="rounded-md bg-green-50 p-4" id="messageEmail">
      <div className="flex">
        <div className="flex-shrink-0">
          {/* <CheckCircleIcon className="h-5 w-5 text-green-400" aria-hidden="true" /> */}
        </div>
        <div className="ml-3">
          <p className="text-sm font-medium text-green-800">Successfully uploaded</p>
        </div>
        <div className="ml-auto pl-3">
          <div className="-mx-1.5 -my-1.5">
            <button
              type="button"
              className="inline-flex rounded-md bg-green-50 p-1.5 text-green-500 hover:bg-green-100 focus:outline-none focus:ring-2 focus:ring-green-600 focus:ring-offset-2 focus:ring-offset-green-50"
            >
              <span className="sr-only">Dismiss</span>
              {/* <XMarkIcon className="h-5 w-5" aria-hidden="true" /> */}X
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

function Work() {
  let resume: Array<Role> = [
    {
      company: 'University of Oklahoma',
      title: 'Graduate Research Assistant',
      logo: logoOU,
      start: '2023',
      end: {
        label: 'Present',
        dateTime: new Date().getFullYear().toString(),
      },
      gpa: ''
    },
    {
      company: 'Cognizant Technology Solutions',
      title: 'Programmer Analyst',
      logo: logoCognizant,
      start: '2021',
      end: '2022',
      gpa: ''
    }
  ]

  return (
    <div className="rounded-2xl border border-zinc-100 p-6 dark:border-zinc-700/40">
      <h2 className="flex text-sm font-semibold text-zinc-900 dark:text-zinc-100">
        <BriefcaseIcon className="h-6 w-6 flex-none" />
        <span className="ml-3">Work</span>
      </h2>
      <ol className="mt-6 space-y-4">
        {resume.map((role, roleIndex) => (
          <Role key={roleIndex} role={role} />
        ))}
      </ol>
      <Button href="/background" variant="secondary" className="group mt-6 w-full">
        More Info
        {/* <ArrayRightIcon className="h-4 w-4 stroke-zinc-400 transition group-active:stroke-zinc-600 dark:group-hover:stroke-zinc-50 dark:group-active:stroke-zinc-50" /> */}
      </Button>
    </div>
  )
}
function Skills() {
  let languages = [
    "Python", "R", "SQL", "PHP", "Java", "HTML", "CSS", "JS", "Angular JS", "React JS", "Bootstrap CSS", "Tailwind CSS", "Tableau", "PowerBI", "Git", "GitHub"
  ]

  return (
    <div className="rounded-2xl border border-zinc-100 p-6 dark:border-zinc-700/40">
      <h2 className="flex text-sm font-semibold text-zinc-900 dark:text-zinc-100">
        <CodingIcon className="h-6 w-6 flex-none" />
        <span className="ml-3">Skills</span>
      </h2>
      <div className="flex flex-wrap mt-6">
        {languages.map((role, roleIndex) => (
          <span key={roleIndex} className='bg-teal-200 text-gray-800 text-xs font-medium mr-2 my-1 px-2.5 py-0.5 rounded dark:text-white dark:bg-teal-900'>
          {role}
        </span>
        ))}
      </div>
      <Button href="/skills" variant="secondary" className="group mt-6 w-full">
        More Info
      </Button>
    </div>
  )
}


function Education() {
  let resume: Array<Role> = [
    {
      company: 'University of Oklahoma',
      title: "Master's in Data Science",
      logo: logoOU,
      start: '2023',
      end: {
        label: 'Present',
        dateTime: new Date().getFullYear().toString(),
      },
      gpa: '3.89 / 4.0'
    },
    {
      company: 'JNTU Kakinada, India',
      title: "Bachelor's in Computer Science",
      logo: logoJNTUK,
      start: '2016',
      end: '2020',
      gpa: '3.27 / 4.0'
    },
  ]

  return (
    <div className="rounded-2xl border border-zinc-100 p-6 dark:border-zinc-700/40">
      <h2 className="flex text-sm font-semibold text-zinc-900 dark:text-zinc-100">
        <AcademicCapIcon className="h-6 w-6 flex-none" />
        <span className="ml-3">Education</span>
      </h2>
      <ol className="mt-6 space-y-4">
        {resume.map((role, roleIndex) => (
          <Role key={roleIndex} role={role} />
        ))}
      </ol>
      <Button href="/background" variant="secondary" className="group mt-6 w-full">
        More Info
        
      </Button>
    </div>
  )
}

export default async function Home() {
  articles.sort((a, z) => +new Date(z.date) - +new Date(a.date));
  let localArticles = articles.slice(0, 3);

  return (
    <>
      <Container className="mt-9">
        <div className="max-w-2xl">
          <h1 className="text-4xl font-bold tracking-tight text-zinc-800 sm:text-5xl dark:text-zinc-100">
            web developer, coder, and an aspiring data scientist.
          </h1>
          <p className="mt-6 text-base text-zinc-600 dark:text-zinc-400">
            I&lsquo;m Inamullah. Welcome to my little corner of the web! 
            This site is like a dungeon full of my adventures in coding, design, and all things geeky, whether I&lsquo;m weaving spells with data or crafting web wonders. 
            Take a stroll and explore the bits and bytes of my world. 
            Got a quest for me or just want to chat? Let&lsquo;s geek out together!
          </p>
          <div className="mt-6 flex gap-6">
            {/* <SocialLink href="#" aria-label="Follow on X" icon={XIcon} /> */}
            <SocialLink
              href="https://www.instagram.com/inamullahmdi/"
              aria-label="Follow on Instagram"
              icon={InstagramIcon}
            />
            <SocialLink
              href="https://github.com/inamullahmd"
              aria-label="Follow on GitHub"
              icon={GitHubIcon}
            />
            <SocialLink
              href="https://www.linkedin.com/in/inamullahmd/"
              aria-label="Follow on LinkedIn"
              icon={LinkedInIcon}
            />
            <SocialLink
              href="https://www.discordapp.com/users/inamullahmd"
              aria-label="Follow on Discord"
              icon={DiscordIcon}
            />
            <SocialLink
              href="mailto:inamullah.mohammad@ou.edu"
              aria-label="Mail me directly"
              icon={EnvelopeIcon}
            />
          </div>
        </div>
      </Container>
      <Container className="mt-12 md:mt-16">
        <div className="mx-auto grid max-w-xl grid-cols-1 gap-y-20 lg:max-w-none lg:grid-cols-2">
          <div className="flex flex-col gap-y-8">
            <span className='text-2xl font-medium'>Recent Projects</span>
            <div className="flex flex-col gap-16">
              {localArticles.map((article, index) => (
                <Article key={index} article={article} />
              ))}
            </div>
          </div>
          <div className="space-y-10 lg:pl-16 xl:pl-24">
            <Skills />
            <Work />
            <Education />
          </div>
        </div>
      </Container>
    </>
  )
}
