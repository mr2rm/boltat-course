import React from 'react';
import withNetworkStatus from './withNetworkStatus';
import useNetworkStatus from './useNetworkStatus';

// export const NetworkVisualizer = ({
//   networkStatus,
//   disconnectColor = 'red'
// }) => {
//   return (
//     <div
//       style={{
//         width: '200px',
//         height: '200px',
//         margin: '20px auto',
//         backgroundColor: networkStatus === 'Offline' ? disconnectColor : 'green'
//       }}
//     />
//   );
// };

export const NetworkVisualizer = ({ disconnectColor = 'red' }) => {
  const networkStatus = useNetworkStatus();
  return (
    <div
      style={{
        width: '200px',
        height: '200px',
        margin: '20px auto',
        backgroundColor: networkStatus === 'Offline' ? disconnectColor : 'green'
      }}
    />
  );
};

export default withNetworkStatus(NetworkVisualizer);
