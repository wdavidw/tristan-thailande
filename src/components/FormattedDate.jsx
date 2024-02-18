const dateFormatter = new Intl.DateTimeFormat('fr-FR', {
  year: 'numeric',
  month: 'short',
  day: 'numeric',
  timeZone: 'UTC',
})

export function FormattedDate({ date, ...props }) {
  date = typeof date === 'string' ? new Date(date) : date

  return (
    <time dateTime={date.toISOString()} {...props}>
      {dateFormatter.format(date)}
    </time>
  )
}
