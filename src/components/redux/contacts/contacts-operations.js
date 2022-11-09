import axios from 'axios';
import { pushContact, removeContact, setContacts } from './contactSlice';
import { createAsyncThunk } from '@reduxjs/toolkit';

axios.defaults.baseURL = 'https://connections-api.herokuapp.com';

const getContacts = createAsyncThunk(
  'contacts/getContact',
  async (listContacts, { rejectWithValue, dispatch }) => {
    try {
      const { data } = await axios.get('/contacts', listContacts);
      dispatch(setContacts(data));
    } catch (error) {
      console.log('### error', error);
      console.log(rejectWithValue(error));
    }
  }
);

const addContact = createAsyncThunk(
  'contacts/addContact',
  async ({ name, number }, { rejectWithValue, dispatch }) => {
    try {
      const contact = {
        name: name,
        number: number,
      };
      const { data } = await axios.post(`/contacts`, contact);
      dispatch(pushContact(data));
    } catch (error) {
      console.log(rejectWithValue(error));
    }
  }
);

const deleteContact = createAsyncThunk(
  'contacts/deleteContact',
  async (id, { rejectWithValue, dispatch }) => {
    try {
      await axios.delete(`/contacts/${id}`);
      dispatch(removeContact(id));
    } catch (error) {
      console.log(rejectWithValue(error));
    }
  }
);

const contactsOperatios = { getContacts, deleteContact, addContact };

export default contactsOperatios;
