import { useState } from "react";
import CoreConcept from "./components/CoreConcept";
import Header from "./components/Header/Header";
import TabButton from "./components/TabButton";
import { CORE_CONCEPTS } from "./data";
import { EXAMPLES } from "./data";

function App() {
  const [tabContent, setTabContent] = useState();
  function handleSelect(selectedButton) {
    setTabContent(selectedButton);
  }
  return (
  <div>
    <Header />
    <main>
      <section id="core-concepts">
        <h2>Core Concepts</h2>
        <ul>
          {CORE_CONCEPTS.map((conceptItem) => 
          <CoreConcept key={conceptItem.title}  {...conceptItem}/>
          )}
        </ul>
      </section>
      <section id="examples">
        <h2>Examples</h2>
          <menu>
            <TabButton 
            isSelected={tabContent === 'components'} 
            onSelect={() => handleSelect('components')}
            >
              Components
            </TabButton>
            <TabButton
            isSelected={tabContent === 'jsx'}  
            onSelect={() => handleSelect('jsx')}
            >
              JSX
              </TabButton>
            <TabButton
            isSelected={tabContent === 'props'}  
            onSelect={() => handleSelect('props')}
            >
              Props
              </TabButton>
            <TabButton
            isSelected={tabContent === 'state'}  
            onSelect={() => handleSelect('state')}
            >
              State
              </TabButton>
        </menu>
          {!tabContent ? (
            <p>Please select a topic.</p>
          ) : ( 
          <div id="tab-content">
          <h3>{EXAMPLES[tabContent].title}</h3>
          <p>{EXAMPLES[tabContent].description}</p>
          <pre>
            <code>
              {EXAMPLES[tabContent].code}
            </code>
          </pre>
          </div>
          )}
      </section>
    </main>
  </div>);

}

export default App;
