import React from 'react';
import Tabs from './Tabs';
import Viewport from './Viewport';

// Style files
import '../styles/Tab.css';
import '../styles/Tabs.css';
import '../styles/Viewport.css';

const App = () => {
    return (
        <div>
            <Tabs />
            <Viewport />
        </div>
    );
}

export default App;