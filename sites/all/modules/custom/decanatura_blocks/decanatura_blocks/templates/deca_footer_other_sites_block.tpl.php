<?php 
  $otros_sitios_links = menu_load_links('menu-otros-sitios');
?>

<div class = "other-sites container">
  <?php foreach($otros_sitios_links as $link):?>
    <div class ="col-md-3 col-sm-3 col-xs-12 other-site">
      <a href="<?php print $link['link_path'] ?>"> 
        <div class = "col-md-3 col-sm-3 col-xs-12">
          <img src ="<?php print file_create_url($link['options']['menu_icon']['path']) ?>">
        </div>
        <div class = "col-md-9 col-sm-9 col-xs-12">
          <p><?php print t("Los Andes")?><br><span><?php print $link['link_title'] ?></span></p>
          <div class = "col-md-9 col-sm-9 col-xs-9">
            <div class = "franja"></div>
          </div>
        </div>
      </a>
    </div>
  <?php endforeach ;?>
</div>