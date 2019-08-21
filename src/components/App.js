import React from 'react'

import HeaderContainer from './header/HeaderContainer'
import PopularDiscussions from './popular-discussion/PopularDiscussions'
import ProductList from './posts/ProductList'

function App() {
  return (
    <div>
      <header>
      		<HeaderContainer/>
      </header>
      <main className="row px-10 pt-4 mx-auto">
        <div className="col-8">
          <PopularDiscussions/>
          <ProductList/>
        </div>
        <div className="col-4">side bar</div>	
      </main>
    </div>
  );
}

export default App;
