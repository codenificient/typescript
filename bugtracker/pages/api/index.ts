// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { IssueArray } from '@/types'
import { faker } from '@faker-js/faker'
import type { NextApiRequest, NextApiResponse } from 'next'

function generateComment()
{
	return {
		date: faker.date.recent(),
		user: faker.name.fullName(),
		content: faker.lorem.sentences()
	}
}

function generateIssue()
{
	return {
		uid: faker.database.mongodbObjectId(),
		issue: faker.lorem.sentence(),
		status: faker.helpers.arrayElement( ["new", "in progress", "closed", "blocked", "Not Started"] ),
		priority: faker.helpers.arrayElement( ["normal", "high", "low", "urgent"] ),
		dateOpened: faker.date.recent(),
		dateClosed: faker.date.recent(),
		createdBy: faker.name.fullName(),
		closedBy: faker.name.fullName(),
		assignedTo: faker.name.fullName(),
		comments: faker.helpers.uniqueArray( generateComment, 4 )
	}
}

function generateIssues()
{
	return {
		issues: faker.helpers.uniqueArray( generateIssue, 7 )
	}
}

export default function handler(
	req: NextApiRequest,
	res: NextApiResponse<IssueArray>
)
{
	const { issues } = generateIssues()
	// console.log( issues )

	res.status( 200 ).json( { issues } )
}
