import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import AccountCircle from '@material-ui/icons/AccountCircle';
import PhoneIcon from '@material-ui/icons/Phone';
import { withStyles } from '@material-ui/core/styles';

import s from './Header.module.css';

const StyledTitle = withStyles({
  root: {
    fontSize: 30,
  },
})(Typography);

const StyledTooleBar = withStyles({
  root: {
    backgroundColor: '#9ecaed',
  },
})(Toolbar);

function Header() {
  return (
    <AppBar position="static">
      <StyledTooleBar>
        <StyledTitle variant="h1" noWrap>
          <PhoneIcon />
          Phonebook
        </StyledTitle>
      </StyledTooleBar>
    </AppBar>
  );
}

export default Header;
