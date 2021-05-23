import { Stack, RemovalPolicy } from "@aws-cdk/core";
import { Bucket, IBucket } from "@aws-cdk/aws-s3";
import { BucketDeployment, Source } from "@aws-cdk/aws-s3-deployment";
import { IDistribution } from "@aws-cdk/aws-cloudfront";

export interface CreateStaticWebsiteBucketProps {
  scope: Stack;
  branchName: string;
}

export const createStaticWebsiteBucket = (
  props: CreateStaticWebsiteBucketProps
) => {
  const { scope, branchName } = props;

  return new Bucket(scope, "staticWebsiteBucket", {
    bucketName: `tylangesmith-${branchName}`,
    publicReadAccess: true,
    websiteIndexDocument: "index.html",
    websiteErrorDocument: "404.html",
    removalPolicy: RemovalPolicy.DESTROY,
  });
};

export interface CreateStaticWebsiteBucketDeploymentProps {
  scope: Stack;
  staticWebsiteBucket: IBucket;
  distribution: IDistribution;
}

export const createStaticWebsiteBucketDeployment = (
  props: CreateStaticWebsiteBucketDeploymentProps
) => {
  const { scope, staticWebsiteBucket, distribution } = props;

  return new BucketDeployment(scope, "staticWebsiteBucketDeployment", {
    destinationBucket: staticWebsiteBucket,
    sources: [Source.asset("./out")],
    distribution,
  });
};
