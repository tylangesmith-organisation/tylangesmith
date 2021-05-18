
export const isMasterBranch = (branchName: string) => {
  return branchName === 'master'
}

export interface GetSubDomainNameProps {
  branchName: string;
  baseSubDomainName: string;
}

export const getSubDomainName = (props: GetSubDomainNameProps) => {
  const { branchName, baseSubDomainName } = props;
  return isMasterBranch(branchName) ? baseSubDomainName : `${baseSubDomainName}-${branchName}`
}
