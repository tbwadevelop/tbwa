<?php

/**
 * Implementation of hook_views_pre_view().
 */
function agenda_views_pre_render(&$view) {
   if ($view->name == 'mis_citas') {
     foreach ($view->result as $key => $value) {
         $date_disponibilidad = explode("to", $value->field_field_fecha_1[FIRST_POSITION]['rendered']['#markup']);
         $fecha_actual = strtotime(date("d-m-Y H:i:00",time()));
         $fecha_final  = strtotime(date(array_pop($date_disponibilidad))); 
         $options_qoute = variable_get('options_qoute');
         if($fecha_actual > $fecha_final && isset($options_qoute) && $options_qoute == FCA){
             unset($view->result[$key]); // Show quotes open
         }
         if($fecha_actual < $fecha_final && isset($options_qoute) && $options_qoute == FCC){
             unset($view->result[$key]); // Show quotes close
         }
     }
   }
}