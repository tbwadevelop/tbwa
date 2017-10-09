<?php


/**
 * Implements hook_form().
 */
function agenda_form_records($form, &$form_state) {
  $id = 'hola';
 $form_state['storage']['participants'] = isset($form_state['storage']['participants']) ? $form_state['storage']['participants'] : 0;

  $form['name'] = array(
    '#title' => t('Name'),
    '#type' => 'textfield',
  );

  $form['participants'] = array(
    '#type' => 'container',
    '#tree' => TRUE,
    '#prefix' => '<div id="participants">',
    '#suffix' => '</div>',
  );
  
  if ($form_state['storage']['participants']) {
    for ($i = 1; $i <= $form_state['storage']['participants']; $i++) {
      $form['participants'][$i] = array(
        '#type' => 'fieldset',
        '#tree' => TRUE,
      );

      $form['participants'][$i]['name'] = array(
        '#title' => t('Name'),
        '#type' => 'textfield',
      );
    }
  }

  $form['add_participant'] = array(
    '#type' => 'button',
    '#value' => t('Add A Participant'),
    '#href' => '',
    '#ajax' => array(
    'callback' => 'agenda_ajax_callback',
    'wrapper' => 'participants',
   ),
  );

 $form['submit'] = array(
      '#type' => 'submit',
      '#value' => t('Guardar'),
      '#name' => 'save_shipping_rates',
      '#ajax' => array(
        'wrapper' => $id,
        'callback' => 'agenda_ajax_callback',
        ),
      '#attributes' => array( 
        'class' => array('btn-success-third')
        ),
      '#validate' => array('agenda_form_records_validate'),
      '#submit' => array('agenda_form_records_submit'),
  );

  $form_state['storage']['participants']++;
  return $form;
}

function agenda_ajax_callback($form, $form_state) {
  return $form['participants'];
}

function agenda_form_records_validate($form, $form_state){
  drupal_set_message(t("validate"), 'status', FALSE);
}

function agenda_form_records_submit($form, $form_state){
  drupal_set_message(t("submit"), 'status', FALSE);
}
