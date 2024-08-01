'use client'; // Add this directive to indicate it's a Client Component

import React from 'react';
import { TailSpin } from 'react-loader-spinner';

const Spinner = () => (
  <div style={{
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
    width: '100vw',
    position: 'fixed',
    top: 0,
    left: 0,
    backgroundColor: 'rgba(255, 255, 255, 0.8)',
    zIndex: 9999
  }}>
    <TailSpin height="80" width="80" color="blue" ariaLabel="loading" />
  </div>
);

export default Spinner;
