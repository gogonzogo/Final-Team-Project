import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

export const getUserInfo = createAsyncThunk(
  'user/getUserInfo',
  async (date, { rejectWithValue }) => {
    try {
      const response = await axios.get('/user/info/day', {
        params: { date: date },
      });
      return response.data.data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

// DIARY OPERATIONS
export const getDiaryEntries = createAsyncThunk(
  'diary/getDiaryEntries',
  async (date, { rejectWithValue }) => {
    const formatDate = date.replaceAll("/", "-")
    try {
      const response = await axios.post('/diary/day', { date: formatDate, });
      return response.data.data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const addDiaryEntry = createAsyncThunk(
  'diary/add',
  async (data, { rejectWithValue }) => {
    const newDiaryEntry = {
      date: data.calendarDate.replaceAll("/", "-"),
      title: data.productName,
      weight: data.grams,
      calories: data.calories,
    };
    try {
      const response = await axios.post('/diary/add', newDiaryEntry);
      return response.data.data.newEntry;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const deleteDiaryEntry = createAsyncThunk(
  'diary/delete',
  async (data, { rejectWithValue }) => {
    try {
      const response = await axios.delete(
        `/diary/delete/${JSON.stringify(data)}`
      );
      return response.data.data.result;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const searchFoods = createAsyncThunk(
  'diary/updateDiary',
  async (data, { rejectWithValue }) => {
    try {
      const response = await axios.get(
        `/diary/allFoods/search/${data}`
      );
      return response.data.data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const searchNotAllowedFood = createAsyncThunk(
  'calcCalories/searchBadFood',
  async (data, { rejectWithValue }) => {
    const newBloodType = data.bloodType === 'n/a' ? '' : data.bloodType;
    try {
      const response = await axios.get(
        `badFood?title=${data.title}&bloodType=${newBloodType}`
      );
      // console.log(response.data);
      return response.data.data;
    } catch (err) {
      return rejectWithValue(err.message);
    }
  }
);

export const getDailyRate = createAsyncThunk(
  'calculator/calsNotFood',
  async (credentials, { rejectWithValue }) => {
    try {
      const { data } = await axios.post('/user/dailyRate/', credentials);
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
export const postCalculator = createAsyncThunk(
  'calculator/postCalculator',
  async (credentials, { rejectWithValue }) => {
    try {
      const { data } = await axios.post('/user/calcuator/', credentials);
      return data.data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);


export const archiveInfo = createAsyncThunk(
  'diary/archivedata',
  async (data, { rejectWithValue }) => {
    try {
      const response = await axios.post(
        `/user/archive/`
      );
      return response.data.data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const deleteInfo = createAsyncThunk(
  'diary/deletediary',
  async (data, { rejectWithValue }) => {
    try {
      const response = await axios.post(
        `/user/deleteDiary/`
      );
      return response.data.data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
export const deleteAcct = createAsyncThunk(
  'diary/deleteAccount',
  async (data, { rejectWithValue }) => {
    try {
      const response = await axios.post(
        `/user/deleteAccount/`
      );
      return response.data.data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
export const exportXLS = createAsyncThunk(
  'diary/downloadToXLS',
  async (data, { rejectWithValue }) => {
    try {
      console.log('downloadToXLS')
      const response = await axios.post(
        `/user/downloadDiary/`
      );
      return response.data.data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);