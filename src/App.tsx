import { useState } from "react";
import Alert from "./components/Alert";
import Button from "./components/Button";
import ListGroup from "./components/ListGroup";
import Message from "./components/Message";

function App() {
  let items = [
    "New York",
    "San Francisco",
    "Tokyo",
    "London",
    "Paris",
    "Colombo",
  ];
  const [showAlert, setShowAlert] = useState(false);

  const handleSelectItem = (item: string) => {
    console.log(item);
  };

  return (
    <div className="container d-flex flex-column gap-3">
      <Message />
      <ListGroup
        items={items}
        heading="Cities"
        onSelectItem={handleSelectItem}
      />
      {showAlert && (
        <Alert onClose={() => setShowAlert(false)}>
          <span>Hello world</span>
        </Alert>
      )}
      {!showAlert && (
        <Button onClick={() => setShowAlert(true)}>
          Click the button to show alert
        </Button>
      )}
    </div>
  );
}

export default App;
