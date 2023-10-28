import { createSlice } from '@reduxjs/toolkit';
import { addContact, deleteContact, fetchContacts } from './operations';

const handlePending = state => {
  state.isLoading = true;
};

const handleRejected = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
};

const contactSlice = createSlice({
  name: 'contacts',
  initialState: {
    users: [],
    isLoading: false,
    error: null,
  },
  extraReducers: {
    [fetchContacts.pending]: handlePending,
    [fetchContacts.fulfilled](state, action) {
      state.isLoading = false;
      state.error = null;
      state.users = action.payload;
    },
    [fetchContacts.rejected]: handleRejected,
    // *******************
    [addContact.pending]: handlePending,
    [addContact.fulfilled](state, action) {
      state.isLoading = false;
      state.error = null;
      state.users.push(action.payload);
    },
    [addContact.rejected]: handleRejected,
    // ********************
    [deleteContact.pending]: handlePending,
    [deleteContact.fulfilled](state, action) {
      state.isLoading = false;
      state.error = null;
      // const index = state.users.findIndex(user => user.id === action.payload);
      // state.users.splice(index, 1);
      state.users = state.users.filter(user => user.id !== action.payload);
    },
    [deleteContact.rejected]: handleRejected,
  },
});

export const contactsReducer = contactSlice.reducer;
