function NavigationBar() {
  // TODO: Actually implement a navigation bar
  return <h1>Hello from React!</h1>;
}

const domNode = document.getElementById('navigation');
const root = ReactDOM.createRoot(domNode);
root.render(<NavigationBar />);