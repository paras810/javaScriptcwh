let array =['paras','orange','banana','apple']

console.log(array)

function iterator(values) {
    let nextIndex = 0
    // we will return an object
    return{
        next: function () {
            if (nextIndex < values.length) {
                // we will return below object
                return{
                    val: values[nextIndex++],
                    done: false
                }
            } else {
                return{
                    done: true
                }
            }
        }
    }
}

// using the iterators
let nextItem = iterator(array)
console.log(nextItem.next().val);
console.log(nextItem.next().val);
console.log(nextItem.next().val);
console.log(nextItem.next().val);
console.log(nextItem.next().val);