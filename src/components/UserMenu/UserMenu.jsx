import { useAuth } from 'hooks';
import { useDispatch } from 'react-redux';
import { logout } from 'redux/auth/operations';
import { Button, Container, UserName } from './UserMenu.styled';

const UserMenu = () => {
  const dispatch = useDispatch();
  const { user } = useAuth();

  const handleLoguot = () => dispatch(logout());

  return (
    <Container>
      <UserName>Hi, {user.name}</UserName>
      <Button type="button" onClick={handleLoguot}>
        Logout
      </Button>
    </Container>
  );
};

export default UserMenu;
