<?php 


define('FPC', 0); 
define('FCT', 1); 
define('FCA', 2); 
define('FCC', 3); 


// Form  for created quotes 
function agenda_records_form($form, &$form_state) {

 if (is_numeric(arg(1))) {
     $node = node_load(arg(1));
    if ($node->type == 'disponibilidad') {
         variable_set('nid', $node->nid);
         $wrapper = entity_metadata_wrapper('node', $node);
         variable_set('cupo', $wrapper->field_cupo->value());
    }
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
    '#value' => t('Add'),
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
            'class' => ['container-inline container'],
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

        $form['field_container'][$delta]['motivo'] = [
          '#type' => 'textfield',
          '#title' => t('Motivo de consulta'),
          '#size' => 10,
        ];


        $form['field_container'][$delta]['remove_name'] = [
          '#type' => 'submit',
          '#value' => t('Cancelar Cita'),
          '#prefix' => '<div id="disable-quote"><label>Cancelar citas</label>',
          '#suffix' => '</div>',
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
      '#value' => t('Save'),
      '#ajax' => [
        'callback' => 'agenda_records_form_submit',
        'wrapper' => 'js-ajax-elements-wrapper',
       ], 
    ];

    $form['cancelar'] = [
      '#type' => 'submit',
      '#value' => t('Cancel'),
      '#ajax' => [
        'callback' => 'agenda_records_cancel_submit',
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
  Global $user;
  $node = node_load(variable_get('nid'));
  $nwrapper = entity_metadata_wrapper('node', $node);
  
  if (empty($nwrapper->field_profile->value())) {
     $nwrapper->field_profile->set($user->uid); $nwrapper->save();
      foreach ($form_state['values']['field_container'] as $key => $value) {
         $uid = trim($value['uid']); $tid = trim($value['motivo']);
         if (is_numeric($uid)) {
              agenda_save_users($uid,variable_get('nid'),$tid);
              $users .='<div id="users-created">Usuario :'.$uid.'</div> <br>';
         }
      }
  }
  return '<div id="js-ajax-elements-wrapper">Citas Asignadas Disponibilidad '.variable_get('nid').'</div>';
}

function agenda_save_users($uid, $nid, $tid){
     $node = node_load($nid);
     $user = user_load($uid);
     $uwrapper = entity_metadata_wrapper('user', $user);
     $values = array();
     $values['field_name'] = 'field_citas_agenda';   
     $values['field_collec_nombre'][LANGUAGE_NONE][0]['value']   = $uwrapper->field_nombre->value();
     $values['field_collec_apellido'][LANGUAGE_NONE][0]['value'] = $uwrapper->field_apellido->value();
     $values['field_collec_codigo'][LANGUAGE_NONE][0]['value']   = $uwrapper->field_codigo->value();
     $values['field_collec_usuario'][LANGUAGE_NONE][0]['value']  = $uwrapper->field_email->value();
     $values['field_collec_numero_de_documento'][LANGUAGE_NONE][0]['value'] = $uwrapper->field_numero_de_documento->value();
     $values['field_collec_motivo'][LANGUAGE_NONE][0]['tid']   = array($tid);
     $values['field_collec_uid'][LANGUAGE_NONE][0]['value']    = $user->uid;
     $field_entity = entity_create('field_collection_item', $values);
     $field_entity->setHostEntity('node', $node);
     $field_entity->save();
}


function agenda_qoute_form($form, &$form_state){
  $form['options_qoute'] = [
      '#type'          => 'select',
      '#title'         => t('Project status'),
      '#default_value' => variable_get('options_qoute'),
      '#options'       => [
        FPC => t('Filtrar por'),     // Filtra Por Citas
        FCT => t('Todas las citas'), // Full Citas Totales
        FCA => t('Citas abiertas'),  // Full Citas Abiertas
        FCC => t('Citas cerradas'),  // Full Citas Cerradas
      ],
      // Define the onChange like so:
      '#attributes'    => [
        'onChange' => 'this.form.submit();',
      ],
    ];

    $form['complete_projects_submit'] = [
      '#type'       => 'submit',
      '#value'      => t('Apply'),
      // The submit itself is necessary, but now it can be hidden:
      '#attributes' => [
        'style' => ['display: none;'],
      ],
    ];
  return $form;
}

function agenda_qoute_form_submit($form, &$form_state){
  variable_set('options_qoute', $form_state['values']['options_qoute']);
}

/**
 * Implements hook_form() for delete node(obj) bundle (availability).
 */

function agenda_form($form, &$form_state) {
  $form = array();
 
  $form['from'] = array(
   '#type'=> 'item',
   '#markup' => t('¿Are you sure you want to delete? ').$form_state["nid"],
 );

  $form['submit'] = array(
    '#type' => 'submit',
    '#value' => t('Delete'),
  );
  return $form;
}

/**
 * Implements hook_form_submit() delete node bundle (availability).
 */

function agenda_form_submit($form, &$form_state) {
  $form = array();
  ctools_include('modal');
  ctools_include('ajax');
  node_delete($form_state["nid"]);
  $form_state['ajax_commands'][] = ctools_modal_command_dismiss();
  $form_state['ajax_commands'][] = ctools_ajax_command_reload();
  return $form;
}



function agenda_records_cancel_submit($form, &$form_state) {
  // $form = array();
  // ctools_include('modal');
  // ctools_include('ajax');
  // $form_state['ajax_commands'][] = ctools_modal_command_dismiss();
  // $form_state['ajax_commands'][] = ctools_ajax_command_reload();
  // return $form;

ctools_include('ajax');
ctools_add_js('ajax-responder');
// Path to redirect to
$commands[] = ctools_ajax_command_redirect('crear/'.variable_get('nid').'/citas');
// you can also use ctools_ajax_command_reload() –  xurshid29
print ajax_render($commands);
  return drupal_exit();
}