<?php


/**
 * Implements hook_form().
 */
function dark_form_records($form, &$form_state) {

  $id = 'chekout-wrapper-ms';
  $form['#prefix'] = '<div id="' . $id . '">';
  $form['#suffix'] = '</div>'; 

  if (arg(4)) {
    $query = db_select('sainet', 'it') 
      ->fields('it', array('id', 'date_send_registry', 'name', 'lastname' , 'gender' 
        , 'day_happy_birthday',  'city', 'phone', 'address')) 
      ->condition('id', arg(4),'=')
      ->execute() 
      ->fetchAll();     
    $storage = reset($query);

    

  }

  //Initiation Form Billing.
  if (!isset($form_state['storage']['billing'])) {
    $form['first_set']['first'] = array(
      '#type' => 'textfield',
      '#title' => t('name all'),
      '#size' => 30,
      '#attributes' => array('placeholder' => t('Juan David')),
      '#required' => TRUE,
      '#description' => t('Example :Juan david'),
      '#default_value' => isset($storage->name) ? $storage->name : $storage->name = "", 
      );

    $form['first_set']['first_c'] = array(
      '#type' => 'textfield',
      '#title' => t('last name'),
      '#size' => 30,
      '#attributes' => array('placeholder' => t('Ceballos Bermudez')),
      '#required' => TRUE,
      '#description' => t('Example :Ceballos Bermudez'),
      '#default_value' => isset($storage->lastname) ? $storage->lastname : $storage->lastname = "", 
      );

    $form['first_set']['first_a'] = array(
      '#type' => 'select',
      '#title' => t('gender'),
      '#required' => TRUE,
      '#description' => t('Example :Men or Women'),
      '#options' => array(
        1 => t('Masculino'),
        2 => t('Femenino'),
        ),
      '#default_value' => isset($storage->gender) ? $storage->gender : $storage->gender = "", 
      );
    
    $form['first_set']['first_b'] = array(
      '#type' => 'date',
      '#title' => t('date of birth'),
      '#size' => 30,
      '#required' => TRUE,
      '#description' => t('Example :18-12-1993'),
      );

    $form['first_set']['save_fs'] = array(
      '#type' => 'button',
      '#value' => t('Next'),
      '#name' => 'save_billing',
      '#ajax' => array(
        'wrapper' => $id,
        'callback' => 'dark_form_ajax',
        ),
      '#attributes' => array(
        'class' => array('btn-success')
        ),
      '#validate' => array('dark_form_records_validate'),
      '#submit' => array('dark_form_records_submit'),
      );
  }

  //Initiation Form Shipping.
  if (isset($form_state['storage']['shipping']['access']) && $form_state['storage']['shipping']['access'] === TRUE) {
    $form['second_set']['second_a'] = array(
      '#type' => 'textfield',
      '#title' => t('Ciudad'),
      '#size' => 30,
      '#required' => TRUE,
      '#attributes' => array('placeholder' => t('Bogota D.C')),
      '#required' => TRUE,
      '#description' => t('Example : BOGOTA.DC'),
      '#default_value' => isset($storage->city) ? $storage->city : $storage->city = "", 
      );


    $form['second_set']['second_b'] = array(
      '#type' => 'textfield',
      '#title' => t('Movil'),
      '#size' => 30,
      '#required' => TRUE,
      '#attributes' => array('placeholder' => t('3209061118')),
      '#required' => TRUE,
      '#description' => t('Example : 0313333722'),
      );

    $form['second_set']['second_c'] = array(
     '#type' => 'textfield',
     '#title' => t('address'),
     '#size' => 30,
     '#required' => TRUE,
     '#attributes' => array('placeholder' => t('Cra 9 Este#9B-84 Sur')),
     '#description' => t('Example :Cra 9 Este#9B-84-SUR'),
     );

    $form['second_set']['second_btn'] = array(
      '#type' => 'button',
      '#value' => t('Next'),
      '#name' => 'save_shipping',
      '#ajax' => array(
        'wrapper' => $id,
        'callback' => 'dark_form_ajax',
        ),
      '#attributes' => array(
        'class' => array('btn-info')
        ),
      '#validate' => array('dark_form_records_validate'),
      '#submit' => array('dark_form_records_submit'),
      );
  }

  //Initiation Form Shipping Rates.

  if (isset($form_state['storage']['shipping_rates']['access']) && $form_state['storage']['shipping_rates']['access'] === TRUE) {
    $form['third_set']['third'] = array(
      '#title' => t('Confirme que desea guardar los datos'),
      '#type' => 'checkbox',
      '#size' => 30,
      '#required' => TRUE,
      '#attributes' => array('placeholder' => t('views information')),
      '#required' => TRUE,
      );
    $form['third_set']['third_btn'] = array(
      '#type' => 'button',
      '#required' => TRUE,
      '#value' => t('Guardar'),
      '#name' => 'save_shipping_rates',
      '#ajax' => array(
        'wrapper' => $id,
        'callback' => 'dark_form_ajax',
        ),
      '#attributes' => array(
        'class' => array('btn-success-third')
        ),
      '#validate' => array('dark_form_records_validate'),
      '#submit' => array('dark_form_records_submit'),
      );
  }
  return $form;

}

/*
 * Implements hook_validate().
 */

function dark_form_records_validate($form, &$form_state, $storage) {

 switch ($form_state['clicked_button']['#name']) {

  case 'save_billing':
    $form_state['storage']['billing'] = $form_state['values'];
    $form_state['storage']['shipping']['access'] = TRUE;
    break;


  case 'save_shipping':
    $form_state['storage']['shipping'] = $form_state['values'];
    $form_state['storage']['shipping_rates']['access'] = TRUE;
   break;

  case 'save_shipping_rates':
   $form_state['storage']['shipping_rates'] = $form_state['values'];
    dark_insert_values($form, $form_state);
   break;

  }
}


/*
 *Implements Hook Submit
 */
function dark_form_records_submit($form, &$form_state, $storage) {
 	$form_state['rebuild'] = TRUE;
}


/**
  * Implements hook_ajax_form.
*/

function dark_form_ajax($form, &$form_state, $valor, $key_name, $name_campo) {
  global $error;

  if ($form_state['storage']['shipping'] ['access'] === TRUE) {
     $ajax_one = array(
        '#type' => 'ajax',
        '#commands' => $commands,
      );
  }

  if ($form_state['storage']['shipping_rates']['access'] === TRUE) {
      
      $ajax_two = array(
          '#type' => 'ajax',
          '#commands' => $commands,
          );
  }

  $commands[] = ajax_command_replace('#chekout-wrapper-ms', render($form));

  return  array(
    '#type' => 'ajax',
    '#commands' => $commands,
  );
} 


/**
 * @param $nodes
 *   The node object to check if a database entry is still required.
 * @return
 *   Returns True the created folder for teaser.
 */

function dark_insert_values($form, $form_state){
 
 db_insert('sainet') -> fields(
    array(
      'date_send_registry' => '2014-12-01 00:00:00',
      'name'     => $form_state['storage']['billing']['first'],
      'lastname' =>$form_state['storage']['billing']['first_c'],
      'gender'   => $form_state['storage']['billing']['first_a'],
      'day_happy_birthday' => '2014-12-01 00:00:00',
      'city'     => $form_state['storage']['shipping']['second_a'],
      'phone'    => $form_state['storage']['shipping']['second_b'],
      'address'  => $form_state['storage']['shipping']['second_c'], 
    )
  )-> execute();  

}