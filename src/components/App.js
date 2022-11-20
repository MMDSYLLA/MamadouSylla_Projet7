import Alert from "./alert";
function App() {
  return (
    <div className="App">
      <Alert type="error" message="Error" />
      <Alert type="success">
        <p>Success message</p>
      </Alert>
      <Alert type="primary">
        <h4>primary message</h4>
      </Alert>
      <Alert type="secondary">
        <span>secondary message</span>
      </Alert>
    </div>
  );
}
 export default App ;
  