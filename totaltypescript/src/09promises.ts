interface LukeSkywalker
{
	name: string;
	height: number;
	mass: number;
	hair_color: string;
	skin_color: string;
	eye_color: string;
	birth_year: string;
	gender: string
}

export const fetchLuke = async (): Promise<LukeSkywalker> =>
{
	const data = await fetch( "https://swapi.dev/api/people/1" ).then( ( response ) => response.json() )
	return data
}

export const fetchLuke2 = async () =>
{
	const data: LukeSkywalker = await fetch( "https://swapi.dev/api/people/1" ).then( ( response ) => response.json() )
	return data as LukeSkywalker
}

export const fetchLuke3 = async () =>
{
	const data = await fetch( "https://swapi.dev/api/people/1" ).then( ( response ) => response.json() )
	return data as LukeSkywalker
}