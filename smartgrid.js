let smartgrid = require('smart-grid');

let settings = {
    outputStyle: 'scss',
    columns: 12,
    offset: '12px',
    mobileFirst: false,
    container: {
        maxWidth: '1800px',
        fields: '60px'
    },
    breakPoints: {
        xlm: {
            width: '1699px',
            fields: '199.5px'
        },
        lm: {
            width: '1599px',
            fields: '224.5px'
        },
        xmd: {
            width: '1024px',
            fields: '138px'
        },
        md: {
            width: '940px',
            fields: '25px'
        },
        sm: {
            width: '768px',
            fields: '15px'
        },
        xxs: {
            width: '440px',
            fields: '10px'
        }
    }
};

smartgrid('./src/styles', settings);


/*
 * mobileFirst
 *  false -> max-width
 *  true -> min-width
 */
