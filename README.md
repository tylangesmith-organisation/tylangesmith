![Build](https://github.com/tylangesmith-organisation/tylangesmith/actions/workflows/deploy.yml/badge.svg?branch=master)

# Ty Lange-Smith

<div style="text-align:center">
  <img height="200" src="assets/highAlch.gif" />
</div>

Hey there! Looks like you've stumbled upon the code for my personal website [tylangesmith.com](https://tylangesmith.com). This is intended to be a fun little personal project where I can blog about some of the cool stuff I've worked on.

## Project Overview

This project is built using [Next.js](https://nextjs.org/), if you haven't heard of it before it's definitely worth checking out.

The CI / CD pipeline for the project is implemented with [Github Actions](https://github.com/features/actions). This allows us to build, test and deploy the project. All of this code can be found in the [.github](./.github) directory.

Our website currently hosted using [AWS](https://aws.amazon.com/). All of this AWS infrastructure is defined as code using [AWS CDK](https://docs.aws.amazon.com/cdk/latest/guide/home.html). However, later down the track this may changes as Next.js hosting options such as [Vercel](https://vercel.com/) are becoming more and more attractive.

## Getting Started

If you actually want to build and dpeloy this project here's how.

### Prerequisites

- Node v17

### Running the Project Locally

```bash
# First install the node dependencies
npm i

# Next run the Next.js server
npm run dev
```

Check the output of the terminal for the `localhost` port and navigate to it in you browser. This will usually be [localhost:3000](http://localhost:3000/).

### Deploying the Project

Deploying the project may require a little more setup than just running the project locally. Again to deploy we leverage GitHub actions which deploys to AWS. For this you will need to have an AWS account already setup.

In the [deploy.yml](.github/workflows/deploy.yml) you will find the required GitHub secrets and environment variables you will need to set to deploy this project and it's infrastructure into to your AWS environment.

| Variable              | Type                 | Description                    |
|-----------------------|----------------------|--------------------------------|
| ACCOUNT_ID            | GitHub Secret        | The AWS Account ID             |
| AWS_ACCESS_KEY_ID     | GitHub Secret        | The IAM user Access Key ID     |
| AWS_SECRET_ACCESS_KEY | GitHub Secret        | The IAM user Secret Access Key |
| AWS_DEFAULT_REGION    | Environment Variable | The IAM user Secret Access Key |
| DOMAIN_NAME           | Environment Variable | The IAM user Secret Access Key |
