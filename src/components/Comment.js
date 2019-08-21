import React from 'react'

class Comment extends React.Component {
	render(){
		return(
			<div>
				<button style={{border:"1px solid #e8e8e8",
					backgroundColor:"transparent",
					padding:"3px 7px",
					borderRadius:"3px"
				}}>comment</button>
			</div>
		)
	}
}

export default Comment