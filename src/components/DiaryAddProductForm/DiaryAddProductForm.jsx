import React, { useState, useEffect } from 'react';
import { Autocomplete, TextField, Stack } from '@mui/material';
// import Button from '../Button/Button';
import CirclePlus from '../Button/CirclePlus';
import css from './DiaryAddProductForm.module.css';
import { useDispatch } from 'react-redux';
import { addDiaryEntry ,fetchDiary} from '../../redux/diary/diaryOperations';

import jsonData from '../ProductsList/data/products.json';
import { useDiary } from '../../hooks/useDiary';

export default function DiaryAddProduct() {
  const [productName, setProductName] = useState('');
  const [grams, setGrams] = useState('');
  const [calories, setCalories] = useState('');
  const [data, setData] = useState([]);
  const { calDate } = useDiary();

  const dispatch = useDispatch();

  useEffect(() => {
    setData(jsonData);
  }, []);

  const handleGramsChange = event => {
    setGrams(event.target.value);
  };

  const handleSubmit = event => {
    event.preventDefault();

    const foodItem = jsonData.find(item => item.title === productName);

    if (foodItem) {
      const calculatedCalories = (foodItem.calories / 100) * grams;
      setCalories(calculatedCalories);
      console.log(calculatedCalories);
    } else {
      setCalories(0);
    }

    dispatch(addDiaryEntry({ productName, grams, calories })).then(() => {
      dispatch(fetchDiary())
    });

    setProductName('');
    setGrams('');
  };

  const uniqueTitle = Array.from(new Set(data.map(item => item.title)));
  const [value, setValue] = useState('');

  return (
    <div className={css.section}>
      <form className={css.diaryform} onSubmit={handleSubmit}>
        <div className={css.formdiv}>
          <Stack spacing={2} sx={{ width: 300 }}>
            <Autocomplete
              id="size-small-standard"
              freeSolo
              size="small"
              options={uniqueTitle}
              value={value}
              onChange={(event, newValue) => {
                setValue(newValue);
              }}
              inputValue={productName}
              onInputChange={(event, newInputValue) => {
                setProductName(newInputValue);
              }}
              sx={{ width: 300 }}
              renderInput={params => (
                <TextField
                  sx={{
                    width: '240px',
                    paddingRight: '32px',
                  }}
                  {...params}
                  variant="standard"
                  label="Enter product name*"
                  placeholder=""
                />
              )}
            />
          </Stack>
        </div>
        <div className={css.formdiv}>
          <TextField
            sx={{
              fontFamily: 'Verdana',
              fontSize: '14px',
              fontWeight: '700',
              lineHeight: '17px',
              letterSpacing: '0.04em',
              textAlign: 'left',
              width: '240px',
              paddingRight: '32px',
            }}
            id="standard-basic"
            label="Grams"
            variant="standard"
            type="number"
            InputLabelProps={{
              shrink: true,
            }}
            value={grams}
            onChange={handleGramsChange}
          />
        </div>
        {/* <Button  /> */}
        <CirclePlus onClick={handleSubmit} />
      </form>
    </div>
  );
}
