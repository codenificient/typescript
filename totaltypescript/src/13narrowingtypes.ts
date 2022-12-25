import { expect, it } from 'vitest'

const coerceAmount = ( amount: number | { amount: number } ) =>
{
	if ( typeof amount === 'number) {
		return amount
	} else if ( typeof amount === 'object' )
	{
		return amount.amount
	}
return new Error( 'amount must be a number or an object' )
}

it( "Should return amount when passed as an object", () =>
{
	expect( coerceAmount( { amount: 20 } ) ).toEqual( 20 )
} )

it( "Should return amount when passed as a number", () =>
{
	expect( coerceAmount( 50 ) ).toEqual( 50 )
} )

