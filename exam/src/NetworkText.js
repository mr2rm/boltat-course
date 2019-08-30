import React from 'react';
import withNetworkStatus from './withNetworkStatus';
import useNetworkStatus from './useNetworkStatus';

// export const NetworkText = ({ networkStatus }) => {
//   return (
//     <div>
//       <p>{networkStatus}</p>
//     </div>
//   );
// };

export const NetworkText = () => {
  const networkStatus = useNetworkStatus();
  return (
    <div>
      <p>{networkStatus}</p>
    </div>
  );
};

export default withNetworkStatus(NetworkText);
