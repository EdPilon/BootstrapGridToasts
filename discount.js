$(document).ready(function() {
  $('#discount-row').on('click', '.discount', function(e) {
    e.preventDefault();
    
    let product = $(this).data('product');
    let discountTitle = 'Special Discount'; // Default title
    let discountCode = $(this).data('code') || 'N/A';
    
    $('#product').html(product);
    $('.toast .text-body-secondary').html(discountTitle);
    $('.toast .toast-body').html('Discount Code: ' + discountCode);
    
    var toastElement = $('#liveToast');
    var toast = bootstrap.Toast.getOrCreateInstance(toastElement[0], { autohide: false });
    toast.show();
  });
  
  $(document).on('keydown', function(e) {
    if (e.key === 'Escape') {
      var toastElement = $('#liveToast');
      var toast = bootstrap.Toast.getOrCreateInstance(toastElement[0]);
      toast.hide();
    }
  });
});