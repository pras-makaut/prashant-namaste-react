import "@testing-library/jest-dom";
import { render, waitFor, fireEvent } from "@testing-library/react";
import Header from "../Header";
import { Provider } from "react-redux";
import store from "../../utils/store.js";
import { StaticRouter } from "react-router-dom/server";
import { MENU_DATA } from "../../mocks/data";
import RestaurentMenu from "../RestaurentMenu";

global.fetch = jest.fn(() => {
  return Promise.resolve({
    json: () => {
      return Promise.resolve(MENU_DATA);
    },
  });
});

test("Add Items to Cart", async () => {
  const body = render(
    <StaticRouter>
      <Provider store={store}>
        <Header />
        <RestaurentMenu />
      </Provider>
    </StaticRouter>
  );

  await waitFor(() => expect(body.getAllByTestId("addBtn")));

  const addBtn = body.getAllByTestId("addBtn");
  console.log(addBtn);

  fireEvent.click(addBtn[0]);
  fireEvent.click(addBtn[1]);

  const cart = body.getByTestId("cart");

  expect(cart.innerHTML).toBe("Cart 2 items");
});
