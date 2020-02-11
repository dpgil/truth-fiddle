import React from 'react';
import InfoIcon from '@material-ui/icons/Info';

const iconStyle: React.CSSProperties = {
  display: 'inline-block',
  verticalAlign: 'middle',
};

export const InfoTooltip = React.memo(function InfoTooltip() {
  return <InfoIcon color={'inherit'} style={iconStyle} />;
});
