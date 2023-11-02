import { Text, View } from "react-native";

export default function AnimalListScreen() {
  const [animals, setAnimals] = useState([]);
  // Fetch animals from API when the component mounts
  useEffect(() => {
    fetch('https://my-json-server.typicode.com/juliocesarfortes/database/animals')
    .then((response) => response.json())
    .then((data) => setAnimals(data));
  }, []);
  return (
    <View>
      <Text>{JSON.stringify(animals)}</Text>
    </View>
  )
}