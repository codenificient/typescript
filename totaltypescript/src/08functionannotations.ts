import { expect, it } from 'vitest'

interface User
{
	id: number
	firstName: string
	lastName: string
	role: "admin" | "user" | "superadmin"
	posts: Array<Post>
}

interface Post
{
	id: number
	title: string
	content: string
}

/**
 * How do we ensure that the function makeUser always returns
 * the correct user?
 */

export const defaultUser: User = {
	id: 1,
	firstName: "John",
	lastName: "Doe",
	role: "admin",
	posts: [
		{
			id: 1,
			title: "First Post",
			content: "This is the first post"
		},
		{
			id: 2,
			title: "Second Post",
			content: "This is the second post"
		},    ]
}


const makeUser = (): User => defaultUser

it( "Should return the correct user", () =>
{
	const user = makeUser()
	expect( user.id ).toBeTypeOf( "number" )
	expect( user.firstName ).toBeTypeOf( "string" )
	expect( user.lastName ).toBeTypeOf( "string" )
	expect( user.role ).to.be.oneOf( ["super-admin", "admin", "user"] )

	expect( user.posts[0].id ).toBeTypeOf( "number" )
	expect( user.posts[0].title ).toBeTypeOf( "string" )
} )
