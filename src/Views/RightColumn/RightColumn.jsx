import s from './rightColumn.module.scss';
import UserDetails from 'components/UserDetails/UserDetails';

const RightColumn = ({
  currentUser,
  setCurrentChat,
  isColumnShow,
  rightColumnHandler,
}) => {
  return (
    <div
      className={
        isColumnShow
          ? s.right_column_container_visible
          : s.right_column_container
      }
    >
      <UserDetails
        rightColumnHandler={rightColumnHandler}
        currentUser={currentUser}
        setCurrentChat={setCurrentChat}
      />
    </div>
  );
};

export default RightColumn;
