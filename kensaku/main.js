//オブジェクトを配列に変換
var words = Array(questions.length);

for (var i = 0; i < questions.length; i++) {
  words[i] = questions[i].question;
}

words.sort();

//サジェスト機能
$(function() {
  $( "#SearchTxt" ).autocomplete({
    source: function(request, response) {
      var list = [];
      list = words.filter(function (word) {
        return word.indexOf(request.term) === 0 || word.toLowerCase().indexOf(request.term) === 0;
      });
      response(list);
    },
  });
});

//検索機能
const func1 = () => {
  var searchword = document.getElementById("SearchTxt").value;

    for (var i = 0; i < questions.length; i++) {
      if(questions[i].question == searchword){
        var output1 = document.getElementById("output1");
        var output2 = document.getElementById("output2");
        var output3 = document.getElementById("output3");

        output1.value = searchword;

        if (questions[i].part == 'noun') output2.value = '名詞';
        if (questions[i].part == 'verb') output2.value = '動詞';
        if (questions[i].part == 'adverb') output2.value = '副詞';
        if (questions[i].part == 'adjective') output2.value = '形容詞';

        var mean = questions[i].answer;
        output3.value = '意味: ' + mean;

        break;
      }
    }
    return false;
  }
