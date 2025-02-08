import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import godService from "./godService";


const initialState = {
  gods:[]
};

export const godSlice = createSlice({
  name: "gods",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getAll.fulfilled, (state, action) => {
      state.gods = action.payload;
    })
  },
});

export const create = createAsyncThunk(
  "gods/create",
  async (god, thunkAPI) => {
    try {
      return await godService.create(god);
    } catch (error) {
      const message = error.response.data.messages[0]
      return thunkAPI.rejectWithValue(message);
    }
  }
);
export const getAll = createAsyncThunk("gods/getAll", async () => {
  try {
    return await godService.getAll();
  } catch (error) {
    console.error(error);
  }
});

export const erase = createAsyncThunk("gods/erase", async (id) => {
  try {
    return await godService.erase(id);
  } catch (error) {
    console.error(error);
  }
});


export default godSlice.reducer;
