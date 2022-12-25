import { Equal, Expect } from "./helpers/util"

interface User
{
	id: string
	firstName: string
	lastName: string
}

type MyType = Omit<User, "id">

type tests = [Expect<Equal<MyType, { firstName: string; lastName: string }>>]
