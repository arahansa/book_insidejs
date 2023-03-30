const obj =  {
    key: 'land',
    value: {
        ALL: {label:'comm.all', checked: false},
        false:{label:'comm.general', checked: true},
        true:{label:'comm.land', checked: false},
    }
}

const checkedItems = [];
if (!obj.value['ALL'].checked) {
    for(let filterTypeItem in obj.value){
        if(filterTypeItem === 'ALL'){
            continue;
        }
        const item = obj.value[filterTypeItem];
        if(item.checked){
            checkedItems.push({parent: obj.key, key: filterTypeItem, label: item.label})
        }
    }
    console.log(obj['key']);

}

console.log('checkedItems :', checkedItems);
