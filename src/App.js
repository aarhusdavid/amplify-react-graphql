import './App.css';
import Tutorial from './components/Tutorial';
import {Tab} from '@frontapp/ui-kit';
import { useFrontContext } from './providers/frontContext';
// import React, {useState} from 'react';


function App() {
  const context = useFrontContext();
  // const tabs = (context.tabs && context.tabs.name ) ? context.tabs.name : ' ';
  // const [selectedTab, setSelectedTab] = useState(tabs[0]);

  if (!context)
      return (
        <div className='App'>
          <p>Waiting to connect to the Front context......</p>
        </div>
      )

  switch(context.type) {
      case 'noConversation':
        return (
          <div className="App">
            <p>No conversation selected. Select a conversation to use this plugin.</p>
          </div>
        );
      case 'singleConversation':
        return (
          <div className="App">
            <h1 class="App-TabClaims"><Tab isSelected id="claims" name="Claims" onClick={function(){}}></Tab></h1>
            <Tutorial />
          </div>
        );
      case 'multiConversations':
        return (
          <div className="App">
            <p>Multiple conversations selected. Select only one conversation to use this plugin.</p>
          </div>
        );
      default:
        console.error(`Unsupported context type: ${context.type}`);
        break;
  };
}



export default App;


