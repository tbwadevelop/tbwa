<div class="operation-node">
<?php ctools_include('modal'); ctools_include('ajax'); ?>

<div class="create meeting">
<?php 
// print(l(t('Create meeting'), 'meeting-new/'.arg(1).'/nojs', 
//       array('attributes' => array('class' => 'ctools-use-modal'))));
print(l(t('Create meeting'), 'crear/'.arg(1).'/citas'));

?>
</div>


<div class="edit availability">
<?php 
print(l(t('Edit availability'), 'availability-edit/'.arg(1).'/nojs', 
      array('attributes' => array('class' => 'ctools-use-modal'))));
?>
</div>
<div class="delete availability">
<?php 
print(l(t('Delete availability'), 'availability-delete/'.arg(1).'/nojs', 
      array('attributes' => array('class' => 'ctools-use-modal'))));
?>
</div>
</div>