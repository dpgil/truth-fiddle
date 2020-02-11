import { withStyles } from '@material-ui/styles';
import Tooltip from '@material-ui/core/Tooltip';

export const CustomTooltip = withStyles(_ => ({
  tooltip: {
    backgroundColor: '#f5f5f9',
    color: 'rgba(0, 0, 0, 0.87)',
    maxWidth: 220,
    fontSize: 12,
    border: '1px solid #dadde9',
  },
}))(Tooltip);
