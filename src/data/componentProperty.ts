/**
 * [exports description]
 * @author lei on 2019/1/3
 */

// title: 只是标题
// componentProperty;

const globalStyle = {
    // 布局
    flex: [],
    flexDirection: [],
    justifyContent: [],
    alignItems: [],
    margin: ['marginTop', 'marginBottom', 'marginLeft', 'marginRight'],
    padding: ['paddingTop', 'paddingBottom', 'paddingLeft', 'paddingRight'],
    size: ['width', 'height', 'minWidth', 'maxWidth', 'minHeight', 'maxHeight'],

    position: [],
    position_ditance: ['top', 'left', 'bottom', 'right'],
    aspectRatio: [],   // 宽高比

};

const components = {

    View: {
        style: {
            // common
            ...globalStyle,
            backgroundColor: [],
            border: ['borderStyle', 'borderColor', 'borderRadius', 'borderWidth'],
            opacity: [],
        },
        other: {
            touch: [],
        }
    },
    Image: {
        style: {
            // common
            ...globalStyle,

        },
        other: {
            source: [],
            touch: [],
        }
    },
    ImageBackground: {
        style: {
            // common
            ...globalStyle,

        },
        other: {
            source: [],
            touch: [],
        }
    },
    Text: {
        style: {
            // common
            color: [],
            fontSize: [],
            fontStyle: [],
            fontWeight: [],
            lineHeight: [],
            textDecorationLine: [],
            // textShadowColor: [],
        },
        other: {
            text: [],
        }
    },

    TextInput: {
        style: {
            // common
            ...globalStyle,
            color: [],
            fontSize: [],
        },
        other: {
            autoFocus: [],
            placeholder: [],
            placeholderTextColor: [],
            keyboardType: [],
            defaultValue: [],
            onChangeText: [],
        }
    },

};

const propertyInfo = {
    flex: {
        type: 'input',
        limit: 'number',
    },
    flexDirection: {
        type: 'select',
        limit: 'row,column',
    },
    justifyContent: {
        type: 'select',
        limit: 'center,flex-start,flex-end,space-around,space-between',
    },
    alignItems: {
        type: 'select',
        limit: 'center,flex-start,flex-end,space-around,space-between',
    },
    margin: {
        type: 'title',
    },
    marginHorizontal: {
        type: 'input',
        limit: 'number',
    },
    marginVertical: {
        type: 'input',
        limit: 'number',
    },
    marginTop: {
        type: 'input',
        limit: 'number',
    },
    marginBottom: {
        type: 'input',
        limit: 'number',
    },
    marginLeft: {
        type: 'input',
        limit: 'number',
    },
    marginRight: {
        type: 'input',
        limit: 'number',
    },

    padding: {
        type: 'title',
    },
    paddingHorizontal: {
        type: 'input',
        limit: 'number',
    },
    paddingVertical: {
        type: 'input',
        limit: 'number',
    },
    paddingTop: {
        type: 'input',
        limit: 'number',
    },
    paddingBottom: {
        type: 'input',
        limit: 'number',
    },
    paddingLeft: {
        type: 'input',
        limit: 'number',
    },
    paddingRight: {
        type: 'input',
        limit: 'number',
    },

    size: {
        type: 'title',
    },
    // size: ['width', 'height', 'minWidth', 'maxWidth', 'minHeight', 'maxHeight'],
    width: {
        type: 'input',
    },
    height: {
        type: 'input',
    },
    minWidth: {
        type: 'input',
    },
    maxWidth: {
        type: 'input',
    },
    minHeight: {
        type: 'input',
    },
    maxHeight: {
        type: 'input',
    },

    position: {
        type: 'select',
        limit: 'relative,absolute',
    },
    position_ditance: {
        type: 'title',
    },
    top: {
        type: 'input',
        limit: 'number',
    },
    left: {
        type: 'input',
        limit: 'number',
    },
    bottom: {
        type: 'input',
        limit: 'number',
    },
    right: {
        type: 'input',
        limit: 'number',
    },

    aspectRatio: {
        type: 'input',
        limit: 'number',
    },

    // View
    // border: ['borderStyle', 'borderColor', 'borderRadius', 'borderWidth'],
    // opacity: [],
    backgroundColor: {
        type: 'select',
        limit: 'solid,dotted,dashed',
    },
    border: {
        type: 'title',
    },
    borderStyle: {
        type: 'select',
        limit: 'solid,dotted,dashed',
    },
    borderColor: {
        type: 'input',
    },
    borderWidth: {
        type: 'input',
        limit: 'number',
    },
    borderRadius: {
        type: 'input',
        limit: 'number',
    },
    opacity: {
        type: 'input',
        limit: 'number',   // 0 - 1
    },

    // text
    color: {
        type: 'input',
    },
    fontSize: {
        type: 'input',
        limit: 'number',
    },
    fontStyle: {
        type: 'select',
        limit: 'normal,italic',
    },
    fontWeight: {
        type: 'select',
        limit: 'normal,bold',  // 还需要一个系统设置的
    },
    lineHeight: {
        type: 'input',
        limit: 'number',
    },
    textDecorationLine: {
        type: 'select',
        limit: 'none,underline,line-through,underline line-through',  // 还需要一个系统设置的
    },
};

const propertyOtherInfo = {
    source: {
        type: 'selectImg'
    },

    text: {
        type: 'input',
    },

    // autoFocus: [],
    // placeholder: [],
    // placeholderTextColor: [],
    // keyboardType: [],
    // defaultValue: [],
    // onChangeText: [],

    autoFocus: {
        type: 'switch',
    },
    placeholder: {
        type: 'input',
    },
    placeholderTextColor: {
        type: 'input',
    },
    keyboardType: {
        type: 'select',
        limit: 'default,numeric',
    },
    defaultValue: {
        type: 'input',
    },
    onChangeText: {
        type: 'input',
        subType: 'func',
    },

    touch: {
        type: 'touchSwitch',
    }
};

const componentProperty = {
    components: components,
    info: propertyInfo,
    other: propertyOtherInfo,
};

export default componentProperty;