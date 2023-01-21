import { model, Schema } from 'mongoose'

const issueSchema = new Schema( {
	uid: {
		type: String,
	},
	issue: {
		type: String,
	},
	status: {
		type: String,
		enum: ["new", "in progress", "closed", "blocked", "Not Started"]
	},
	priority: {
		type: String,
		enum: ["normal", "high", "low", "urgent"],
		default: "normal",
	},
	dateOpened: Date,
	dateClosed: Date,
	createdBy: String,
	assignedTo: String,
	closedBy: String,
	comments: [
		{
			date: Date,
			user: String,
			content: String
		}
	]
} )

export const IssueMongo = model( "IssueMongo", issueSchema )
