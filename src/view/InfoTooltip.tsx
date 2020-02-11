import React from 'react';
import InfoIcon from '@material-ui/icons/Info';
import { CustomTooltip } from './CustomTooltip';
import { SyntaxTable } from './SyntaxTable';

const iconStyle: React.CSSProperties = {
  display: 'inline-block',
  verticalAlign: 'middle',
  paddingLeft: 12,
};

export const InfoTooltip = React.memo(function InfoTooltip() {
  return (
    <CustomTooltip
      interactive
      title={
        <React.Fragment>
          <SyntaxTable />
        </React.Fragment>
      }
    >
      <InfoIcon color={'inherit'} style={iconStyle} />
    </CustomTooltip>
  );
});
