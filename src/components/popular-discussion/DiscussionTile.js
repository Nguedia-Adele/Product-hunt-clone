import React from 'react'
import '../../styles/discussion.css'

import DiscussionHeader from './DiscussionHeader'
import DiscussionFooter from './DiscussionFooter'

class DiscussionTile extends React.Component {
	render() {
		return(
			<div className="w-100 discussion-tile">
				<DiscussionHeader/>
				<DiscussionFooter/>
			</div>
		)
	}
}

export default DiscussionTile