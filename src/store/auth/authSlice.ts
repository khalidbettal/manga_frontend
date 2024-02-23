
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import api, { crsf } from '../../api/api';



interface Credentials {
    name: string;
    email: string;
    password: string;
    password_confirmation: string;
}



const SESSION_NAME = 'session-verified';

export const fetchUser = createAsyncThunk('auth/fetchUser', async (_, { rejectWithValue }) => {
  try {
    await crsf();
    const { data } = await api.get('/api/user');
    window.localStorage.setItem(SESSION_NAME, 'true');
    return data;
  } catch (error : string | any) {
    return rejectWithValue(error.response.data.message);
  }
});

export const loginUser = createAsyncThunk('auth/loginUser', async ({ email, password }: Credentials , { rejectWithValue }) => {
  try {
    await crsf();
    await api.post('/login', { email, password });
    return true
  } catch (error : string | any) {
    return rejectWithValue(error.response.data.message);
  }
});

export const registerUser = createAsyncThunk(
  'auth/registerUser',
  async ({ name, email, password, password_confirmation }: Credentials, { rejectWithValue }) => {
    try {
      await crsf();
      await api.post('/register', { name, email, password, password_confirmation });
      return true ;
    } catch (error : string | any) {
      return rejectWithValue(error.response.data.message);
    }
  }
);

// ... other async actions as before ...

const initialState = {
    user: null,
    errors: {},
    loading: true,
    status: null,
    sessionVerified: JSON.parse(window.localStorage.getItem(SESSION_NAME) || 'false'),
  };

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    
  },
  extraReducers: {
    [`${fetchUser.pending}`](state) {
      state.loading = true;
      console.log('Pending');
    },
    [`${fetchUser.fulfilled}`](state, action) {
      state.loading = false;
      state.user = action.payload;
      console.log(state.user);
    },
    [`${fetchUser.rejected}`](state, action) {
      state.loading = false;
      state.errors = action.payload;
      console.log('Rejected');
    },
  
    [`${loginUser.pending}`](state) {
      state.loading = true;
      console.log('Pending');
    },
    [`${loginUser.fulfilled}`](state, action) {
      state.loading = false;
      state.user = action.payload;
      state.sessionVerified = true;
      window.location.href = '/';
    },
    [`${loginUser.rejected}`](state, action) {
      state.loading = false;
      state.errors = action.payload;
      console.log('Rejected');
  },
  [`${registerUser.pending}`](state) {
    state.loading = true;
    console.log('Pending');
  },
  [`${registerUser.fulfilled}`](state, action) {
    state.loading = false;
    state.user = action.payload;
    state.sessionVerified = true;
    console.log('Fulfilled', state.user);
  },
  [`${registerUser.rejected}`](state, action) {
    state.loading = false;
    state.errors = action.payload;
    console.log('Rejected');
  }
  
  },
});


export default authSlice.reducer;
