/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */
'use strict';
import React, {
    AppRegistry,
    Component,
    StyleSheet,
    Text,
    View,
    ListView
} from 'react-native';

var MOCKED_DATA = [
    {title: 'Title', year: '2015', posters: {thumbnail: require('../images/cloud.png')}},
    {title: 'Title1', year: '2015', posters: {thumbnail: require('../images/cloud.png')}},
    {title: 'Title2', year: '2015', posters: {thumbnail: require('../images/cloud.png')}},
    {title: 'Title3', year: '2015', posters: {thumbnail: require('../images/cloud.png')}},
    {title: 'Title4', year: '2015', posters: {thumbnail: require('../images/cloud.png')}},
    {title: 'Title5', year: '2015', posters: {thumbnail: require('../images/cloud.png')}}
];
class react_native_list_view extends Component {
    constructor(props) {
        super(props);
        this.state = {
            dataSource: new ListView.DataSource({
                rowHasChanged: (row1, row2) => row1 !== row2,
                sectionHeaderHasChanged: (s1, s2) => s1 !== s2
            })
        }
    }

    fetchData() {
        this.setState({
            dataSource: this.state.dataSource.cloneWithRows(MOCKED_DATA)
        })
    }

    componentDidMount() {
        this.fetchData()
    }

    renderRow(obj) {
        return (
            <Text>{obj.title}</Text>
        )
    }

    render() {
        return (
            <ListView
                dataSource={this.state.dataSource}
                renderRow={this.renderRow}
                renderSectionHeader = {this.renderSectionHeader}
                renderSeparator={() => (<View style={styles.separator}></View>)}
                style={styles.container}></ListView>
        )

    }
}

const styles = StyleSheet.create({
    container: {
        marginTop: 20,
        flex: 1
    },
    listItem: {
        height: 90,
        backgroundColor: '#48d148',
        borderColor: '#000fff',
        flexDirection: 'row'
    },
    separator: {
        height: 1,
        width: null,
        backgroundColor: '#737373'
    }
});

AppRegistry.registerComponent('react_native_list_view', () => react_native_list_view);
