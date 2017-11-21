<?php

/**
 * Implements hook_form().
 */

function agenda_form_records($form, &$form_state) {

$form['field_container'] = [
    '#type' => 'container',
    '#weight' => 80,
    '#tree' => TRUE,
    // Set up the wrapper so that AJAX will be able to replace the fieldset.
    '#prefix' => '<div id="js-ajax-elements-wrapper">',
    '#suffix' => '</div>',
  ];

  $form_state['field_deltas'] = isset($form_state['field_deltas']) ? $form_state['field_deltas'] : range(0, 3);

  $field_count = $form_state['field_deltas'];

  foreach ($field_count as $delta) {
    $form['field_container'][$delta] = [
      '#type' => 'container',
      '#attributes' => [
        'class' => ['container-inline'],
      ],
      '#tree' => TRUE,
    ];

    $form['field_container'][$delta]['field1'] = [
      '#type' => 'textfield',
      '#title' => t('Field 1 - ' . $delta),
      '#size' => 10,
    ];

    $form['field_container'][$delta]['field2'] = [
      '#type' => 'textfield',
      '#title' => t('Field 2 - ' . $delta),
      '#size' => 10,
    ];

    $form['field_container'][$delta]['remove_name'] = [
      '#type' => 'submit',
      '#value' => t('-'),
      '#submit' => ['agenda_ajax_example_add_more_remove'],
      // See the examples in ajax_example.module for more details on the
      // properties of #ajax.
      '#ajax' => [
        'callback' => 'agenda_ajax_example_add_more_remove_callback',
        'wrapper' => 'js-ajax-elements-wrapper',
      ],
      '#weight' => -50,
      '#attributes' => [
        'class' => ['button-small'],
      ],
      '#name' => 'remove_name_' . $delta,
    ];
  }

  $form['field_container']['add_name'] = [
    '#type' => 'submit',
    '#value' => t('Add one more'),
    '#submit' => ['agenda_ajax_example_add_more_add_one'],
    // See the examples in ajax_example.module for more details on the
    // properties of #ajax.
    '#ajax' => [
      'callback' => 'agenda_ajax_example_add_more_add_one_callback',
      'wrapper' => 'js-ajax-elements-wrapper',
    ],
    '#weight' => 100,
  ];

  $form['other_field'] = [
    '#type' => 'textfield',
    '#title' => t('Other field'),
  ];

  return $form;

}
function agenda_ajax_example_add_more_remove($form, &$form_state) {
  $delta_remove = $form_state['triggering_element']['#parents'][1];
  $k = array_search($delta_remove, $form_state['field_deltas']);
  unset($form_state['field_deltas'][$k]);

  $form_state['rebuild'] = TRUE;
  drupal_get_messages();
}

function agenda_ajax_example_add_more_remove_callback($form, &$form_state) {
  return $form['field_container'];
}

function agenda_ajax_example_add_more_add_one($form, &$form_state) {
  $form_state['field_deltas'][] = count($form_state['field_deltas']) > 0 ? max($form_state['field_deltas']) + 1 : 0;
  
  $form_state['rebuild'] = TRUE;
  drupal_get_messages();
}

function agenda_ajax_example_add_more_add_one_callback($form, $form_state) {
  return $form['field_container'];
}