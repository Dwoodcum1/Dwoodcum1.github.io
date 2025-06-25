// Clear the existing HTML content
document.body.innerHTML = '<div id="app">Hello</div>';

// Render your React component instead
const root = createRoot(document.getElementById('app'));
root.render(<h1>Hello, world</h1>);