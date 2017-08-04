$(function () {
$('#formHorizontalEmail1').datetimepicker();
$('#formHorizontalEmail2').datetimepicker({
  useCurrent: false
});
$("#formHorizontalEmail1").on("dp.change", function (e) {
  $('#formHorizontalEmail2').data("DateTimePicker").minDate(e.date);
});
$("#formHorizontalEmail2").on("dp.change", function (e) {
  $('#formHorizontalEmail1').data("DateTimePicker").maxDate(e.date);
});
});
