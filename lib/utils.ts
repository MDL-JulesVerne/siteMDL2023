export function stringToColor(string: string) {
    // let hash = 0;
    // let i;

    // /* eslint-disable no-bitwise */
    // for (i = 0; i < string.length; i += 1) {
    //     hash = string.charCodeAt(i) + ((hash << 5) - hash);
    // }

    // let color = '#';

    // for (i = 0; i < 3; i += 1) {
    //     const value = (hash >> (i * 8)) & 0xff;
    //     color += `00${value.toString(16)}`.slice(-2);
    // }
    /* eslint-enable no-bitwise */
    const color = "#ff3d00";
    return color;
}

export function toUpper(str: string) {
    return str
        .toLowerCase()
        .split(' ')
        .map(function (word) {
            return word[0].toUpperCase() + word.substr(1);
        })
        .join(' ');
}

export function stringAvatar(name: string) {
    return {
        sx: {
            bgcolor: stringToColor(name),
        },
        children: `${name.split(' ')[0][0]}${name.split(' ').length > 1 ? name.split(' ')[1][0] : ''}`,
    };
}