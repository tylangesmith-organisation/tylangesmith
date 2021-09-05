import { MDXRemoteSerializeResult } from 'next-mdx-remote'

import Index from './index'

export interface PostMetaData {
  title: string
  description: string
  date: string
  tags: string[]
  headerImageHighQualitySource: string
  headerImageLowQualitySource: string
  headerImageAlt: string
  headerImageLabel: string
}

export interface GetStaticPropsResult {
  mdxSerializeResult: MDXRemoteSerializeResult
  postMetaData: PostMetaData
}

const Component = (props: GetStaticPropsResult): JSX.Element => <Index {...props} />

export default Component
