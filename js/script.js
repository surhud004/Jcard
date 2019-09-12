function analyze_it() {

    var input1 = document.getElementById('sentence1').value;
    var input2 = document.getElementById('sentence2').value;
    var disp = document.getElementById('disp');

    var array1 = window.lemmatize_it(input1);
    var array2 = window.lemmatize_it(input2);
    var set1 = new Set(array1);
    var set2 = new Set(array2);
    console.log(set1);
    console.log(set2);

    var intersection = new Set([...set1].filter(x => set2.has(x)));

    /*var difference1 = new Set([...set1].filter(x => !set2.has(x)));

    var difference2 = new Set([...set1].filter(x => !set1.has(x)));*/

    var jaccard = intersection.size / (set1.size + set2.size - intersection.size);
    console.log(jaccard);

    disp.innerHTML = "Text Similarity: "+(jaccard*100).toFixed(2)+"%";
}