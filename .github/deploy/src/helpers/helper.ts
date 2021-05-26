export const isMasterBranch = (branchName: string): boolean => {
  return branchName === 'master'
}

export interface GetSubDomainNameProps {
  branchName: string;
}

export const getSubDomainName = (props: GetSubDomainNameProps): string => {
  const { branchName } = props
  return isMasterBranch(branchName) ? '' : branchName
}
