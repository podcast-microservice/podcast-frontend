export default function abbreviateName(fullName: string) {
  const words = fullName.split(' ');
  let abbreviation = '';

  for (const word of words) {
    abbreviation += word[0];
  }

  abbreviation = abbreviation.toUpperCase();

  return abbreviation;
}
