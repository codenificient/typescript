import { CommentType } from '@/types'
import React from 'react'
import styles from "@css/Comment.module.scss"

const Comment: React.FC<CommentType> = ( { date, content, user } ) =>
{
	return (
		<div className={styles.CommentWrapper}>
			<p>{new Date(date).toISOString()}</p>
			<h3>{user}</h3>
			<p>{content}</p>
		</div>
	)
}

export default Comment