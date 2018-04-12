<?php
/**
 * @file
 * contentdispo.features.taxonomy.inc
 */

/**
 * Implements hook_taxonomy_default_vocabularies().
 */
function contentdispo_taxonomy_default_vocabularies() {
  return array(
    'disponibilidad_repeticion' => array(
      'name' => 'Disponibilidad repetición',
      'machine_name' => 'disponibilidad_repeticion',
      'description' => 'Tiempo de repetición de la disponibilidad',
      'hierarchy' => 0,
      'module' => 'taxonomy',
      'weight' => 0,
      'rdf_mapping' => array(
        'rdftype' => array(
          0 => 'skos:ConceptScheme',
        ),
        'name' => array(
          'predicates' => array(
            0 => 'dc:title',
          ),
        ),
        'description' => array(
          'predicates' => array(
            0 => 'rdfs:comment',
          ),
        ),
      ),
    ),
    'motivos_de_consulta' => array(
      'name' => 'Motivos de consulta',
      'machine_name' => 'motivos_de_consulta',
      'description' => 'Lista de motivos de consultas',
      'hierarchy' => 0,
      'module' => 'taxonomy',
      'weight' => 0,
      'rdf_mapping' => array(
        'rdftype' => array(
          0 => 'skos:ConceptScheme',
        ),
        'name' => array(
          'predicates' => array(
            0 => 'dc:title',
          ),
        ),
        'description' => array(
          'predicates' => array(
            0 => 'rdfs:comment',
          ),
        ),
      ),
    ),
    'tipo_de_servicio' => array(
      'name' => 'Tipo de servicio',
      'machine_name' => 'tipo_de_servicio',
      'description' => 'Lista de servicios',
      'hierarchy' => 0,
      'module' => 'taxonomy',
      'weight' => 0,
      'rdf_mapping' => array(
        'rdftype' => array(
          0 => 'skos:ConceptScheme',
        ),
        'name' => array(
          'predicates' => array(
            0 => 'dc:title',
          ),
        ),
        'description' => array(
          'predicates' => array(
            0 => 'rdfs:comment',
          ),
        ),
      ),
    ),
  );
}
