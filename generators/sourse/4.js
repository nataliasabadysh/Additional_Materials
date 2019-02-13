//  yield  - можно использовать только внутри генераторов // yield = return 

// Error
function* createIterator(items) {
    items.forEach(item => yield item + 1 );
}
const iterator = createIterator ([1,2]);

console.log(iterator.next());   //  Unexpected reserved word 'yield'





