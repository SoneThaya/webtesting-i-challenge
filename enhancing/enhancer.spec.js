const enhancer = require('./enhancer.js');
// test away!
describe('repair()', function () {
  it('should restore item durability to 100', function () {
    const expected = 100;

    const item = {name: 'bob', enhancement: 20, durability: 90}

    const dura = enhancer.repair(item)

    expect(dura).toBe(expected);
  })
})

describe('succeed()', function () {
  it('returns a new item object modified by succeeds rules', function () {
    const expected = 20;

    const item = {name: 'bob', enhancement: 19, durability: 90}

    const enhance = enhancer.succeed(item)
    

    expect(enhance).toBe(expected)
  })
})

describe('fail()', function () {
  it('if enhancement less than 15, durability decreased by 5, if enhancement is over 15, durability of item is decreased by 10', function () {
    const expected = { name: 'bob', enhancement: 16, durability: 40 }

    const item = { name: 'bob', enhancement: 17, durability: 50 }
    
    const enhance = enhancer.fail(item)

    expect(enhance).toEqual(expected)
    

  })
})

describe('get()', function () {
  it('returns a new item with the name property modified', function () {
    const expected = { name: '[+7]bob', enhancement: 7, durability: 50 }

    const item = { name: 'bob', enhancement: 7, durability: 50 }
    
    const newName = enhancer.get(item)

    expect(newName).toEqual(expected)
  })
})