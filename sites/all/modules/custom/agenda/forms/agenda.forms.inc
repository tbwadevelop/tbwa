<?php 


function agenda_records_form($form, &$form_state) {

 if (is_numeric(arg(1))) {
     $node = node_load(arg(1));
     variable_set('nid', $node->nid);
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

        $form['field_container'][$delta]['uid'] = [
          '#type' => 'textfield',
          '#title' => t('Uid'),
          '#size' => 10,
        ];

        $form['field_container'][$delta]['name'] = [
          '#type' => 'textfield',
          '#title' => t('Name'),
          '#size' => 10,
        ];

        $form['field_container'][$delta]['codec'] = [
          '#type' => 'textfield',
          '#title' => t('Codigo'),
          '#size' => 10,
        ];

        $form['field_container'][$delta]['email'] = [
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
   drupal_add_js(array('agenda' => array('nodo' => variable_get('nid'))), array('type' => 'setting'));
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
    $uid = trim($value['uid']);
     if (is_numeric(trim($value['uid']))) {
          agenda_save_users($uid,variable_get('nid'));
          $users .='<div id="users-created">Usuario :'.$value['uid'].'</div> <br>';
     }
  }
  return '<div id="js-ajax-elements-wrapper">Citas Asignadas'.$key.'+:'.$users.'Disponibilidad'.variable_get('nid').'</div>';
}

function agenda_save_users($uid, $nid){
       $node = node_load($nid);
       $nwrapper = entity_metadata_wrapper('node', $node);
       $nwrapper->field_profile->set($uid);
       $user = user_load($uid);
       $uwrapper = entity_metadata_wrapper('user', $user);
       $values = array();
       $values['field_name'] = 'field_citas_agenda';   
       $values['field_collec_nombre'][LANGUAGE_NONE][0]['value'] = $uwrapper->field_nombre->value();
       $values['field_collec_codigo'][LANGUAGE_NONE][0]['value'] = $uwrapper->field_codigo->value();
       $values['field_collec_email'][LANGUAGE_NONE][0]['value']  = $uwrapper->field_email->value();
       $values['field_collec_uid'][LANGUAGE_NONE][0]['value']    = $user->uid;
       $field_entity = entity_create('field_collection_item', $values);
       $field_entity->setHostEntity('node', $node);
       $field_entity->save();
       $nwrapper->save();
}

