import s from "./ContactList.module.css";
import contactsOperatios from "../../redux/contacts/contacts-operations";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { Button } from "@mui/material";
// import { RotatingLines } from 'react-loader-spinner';
//
// # See https://help.github.com/articles/ignoring-files/ for more about ignoring files.

// # dependencies
// /node_modules
// /.pnp
// .pnp.js

// # testing
// /coverage

// # production
// /build

// # misc
// .DS_Store
// .env.local
// .env.development.local
// .env.test.local
// .env.production.local

// npm-debug.log*
// yarn-debug.log*
// yarn-error.log*
//

export default function ContactList({ contacts }) {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(contactsOperatios.getContacts());
  }, [dispatch]);
  return (
    <ul>
      {contacts &&
        contacts.map((contact) => (
          <li key={contact.id} className={s.item}>
            <p className={s.name}>{contact.name} :</p>
            <p className={s.number}>{contact.number}</p>
            <Button
              type="submit"
              variant="contained"
              onClick={() => dispatch(contactsOperatios.deleteContact(contact.id))}
              sx={{
                marginLeft: "20px",
                backgroundColor: "#e0e0bc",
                color: "black",
                "&:hover": {
                  backgroundColor: "#e3e2e2",
                  color: "black",
                },
              }}
            >
              Delete
            </Button>

            {/* {isFetching && (
            <RotatingLines
              height="30"
              width="30"
              radius="10"
              color="green"
              ariaLabel="three-dots-loading"
              wrapperStyle
              wrapperClass
            />
          )} */}
          </li>
        ))}
    </ul>
  );
}
