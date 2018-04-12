<?php
/**
 * @file
 * contentdispo.features.uuid_term.inc
 */

/**
 * Implements hook_uuid_features_default_terms().
 */
function contentdispo_uuid_features_default_terms() {
  $terms = array();

  $terms[] = array(
    'name' => 'TOR  Obligatorio Toma de decisiones',
    'description' => '',
    'format' => 'filtered_html',
    'weight' => 7,
    'uuid' => '060d30df-fce0-4127-9c51-64574df85b43',
    'vocabulary_machine_name' => 'tipo_de_servicio',
    'field_img_service' => array(
      'und' => array(
        0 => array(
          'fid' => 10,
          'title' => NULL,
          'data' => NULL,
        ),
      ),
    ),
  );
  $terms[] = array(
    'name' => 'Apoyo CADE',
    'description' => '',
    'format' => 'filtered_html',
    'weight' => 0,
    'uuid' => '0ebd4e9e-9378-41dc-b8d1-0b519b1fdca7',
    'vocabulary_machine_name' => 'tipo_de_servicio',
    'field_img_service' => array(
      'und' => array(
        0 => array(
          'fid' => 3,
          'title' => NULL,
          'data' => NULL,
        ),
      ),
    ),
  );
  $terms[] = array(
    'name' => 'Apoyo Academico',
    'description' => '',
    'format' => 'filtered_html',
    'weight' => 4,
    'uuid' => '17768723-eb14-485a-ac9d-ae8bca052246',
    'vocabulary_machine_name' => 'tipo_de_servicio',
    'field_img_service' => array(
      'und' => array(
        0 => array(
          'fid' => 7,
          'title' => NULL,
          'data' => NULL,
        ),
      ),
    ),
  );
  $terms[] = array(
    'name' => 'Apoyo en Casos Disciplinarios',
    'description' => '',
    'format' => 'filtered_html',
    'weight' => 3,
    'uuid' => '261f7d5e-77b8-4b83-8fb1-12aa19b3a299',
    'vocabulary_machine_name' => 'tipo_de_servicio',
    'field_img_service' => array(
      'und' => array(
        0 => array(
          'fid' => 6,
          'title' => NULL,
          'data' => NULL,
        ),
      ),
    ),
  );
  $terms[] = array(
    'name' => 'Apoyo Psicologico',
    'description' => '',
    'format' => 'filtered_html',
    'weight' => 1,
    'uuid' => '3b3eaca1-a24e-4433-944e-b198a15cc43d',
    'vocabulary_machine_name' => 'tipo_de_servicio',
    'field_img_service' => array(
      'und' => array(
        0 => array(
          'fid' => 4,
          'title' => NULL,
          'data' => NULL,
        ),
      ),
    ),
  );
  $terms[] = array(
    'name' => 'Apoyo en Estudios Dirigidos',
    'description' => '',
    'format' => 'filtered_html',
    'weight' => 5,
    'uuid' => '4cfccfcb-ee2b-4f0e-897a-87ecbbc7cfdd',
    'vocabulary_machine_name' => 'tipo_de_servicio',
    'field_img_service' => array(
      'und' => array(
        0 => array(
          'fid' => 8,
          'title' => NULL,
          'data' => NULL,
        ),
      ),
    ),
  );
  $terms[] = array(
    'name' => 'Diario',
    'description' => '',
    'format' => 'filtered_html',
    'weight' => 0,
    'uuid' => '53727b1f-a29c-4646-b721-3b90a0a5b8e3',
    'vocabulary_machine_name' => 'disponibilidad_repeticion',
  );
  $terms[] = array(
    'name' => 'Apoyo en Orientación Vocacional',
    'description' => '',
    'format' => 'filtered_html',
    'weight' => 2,
    'uuid' => '69fc3f94-2e10-4b6e-9f34-90b578c06a8c',
    'vocabulary_machine_name' => 'tipo_de_servicio',
    'field_img_service' => array(
      'und' => array(
        0 => array(
          'fid' => 5,
          'title' => NULL,
          'data' => NULL,
        ),
      ),
    ),
  );
  $terms[] = array(
    'name' => 'TOR  Obligatorio Motivación',
    'description' => '',
    'format' => 'filtered_html',
    'weight' => 8,
    'uuid' => '6cce7b1b-6d4d-4329-b07c-a6be9b38257c',
    'vocabulary_machine_name' => 'tipo_de_servicio',
    'field_img_service' => array(
      'und' => array(
        0 => array(
          'fid' => 11,
          'title' => NULL,
          'data' => NULL,
        ),
      ),
    ),
  );
  $terms[] = array(
    'name' => 'Semanal',
    'description' => '',
    'format' => 'filtered_html',
    'weight' => 0,
    'uuid' => '7c8bf6a0-924d-427d-a1ad-18bae5f4fe85',
    'vocabulary_machine_name' => 'disponibilidad_repeticion',
  );
  $terms[] = array(
    'name' => 'Estres',
    'description' => '',
    'format' => 'filtered_html',
    'weight' => 0,
    'uuid' => '811a1acc-4ff8-41a7-a1bf-f9a63c96c515',
    'vocabulary_machine_name' => 'motivos_de_consulta',
  );
  $terms[] = array(
    'name' => 'Bajo rendimiento',
    'description' => '',
    'format' => 'filtered_html',
    'weight' => 0,
    'uuid' => '8df9a71f-e2ec-48b2-9df2-5eec88b7edf2',
    'vocabulary_machine_name' => 'motivos_de_consulta',
  );
  $terms[] = array(
    'name' => 'Conflicto',
    'description' => '',
    'format' => 'filtered_html',
    'weight' => 0,
    'uuid' => '918d0d1c-d080-413b-a0d4-714c3ba75dd9',
    'vocabulary_machine_name' => 'motivos_de_consulta',
  );
  $terms[] = array(
    'name' => 'TOR  Obligatorio Disciplinario',
    'description' => '',
    'format' => 'filtered_html',
    'weight' => 6,
    'uuid' => 'b6cc975f-b48d-4d03-b65a-2635c05f5432',
    'vocabulary_machine_name' => 'tipo_de_servicio',
    'field_img_service' => array(
      'und' => array(
        0 => array(
          'fid' => 9,
          'title' => NULL,
          'data' => NULL,
        ),
      ),
    ),
  );
  $terms[] = array(
    'name' => 'Mensual',
    'description' => '',
    'format' => 'filtered_html',
    'weight' => 0,
    'uuid' => 'fe8e7f45-4943-4176-b6ef-5c3d3407b8d6',
    'vocabulary_machine_name' => 'disponibilidad_repeticion',
  );
  return $terms;
}
