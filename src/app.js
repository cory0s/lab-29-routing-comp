import React from 'react';
import Header from './components/functional-components/header.js';
import Story from './components/class-components/story.js';
import FunctionalStory from './components/functional-components/story.js'
import If from './components/if/if.js';
import When from './components/if/when.js';

class App extends React.Component {
  render() {
    return (
      <>
      <Header />
      <If condition={true}>
        <Story />
        <FunctionalStory />
      </If>
      </>
    );
  }
}

export default App;