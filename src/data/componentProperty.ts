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
            resizeMode: [],
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
            color: [],
            fontSize: [],
            border: ['borderStyle', 'borderColor', 'borderRadius', 'borderWidth'],
            ...globalStyle,
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
        cn: '弹性布局',
    },
    flexDirection: {
        type: 'select',
        limit: 'row,column',
        cn: '布局方向',
    },
    justifyContent: {
        type: 'select',
        limit: 'center,flex-start,flex-end,space-around,space-between',
        cn: '主轴排列',
    },
    alignItems: {
        type: 'select',
        limit: 'center,flex-start,flex-end,space-around,space-between',
        cn: '次轴排列',
    },
    margin: {
        type: 'title',
        cn: '外边距',
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
        cn: '外边距上',
    },
    marginBottom: {
        type: 'input',
        limit: 'number',
        cn: '外边距下',
    },
    marginLeft: {
        type: 'input',
        limit: 'number',
        cn: '外边距左',
    },
    marginRight: {
        type: 'input',
        limit: 'number',
        cn: '外边距右',
    },

    padding: {
        type: 'title',
        cn: '内边距',
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
        cn: '内边距上',
    },
    paddingBottom: {
        type: 'input',
        limit: 'number',
        cn: '内边距下',
    },
    paddingLeft: {
        type: 'input',
        limit: 'number',
        cn: '内边距左',
    },
    paddingRight: {
        type: 'input',
        limit: 'number',
        cn: '内边距右',
    },

    size: {
        type: 'title',
        cn: '尺寸',
    },
    // size: ['width', 'height', 'minWidth', 'maxWidth', 'minHeight', 'maxHeight'],
    width: {
        type: 'input',
        limit: 'number',
        cn: '宽度',
    },
    height: {
        type: 'input',
        limit: 'number',
        cn: '高度',
    },
    minWidth: {
        type: 'input',
        limit: 'number',
    },
    maxWidth: {
        type: 'input',
        limit: 'number',
    },
    minHeight: {
        type: 'input',
        limit: 'number',
    },
    maxHeight: {
        type: 'input',
        limit: 'number',
    },

    position: {
        type: 'select',
        limit: 'relative,absolute',
        cn: '位置设置',
    },
    position_ditance: {
        type: 'title',
        cn: '位置距离',
    },
    top: {
        type: 'input',
        limit: 'number',
        cn: '距离上',
    },
    left: {
        type: 'input',
        limit: 'number',
        cn: '距离左',
    },
    bottom: {
        type: 'input',
        limit: 'number',
        cn: '距离下',
    },
    right: {
        type: 'input',
        limit: 'number',
        cn: '距离右',
    },

    aspectRatio: {
        type: 'input',
        limit: 'number',
    },

    // View
    // border: ['borderStyle', 'borderColor', 'borderRadius', 'borderWidth'],
    // opacity: [],
    backgroundColor: {
        type: 'inputColor',
        cn: '背景颜色',
    },
    border: {
        type: 'title',
        cn: '边框',
    },
    borderStyle: {
        type: 'select',
        limit: 'solid,dotted,dashed',
        cn: '边框样式',
    },
    borderColor: {
        type: 'input',
        cn: '边框颜色',
    },
    borderWidth: {
        type: 'input',
        limit: 'number',
        cn: '边框宽度',
    },
    borderRadius: {
        type: 'input',
        limit: 'number',
        cn: '边框圆角',
    },
    opacity: {
        type: 'input',
        limit: 'number',   // 0 - 1
        cn: '透明度(0-1)',
    },

    // text
    color: {
        type: 'input',
        cn: '字体颜色',
    },
    fontSize: {
        type: 'input',
        limit: 'number',
        cn: '字体大小',
    },
    fontStyle: {
        type: 'select',
        limit: 'normal,italic',
        cn: '字体样式',
    },
    fontWeight: {
        type: 'select',
        limit: 'normal,bold',  // 还需要一个系统设置的
        cn: '字体粗细',
    },
    lineHeight: {
        type: 'input',
        limit: 'number',
        cn: '字体行高',
    },
    textDecorationLine: {
        type: 'select',
        limit: 'none,underline,line-through,underline line-through',  // 还需要一个系统设置的
        cn: '字体下划线',
    },
};

const propertyOtherInfo = {
    source: {
        type: 'selectImg',
        cn: '资源',
    },
    resizeMode: {
        type: 'select',
        limit: 'cover,contain,stretch',
        cn: '尺寸样式',
    },

    text: {
        type: 'input',
        cn: '文字',
    },

    // autoFocus: [],
    // placeholder: [],
    // placeholderTextColor: [],
    // keyboardType: [],
    // defaultValue: [],
    // onChangeText: [],

    autoFocus: {
        type: 'switch',
        cn: '是否选中',
    },
    placeholder: {
        type: 'input',
        cn: '占位符',
    },
    placeholderTextColor: {
        type: 'input',
        cn: '占位符颜色',
    },
    keyboardType: {
        type: 'select',
        limit: 'default,numeric',
        cn: '键盘样式',
    },
    defaultValue: {
        type: 'input',
        cn: '默认值',
    },
    onChangeText: {
        type: 'input',
        subType: 'func',
        cn: '输入回调',
    },

    touch: {
        type: 'touchSwitch',
        cn: '点击',
    }
};

const componentProperty = {
    components: components,
    info: propertyInfo,
    other: propertyOtherInfo,
};

export default componentProperty;