import { expect, it } from 'vitest'

export const getName = (params: {first: string, last?: string}) =>
{
	if ( params.last )
	{
		return `${params.first} ${params.last}`
	}
	return params.first
}

it( "Should work with just first name", () =>
{
	expect( getName( { first: "James" } ) ).toBe( "James)
} )

it( "Should work with both first and last name", () =>
{
	expect( getName( { first: "James", last: "Bond" } ) ).toBe( "James Bond" )
} )

