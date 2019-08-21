import React from 'react'

import HeaderContainer from './header/HeaderContainer'
import PopularDiscussions from './popular-discussion/PopularDiscussions'

function App() {
  return (
    <div>
      <header>
      		<HeaderContainer/>
      </header>
      <main className="row px-10 pt-4 mx-auto">
        <div className="col-8"><PopularDiscussions/></div>
        <div className="col-4">side bar</div>	
      </main>
    </div>
  );
}

export default App;
