import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

interface Props {

}

function VaccinComponent<NavigationFunctionComponent>(props: Props) {
  return (
    <View style={styles.container}>
      <View>
        <Text>Tổng quan</Text>
        <View>
          <Text>8</Text>
          <Text>Tổng số</Text>
        </View>
        <View>
          <Text>4</Text>
          <Text>Hoạt động</Text>
        </View>
        <View>
          <Text>4</Text>
          <Text>Ngừng Hoạt động</Text>
        </View>
        <View>
          <Text>4</Text>
          <Text>Gần bạn</Text>
        </View>
      </View>
      <View>
        <Text>
          Tin tức
        </Text>
        <Text>
          Thông tin chiến dịch
        </Text>
        <Text>
          Lịch sử tiêm chủng
        </Text>
        <Text>
          Kiểm tra tiêm chủng
        </Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  text: {
    color: '#000',
    fontSize: 12,
  }
})

VaccinComponent.options = () => {
  return {
    topBar: {
      title: {
        text: 'Tiêm chủng',
        color: '#000',
      },
      background: {
        // component: {
        //   name: 'header-background'
        // }
      }
    }
  }
}

export default VaccinComponent;