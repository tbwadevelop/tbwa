<?php 
  $logo_header_file = file_load(variable_get('logo_header', ''));
  $logo_header_path = '';
  if (isset($logo_header_file->uri)) {
    $logo_header_path = file_create_url($logo_header_file->uri);
  }
  $logo_offer_file = file_load(variable_get('logo_offer', ''));
  $logo_offer_path = '';
  if (isset($logo_offer_file->uri)) {
    $logo_offer_path = file_create_url($logo_offer_file->uri);
  }
?>

<div class = "row">
  <div class = "col-md-6 col-sm-6 col-xs-6">    
      <img src = "<?php print $logo_header_path ?>">
  </div>
  <div class = "col-md-6 col-sm-6 col-xs-6">    
      <img src = "<?php print $logo_offer_path ?>">
  </div>
</div>
