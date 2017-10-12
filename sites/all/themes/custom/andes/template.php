<?php
/**
 * @file
 * The primary PHP file for this theme.
 */

function cars_preprocess_page(&$vars, $hook) {
  if (true) {
    drupal_add_js(drupal_get_path('theme', 'andes') . '/js/Andes.js');
    $vars['scripts'] = drupal_get_js(); 
  }
}