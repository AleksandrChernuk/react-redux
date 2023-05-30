import { useDispatch } from "react-redux";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import IconButton from "@mui/material/IconButton";
import DeleteIcon from "@mui/icons-material/Delete";
import ListItemText from "@mui/material/ListItemText";
import Grid from "@mui/material/Grid";
import { useEffect } from "react";
import { fetchTodos, deleteTodos } from "../../redux/todos/todos-operation";

import { useVisibalItems } from "../../services/useVisibalItems";

export const TodosList = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchTodos());
  }, [dispatch]);

  const visibalItems = useVisibalItems();

  return (
    <Grid container direction="column" justifyContent="center" alignItems="flex-start">
      <List>
        {visibalItems.map((el) => (
          <ListItem key={el.id}>
            <ListItemText>
              {el.name} : {el.number}
            </ListItemText>
            <IconButton onClick={() => dispatch(deleteTodos(el.id))} type="button" style={{ marginLeft: "10px" }}>
              <DeleteIcon />
            </IconButton>
          </ListItem>
        ))}
      </List>
    </Grid>
  );
};
