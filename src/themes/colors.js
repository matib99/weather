const YELLOW = '#F7EE7F'
const RED = '#ED254E'
const BLUE = '#5CB6EB'
const WHITE = '#E8E1EF'
const GREY = '#25283D'


export const colorsLight = {
    background: WHITE,
    text: GREY,

    button: {
        basic: {
            background: BLUE,
            text: WHITE
        },
        important: {
            background: RED,
            text: WHITE
        },
    },

    slider: {
        bar: GREY,
        handle: RED
    },

    switch: {
        background: YELLOW,
        border: GREY,
        basic: {
            background: GREY,
            text: YELLOW
        },
        inverted: {
            background: YELLOW,
            text: GREY,
        }
    },

    weather: {
        background: WHITE,
        text: GREY,
        day: {
            basic:{
                background: YELLOW,
                text: RED,
            },
            selected:{
                background: RED,
                text: YELLOW,
            }
        },
        hour: {
            background: WHITE,
            text: GREY,
        },
        main:{
            background: YELLOW,
            text: GREY,
        }
    },

    search: {
        background: GREY,
        text: GREY
    },

    options: {
        background: WHITE,
        text: GREY
    },

    gif: {
        background: WHITE
    }

};



export const colorsDark = {
    background: GREY,
    text: WHITE,

    button: {
        basic: {
            background: GREY,
            text: WHITE
        },
        important: {
            background: RED,
            text: WHITE
        },
    },

    slider: {
        bar: WHITE,
        handle: RED
    },

    switch: {
        background: BLUE,
        border: WHITE,
        basic: {
            background: WHITE,
            text: BLUE
        },
        inverted: {
            background: BLUE,
            text: WHITE,
        }
    },

    weather: {
        background: GREY,
        text: WHITE,
        day: {
            basic:{
                background: BLUE,
                text: YELLOW,
            },
            selected:{
                background: YELLOW,
                text: BLUE,
            }
        },
        hour: {
            background: GREY,
            text: WHITE,
        },
        main:{
            background: BLUE,
            text: YELLOW,
        }
    },

    search: {
        background: BLUE,
        text: GREY
    },

    options: {
        background: GREY,
        text: WHITE
    },

    gif: {
        background: GREY
    }

};