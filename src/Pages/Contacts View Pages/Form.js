import {
  TextField,
  Grid,
  Button,
  useTheme,
  useMediaQuery,
  Paper,
  Box,
} from "@mui/material";
import contactsOperatios from "../../redux/contacts/contacts-operations";
import { useState } from "react";
import { useDispatch } from "react-redux";

export default function Form() {
  const dispatch = useDispatch();
  const [name, setName] = useState("");
  const [number, setNumber] = useState("");
  const [newContacts, setNewContacts] = useState({});

  const theme = useTheme();
  const isMatch = useMediaQuery(theme.breakpoints.down("md"));

  const boxButton = { display: "flex" };
  const responsivePaperStyle = {
    padding: "35px 25px",
    width: 300,
    margin: "40px auto",
  };

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
      {isMatch ? (
        <Paper elevation={10} style={responsivePaperStyle}>
          <form onSubmit={handleSubmit}>
            <Grid align="center" sx={{ with: 300 }}>
              <TextField
                sx={{ marginBottom: 4 }}
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
                sx={{ marginBottom: 4 }}
                name="number"
                type="number"
                size="small"
                inputProps={{
                  inputMode: "numeric",
                  pattern:
                    "+?d{1,4}?[-.s]?(?d{1,3}?)?[-.s]?d{1,4}[-.s]?d{1,4}[-.s]?d{1,9}",
                }}
                label="Number"
                id="number"
                onChange={handleChange}
                value={number}
              />
              <Box style={boxButton} justifyContent="center" alignItems="center">
                <Button
                  type="submit"
                  variant="contained"
                  sx={{
                    marginLeft: "20px",
                    backgroundColor: "#427AA1",
                    "&:hover": {
                      backgroundColor: "#EBF2FA",
                      color: "black",
                    },
                  }}
                >
                  Add contact
                </Button>
              </Box>
            </Grid>
          </form>
        </Paper>
      ) : (
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
        </form>
      )}
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
    </div>
  );
}
