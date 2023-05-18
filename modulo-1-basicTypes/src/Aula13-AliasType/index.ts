type Age = number;
type People = {
  name: string;
  age: Age;
  salary: number;
  preferedColor?: string;
};

type colorRGB = 'Red' | 'Green' | 'Blue';
type colorCMYK = 'Cyan' | 'Yellow' | 'Brow';
type ColorPrefered = colorRGB | colorCMYK;

const people: People = {
  name: 'Lucas',
  age: 23,
  salary: 3200,
};

export function setPreferedColor(
  people: People,
  color: ColorPrefered,
): People {
  return { ...people, preferedColor: color };
}

console.log(setPreferedColor(people, 'Blue'));
