"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    }
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var antd_1 = require("antd");
var React = require("react");
var react_copy_to_clipboard_1 = require("react-copy-to-clipboard");
require("./Home.css");
var Property_1 = require("../Property/Property");
var ComponentTree_1 = require("../componentTree/ComponentTree");
var Tips_1 = require("./Tips");
var DBHeader_1 = require("./DBHeader");
var Header = antd_1.Layout.Header, Footer = antd_1.Layout.Footer, Sider = antd_1.Layout.Sider, Content = antd_1.Layout.Content;
var Home = (function (_super) {
    __extends(Home, _super);
    function Home() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Home.prototype.render = function () {
        var _this = this;
        return (React.createElement(antd_1.Layout, null,
            React.createElement(Header, { style: { background: '#fff' } },
                React.createElement(DBHeader_1.default, null)),
            React.createElement(antd_1.Layout, { style: { height: '400px' } },
                React.createElement(Sider, { className: 'border homeSider', style: { background: '#fff' } },
                    React.createElement(ComponentTree_1.default, null)),
                React.createElement(Content, { className: 'border', style: { background: '#fff' } },
                    React.createElement(react_copy_to_clipboard_1.CopyToClipboard, { text: 'adfsdfasfvvv', onCopy: function () { return _this.setState({ copied: true }); } },
                        React.createElement(antd_1.Button, { type: "primary" }, "Primary"))),
                React.createElement(Sider, { className: 'border homeSider', style: { background: '#fff' } },
                    React.createElement(Property_1.default, null))),
            React.createElement(Footer, null, "Footer"),
            React.createElement(Tips_1.default, null)));
    };
    return Home;
}(React.Component));
exports.default = Home;
//# sourceMappingURL=Home.js.map