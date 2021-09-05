import fs from 'fs'
import { GetStaticPropsContext, GetStaticPropsResult as BaseGetStaticPropsResult, GetStaticPathsResult } from 'next'
import matter from 'gray-matter'
import { serialize } from 'next-mdx-remote/serialize'
import Blog, { GetStaticPropsResult, PostMetaData } from '../../components/pages/blog/slug/controller'

const POSTS_BASE_PATH = './posts'

const Page = (props: GetStaticPropsResult): JSX.Element => <Blog {...props} />

export const getStaticProps = async (props: GetStaticPropsContext): Promise<BaseGetStaticPropsResult<GetStaticPropsResult>> => {
  // Grab the mdx file for the slug
  const slug = props.params?.slug as string || ''
  const mdxFile = fs.readFileSync(`${POSTS_BASE_PATH}/${slug}.mdx`)

  // Parse the mdx file
  const { content, data } = matter(mdxFile)

  // Compile the mdx source
  const mdxSource = await serialize(content, {
    scope: data
  })

  return {
    props: {
      mdxSerializeResult: mdxSource,
      postMetaData: data as PostMetaData
    }
  }
}

export const getStaticPaths = async (): Promise<GetStaticPathsResult> => {
  // Grab all of the posts in the posts directory
  const posts = fs.readdirSync(POSTS_BASE_PATH)

  // Now form them so next.js actually knows how to use them
  const paths = posts
    .map((path) => path.replace(/\.mdx?$/, ''))
    .map((slug) => ({ params: { slug } }))

  return {
    paths,
    fallback: false
  }
}

export default Page
