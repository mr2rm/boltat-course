import React from 'react';
import logo from './logo.svg';
import './App.css';
import { NetworkText } from './NetworkText';
import { NetworkVisualizer } from './NeworkVisualizer';
import NetworkStatus from './NetworkStatus';

function Page({ title, style, renderHeader, children }) {
  return (
    <div style={style}>
      <header>{renderHeader ? renderHeader(title) : title}</header>
      {children}
    </div>
  );
}

function App() {
  return (
    <div className="App">
      <NetworkText />
      <NetworkVisualizer disconnectColor="yellow" />
    </div>
  );
}

// function App() {
//   return (
//     <div className="App">
//       <NetworkStatus
//         render={networkStatus => {
//           return <NetworkText networkStatus={networkStatus} />;
//         }}
//       />
//       <NetworkStatus
//         render={networkStatus => (
//           <NetworkVisualizer
//             networkStatus={networkStatus}
//             disconnectColor="yellow"
//           />
//         )}
//       />
//     </div>
//   );
// }

// function App() {
//   return (
//     <div className="App">
//       <Page
//         renderHeader={title => {
//           return (
//             <>
//               <p style={{ fontWeight: 'bold' }}>{title}</p>
//               <sub>This is first page</sub>
//             </>
//           );
//         }}
//         title="Main page">
//         <NetworkVisualizer networkStatus="Offline" />
//       </Page>
//       <Page title="Side page">
//         <NetworkVisualizer networkStatus="Online" />
//       </Page>
//     </div>
//   );
// }

export default App;
