import s from "./ContactList.module.css";
import contactsOperatios from "../../redux/contacts/contacts-operations";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { Button } from "@mui/material";

export default function ContactList({ contacts }) {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(contactsOperatios.getContacts());
  }, [dispatch]);
  return (
    <ul className={s.section__contacts}>
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
