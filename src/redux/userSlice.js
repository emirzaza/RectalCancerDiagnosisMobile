import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';

export const login = createAsyncThunk("user/login", async ({ username, password }) => {
    try {
        const auth = getAuth();
        const userCredential = await signInWithEmailAndPassword(auth, username, password);
        const user = userCredential.user;
        const token = user.stsTokenManager.accessToken;
        const userdata = {
            token,
            user: null,
        };
        return userdata;
    } catch (error) {
        throw error;
    }
});

const initialState = {
    username: null,
    password: null,
    isLoading: false,
    isAuth: false,
    token: null,
    user: null,
    error: null,
};

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setUsername: (state, action) => {
            state.username = action.payload;
        },
        setPassword: (state, action) => {
            state.password = action.payload;
        },
        setIsLoading: (state, action) => {
            state.isLoading = action.payload;
        },
        logout: (state) => {
            state.isAuth = false;
            state.username = null;
            state.password = null;
            state.token = null;
            state.user = null;
            state.error = null;
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(login.pending, (state) => {
                state.isLoading = true;
                state.isAuth = false;
            })
            .addCase(login.fulfilled, (state, action) => {
                state.isLoading = false;
                state.isAuth = true;
                state.user = action.payload.user;
                state.token = action.payload.token;
            })
            .addCase(login.rejected, (state, action) => {
                state.isLoading = false;
                state.isAuth = false;
                state.error = action.error.message;
            });
    },
});

export const { setUsername, setPassword, setIsLoading, logout } = userSlice.actions;

export default userSlice.reducer;
