<section class = "contact container-fluid">
  <div class = "container">
    <div class = "contact-form">
    <div class = "contact-info">
      <p><span>¿Te interesa un punto Airlife</span> en tu negocio </p> Contactanos?
      <p>colombia@airlife.com</p>
      <p>+ 571 154436</p>
      <p>Carrera 7 bis A 123 - 66 oficina 206, bogota</p>
    </div>
    <?php
      $block = block_load('webform', 'client-block-'.variable_get('contact_block',''));
      $block_content = _block_render_blocks(array($block));
	    $build = _block_get_renderable_array($block_content);
	    $block_rendered = drupal_render($build);
	    print $block_rendered;
	  ?>
    </div>
  </div>
  <div class = "tab">
    <p>Contactanos</p>
  </div>
</section>