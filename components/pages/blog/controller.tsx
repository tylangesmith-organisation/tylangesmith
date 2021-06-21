import Index, { BlogMetaData } from './index'

export interface Blogs {
  hostingANextjsServerlessStaticSiteUsingAWSCDK: BlogMetaData
}

export const blogs: Blogs = {
  hostingANextjsServerlessStaticSiteUsingAWSCDK: {
    title: 'Hosting a Next.js serverless static site using AWS CDK',
    description: 'In this blog, we\'ll explore how to host a Next.js static site on AWS. We\'ll use AWS CloudFront, Lambda@Edge, and S3 to implement a fully serverless solution. Being the awesome DevOps practitioners we are, we\'ll also leverage AWS CDK to define our infrastructure as code.',
    slug: 'hosting-a-nextjs-serverless-static-site-using-aws-cdk',
    keywords: ['aws', 'serverless', 'cdk', 'next.js'],
    date: '20 Jun 2021'
  }
}

const blogsMetaData: BlogMetaData[] = [
  blogs.hostingANextjsServerlessStaticSiteUsingAWSCDK
]

const Component = (): JSX.Element => <Index blogsMetaData={blogsMetaData} />

export default Component
