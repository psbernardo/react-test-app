import React from 'react';

import { Typography } from '@material-ui/core';

import { makeStyles } from '@material-ui/core/styles';
import 'react-dropzone-uploader/dist/styles.css';
import Dropzone from 'react-dropzone-uploader';

const useStyles = makeStyles(() => ({
  dropZoneLabel: {
    fontWeight: 600,
    color: '#3D3F57',
    lineHeight: '17px',
  },
}));

const ImageDropZone = (props) => {
  const classes = useStyles();

  return (
    <div>
      <Typography
        style={{
          marginTop: props.mt ? props.mt : 0,
          marginBottom: props.mb ? props.mb : 0,
          color: props.error ? '#ff425f' : '#3D3F57',
        }}
        className={classes.dropZoneLabel}
        variant="subtitle2"
        paragraph={props.paragraph}
      >
        {props.label}{' '}
        {props.required ? <span style={{ color: '#ff425f' }}>*</span> : ''}
      </Typography>
      <Dropzone
        getUploadParams={props.getUploadParams}
        onChangeStatus={props.onChangeStatus}
        accept="image/*"
        maxFiles={1}
        multiple={false}
        canCancel={false}
        initialFiles={props.initialFiles}
        inputContent="Drag File or Click to Browse"
        minSizeBytes={props.label === 'Signature' ? 2000 : 48576}
        maxSizeBytes={3145728}
      />
    </div>
  );
};
export default ImageDropZone;
