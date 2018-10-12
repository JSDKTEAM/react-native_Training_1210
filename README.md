# react-native_Training_1210

# Tech
  - Expo Cli
  - React-native
  - Redux

# How to install
  - clone to your directory then npm install
  
 
# Topic
  - Introduce React , Expo
  - Hello World
  - Create View,Text,Image,Button Components
  - State,Props
  - Page Navigation , Tab Bar Navigate
  - FlatList
  - Npm node basic
  - Performance improvement
  - Redux State
  - Responsive Pixel Perfact
  - Etc ..
  

 # Lib
    - npm install --save react-navigation
    - npm install --save redux
    - npm install --save react-redux
    - npm install --save redux-thunk

# Performance improve
 - purecomponent or shoundComponent

 shouldComponentUpdate(nextProps, nextState) {
    if(this.props.firstProp === nextProps. firstProp &&
       this.props.secondProp === nextProps.secondProp) {
      return false;
    }
    return true
  }
  shouldComponentUpdate(nextProps, nextState) {
    if(this.state.isLoading === nextState. isLoading) {
      return false;
    }
    return true
  }

  - FlatList , SectionList use key
    <FlatList
        data={[{key: 'a'}, {key: 'b'}]}
        keyExtractor={(item, index) => item.id}
        renderItem={({item}) => <Text>{item.key}}
    />

  
