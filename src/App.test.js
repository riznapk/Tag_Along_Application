// import React from "react";
// import { render } from "@testing-library/react";
// import App from "../App";

// test("renders Subscribe and follow @rakibtg link", () => {
//   const { getByText } = render(<App />);
//   const linkElement = getByText(/hi/i);
//   expect(linkElement).toBeInTheDocument();
// });

// import renderer from 'react-test-renderer';
// import App from '../App';

// it('renders correctly', () => {
//   const tree = renderer
//     .create(<Link page="http://www.facebook.com">Facebook</Link>)
//     .toJSON();
//   expect(tree).toMatchSnapshot();
// });

import React from "react";
import renderer from "react-test-renderer";
import App from "./App";

it("renders correctly when there are no items", () => {
  const tree = renderer.create(<App />).toJSON();
  expect(tree).toMatchSnapshot();
});
