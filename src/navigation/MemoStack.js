import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import MemoList from "../screens/MemoList";
import MemoEditor from "../screens/MemoEditor";
import MarkdownPreview from "../screens/MarkdownPreview";

const Stack = createNativeStackNavigator();

function MemoStack() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="MemoList"
          component={MemoList}
          options={{
            title: "메모",
            headerBackTitleVisible: true,
            headerShadowVisible: false,
            headerSearchBarOptions: {
              placeholder: "검색",
              cancelButtonText: "취소",
              headerTransparent: false,
              hideWhenScrolling: false,
            },
          }}
        />
        <Stack.Screen
          name="MemoEditor"
          component={MemoEditor}
          options={{
            title: null,
            headerShadowVisible: false,
            headerBackTitleVisible: false,
          }}
        />
        <Stack.Screen
          name="MarkdownPreview"
          component={MarkdownPreview}
          options={{
            title: "미리보기",
            headerShadowVisible: false,
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default MemoStack;
