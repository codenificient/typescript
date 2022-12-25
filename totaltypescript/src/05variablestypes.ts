import { expect, it } from 'vitest'

interface User
{
	id: number 
	firstName: string
	lastName: string
    isAdmin: boolean
}

/**
 * How do we ensure that defaultUsers is of type User
 *  at this LINE - not further down the code
 */
const defaultUser: User = {
	id: 1,
	firstName: 'John',
    lastName: 'Doe',
	isAdmin: false
}

const getUserId = ( user: User ) =>
{
	return user.id
}

it( 'should return the user id', () =>
{
	expect( getUserId( defaultUser ) ).toEqual( 1 )
} )
