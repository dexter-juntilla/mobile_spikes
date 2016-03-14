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

var MOCKED_DATA = {
    section1: [
        {title: 'Title', year: '2015'},
        {title: 'Title1', year: '2015'},
        {title: 'Title2', year: '2015'}
    ],
    section2: [
    ],
    section3: [
        {title: 'Title', year: '2015'}
    ]
};

class react_native_list_view_section_headers extends Component {
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
            dataSource: this.state.dataSource.cloneWithRowsAndSections(MOCKED_DATA)
        })
    }

    componentDidMount() {
        this.fetchData()
    }

    renderRow(obj) {
        return (
            <View style={styles.listItem}>
                <Text>{obj.title}</Text>
            </View>
        )
    }

    renderSectionHeader(sectionData, sectionID) {
        return (
            <View style={styles.section}>
                <Text>{sectionID}</Text>
            </View>
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
        height: 30,
        backgroundColor: '#48d148',
        borderColor: '#000fff',
        flexDirection: 'row'
    },
    separator: {
        height: 1,
        width: null,
        backgroundColor: '#737373'
    },
    section: {
        height: 40,
        backgroundColor: '#737373',
        padding: 10
    }
});

AppRegistry.registerComponent('react_native_list_view_section_headers', () => react_native_list_view_section_headers);
