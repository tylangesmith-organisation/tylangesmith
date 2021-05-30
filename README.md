![Build](https://github.com/tylangesmith-organisation/tylangesmith/actions/workflows/deploy.yml/badge.svg?branch=master)

# Ty Lange-Smith

Hey there 👋, looks like you've stumbled upon the source code for my personal website [tylangesmith.com](https://tylangesmith.com). This project intends to be my little space on the internet where I blog about cool things I've worked on or am interested in.

As you can probably see this project is open source, which means all of the code from deployment to the actual website is openly avaliable. This means you can fork this project or clone it locally and get practically the exact same website - how exciting 😁.

## Project Overview

This project is built leveraging [Next.js](https://nextjs.org/) which is a framework build on top of [React](https://reactjs.org/). This gives us a whole bunch of awesome features right out of the box, not mention the massive community behind both project. 🚀🌕

For the deployment of this project I also leverage [Github Actions](https://github.com/features/actions) which is CI / CD workflow tooling that allows you to build, test and deploy (_Not to mention it's free for open source project!_). All of this code can be found in the [.github](./.github) directory in the root of the project.

The GitHub actions workflow deploys to [AWS](https://aws.amazon.com/), to do this it leverages [AWS CDK](https://docs.aws.amazon.com/cdk/latest/guide/home.html).

## Getting Started

Ok enough talk, let's jump right in.

### Prerequisites

- Node v14

That's it 😇 - the rest of the dependencies will be installed using npm.

### Running the Project

```bash
# First install the node dependencies
npm i

# Next run the Next.js server
npm run dev
```

Now navigate to [localhost:3000](http://localhost:3000/) and you should be meet with the home page.

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
