import { useState } from 'react';

const ShortCircuitToggle = () => {
  const [showAlert, setShowAlert] = useState(false);

  return (
    <div>
      <button className='btn' onClick={() => setShowAlert(!showAlert)}>
        toggle
      </button>
      {showAlert && <Alert />}
    </div>
  );
};

const Alert = () => {
  return <div className='alert alert-danger'>hello world</div>;
};

export default ShortCircuitToggle;