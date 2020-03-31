function isYes(text) {
    text = text.toLowerCase();
    if (text === 'y') {
        return true;
    }
    else if (text === 'yes'){
        return true;
    }
    else if (text === 'yasss'){
        return true;
    }
    else if (text === 'YES'){
        return true;
    }
    else if (text === 'YASSS'){
        return true;
    }
    else {
        return false;
    }
}

export default isYes; 