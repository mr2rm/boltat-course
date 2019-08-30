import React from 'react';

const NetworkStatus = ({ render, ...props }) => {
  const [connectionType, setConnectionType] = React.useState(
    navigator.connection.type
  );

  React.useEffect(() => {
    const handleChange = newStatus => {
      setConnectionType(newStatus.target.type);
    };
    navigator.connection.addEventListener('change', handleChange);
    return () => {
      navigator.connection.removeEventListener('change', handleChange);
    };
  }, []);

  const networkStatus = connectionType === 'none' ? 'Offline' : 'Online';

  return render(networkStatus);
};

export default NetworkStatus;
