/**
 * [exports description]
 * @author lei on 2019/1/17
 */
import { initImages } from './nativeUtils';

const imgMgr: any = {
    imgs: {},
};

imgMgr.initImgs = () => {
    imgMgr.imgs = initImages();
};

imgMgr.getImgs = () => {
    return imgMgr.imgs;
};

imgMgr.getImg = (key) => {
    return imgMgr.imgs[key];
};
export default imgMgr;