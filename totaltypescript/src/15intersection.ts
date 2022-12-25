
interface Base
{
	id: string
}

interface User extends Base
{
	firstName: string
	lastName: string
}

interface Post extends Base
{
	title: string
	body: string
}

interface Comment extends Base
{
	comment: string
}


export const getDefaultUserAndPost = (): User & { posts: Post[] } =>
{
	return {
		id: "1",
		firstName: "John",
		lastName: "Doe",
		posts: [{
			id: "1",
			title: "First Post",
			body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eius"
		}]
	}
