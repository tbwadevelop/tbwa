<?php 
  $logo_file = file_load(variable_get('logo', ''));
  $logo_path = '';
  if (isset($logo_file->uri)) {
    $logo_path = file_create_url($logo_file->uri);
  }
  $background_file = file_load(variable_get('background', ''));
  $background_path = '';
  if (isset($background_file->uri)) {
    $background_path = file_create_url($background_file->uri);
  }
?>
<section class = "introduction container-fluid" style="background-image:url('<?php print $background_path ?>')">
  <div class = "container">
    <div>
      <div class ="info">
        <div class ="info-container">  
          <div class = "tab">
            <p><?php print t("Welcome")?></p>
          </div>
          <div class = "logo">
            <img src = "<?php print $logo_path ?>">
          </div>
          <p><?php print variable_get('subtitle','subtitle')?></p>
          <p><?php print variable_get('description','description')?></p>
        </div>
      </div>
    </div>
  </div>
</section>
