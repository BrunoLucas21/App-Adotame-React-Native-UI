import { useState } from "react";
import { View } from "react-native";
import { Searchbar } from "react-native-paper";

export default function BarraPesquisa() {
  const [search, setSearch] = useState();
  const onChangeSearch = query => setSearch(query);

  return (
    <View className="p-2 my-7">
      {/* Barra de pesquisa */}
      <Searchbar
        placeholder='Busque ONGs, Cachorros, Gatos...'
        iconColor="#374151"
        value={search}
        onChangeText={onChangeSearch}
        onSubmitEditing={() => console.log('submit')}
      />
    </View>
  )
}