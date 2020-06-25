package br.com.integrador.repository;
import org.springframework.data.jpa.repository.JpaRepository;

import br.com.integrador.model.Historico;
public interface HistoricoRepository extends JpaRepository <Historico , Long>{

}
