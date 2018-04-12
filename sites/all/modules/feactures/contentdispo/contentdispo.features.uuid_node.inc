<?php
/**
 * @file
 * contentdispo.features.uuid_node.inc
 */

/**
 * Implements hook_uuid_features_default_content().
 */
function contentdispo_uuid_features_default_content() {
  $nodes = array();

  $nodes[] = array(
  'title' => 'david - 04-03-2018',
  'log' => '',
  'status' => 1,
  'comment' => 1,
  'promote' => 0,
  'sticky' => 0,
  'type' => 'disponibilidad',
  'language' => 'es',
  'created' => 1522798097,
  'tnid' => 0,
  'translate' => 0,
  'uuid' => '92b62c2a-b195-47e3-8e3a-951bea503b8a',
  'field_tipo_de_servicio' => array(
    'und' => array(
      0 => array(
        'tid' => '0ebd4e9e-9378-41dc-b8d1-0b519b1fdca7',
        'uuid' => '0ebd4e9e-9378-41dc-b8d1-0b519b1fdca7',
      ),
    ),
  ),
  'field_cupo' => array(
    'und' => array(
      0 => array(
        'value' => 2,
        'format' => NULL,
      ),
    ),
  ),
  'field_repeticion' => array(
    'und' => array(
      0 => array(
        'tid' => '53727b1f-a29c-4646-b721-3b90a0a5b8e3',
        'uuid' => '53727b1f-a29c-4646-b721-3b90a0a5b8e3',
      ),
    ),
  ),
  'field_encabezado' => array(),
  'field_fecha' => array(
    'und' => array(
      0 => array(
        'value' => '2018-04-03 18:30:00',
        'value2' => '2018-04-03 19:30:00',
        'timezone' => 'America/Bogota',
        'timezone_db' => 'America/Bogota',
        'date_type' => 'datetime',
      ),
    ),
  ),
  'field_lugar' => array(
    'und' => array(
      0 => array(
        'value' => 'TBWA/COLOMBIA',
        'format' => NULL,
      ),
    ),
  ),
  'field_usuario' => array(),
  'field_operaciones' => array(
    'und' => array(
      0 => array(
        'value' => '6:30 PM - 7:30 PM Apoyo CADE',
        'format' => NULL,
      ),
    ),
  ),
  'field_citas_agenda' => array(),
  'field_profile' => array(),
  'field_historial_citas' => array(),
  'rdf_mapping' => array(
    'rdftype' => array(
      0 => 'sioc:Item',
      1 => 'foaf:Document',
    ),
    'title' => array(
      'predicates' => array(
        0 => 'dc:title',
      ),
    ),
    'created' => array(
      'predicates' => array(
        0 => 'dc:date',
        1 => 'dc:created',
      ),
      'datatype' => 'xsd:dateTime',
      'callback' => 'date_iso8601',
    ),
    'changed' => array(
      'predicates' => array(
        0 => 'dc:modified',
      ),
      'datatype' => 'xsd:dateTime',
      'callback' => 'date_iso8601',
    ),
    'body' => array(
      'predicates' => array(
        0 => 'content:encoded',
      ),
    ),
    'uid' => array(
      'predicates' => array(
        0 => 'sioc:has_creator',
      ),
      'type' => 'rel',
    ),
    'name' => array(
      'predicates' => array(
        0 => 'foaf:name',
      ),
    ),
    'comment_count' => array(
      'predicates' => array(
        0 => 'sioc:num_replies',
      ),
      'datatype' => 'xsd:integer',
    ),
    'last_activity' => array(
      'predicates' => array(
        0 => 'sioc:last_activity_date',
      ),
      'datatype' => 'xsd:dateTime',
      'callback' => 'date_iso8601',
    ),
  ),
  'comment_count' => 0,
  'date' => '2018-04-03 18:28:17 -0500',
  'user_uuid' => 'c5445351-b28a-4c09-ae02-563740a11f78',
);
  return $nodes;
}
