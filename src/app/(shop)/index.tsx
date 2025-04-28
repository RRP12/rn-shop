import { ProductListItem } from "@/components/product-list-item"
import { PRODUCTS } from "../../../assets/products"
import React from "react"
import { FlatList, StyleSheet, View } from "react-native"
import { ListHeader } from "@/components/list-header"

export default function Index() {
  return (
    <View style={{ paddingTop: 10 }}>
      <FlatList
        data={PRODUCTS}
        renderItem={({ item }) => <ProductListItem product={item} />}
        keyExtractor={(item) => item.id.toString()}
        numColumns={2}
        ListHeaderComponent={<ListHeader />}
        contentContainerStyle={styles.flatListContent}
        columnWrapperStyle={styles.flatListColumn}
        style={{ paddingHorizontal: 10, paddingVertical: 5 }}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  flatListContent: {
    paddingBottom: 20,
  },
  flatListColumn: {
    justifyContent: "space-between",
  },
})
