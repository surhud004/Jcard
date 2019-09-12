function lemmatize_it(sentence) {
	var posTagger = require( 'wink-pos-tagger' );
	var tagger = posTagger();
	var inputsentence = sentence.toLowerCase().replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g,"").replace(/\s{2,}/g," ");
	var getdata = tagger.tagSentence(inputsentence);
	var getdataString = JSON.stringify(getdata);
	var data = JSON.parse(getdataString);
	var lemmas = [];
	for(var i=0; i<data.length; i++)
	{
		if(data[i].hasOwnProperty('lemma')) {
			lemmas.push(data[i].lemma);	
		} else {
			lemmas.push(data[i].value);
		}
	}
	return lemmas;
	// -> [ { value: 'He', tag: 'word', normal: 'he', pos: 'PRP' },
	//      { value: 'is', tag: 'word', normal: 'is', pos: 'VBZ', lemma: 'be' },
	//      { value: 'trying', tag: 'word', normal: 'trying', pos: 'VBG', lemma: 'try' },
	//      { value: 'to', tag: 'word', normal: 'to', pos: 'TO' },
	//      { value: 'fish', tag: 'word', normal: 'fish', pos: 'VB', lemma: 'fish' },
	//      { value: 'for', tag: 'word', normal: 'for', pos: 'IN' },
	//      { value: 'fish', tag: 'word', normal: 'fish', pos: 'NN', lemma: 'fish' },
	//      { value: 'in', tag: 'word', normal: 'in', pos: 'IN' },
	//      { value: 'the', tag: 'word', normal: 'the', pos: 'DT' },
	//      { value: 'lake', tag: 'word', normal: 'lake', pos: 'NN', lemma: 'lake' },
	//      { value: '.', tag: 'punctuation', normal: '.', pos: '.' } ]
}

if (typeof window !== 'undefined') {
    window.lemmatize_it = function(sentence) {
        return lemmatize_it(sentence);
    }
}