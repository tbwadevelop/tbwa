<?php
  $languages = language_list();
  $user_menu_links = menu_load_links('menu-user-menu');
  $services_links = menu_load_links('menu-services');
?>

<div class = "user-menu container-fluid">
  <div class = "col-md-3 col-sm-3 col-xs-12">
    <p><?php print l(t("Return to the institutional site"),"https://uniandes.edu.co/") ?></p>
  </div>
  <div class = "col-md-6 col-sm-6 col-xs-12">
    <ul class ="profile-list">
      <li><?php print t("I'm").":"?></li>
      <?php foreach($user_menu_links as $link): ?>
        <li> <?php print l($link['link_title'],$link['link_path']) ?> </li>
      <?php endforeach; ?>
    </ul>
  </div>
  <div class = "col-md-3 col-sm-3 col-xs-12">
    <div class = "col-md-6 col-sm-6 col-xs-12">
      <div class="dropdown">
        <button class="btn dropdown-toggle" type="button" data-toggle="dropdown"><?php print t("Service Guide")?><span class="caret"></span></button>
        <ul class = "services dropdown-menu">     
          <?php foreach($services_links as $link): ?>
            <li><?php print l($link['link_title'],$link['link_path'])?></li>
          <?php endforeach; ?>
        </ul>
      </div>
    </div>
    <div class = "col-md-2 col-sm-2 col-xs-12">
      <div class ="user-mail">
        <p><?php print t("Mail")?></p>
      </div>
    </div>
    <div class = "col-md-1 col-sm-1 col-xs-12">
      <div class="dropdown">
        <button class="btn dropdown-toggle" type="button" data-toggle="dropdown"><?php print t("ES")?><span class="caret"></span></button>
        <ul class ="language dropdown-menu">
          <?php foreach ($languages as $language ): ?>
            <li><?php print l($language->native,$language->prefix) ?></li>
          <?php endforeach; ?>
        </ul>
      </div>
    </div>
  </div>
</div>