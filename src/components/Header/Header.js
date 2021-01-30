import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import PhoneIcon from '@material-ui/icons/Phone';
import { withStyles } from '@material-ui/core/styles';
import { useDispatch, useSelector } from 'react-redux';
import { authOperations, authSelectors } from '../../redux/auth';

const StyledTitle = withStyles({
  root: {
    fontSize: 30,
  },
})(Typography);

const StyledToolBar = withStyles({
  root: {
    backgroundColor: '#9ecaed',
    display: 'flex',
    justifyContent: 'space-between',
  },
})(Toolbar);

function Header() {
  const dispatch = useDispatch();
  const userLoggedIn = useSelector(authSelectors.getIsLoggedIn);

  const onClickHandler = () => {
    dispatch(authOperations.logOut());
  };

  return (
    <AppBar position="static">
      <StyledToolBar>
        <StyledTitle variant="h1" noWrap>
          <PhoneIcon />
          Phonebook
        </StyledTitle>

        {userLoggedIn && (
          <IconButton onClick={onClickHandler}>
            <ExitToAppIcon />
          </IconButton>
        )}
      </StyledToolBar>
    </AppBar>
  );
}

export default Header;
