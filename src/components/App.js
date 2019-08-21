import React from 'react'

import HeaderContainer from './header/HeaderContainer'
import DiscussionTile from './popular-discussion/DiscussionTile'

function App() {
  return (
    <div>
      <header>
      		<HeaderContainer/>
      </header>
      <main className="row px-10 pt-5 mx-auto">
        <div className="col-8"><DiscussionTile/></div>
        <div className="col-4">side bar</div>
      	
      </main>
    </div>
  );
}

export default App;
