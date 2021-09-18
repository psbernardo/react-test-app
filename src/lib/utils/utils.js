const getArrayKeyIndex = (arr, value, key) => {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i][key] === value) return i;
  }
};

const getArrayIndex = (arr, value) => {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === value) return i;
  }
};

const moveArrayIndex = (arr, old_index, new_index) => {
  if (new_index >= arr.length) {
    var k = new_index - arr.length + 1;
    while (k--) {
      arr.push(undefined);
    }
  }
  arr.splice(new_index, 0, arr.splice(old_index, 1)[0]);
  return arr;
};

const tableDateTimeSortCompare = (order) => {
  return (obj1, obj2) => {
    if (!obj1.data) return order === 'asc' ? -1 : 1;
    if (!obj2.data) return order === 'asc' ? 1 : -1;

    const secondsDiff = obj1.data.seconds - obj2.data.seconds;
    if (secondsDiff !== 0) {
      return secondsDiff * (order === 'asc' ? 1 : -1);
    }

    return (obj1.data.nanos - obj2.data.nanos) * (order === 'asc' ? 1 : -1);
  };
};

const tableDateSortCompare = (order) => {
  return (obj1, obj2) => {
    if (!obj1.data) return order === 'asc' ? -1 : 1;
    if (!obj2.data) return order === 'asc' ? 1 : -1;

    const yearDiff = obj1.data.year - obj2.data.year;
    if (yearDiff !== 0) {
      return yearDiff * (order === 'asc' ? 1 : -1);
    }

    const monthDiff = obj1.data.month - obj2.data.month;
    if (monthDiff !== 0) {
      return monthDiff * (order === 'asc' ? 1 : -1);
    }
    return (obj1.data.day - obj2.data.day) * (order === 'asc' ? 1 : -1);
  };
};

const tableAmountSortCompare = (order) => {
  return (obj1, obj2) => {
    const val1 = parseFloat(obj1.data);
    const val2 = parseFloat(obj2.data);
    return (val1 - val2) * (order === 'asc' ? 1 : -1);
  };
};

export {
  getArrayKeyIndex,
  getArrayIndex,
  moveArrayIndex,
  tableDateTimeSortCompare,
  tableDateSortCompare,
  tableAmountSortCompare,
};
