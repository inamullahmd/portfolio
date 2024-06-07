import { type Metadata } from 'next'
import { FC } from 'react';
import { Card } from '@/components/Card'
import { SimpleLayout } from '@/components/SimpleLayout'
import { type Article, articles } from '@/lib/articles'
import { formatDate } from '@/lib/formatDate'

interface ArticleProps {
  article: Article;
}

const Article: FC<ArticleProps> = ({ article }) => {
  return (
    <article className="md:grid md:grid-cols-4 md:items-baseline">
      <Card className="md:col-span-3">
        <Card.Title href={`/projects/${article.href}`}>
          {article.title}
        </Card.Title>
        <Card.Eyebrow
          as="time"
          dateTime={article.date}
          className="md:hidden"
          decorate
        >
          {article.formattedDate}
        </Card.Eyebrow>
        <Card.Description>{article.description}</Card.Description>
        <Card.Cta>Read more</Card.Cta>
      </Card>
      <Card.Eyebrow
        as="time"
        dateTime={article.date}
        className="mt-1 hidden md:block"
      >
        {article.formattedDate}
      </Card.Eyebrow>
    </article>
  )
}

export const metadata: Metadata = {
  title: 'Projects',
  description:
    "Here are some of the projects I'm most proud of. Over the years, I've worked on tons of little projects, but these stand out to me.",
}

export default async function ArticlesIndex() {

  articles.sort((a, z) => +new Date(z.date) - +new Date(a.date))

  return (
    <SimpleLayout
      title="Explore my past works."
      intro="Here are some of the projects I'm most proud of. Over the years, I've worked on tons of little projects, but these stand out to me."
    >
      <div className="md:border-l md:border-zinc-100 md:pl-6 md:dark:border-zinc-700/40">
        <div className="flex max-w-3xl flex-col space-y-16">
          {articles.map((article, index) => (
            <Article key={index} article={article} />
          ))}
        </div>
      </div>
    </SimpleLayout>
  )
}
