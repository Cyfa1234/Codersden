// ( NOTE )
//The actual page 4 the routes is always called page.jsx unlike in react when we give specific names.
import { Suspense } from "react"
import Link from "next/link"
import Repo from "@/app/components/Repo"
import RepoDirs from "@/app/components/RepoDirs"

const RepoPage = ({ params: { name } }) => {
    return (
        <div className="repo-detail-container">
            <Link href="/code/repos" className="btn btn-back">
                ← Back To Repositories
            </Link>
            
            <div className="repo-detail-content">
                <Suspense fallback={<div className="loading-fallback">Loading repository details...</div>}>
                    <Repo name={name} />
                </Suspense>

                <Suspense fallback={<div className="loading-fallback">Loading directories...</div>}>
                    <RepoDirs name={name} />
                </Suspense>
            </div>
        </div>
    )
}

export default RepoPage
