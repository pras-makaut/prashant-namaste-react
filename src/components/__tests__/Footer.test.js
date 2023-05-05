import { render } from "@testing-library/react";
import { Provider } from "react-redux";
import store from "../../utils/store";
import { StaticRouter } from "react-router-dom/server";
import Footer from "../Footer";

test("Footer is persent or not", () => {
  //Load Header
  const footer = render(
    <StaticRouter>
      <Provider store={store}>
        <Footer />
      </Provider>
    </StaticRouter>
  );

  const x = footer.getByTestId("footer");

  expect(x.innerHTML).toBe("Footer");
});
