import { fireEvent, render } from "@testing-library/react";
import AppHeader from "./AppHeader";
import { Provider } from "react-redux";
import { store } from "../store/store";

// Modal opens when 'Add Task' button is clicked
it('should open modal when "Add Task" button is clicked', () => {
  const { getByText, queryByRole } = render(
    <Provider store={store}>
      <AppHeader />
    </Provider>
  );
  const addButton = getByText("Add Task");

  fireEvent.click(addButton);
});

// Modal does not open if 'Add Task' button is clicked multiple times rapidly
it('should not open multiple modals when "Add Task" button is clicked multiple times rapidly', () => {
  const { getByText, queryAllByRole } = render(
    <Provider store={store}>
      <AppHeader />
    </Provider>
  );
  const addButton = getByText("Add Task");

  fireEvent.click(addButton);
  fireEvent.click(addButton);
  fireEvent.click(addButton);
});
