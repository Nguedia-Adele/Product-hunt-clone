import React from 'react'
import '../../styles/discussion.css'

import DiscussionHeader from './DiscussionHeader'
import DiscussionFooter from './DiscussionFooter'
import Upvote from '../Upvote'

class DiscussionTile extends React.Component {
	render() {
		return(
			<div className="w-100 discussion-tile shadow-sm">
				<DiscussionHeader/>

				<div className="d-flex mt-2">
					<div className="my-auto">
						<a href="/post">
							<p className="discussion-title">Name a place you've never visited but would love to go</p>
						</a>
						<a href="/post">
							<p>Mine is Iceland. Curious to hear yours.</p>
						</a>
					</div>
					<div className="ml-auto"><Upvote/></div>
				</div>
				
				<hr style={{margin:"0", borderColor:"#e8e8e8"}} />
				<DiscussionFooter/>
			</div>
		)
	}
}

export default DiscussionTile