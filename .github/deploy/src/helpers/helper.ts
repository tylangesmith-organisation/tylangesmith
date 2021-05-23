export const isMasterBranch = (branchName: string) => {
  return branchName === "master";
};

export interface GetSubDomainNameProps {
  branchName: string;
}

export const getSubDomainName = (props: GetSubDomainNameProps) => {
  const { branchName } = props;
  return isMasterBranch(branchName) ? "" : branchName;
};
