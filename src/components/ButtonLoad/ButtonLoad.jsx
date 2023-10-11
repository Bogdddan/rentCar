import {ButtonLoadMore} from './ButtonLoad.styled';

function ButtonLoad({ onFindMore }) {
  return (
    <ButtonLoadMore onClick={onFindMore} type="button">
      Load more
    </ButtonLoadMore>
  );
}

export default ButtonLoad;