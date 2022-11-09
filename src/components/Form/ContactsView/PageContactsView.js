import { useSelector } from 'react-redux';
import { useState, useEffect } from 'react';
import ContactList from './ContactList';
import Filter from './Filter';
import Form from './Form';

export default function PageContactsView() {
  const data = useSelector(state => state.contacts);
  const [filter, setFilter] = useState('');
  const [filtredContacts, setFiltredContacts] = useState([]);

  useEffect(() => {
    const normalizedFilter = filter.toLowerCase();
    const filtredContactsToLowerCase = data.contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
    setFiltredContacts(filtredContactsToLowerCase);
  }, [data, filter]);

  const searchFilter = event => {
    if (data) {
      setFilter(event.currentTarget.value);
    }
  };
  return (
    <div>
      <Form />
      <Filter value={filter} onChange={searchFilter} />
      <ContactList contacts={filtredContacts} />
    </div>
  );
}
