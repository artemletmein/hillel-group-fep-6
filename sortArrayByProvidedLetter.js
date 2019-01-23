let arr1 = ['One','Two','Three', 'Four', 'Five', 'Six', 'Seven', 'Eight', 'Nine', 'Ten'];

function sortByLetter(arr, n) {
    let l = new RegExp(n, 'gi');
    for(let i = 0; i < arr.length; i++){
        let y = arr[i].split('');
        y.forEach(function(item){
            if(item.match(l)){
                console.log(arr[i]);
            }
        })
    }
};
sortByLetter(arr1, 'e');
