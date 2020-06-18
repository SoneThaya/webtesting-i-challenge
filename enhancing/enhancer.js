module.exports = {
  succeed,
  fail,
  repair,
  get,
};

function succeed(item) {
  // return { ...item };
  if (item.enhancement !== 20) {
    return item.enhancement + 1
  } else {
    return item.enhancement
  }
}

function fail(item) {
  
  if (item.enhancement < 15) {
    item.durability = item.durability - 5
  } else if (item.enhancement === 15 || item.enhancement === 16) {
    item.durability = item.durability - 10
  } else if (item.enhancement > 16) {
    item.enhancement = item.enhancement - 1
    item.durability = item.durability - 10
  }
  return item
}

function repair(item) {
  // return { ...item };
  let difference = 0
  if (item.durability === 100) {
    return item.durability
  } else {
    difference = 100 - item.durability
  }
  return difference + item.durability
}

function get(item) {
  if (item.enhancement > 0) {
    let level = item.enhancement
    item.name = `[+${level}]` + item.name
  }
  return item
}
