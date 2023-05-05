import { render } from "@testing-library/react";
import { Provider } from "react-redux";
import Header from "../Header";
import store from "../../utils/store";
import { StaticRouter } from "react-router-dom/server";

test("Logo should load on rendering header", () => {
  //Load Header
  const header = render(
    <StaticRouter>
      <Provider store={store}>
        <Header />
      </Provider>
    </StaticRouter>
  );
  const logo = header.getAllByTestId("logo");
  expect(logo[0].src).toBe(
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRgBi7E1isblsGUY9Bupe1WDKGxFyCiUJIk4g&usqp=CAU"
  );
});

test("Cart Should have zero items", () => {
  //Load Header
  const header = render(
    <StaticRouter>
      <Provider store={store}>
        <Header />
      </Provider>
    </StaticRouter>
  );
  const cart = header.getByTestId("cart");

  expect(cart.innerHTML).toBe("Cart 0 items");
});
