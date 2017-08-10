import React from 'react';
import Spinner from 'react-spinner-material';


const MaterialSpinner = () => {
  return (
    <div>
       <Spinner
        size={120}
        spinnerColor={"#393"}
        spinnerWidth={2}
        visible={true} />
      </div>

  );
};

export { MaterialSpinner };