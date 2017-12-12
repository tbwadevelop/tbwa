<?php 


function agenda_records_form($form, &$form_state) {

 if (is_numeric(arg(1))) {
     $node = node_load(arg(1));
     $wrapper = entity_metadata_wrapper('node', $node);
     variable_set('cupo', $wrapper->field_cupo->value());
  } 

  $form['field_container'] = [
    '#type' => 'container',
    '#weight' => 80,
    '#tree' => TRUE,
    '#prefix' => '<div id="js-ajax-elements-wrapper">',
    '#suffix' => '</div>',
  ];

  $form_state['field_deltas'] = isset($form_state['field_deltas']) ? $form_state['field_deltas'] : range(0, 0);
  $field_count = $form_state['field_deltas'];

  $form['field_container']['add_name'] = [
    '#type' => 'submit',
    '#value' => t('Crear Cita'),
    '#submit' => ['agenda_ajax_example_add_more_add_one'],
    '#ajax' => [
      'callback' => 'agenda_ajax_example_add_more_add_one_callback',
      'wrapper' => 'js-ajax-elements-wrapper',
    ],
  ];

  foreach ($field_count as $delta) {
    if ($delta > 0 && $delta <= variable_get('cupo')) {
        $form['field_container'][$delta] = [
          '#type' => 'container',
          '#attributes' => [
            'class' => ['container-inline'],
          ],
          '#tree' => TRUE,
        ];

        $form['field_container'][$delta]['field1'] = [
          '#type' => 'textfield',
          '#title' => t('Name' . $delta),
          '#size' => 10,
        ];

        $form['field_container'][$delta]['field2'] = [
          '#type' => 'textfield',
          '#title' => t('Codigo'),
          '#size' => 10,
        ];

        $form['field_container'][$delta]['field3'] = [
          '#type' => 'textfield',
          '#title' => t('Usuario'),
          '#size' => 10,
        ];

        $form['field_container'][$delta]['remove_name'] = [
          '#type' => 'submit',
          '#value' => t('Cancelar Cita'),
          '#submit' => ['agenda_ajax_example_add_more_remove'],
          '#ajax' => [
            'callback' => 'agenda_ajax_example_add_more_remove_callback',
            'wrapper' => 'js-ajax-elements-wrapper',
          ],
          '#attributes' => [
            'class' => ['button-small'],
          ],
          '#name' => 'remove_name_' . $delta,
        ];
      }
  }

    $form['submit'] = [
      '#type' => 'submit',
      '#value' => 'Submit',
      '#ajax' => [
        'callback' => 'agenda_records_form_submit',
        'wrapper' => 'js-ajax-elements-wrapper',
       ], 
    ];

   return $form;
}

function agenda_ajax_example_add_more_add_one($form, &$form_state) {
   $arg = explode('/', $form_state['complete form']['#action']);
   drupal_add_js(array('agenda' => array('nodo' => $arg[2])), array('type' => 'setting'));
   drupal_add_js(drupal_get_path('module', 'agenda') . '/js/agenda.js');

   $form_state['field_deltas'][] = count($form_state['field_deltas']) > 0 ? max($form_state['field_deltas']) + 1 : 0;
   $form_state['rebuild'] = TRUE;
   drupal_get_messages();
}

function agenda_ajax_example_add_more_add_one_callback($form, $form_state) {
  return $form['field_container'];
}
 
function agenda_records_form_submit($form, &$form_state) {

 foreach ($form_state['values']['field_container'] as $key => $value) {
    $users .='<div id="users-created">Your name is :'.$value['field1'].'</div> <br>';
  }

  return '<div id="js-ajax-elements-wrapper">Usuario '.$key.' :'.$users.'</div>';
}