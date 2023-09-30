import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const getUserStats = createAsyncThunk(
  'calcCalories/stats',
  async (data, { rejectWithValue }) => {
    try {
      const response = await axios.get('user/stats');
      return response.data.data;
    } catch (err) {
      return rejectWithValue(err.message);
    }
  }
);
export const fetchDaySummary = createAsyncThunk(
  'calcCalories/summary',
  async data => {
    try {
      const response = await axios.post('day/info', data);
      return response.data;
    } catch (err) {
      return err;
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
      return response.data.data;
    } catch (err) {
      return rejectWithValue(err.message);
    }
  }
);

export const CalNoEat = createAsyncThunk(
  'cals/calsNotFood',
  async (credentials, { rejectWithValue }) => {
    try {
      const { data } = await axios.post('/user/calories/', credentials);
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
export const sendCalculator = createAsyncThunk(
  'cals/postCalculator',
  async (credentials, { rejectWithValue }) => {
    try {
      const { data } = await axios.post('/user/calcuator/', credentials);
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);