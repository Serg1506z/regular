export default class Validator {
    static validateUsername(str) {
        return new RegExp(/^[a-zA-Z][a-zA-Z0-9\-_]+[a-zA-Z]$/).exec(str) !== null
        && (!/[0-9]{4}/.test(str));
    }
}