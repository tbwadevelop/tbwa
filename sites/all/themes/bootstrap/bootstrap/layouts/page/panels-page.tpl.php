
  <header>
    <?php if(!empty($content['header'])):?>
        <?php print $content['header']; ?>
    <?php endif;?>
  </header>

  <?php if(!empty($content['content'])):?>
    <?php print $content['content']; ?>
  <?php endif;?>

  
  <footer class="container-fluid">
    <div class ="container">
      <?php if(!empty($content['footer'])):?>
        <?php print $content['footer']; ?>
      <?php endif;?>
    </div>
  </footer>
  