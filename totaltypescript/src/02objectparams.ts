import { expect, it } from "vitest" 

export const addTwoNumbers = ( params: { first: number, second: number } ): number =>
{
	return params.first + params.second
}

it( "Should add two numbers together", () =>
{
	expect( addTwoNumbers( { first: 2, second: 5 } ) ).toEqual( 7 )
} )