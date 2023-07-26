import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

// initial states
const initialState = {
  data: [],
  isLoading: false,
  isError: false,
  error: null,
};

export const __getTodos = createAsyncThunk(
  "todos/getTodos",
  async (_, thunkAPI) => {
    try {
      const response = await axios.get(
        `${process.env.REACT_APP_SERVER_URL}/todos`
      );
      return thunkAPI.fulfillWithValue(response.data);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const __addTodo = createAsyncThunk(
  "todos/addTodo",
  async (payload, thunkAPI) => {
    try {
      const response = await axios.post(
        `${process.env.REACT_APP_SERVER_URL}/todos`,
        payload
      );
      return thunkAPI.fulfillWithValue(response.data);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const __removeTodo = createAsyncThunk(
  "todos/removeTodo",
  async (payload, thunkAPI) => {
    try {
      await axios.delete(
        `${process.env.REACT_APP_SERVER_URL}/todos/${payload}`
      );
      return thunkAPI.fulfillWithValue(payload);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const __switchTodo = createAsyncThunk(
  "todos/switchTodo",
  async (payload, thunkAPI) => {
    try {
      await axios.patch(`${process.env.REACT_APP_SERVER_URL}/todos/${payload}`);
      return thunkAPI.fulfillWithValue(payload);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const todosSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    // addTodo: (state, action) => [...state, action.payload],
    // removeTodo: (state, action) =>
    //   state.filter((todo) => todo.id !== action.payload),
    // switchTodo: (state, action) =>
    //   state.map((todo) =>
    //     todo.id === action.payload ? { ...todo, isDone: !todo.isDone } : todo
    //   ),
  },
  extraReducers: {
    // 조회
    [__getTodos.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.isError = false;
      state.data = action.payload;
    },
    [__getTodos.rejected]: (state, action) => {
      state.isLoading = false;
      state.isError = true;
      state.error = action.payload;
    },
    [__getTodos.pending]: (state) => {
      state.isLoading = true;
      state.isError = false;
    },

    // 추가
    [__addTodo.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.isError = false;
      state.data = [...state.data, action.payload];
    },
    [__addTodo.rejected]: (state, action) => {
      state.isLoading = false;
      state.isError = true;
      state.error = action.payload;
    },
    [__addTodo.pending]: (state) => {
      state.isLoading = true;
      state.isError = false;
    },

    // 삭제
    [__removeTodo.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.isError = false;
      state.data = state.data.filter((todo) => todo.id !== action.payload);
    },
    [__removeTodo.rejected]: (state, action) => {
      state.isLoading = false;
      state.isError = true;
      state.error = action.payload;
    },
    [__removeTodo.pending]: (state) => {
      state.isLoading = true;
      state.isError = false;
    },

    // 완료 여부
    [__switchTodo.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.isError = false;
      state.data = state.data.map((todo) =>
        todo.id === action.payload ? { ...todo, isDone: !todo.isDone } : todo
      );
    },
    [__switchTodo.rejected]: (state, action) => {
      state.isLoading = false;
      state.isError = true;
      state.error = action.payload;
    },
    [__switchTodo.pending]: (state) => {
      state.isLoading = true;
      state.isError = false;
    },
  },
});

export const {} = todosSlice.actions;
export default todosSlice.reducer;
