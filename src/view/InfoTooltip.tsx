import React from 'react';
import InfoIcon from '@material-ui/icons/Info';
import Typography from '@material-ui/core/Typography';
import { CustomTooltip } from './CustomTooltip';

const iconStyle: React.CSSProperties = {
  display: 'inline-block',
  verticalAlign: 'middle',
  paddingLeft: 12,
};

export const InfoTooltip = React.memo(function InfoTooltip() {
  return (
    <CustomTooltip
      title={
        <React.Fragment>
          <Typography color="inherit">Tooltip with HTML</Typography>
          <em>{"And here's"}</em> <b>{'some'}</b> <u>{'amazing content'}</u>.{' '}
          {"It's very engaging. Right?"}
        </React.Fragment>
      }
    >
      <InfoIcon color={'inherit'} style={iconStyle} />
    </CustomTooltip>
  );
});
