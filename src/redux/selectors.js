import { createSelector } from '@reduxjs/toolkit';

export const selectContacts = state => state.contacts.users;
// console.log(selectContacts);
export const selectIsLoading = state => state.contacts.isLoading;
export const selectError = state => state.contacts.error;
export const selectFilter = state => state.filter.select;

export const selectVisibleContacts = createSelector(
  [selectContacts, selectFilter],
  (users, select) => {
    if (select !== null) {
      return users.filter(user => user.name.toLowerCase().includes(select));
    }
    return users;
  }
);
