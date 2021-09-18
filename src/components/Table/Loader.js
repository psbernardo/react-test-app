import React from 'react';
import { CircularProgress } from '@material-ui/core';

export default function Loader() {
  return (
    <div style={{ displayFlex: 'flex' }}>
      <CircularProgress
        style={{
          color: '#131215',
          height: 20,
          width: 20,
          marginRight: 10,
          marginTop: 5,
        }}
      />
      <span style={{ position: 'relative', top: -5 }}>
        Please wait while we process your request...
      </span>
    </div>
  );
}
