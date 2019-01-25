/**
 * [exports description]
 * @author lei on 2019/1/11
 */

export const phoneWidth = 750;
export const phoneHeight = 1334;
export const phoneScale = 0.5;

export const touchTypes = {'none': 'TouchableWithoutFeedback', 'opacity': 'TouchableOpacity', 'highlight': 'TouchableHighlight'};

// 0: View 1: style  2: children 3: space
export const componetCode =
`{3}<{0} style={{1}}>
{2}
{3}</{0}>`;

// 4: 图片key值
export const imgCode =
`{3}<{0} style={{1}} source={resMap.{4}}>
{2}
{3}</{0}>`;

export const textCode =
`{3}<{0} style={{1}}>
{3}\t{'{2}'}
{3}</{0}>`;

export const textInputCode =
`{3}<{0} style={{1}} 
{2}
{3}/>`;

export const touchCode =
`{3}<{0} {1}>
{2}
{3}</{0}>`;

export const otherCode =
`{2}{0}={{1}}
`;

export const pColors = {
    viewBg: {color: '#ffffff'},
    line: {color: '#ededed'},

    f_common: {color: '#7e7e7e'},
    f_touch: {color: '#20a2f5'},
};