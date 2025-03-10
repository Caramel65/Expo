import React from "react"
import { StyleSheet, Text, View, Image, FlatList, SafeAreaView } from "react-native"

export default function FlatListDemo() {
  // ข้อมูลชุดที่ใช้ใน FlatList
  const data = [
    {
      id: 1,
      name: "Honkai star rail เถื่อน",
      imgurl:
        "https://static.wikia.nocookie.net/houkai-star-rail/images/a/a0/Splash_Screen_Galactic_Roaming.png/revision/latest?cb=20230606083330",
    },
    {
      id: 2,
      name: "Honkai star rail เถื่อน",
      imgurl:
        "https://static.wikia.nocookie.net/houkai-star-rail/images/d/d6/Splash_Screen_Even_Immortality_Ends.png/revision/latest?cb=20230717104054",
    },
    {
      id: 3,
      name: "Honkai star rail เถื่อน",
      imgurl:
        "https://webstatic.hoyoverse.com/upload/op-public/2023/08/29/157d0f4e46406bfb2412d5fd356cceff_4162711440125055416.png",
    },
    {
      id: 4,
      name: "Honkai star rail เถื่อน",
      imgurl:
        "https://cdn.oneesports.co.th/cdn-data/sites/3/2023/10/bedd258705dcf351726c0aa300481965-1024x576.jpg",
    },
    {
      id: 5,
      name: "Honkai star rail เถื่อน",
      imgurl:
        "https://static.wikia.nocookie.net/houkai-star-rail/images/8/8c/Splash_Screen_The_Crepuscule_Zone.png/revision/latest?cb=20231114233538",
    },
    {
      id: 6,
      name: "Honkai star rail เถื่อน",
      imgurl:
        "https://assetsio.gnwcdn.com/V2-Honkai-Star-Rail-1.6-release-date%2C-1.6-Banner-and-event-details-cover.jpg?width=1200&height=1200&fit=bounds&quality=70&format=jpg&auto=webp",
    },
    {
      id: 7,
      name: "Honkai star rail เถื่อน",
      imgurl:
        "https://fastcdn.hoyoverse.com/content-v2/hkrpg/123034/07d78af13e1d6e0062bed4e080619060_3091942489006056115.jpg",
    },
    {
      id: 8,
      name: "Honkai star rail เถื่อน",
      imgurl:
        "https://fastcdn.hoyoverse.com/content-v2/hkrpg/123642/93e8fa2323df053308cb13299e6dc4d0_5485147093612598847.jpg",
    },
    {
      id: 9,
      name: "Honkai star rail เถื่อน",
      imgurl:
        "https://static.wikia.nocookie.net/houkai-star-rail/images/9/9e/Splash_Screen_Farewell%2C_Penacony.png/revision/latest?cb=20240617050226",
    },
    {
      id: 10,
      name: "Honkai star rail เถื่อน",
      imgurl:
        "https://assetsio.gnwcdn.com/Honkai-Star-Rail-2.4-release-date%2C-2.4-Banner-and-event-details-cover.jpg?width=1200&height=1200&fit=bounds&quality=70&format=jpg&auto=webp",
    },
  ]

  // ฟังก์ชันสำหรับการเรนเดอร์แต่ละรายการใน FlatList
  const renderItem = ({ item }: any) => (
    <View style={styles.card}>
      <Image source={{ uri: item.imgurl }} style={styles.image} />
      <Text style={styles.title}>{item.name}</Text>
    </View>
  )

  return (
    <SafeAreaView style={{flex: 1}}>
      <View style={styles.container}>
        <FlatList
          data={data} // กำหนดข้อมูล
          renderItem={renderItem} // ฟังก์ชันสำหรับเรนเดอร์แต่ละรายการ
          keyExtractor={(item) => item.id.toString()} // กำหนด key แต่ละรายการ
          contentContainerStyle={styles.listContainer} // กำหนดสไตล์ของ FlatList
        />
      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f5f5f5",
    paddingTop: 10,
  },
  listContainer: {
    paddingHorizontal: 10,
  },
  card: {
    backgroundColor: "#fff",
    borderRadius: 10,
    marginBottom: 15,
    overflow: "hidden",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  image: {
    width: "100%",
    height: 150,
  },
  title: {
    fontSize: 16,
    fontWeight: "bold",
    padding: 10,
    color: "#333",
  },
})