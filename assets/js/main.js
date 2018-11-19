// tooltip everywhere
$(function () {
    $('[data-toggle="tooltip"]').tooltip()
  })

  function checkForm(form)
  {
    if(form.checkboxfield.checked) {
      alert("The checkbox IS checked");
    } else {
      alert("The checkbox IS NOT checked");
    }
    return false;
  }