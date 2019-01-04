/**
 * [exports description]
 * @author lei on 2019/1/3
 */

const componentProperty = {
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
        other: {

        }

    }

};

export default componentProperty;