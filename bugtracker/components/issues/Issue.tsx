import { IssueType } from '@/types'
import React from 'react'
import Comment from './Comment'
import styles from "@css/Issue.module.scss"

const Issue: React.FC<IssueType> = ( { issue } ) =>
{
	return (
		<div className={styles.card}>
			<h2>{issue.issue}</h2>
			<p>{issue.status}</p>
			<p>{issue.priority}</p>
			<p>
				<span>Openned on:
					{/* <Moment format='dd MM YYYY'>
						new Date(issue.dateOpened)
					</Moment> */}
				</span>
				{/* <span>Closed on:
					<Moment format='dd MM YYYY'>
						new Date(issue.dateClosed)
					</Moment>
				</span> */}
			</p>
			<p>Created by {issue.createdBy}</p>
			<p>Closed by {issue.closedBy}</p>
			<p>{issue.assignedTo}</p>
			<p className={styles.comments}>{
				issue.comments.map( ( comment, idx ) => <Comment key={idx} {...comment}/>
				)
			}</p>
		</div>
	)
}

export default Issue