import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from 'axios'
const initialState = {
  value: 0,
  data: [],
  user: "",
  newagent: [],
  loading: false,
  error: null,
};

export const fetchUserData = createAsyncThunk(
  "userData/fetch",
  async (value) => {
    const url = value
      ? `http://localhost:5000/api/v1/user?name=${value}`
      : `http://localhost:5000/api/v1/user`;
    try {
      const response = await fetch(url);
      const data = await response.json();
      return data;
    } catch (error) {
      throw error;
    }
  }
);


export const createAgents = createAsyncThunk("agent/byid", async (payload) => {
  try {
    const response = await axios.post(
      "http://localhost:5000/api/v1/createUser",
      payload
    );
    const data = await response.json();
    return data;
  } catch (error) {
    throw error;
  }
});

export const counterSlice = createSlice({
  name: "home",
  initialState,
  reducers: {
    increment: (state) => {
      state.value += 1;
    },
    decrement: (state) => {
      state.value -= 1;
    },
    incrementByAmount: (state, action) => {
      state.value += action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchUserData.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchUserData.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload;
      })
      .addCase(fetchUserData.rejected, (state, action) => {
        state.loading = true;
        state.error = action.error.message;
      })

      .addCase(createAgents.pending, (state) => {
        state.loading = true;
      })
      .addCase(createAgents.fulfilled, (state, action) => {
        state.loading = false;
        state.newagent = action.payload;
      })
      .addCase(createAgents.rejected, (state, action) => {
        state.loading = true;
        state.error = action.error.message;
      });
  },
});

export const { increment, decrement, incrementByAmount } = counterSlice.actions;

export default counterSlice.reducer;
