"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var componentProperty = {
    View: {
        style: {
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
            marginTop: {
                type: 'input',
                limit: 'number',
            }
        },
        other: {}
    }
};
exports.default = componentProperty;
//# sourceMappingURL=componentProperty.js.map