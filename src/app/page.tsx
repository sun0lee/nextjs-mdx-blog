import { PostCard } from '@/components/PostCard'
import { Button } from '@/components/ui/button'
import { allPosts } from 'contentlayer/generated'
import { compareDesc } from 'date-fns'
import { Github } from 'lucide-react'
import Link from 'next/link'
import Head from 'next/head'

export default function Home() {
  const posts = allPosts.sort((a, b) =>
    compareDesc(new Date(a.date), new Date(b.date)),
  )

  return (
    <>
    <Head>
        <link rel="icon" href="/favicon.ico" />
        <link rel="manifest" href="/manifest.json" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#ffffff" />
    </Head>
    <div>
      <div className="space-y-7">
        <h1>테스트 블로그</h1>
        <p>
          사용된 것들
        </p>
        <ul className="my-6 list-disc space-y-2 pl-4">
          <li>
            <Link className="link" href="https://nextjs.org/docs/app">
              Next.js - App Router
            </Link>
          </li>
          <li>
            <Link className="link" href="https://www.contentlayer.dev/">
              Contentlayer
            </Link>
          </li>
          <li>
            <Link className="link" href="https://mdxjs.com/">
              MDX
            </Link>
          </li>
          <li>
            <Link className="link" href="https://ui.shadcn.com/">
              shadcn-ui
            </Link>
          </li>
          <li>
            <Link className="link" href="https://tailwindcss.com/">
              Tailwind CSS
            </Link>
          </li>
        </ul>

        <Button asChild>
          <a href="https://github.com/sun0lee/nextjs-mdx-blog">
            <Github className="mr-1" /> Get the source code!
          </a>
        </Button>
      </div>

      <div className="mt-16">
        <h2>post</h2>
        <p className="mt-2 leading-8">
          Contentlayer로 가져온 블로그 포스트들. Contentlayer는 글 목록을 data묶음으로 가져올수 있도록 만들어준다. 주제별로 구분하는 방법 알아보기!!!
        </p>
      </div>
      <div className="mt-10 space-y-12 border-t border-gray-200 pt-10 dark:border-gray-700">
        {posts.map((post, idx) => (
          <PostCard key={idx} {...post} />
        ))}
      </div>
    </div>
  </>
  )
}
