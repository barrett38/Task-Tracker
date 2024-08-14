import { render, screen, fireEvent } from "@testing-library/react";
import AddTask from "./AddTask";

test("renders AddTask form", () => {
  render(<AddTask setTasks={() => {}} />);

  expect(screen.getByLabelText(/task/i)).toBeInTheDocument();
  expect(screen.getByLabelText(/day & time/i)).toBeInTheDocument();
  expect(screen.getByLabelText(/set reminder/i)).toBeInTheDocument();
  expect(
    screen.getByRole("button", { name: /save task/i })
  ).toBeInTheDocument();
});

test("submits the form with valid data", () => {
  const setTasks = jest.fn();
  render(<AddTask setTasks={setTasks} />);

  fireEvent.change(screen.getByPlaceholderText(/add task/i), {
    target: { value: "Test Task" },
  });
  fireEvent.change(screen.getByPlaceholderText(/add day/i), {
    target: { value: "2023-10-10" },
  });
  fireEvent.click(screen.getByLabelText(/set reminder/i));
  fireEvent.click(screen.getByRole("button", { name: /save task/i }));

  expect(setTasks).toHaveBeenCalledWith(expect.any(Function));
});

test("shows alert when submitting without task text", () => {
  window.alert = jest.fn();
  render(<AddTask setTasks={() => {}} />);

  fireEvent.click(screen.getByRole("button", { name: /save task/i }));

  expect(window.alert).toHaveBeenCalledWith("Please add a task");
});
