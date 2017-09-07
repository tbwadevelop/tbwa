<?php 


ctools_include('modal');
ctools_include('ajax');

print(l(t('Edit availability'), 'availability-edit/'.arg(1).'/nojs', 
      array('attributes' => array('class' => 'ctools-use-modal'))));


print(l(t('Delete availability'), 'availability-delete/'.arg(1).'/nojs', 
      array('attributes' => array('class' => 'ctools-use-modal'))));

?>