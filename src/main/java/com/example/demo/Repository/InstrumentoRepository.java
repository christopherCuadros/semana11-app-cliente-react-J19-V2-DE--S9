package com.example.demo.Repository;

import org.springframework.data.repository.CrudRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;

import com.example.demo.Model.Instrumento;

// aqui el primer valor es el nombre de la coleccion y el segundo es el nombre de la ruta para obtener los datos
@RepositoryRestResource(collectionResourceRel = "instrumentos", path = "instrumentos")
public interface InstrumentoRepository extends CrudRepository<Instrumento, Long> {
    
}
