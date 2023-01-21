import { IssueType } from '@/types'
import styles from '@cs/page.module.scss'
import Issue from '@iss/Issue'
import { Inter } from '@next/font/google'

const inter = Inter( { subsets: ['latin'] } )

async function fetchIssues()
{
  const res = await fetch( "http://localhost:3000/api" )

  if ( !res.ok ) throw new Error( "Failure fetching issues" )
  return res.json()
}

export default async function Home()
{
  const { issues } = await fetchIssues()

  // console.log( issues )


  if ( !issues ) return <h2>No issues</h2>

  return (
    <main className={styles.main}>
      <div className={styles.grid}>
        {
          issues.map( ( issue: IssueType ) => <Issue key={issue.uid} issue={issue} /> )
        }
      </div>
    </main>
  )
}
