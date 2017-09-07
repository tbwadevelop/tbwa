<?php 
  $footer_logo_file = file_load(variable_get('footer_logo', ''));
  $footer_logo_path = '';
  if (isset($footer_logo_file->uri)) {
    $footer_logo_path = file_create_url($footer_logo_file->uri);
  }
?>

<div class ="col-md-4 col-sm-4 col-xs-12">
  <img src="<?php print $footer_logo_path ?>">  
</div>
<div class ="col-md-4 col-sm-4 col-xs-12">
  <p> <?php print variable_get('footer_text','copyright')?> </p>
</div>
<div class ="col-md-4 col-sm-4 col-xs-12">
  <ul>
    <li>facebook</li>
    <li>twitter</li>
  </ul>
</div>