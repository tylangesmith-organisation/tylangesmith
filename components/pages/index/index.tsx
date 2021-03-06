import StandardLayout from '@/components/layout/standardLayout'
import BlogList from '@/components/ui/blog/BlogList'
import { Props } from '@/components/pages/index/controller'

const Component = (props: Props): JSX.Element => {
  const { posts } = props

  const title = "I'm Ty, a Machine Learning Engineer based in Australia 🦘"

  return (
    <StandardLayout>
      <div className="max-w-prose">
        <h1 className="mb-8">{title}</h1>
        <h2 className="my-2 font-black">What's New?</h2>
        <BlogList posts={posts.map(post => post.postMetaData)} />
      </div>
    </StandardLayout>
  )
}

export default Component
