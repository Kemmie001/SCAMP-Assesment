function sequence(n){
    const series = [];
    for(var i = 0; i <n; i++ ){
        if(i == 0 || i == 1){
            series.push(i);
        } else {
            var a = series[i - 1];
            var b = series[i - 2];
            series.push(a + b);
        }
    }
    return series
}
console.log(sequence(8))
 