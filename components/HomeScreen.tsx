import React from "react";
import { Box } from "./ui/box";
import { Text } from "./ui/text";
import { Icon, MenuIcon } from "./ui/icon";
import { FlatList, Pressable } from "react-native";

interface Item {
  id: string;
  text: string;
}

const data: Item[] = [
  { id: "1", text: "Item 1" },
  { id: "2", text: "Item 2" },
  { id: "3", text: "Item 3" },
  // Add more items as needed
];

function HomeScreen() {
  const ListItem = ({ item }: { item: Item }) => (
    <Box className="flex flex-row items-center justify-between">
      <Text>{item.text}</Text>
      <Pressable onPress={() => alert("Button pressed")}>
        <Icon as={MenuIcon} />
      </Pressable>
    </Box>
  );

  return (
    <Box className="flex flex-col h-full">
      <FlatList
        data={data}
        renderItem={ListItem}
        keyExtractor={(item: Item) => item.id}
      />
    </Box>
  );
}

export default HomeScreen;
