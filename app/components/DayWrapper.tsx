export default ({
  day,
  children,
}: {
  day: number
  children: React.ReactNode
}) => (
  <h1>
    DAY {day}
    <div>{children}</div>
  </h1>
)
