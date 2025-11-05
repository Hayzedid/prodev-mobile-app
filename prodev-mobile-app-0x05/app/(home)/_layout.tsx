import { AntDesign, EvilIcons, Feather, FontAwesome, Ionicons } from "@expo/vector-icons";
import { Tabs } from "expo-router";

const HomeRootLayout = () => {
  return (
    <Tabs screenOptions={{
        tabBarActiveTintColor: '#34967C',
        tabBarInactiveTintColor: '#8E8E93',
        headerShown: false,
        tabBarStyle: {
          backgroundColor: '#FFFFFF',
          borderTopWidth: 1,
          borderTopColor: '#E5E5E7',
          paddingBottom: 5,
          paddingTop: 5,
          height: 60
        }
    }} >
      <Tabs.Screen name="index" options={{
        title: 'Home',
        tabBarIcon: ({ color }: { color: string }) => <AntDesign name="home" size={24} color={color} />,
      }} />
      <Tabs.Screen name="search" options={{
        title: 'Search',
        headerShown: true,
        headerTitle: 'Search Properties',
        tabBarIcon: ({ color }: { color: string }) => <Feather name="search" size={24} color={color} />,
      }} />
      <Tabs.Screen name="saved" options={{
        title: 'Saved',
        headerShown: true,
        headerTitle: 'Saved Properties',
        tabBarIcon: ({ color }: { color: string }) => <EvilIcons name="heart" size={27} color={color} />
      }} />
      <Tabs.Screen name="inbox" options={{
        title: 'Inbox',
        headerShown: true,
        headerTitle: 'Messages',
        tabBarIcon: ({ color }: { color: string }) => <Ionicons name="chatbubbles-outline" size={24} color={color} />
      }} />
      <Tabs.Screen name="profile" options={{
        title: 'Profile',
        headerShown: true,
        headerTitle: 'My Profile',
        tabBarIcon: ({ color }: { color: string }) => <FontAwesome name="user-o" size={24} color={color} />
      }} />
    </Tabs>
  )
}

export default HomeRootLayout;
