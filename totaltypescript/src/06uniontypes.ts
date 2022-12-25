interface User
{
	id: number
	firstName: string
	lastName: string
	role: "admin"  | "user" | "superadmin"
}


export const defaultUser: User =  {
	id: 1,
	firstName: 'John',
	lastName: 'Doe'
}