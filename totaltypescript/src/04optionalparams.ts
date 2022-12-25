import { expect, it } from 'vitest'

export const getName = ( first: string, last?: string ) =>
{
	if ( last )
	{
		return `${first} ${last}`
	}
	return first
}

it( "Should work with just first name", () =>
{
	expect( getName(   "James"  ) ).toBe( "James)
} )

it( "Should work with both first and last name", () =>
{
	expect( getName(   "James",  "Bond"  ) ).toBe( "James Bond" )
} )

