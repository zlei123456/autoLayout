/**
 * [exports description]
 * @author lei on 2019/1/17
 */

var $ = require('jquery');

// export const getImages = () => {
//     $.ajax({
//         url: '../../res/',
//         type: 'GET',
//         success: (res) => {
//             console.log('success');
//             console.log(res);
//         },
//         error: (err) => {
//             console.log('error');
//             console.log(err);
//         }
//     });
// };

function titleCase(s: string, splitStr: string) {
    let ss = s.split(splitStr);
    for (let i = 0; i < ss.length; i++) {
        ss[i] = ss[i].slice(0, 1).toUpperCase() + ss[i].slice(1);
    }
    return ss.join('');
}

/****
 * key: 图片的唯一标示符
 * url: 图片的地址
 */
export const initImages = () => {
    let imgs = ['defaultIMG.png', 'xian.png', 'xiazai.png', 'xiazai-id.png', 'xiazai-jindu.png'];

    let imgList = {};
    imgs.map(v => {
        let pre = v.split('.')[0];
        let key = titleCase(pre, '-');

        imgList[key] = {
            key: key,
            url: 'http://localhost:8003/res/' + v,
        };
    });
    return imgList;
};