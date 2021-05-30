
export interface Props {
  label?: string;
  symbol: string;
}

const Component = (props: Props) => {
  const { label, symbol } = props

  return (
    <span
      role="img"
      aria-label={label || ''}
      aria-hidden={label === undefined}
    >
      {symbol}
    </span>
  )
}

export default Component
