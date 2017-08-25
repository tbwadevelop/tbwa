<?php

/**
 * Implements hook_block_info().
 */
function agenda_block_info() {
  $blocks['modals'] = array(
    'info' => t('Request Modals'),
    'cache' => DRUPAL_NO_CACHE
  );
 return $blocks;
}


/**
 * Implements hook_block_configure().
 */
function agenda_block_configure($delta = '') {
  $form = array();
  if ($delta == 'modals') {
	    $form['popup'] = array(
	      '#type' => 'textfield',
	      '#title' => t('Please write  form_id entity render'),
	      '#default_value' => variable_get('popup'),
	    );
      $form['link'] = array(
        '#type' => 'textfield',
        '#title' => t('Please write the name button'),
        '#default_value' => variable_get('link'),
      );
      $form['content_type'] = array(
        '#type' => 'textfield',
        '#title' => t('Please write the machine_name Content Type'),
        '#default_value' => variable_get('content_type'),
      );            
  }
  return $form;
}

/**
 * Implementation of hook_block_save().
 */
function agenda_block_save($delta = '', $edit = array()) {
   switch ($delta) {
   	case 'modals':
   		variable_set('popup', $edit['popup']);
      variable_set('link',  $edit['link']);
      variable_set('content_type',  $edit['content_type']);
   		break;
   }
}

/**
 * Implements hook_block_view().
 */
function agenda_block_view($delta = '') {
  $block = array();

  switch ($delta) {
    case 'modals':
      $block['subject'] = t('Disponibilidad');
      $block['content'] = modals_render();
      break;
    
  }
  return $block;
}

function modals_render(){
 
 $block = array();

 ctools_include('modal');
 ctools_modal_add_js(); 
 
 $block['content']['popud'][] = array(
      '#prefix' => '<div id="magical-modal-link">' . l(variable_get('link'), 'request/nojs', 
                       array('attributes' => array('class' => 'ctools-use-modal'))),
      '#suffix' => '</div>',
   );
  return $block;
 }
