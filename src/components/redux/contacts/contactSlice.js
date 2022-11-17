import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  contacts: [],
};

const contactSlice = createSlice({
  name: "contacts",
  initialState,
  reducers: {
    removeContact(state, action) {
      state.contacts = state.contacts.filter(({ id }) => id !== action.payload);
      // почитай про иммутабельность
    },
    setContacts(state, action) {
      state.contacts = action.payload;
    },
    pushContact(state, action) {
      state.contacts = [...state.contacts, action.payload];
    },
  },
});

export const { setContacts, removeContact, pushContact } = contactSlice.actions;
export default contactSlice.reducer;
