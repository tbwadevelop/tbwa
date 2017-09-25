<?php
/**
 * @file
 * Template to display view fields as a calendar item.
 * 
 * $item 
 *   A result object for this calendar item. Note this is
 *   not a complete entity. It will contain various
 *   values as added by the row plugin, which may depend
 *   on the entity type.
 * 
 * $rendered_fields
 *   An array of the rendered html for the fields in the item,
 *   as generated by Views. This does not include excluded
 *   fields and should take into account any special processing
 *   added in the field settings.
 * 
 * Calendar info for this individual calendar item is in local time --
 * the user timezone where configurable timezones are allowed and set,
 * otherwise the site timezone. If this item has extends over more than
 * one day, it has been broken apart into separate items for each calendar
 * date and calendar_start will be no earlier than the start of
 * the current day and calendar_end will be no later than the end
 * of the current day.
 * 
 * $calendar_start - A formatted datetime start date for this item.
 *   i.e. '2008-05-12 05:26:15'.
 * $calendar_end - A formatted datetime end date for this item,
 *   the same as the start date except for fields that have from/to
 *   fields defined, like Date module dates. 
 * $calendar_start_date - a PHP date object for the start time.
 * $calendar_end_date - a PHP date object for the end time.
 * 
 * You can use PHP date functions on the date object to display date
 * information in other ways, like:
 * 
 *   print date_format($calendar_start_date, 'l, j F Y - g:ia');
 * 
 * @see template_preprocess_calendar_item.
 */
ctools_include('modal');
ctools_modal_add_js();
$index = 0;
?>

<?php if ($view->current_display == 'page_1'): ?>
  <div class="render-calendar-month"> 
      <div class="<?php print !empty($item->class) ? $item->class : 'item'; ?>">
         <div class="view-item view-item-<?php print $view->name ?>">
         <div class="count-availability"></div>
          <div class="calendar <?php print $item->granularity; ?>view">
            <?php print theme('calendar_stripe_stripe', array('item' => $item)); ?>
            <div class="<?php print $item->date_id ?> contents">
              <?php foreach ($rendered_fields as $field): ?>
                <?php if ($index++ == 0 && (isset($item->continuation) && $item->continuation)) : ?>
                <div class="continuation">&laquo;</div>
                <?php endif;?>
                <?php print $field; ?>
              <?php endforeach; ?>
            </div>  
            <?php if (isset($item->continues) && $item->continues) : ?>
            <div class="continues">&raquo;</div>
            <?php else : ?>
            <div class="cutoff">&nbsp;</div>
            <?php endif;?>
          </div> 
          </div>
      </div>
    </div>
<?php endif; ?>

<?php if ($view->current_display != 'page_1'): ?>
      <div class="<?php print !empty($item->class) ? $item->class : 'item'; ?>">
        <div class="render-disponibiliad"> 
         <div class="view-item view-item-<?php print $view->name ?>">
          <?php  
              $node = node_load($item->id); $wrapper = entity_metadata_wrapper('node', $node);
              $cupo = $wrapper->field_cupo->value(); $users = count($wrapper->field_usuario->value());
              $classes = ($cupo == $users) ? "full" : "empy";
          ?>
          <div class="calendar <?php print $item->granularity; ?>view <?php print($classes); ?>">
            <?php print theme('calendar_stripe_stripe', array('item' => $item)); ?>
             <?php echo(l('Availability', 'availability/'.$item->id.'/nojs', array('attributes' => array('class' => 'ctools-use-modal')))); ?>
            <div class="<?php print $item->date_id ?> contents">
              <?php foreach ($rendered_fields as $field): ?>
                <?php if ($index++ == 0 && (isset($item->continuation) && $item->continuation)) : ?>
                <div class="continuation">&laquo;</div>
                <?php endif;?>
                <?php print $field; ?>
              <?php endforeach; ?>
            </div>  
            <?php if (isset($item->continues) && $item->continues) : ?>
            <div class="continues">&raquo;</div>
            <?php else : ?>
            <div class="cutoff">&nbsp;</div>
            <?php endif;?>
          </div> 

          </div>
        </div>
      </div>
<?php endif; ?>




