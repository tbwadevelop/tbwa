<?php

/**
 * implementation of hook_panels_layouts()
 */
// Plugin definition
$plugin = array(
  'title' => t('Page Area'),
  'category' => t('AIRLIFE'),
  'theme' => 'panels_page',
  'regions' => array(
    'header' => t('Header'),
    'content' => t('Content'),
    'footer' => t('Footer')
  ),
);
