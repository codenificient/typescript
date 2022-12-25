import { expect, it } from  "vitest" 

const addTwoNumbers = ( a: number, b: number ): number =>
{
	return a + b
}

it( "Should add the two numbers", () =>
{
	expect( addTwoNumbers( 2, 4 ) ).toEqual( 6 )
} )
