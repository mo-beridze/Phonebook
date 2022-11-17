import { TextField, Typography, Grid, Button } from "@mui/material";
import contactsOperatios from "../../redux/contacts/contacts-operations";
import { useState } from "react";
import { useDispatch } from "react-redux";

export default function Form() {
  const dispatch = useDispatch();
  const [name, setName] = useState("");
  const [number, setNumber] = useState("");
  const [newContacts, setNewContacts] = useState({});

  const handleChange = (event) => {
    const { name, value } = event.target;

    setNewContacts((prev) => ({ ...prev, [name]: value }));

    switch (name) {
      case "name":
        setName(value);
        break;
      case "number":
        setNumber(value);
        break;

      default:
        return;
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    dispatch(contactsOperatios.addContact(newContacts));

    reset();
  };

  const reset = () => {
    setName("");
    setNumber("");
  };

  return (
    <div>
      <Typography sx={{ marginBottom: 5 }} align="center" variant="h5">
        You can add a new contact by filling out the form below
      </Typography>
      <form onSubmit={handleSubmit}>
        <Grid align="center">
          <TextField
            size="small"
            name="name"
            type="text"
            inputProps={{
              pattern: "^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$",
            }}
            label="Name"
            id="name"
            onChange={handleChange}
            value={name}
          />
          <TextField
            name="number"
            type="number"
            size="small"
            inputProps={{
              inputMode: "numeric",
              pattern: "+?d{1,4}?[-.s]?(?d{1,3}?)?[-.s]?d{1,4}[-.s]?d{1,4}[-.s]?d{1,9}",
            }}
            label="Number"
            id="number"
            onChange={handleChange}
            value={number}
          />
          <Button
            type="submit"
            variant="contained"
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
            Add contact
          </Button>
        </Grid>
        {/* {isLoading && (
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
      </form>
    </div>
  );
}
