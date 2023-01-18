import { parseISO, format } from 'date-fns'

type Props = {
  dateString: string
}

export default function Date({ dateString }: Props) {
  const date = parseISO(dateString)

  function frenchDate(date: Date) {
    // Array of month names
    var months = ['janvier', 'f&eacute;vrier', 'mars', 'avril', 'mai', 'juin', 'juillet',
                  'ao&ucirc;t', 'septembre', 'octobre', 'novembre', 'd&eacute;cembre'];
    // Get the day number from the date
    var dayNum = date.getDate();
    // Work out which ordinal to use
    //var ord = dayNum == 1? 'er jour du mois ' : '&eacute;me jour du mois ';
    // Build the string and return it
    return `${dayNum} ${months[date.getMonth()]} ${date.getFullYear()}`;
  }

  return <time className="text-slate-400" dateTime={dateString}>{frenchDate(date)}</time>
}