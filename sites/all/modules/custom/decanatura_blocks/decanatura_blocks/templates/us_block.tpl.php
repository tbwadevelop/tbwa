<?php 
  $background_file = file_load(variable_get('us_background', ''));
  $background_path = '';
  if (isset($background_file->uri)) {
    $background_path = file_create_url($background_file->uri);
  }
?>
<section class = "we container-fluid">
  <div class = "container">
    <div class="row row-eq-height">
      <div class = "col-md-9 col-sm-9 col-xs-12">
        <h3><?php print variable_get('us_title','title')?></h3>
        <h2><?php print variable_get('us_subtitle','subtitle')?></h2>
        <p><?php print variable_get('us_description','us_description')?></p>
      </div>
      <div class = "col-md-3 col-sm-3 col-xs-12">
        <img src="<?php print $background_path ?>">
      </div>
    </div>
  </div>
</section>
