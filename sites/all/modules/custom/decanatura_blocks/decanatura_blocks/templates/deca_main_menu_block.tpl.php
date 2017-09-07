<?php 
  $logo_andes_file = file_load(variable_get('logo_andes', ''));
  $logo_andes_path = '';
  if (isset($logo_andes_file->uri)) {
    $logo_andes_path = file_create_url($logo_andes_file->uri);
  }
  $logo_decanatura_file = file_load(variable_get('logo_decanatura', ''));
  $logo_decanatura_path = '';
  if (isset($logo_decanatura_file->uri)) {
    $logo_decanatura_path = file_create_url($logo_decanatura_file->uri);
  }
  $logo_buscador_file = file_load(variable_get('logo_buscador', ''));
  $logo_buscador_path = '';
  if (isset($logo_buscador_file->uri)) {
    $logo_buscador_path = file_create_url($logo_buscador_file->uri);
  }
  $decanatura_menu_links = menu_load_links('menu-decanatura-menu');
?>


<div class ="main-menu container-fluid">
  <div class = "col-md-12 col-sm-12 col-xs-12">
    <div class = "col-xs-12 col-md-4 col-sm-4 logos-deca-menu">
      <div class = "col-xs-6 col-md-6 col-sm-6">
        <img src ="<?php print $logo_andes_path ?>">
      </div>
      <div class = "col-xs-6 col-md-6 col-sm-6">
        <img src ="<?php print $logo_decanatura_path ?>">
      </div>
    </div>
    <div class = "col-md-7 col-sm-7 col-xs-12 links-deca-menu">
      <ul>
        <?php foreach($decanatura_menu_links as $link): ?>
          <li><?php print l($link['link_title'],$link['link_path'])?></li>
        <?php endforeach ?>
      </ul>
    </div>
    <div class = "col-md-1 col-sm-1 col-xs-12">
      <img src ="<?php print $logo_buscador_path ?>">
    </div>
  </div>
</div>