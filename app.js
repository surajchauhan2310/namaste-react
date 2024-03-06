// For Single element
const heading = React.createElement(
  "h1",
  { id: "heading", abc: "xyz" },
  "Hello React!"
);

const heading1 = React.createElement(
  "h1",
  { id: "heading", abc: "xyz" },
  "Hello React!"
);
const heading2 = React.createElement(
  "h1",
  { id: "heading", abc: "xyz" },
  "Hello React!"
);
// For Nested Element
// const parent = React.createElement(
//   "div",
//   { id: "parent" },
//   React.createElement(
//     "div",
//     { id: "child" },
//     React.createElement(
//       "h1",
//       { id: "header" },
//       "Hello, I'm the Header of this page"
//     )
//   )
// );

// For Sibling Elements
const parent = React.createElement("div", { id: "parent" }, [
  React.createElement("div", { id: "child1" }, [
    React.createElement(
      "h1",
      { id: "header1s" },
      "Hello, I'm the Header 1 of this page"
    ),
    React.createElement(
      "h2",
      { id: "header2" },
      "Hello, I'm the Header 2 of this page"
    ),
  ]),
  React.createElement("div", { id: "child2" }, [
    React.createElement(
      "h1",
      { id: "header1s" },
      "Hello, I'm the Header 1 of this page"
    ),
    React.createElement(
      "h2",
      { id: "header2" },
      "Hello, I'm the Header 2 of this page"
    ),
  ]),
]);
// console.log(heading);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);
console.log(parent);
