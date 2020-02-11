import React from 'react';
import { IconButton } from '@material-ui/core';
import ShareIcon from '@material-ui/icons/Share';
import { generateUrlFromQuery } from '../util/generateUrlFromQuery';
import { CustomTooltip } from './CustomTooltip';

const copyButtonStyle: React.CSSProperties = {
  color: 'white',
  verticalAlign: 'middle',
};

interface CopyButtonProps {
  query: string;
}

export const CopyButton = React.memo(function CopyButton(
  props: CopyButtonProps
) {
  const { query } = props;

  const onClick = () => {
    const url = generateUrlFromQuery(query);

    // Writes the url to the clipboard. This doesn't work on IE,
    // Edge, or Safari, but whatever
    // https://developer.mozilla.org/en-US/docs/Web/API/Clipboard/writeText
    navigator.clipboard.writeText(url);
  };

  return (
    <CustomTooltip title={'Copy link'} enterDelay={200}>
      <IconButton
        aria-label="copy link"
        style={copyButtonStyle}
        onClick={onClick}
      >
        <ShareIcon color={'inherit'} />
      </IconButton>
    </CustomTooltip>
  );
});
