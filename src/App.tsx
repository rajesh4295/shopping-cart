import React from 'react';
import LeftSection from './component/LeftSection';
import RightSection from './component/RightSection';
import { GlobalStoreProvider } from './state/GlobalState';


function App() {
  return (
    <div className="container justify-between h-full w-full p-3 lg:flex bg-gray-100">
      <GlobalStoreProvider>
        <LeftSection />
        <RightSection />
      </GlobalStoreProvider>
    </div>
  );
}

export default App;
