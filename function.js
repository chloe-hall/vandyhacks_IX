var rows = document.getElementsByTagName("textarea");

function add_fields() {
var table = document.getElementById("myTable");
var row = table.insertRow(-1).innerHTML = '<tr><td><textarea name ="Episode" placeholder="Episode" th: field = "${questionAnswerSet.question}" id="question" style = "resize: none; width:100%;"></textarea></td><td><textarea name="Podcast" placeholder ="Podcast" th: field = "${questionAnswerSet.answer}" id="answer" style="resize:none;width: 100%;"></textarea></td ><td><textarea name="Minutes" placeholder ="Minutes" th: field = "${questionAnswerSet.answer}" id="answer" style="resize:none;width: 100%;"></textarea></td ><td><button class="save"> Save </button><button class="edit"> Edit </button><button class="delete"> Delete </button></td></tr>';
}

function getData(row_num) {
	console.log(rows[row_num].value);
}

getData(1);
