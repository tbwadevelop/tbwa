<?php

/**
 * Implements hook_help().
 */

function dark_view_record(){


 $block = module_invoke('dark', 'block', 'view', 'filters-custom');	

/* $block =  module_invoke('webform', 'block', 'view', 'client-block-11'); 
 print $block['content'];  */
  
  
  $header_table_edit = array(
    array('data' => t('id')),  
    array('data' => t('name')),
    array('data' => t('lastname')),
    array('data' => t('gender')),
    array('data' => t('date')),
    array('data' => t('movil')),
    array('data' => t('city')),
    array('data' => t('address')),
    array('data' => t('EDIT')),
    array('data' => t('Delete')),
  ); 

  $query = db_select('sainet', 'it') 
	    ->fields('it', array('id', 'date_send_registry', 'name', 'lastname' , 'gender' 
    	  , 'day_happy_birthday',  'city', 'phone', 'address')) 
    	->execute() 
    	->fetchAll();   

  foreach ($query as $record_edit_table) {
    $rows_table_edit[] =  
      array(  
        array(   
          'data' => $record_edit_table->id,
        ),
        array(  
           'data' => $record_edit_table->name,
        ),
        array(  
           'data' => $record_edit_table->lastname,
        ),
        array(  
           'data' => $record_edit_table->gender,
        ),
        array(  
           'data' => $record_edit_table->day_happy_birthday,
        ),                
        array(  
           'data' => $record_edit_table->city,
        ),        
        array(  
           'data' => $record_edit_table->phone,
        ),        
        array(  
           'data' => $record_edit_table->address,
        ),
        array(  
           'data' => l(t('Edit'), 'admin/config/system/records/'.$record_edit_table->id.'', array('attributes' => array('class' => array('about-link')))),
        ),
        array(  
           'data' => l(t('Delete'), 'about-us', array('attributes' => array('class' => array('about-link')))),
        ),                        
    );
  } 
   $caption_table_edit = t('Table for views information peoples');

	$per_page = 2;

	$current_page = pager_default_initialize(count($rows_table_edit), $per_page);
	// Split your list into page sized chunks
	$chunks = array_chunk($rows_table_edit, $per_page, TRUE);
	// Show the appropriate items from the list
	$output = theme('table', array('header' => $header_table_edit, 'rows' => $chunks[$current_page], 'caption'=> $caption_table_edit ));
	// Show the pager
	$output .= theme('pager', array('quantity',count($rows_table_edit)));

	return $output; 
	/*return print render($block['content']); */
}