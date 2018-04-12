<?php
/**
 * @file
 * contentdispo.features.inc
 */

/**
 * Implements hook_node_info().
 */
function contentdispo_node_info() {
  $items = array(
    'disponibilidad' => array(
      'name' => t('Disponibilidad'),
      'base' => 'node_content',
      'description' => t('Bundle para crear disponibilidades de los consejos. '),
      'has_title' => '1',
      'title_label' => t('Title'),
      'help' => '',
    ),
  );
  drupal_alter('node_info', $items);
  return $items;
}
