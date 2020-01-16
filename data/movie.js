// untuk isi paramQuery

const arrayParam = {
    
    apiKeyNegative: [
        {
            case: 'empty string',
            field: 'apikey',
            changing: '',
        },
        {
            case: 'null',
            field: 'apikey',
            changing: null,
        },
        {
            case: 'undefined',
            field: 'apikey',
            changing: undefined,
        },
        {
            case: 'words',
            field: 'apikey',
            changing: 'testing',
        },
        {
            case: 'symbol',
            field: 'apikey',
            changing: '(*&^(^(^%$^$',
        },
    ],

    keywordNegative: [
        {
            case: 'empty string',
            field: 's',
            changing: '',
        },
        {
            case: 'null',
            field: 's',
            changing: null,
        },
        {
            case: 'undefined',
            field: 's',
            changing: undefined,
        },
        {
            case: 'random number',
            field: 's',
            changing: 4552342364,
        },
        {
            case: 'symbol',
            field: 's',
            changing: '(*&^(^(^%$^$',
        },
    ],

    keywordPositive: [
        {
            case: '1 char - lowercase',
            field: 's',
            changing: 'z'
        },
        {
            case: '2 char - uppercase',
            field: 's',
            changing: 'UP'
        },
        {
            case: '3 char - mix case',
            field: 's',
            changing: 'tHE'
        },
        {
            case: '4 char - mix case',
            field: 's',
            changing: 'dArK'
        },

    ]

};

function setParamQuery() {
    return {
        apikey: '8bbd3047',
        s: 'lord'
    }
}

function setBodyRequest2() {
    return {
        fullname: 'QA Testing',
        title: 'tuan',
        phone_number: '0834344545333',
        email: 'yos@test.com',
    }
}

function setBodyRequestBook() {
    return {
        name: 'Yosia Testing',
        title: 'tuan',
        phone_number: '0834344545333',
        email: 'yos@test.com',
    }
}

module.exports = {
    arrayParam,
    setParamQuery,
    setBodyRequest2,
    setBodyRequestBook,
};
