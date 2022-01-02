import StandardLayout from '@/components/layout/standardLayout'
import BlogList from '@/components/ui/blog/BlogList'
import { Props } from '@/components/pages/index/controller'

const Component = (props: Props): JSX.Element => {
  const { posts } = props
  const x = posts.concat(posts)

  const title = "I'm Ty, a Machine Learning Engineer based in Australia 🦘"

  return (
    <StandardLayout>
      <div className="max-w-prose">
        <h1 className="mb-8">{title}</h1>
      </div>

      <div className="max-w-prose">
        <BlogList posts={x.map(post => post.postMetaData)} />
      </div>
    </StandardLayout>
  )
}

export default Component
