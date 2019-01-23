/**
 * [exports description]
 * @author lei on 2019/1/11
 */

export const phoneWidth = 750;
export const phoneHeight = 1334;
export const phoneScale = 0.5;

// 0: View 1: style  2: children 3: space
export const componetCode =
`{3}<{0} style={{1}}>
{2}
{3}</{0}>
`;

// 4: 图片key值
export const imgCode =
`{3}<{0} style={{1}} source={resMap.{4}>
{2}
{3}</{0}>
`;

export const textCode =
`{3}<{0} style={{1}}>
{2}
{3}</{0}>
`;

export const textInputCode =
`{3}<{0} style={{1}} 
{2}
{3}/>
`;

export const otherCode =
`{2}{0}={{1}}
`;