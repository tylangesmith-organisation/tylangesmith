import fs from 'fs'
import matter from 'gray-matter'
import { MDXRemoteSerializeResult } from 'next-mdx-remote'
import { serialize } from 'next-mdx-remote/serialize'

import { Config } from '../../config'
import { PostMetaData } from '../../models/post'

export interface GetPostResult {
  mdxSerializeResult: MDXRemoteSerializeResult
  postMetaData: PostMetaData
}

const getPost = async (postFileName: string): Promise<GetPostResult> => {
  const postFile = fs.readFileSync(`${Config.POSTS_BASE_PATH}/${postFileName}`)

  const post = matter(postFile)

  const mdxSerializeResult = await serialize(post.content, {
    scope: post.data
  })

  return {
    mdxSerializeResult: mdxSerializeResult,
    postMetaData: {
      ...post.data
    } as PostMetaData
  }
}

export const getPostForSlug = async (slug: string): Promise<GetPostResult> => {
  return await getPost(`${slug}.mdx`)
}

export const getPosts = async (): Promise<GetPostResult[]> => {
  const postFileNames = fs.readdirSync(Config.POSTS_BASE_PATH)
  return await Promise.all(postFileNames.map(postFileName => getPost(postFileName)))
}
