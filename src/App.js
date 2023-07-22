import "./styles.css";
import { useLocalStorage, useClearLocalStorage } from "./localstoragehook.js";

export default function App() {
  const [value, setValue] = useLocalStorage("value", 0);
  const [data, setData] = useLocalStorage("myData", []);
  const clearLocalStorageForKey = useClearLocalStorage();

  const handleIncrement = () => {
    // setValue to update the state and local storage
    setValue(value + 1);
  };

  const handleAddItem = () => {
    const newItem = { id: Date.now(), name: "New Item" };
    // setData to update the array of objects
    setData([...data, newItem]);
  };
  return (
    <div>
      {/* int */}
      <div>
        <p>value: {value}</p>
        <button onClick={handleIncrement}>Increment</button>
        <button
          onClick={() => {
            clearLocalStorageForKey("value");
            setValue(0);
          }}
        >
          clear localstorage int
        </button>
      </div>

      {/* array */}
      <br />
      <div>
        <button onClick={handleAddItem}>Add Item</button>
        <button
          onClick={() => {
            clearLocalStorageForKey("myData");
            setData([]);
          }}
        >
          clear localstorage array
        </button>
        <p>data:</p>
        <ul>
          {data.map((item) => (
            <li key={item.id}>{item.name}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}
