import Validator from "../Validator"

test('testing', async () => {
    expect(Validator.validateUsername('Hello')).toEqual(true)
    expect(Validator.validateUsername('0Hello')).toEqual(false)
    expect(Validator.validateUsername('-Hello')).toEqual(false)
    expect(Validator.validateUsername('_Hello')).toEqual(false)
    expect(Validator.validateUsername('Hello0')).toEqual(false)
    expect(Validator.validateUsername('Hello_')).toEqual(false)
    expect(Validator.validateUsername('Hello-')).toEqual(false)
    expect(Validator.validateUsername('Hel8907lo')).toEqual(false)
    expect(Validator.validateUsername('He_llo')).toEqual(true)
    expect(Validator.validateUsername('He-llo')).toEqual(true)
    expect(Validator.validateUsername('He890llo')).toEqual(true)
})