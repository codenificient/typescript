export type DataType = {
	name: String
}

export type CommentType = {
	date: string,
	user: String,
	content: String
}

export type IssueArray = {
	issues: Array<IssueType>
}

export type IssueType = {
	uid: string
	issue: String
	status: String
	priority: String
	dateOpened: Date,
	dateClosed: Date,
	createdBy: String,
	closedBy: String,
	assignedTo: String,
	comments: Comment[]
}
