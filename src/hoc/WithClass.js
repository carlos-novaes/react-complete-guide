import React from 'react';

const WithClass = (WrappedCompnent, className) => {
  return props => (
    <div className={className}>
      <WrappedCompnent {...props} />
    </div>
  );
};
export default WithClass;
