var hour8 = $('#8');
var hour9 = $('#9');
var hour10 = $('#10');
var hour11 = $('#11');
var hour12 = $('#12');
var hour1 = $('#1');
var hour2 = $('#2');
var hour3 = $('#3');
var hour4 = $('#4');
var hour5 = $('#5');
var hour6 = $('#6');
var time = period();

function savePlan() {
    $("currentDay").text(period().format("dddd.MMMM Do UYYYY"));
    $(".time-block").each(function() {
        var id = $(this).attr("id");
        var schedule = localStorage.getItem(id);
        if (schedule !== null) {
            $(this).children(".schedule").val(schedule);
        }
    });
}
savePlan();
var saveBtn = $(".saveBtn");
saveBtn.on("click", function(){
    var time = $(this).parent().attr("id");
    var schedule = $(this).sibilings(".schedule".val());
    localStorage.setItem(time, schedule);
});

function tenses() {

}
tenses();

