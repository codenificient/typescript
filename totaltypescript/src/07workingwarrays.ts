interface User
{
	id: number
	fistName: string
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

export const defaultUser: User = {
	id: 1,
	fistName: "John",
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
		},    
}
