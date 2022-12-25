import { expect, it } from 'vitest'

const guitarist = new Set<string>()

guitarist.add( "Jimi Hendricks" )
guitarist.add( "Eric Clapton" )

it( "Should contain Jimi and Eric", () =>
{ 
	expect(guitarist.has("Jimi Hendricks") ).toEqual(true)
	expect( guitarist.has("Eric Clapton") ).toEqual(true)
} )

it( "Should error when adding a number", () =>
{
	// @ts-expect-error
	guitarist.add( 2)
})
