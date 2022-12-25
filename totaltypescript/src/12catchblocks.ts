import { expect, it } from 'vitest'


const tryCatchDemo = ( state: "fail" | "success" ) =>
{
	try
	{
		if ( state === "fail" )
		{
			throw new Error("Failure")
		}
	} catch ( err ) 
	{
		return (err as Error).message
	}
}

export const tryCatchDemo1 = ( state: "fail" | "success" ) =>
{
	try
	{
		if ( state === "fail" )
		{
			throw new Error( "Failure" )
		}
	} catch ( err ) 
	{
		if (err instanceof Error) return err.message
	}
}

it( "Should return the message when it fails", () =>
{
	expect( tryCatchDemo( "fail" ) ).toEqual( "Failure")
} )

it( "Should return the message when it fails", () =>
{
	expect( tryCatchDemo1( "fail" ) ).toEqual( "Failure" )
} )