<?php
/**
 * @file
 * The primary PHP file for this theme.
 */


function recetas_preprocess_page (&$variables){
    drupal_add_css(drupal_get_path('theme','recetas'). '/css/style.css');
}