import DiaryListItem from '../DiaryListItem/DiaryListItem';
import style from './style.module.css';
import { useDispatch } from 'react-redux';
import { deleteDiaryEntry } from '../../redux/diary/diaryOperations';
import List from '@mui/material/List';
import { useDiary } from 'hooks/useDiary';

function DiaryList() {
  const dispatch = useDispatch();
  const { calDate, diaryList } = useDiary();

  function handleDelete(entryId) {
    const fomratDate = calDate.replaceAll('/', '-')
    dispatch(deleteDiaryEntry({ fomratDate, entryId }));
  }

  return (
    <List className={style.productList}>
      {diaryList.map((item, index) => (
        <DiaryListItem
          key={`${item._id}-${index}`}
          product={item}
          handleDelete={handleDelete}
        />
      ))}
    </List>
  );
}

export default DiaryList;
