package br.com.integrador.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import br.com.integrador.model.Pessoa;
import br.com.integrador.model.PessoaLista;

public interface PessoaRepository extends JpaRepository< Pessoa ,Long> {

	@Query(value = "select pes_id as id, pes_nome as nome from pessoa where pes_perfil = ?1", nativeQuery = true)
    List<PessoaLista> listaPessoaPorPerfil(String perfil);
	
	//@Query(value ="select pes_id as id, pes_nome as nome from pessoa where pes_login = ?1 and pes_senha = ?2", nativeQuery = true)
    //List<PessoaLista> findFiltroUsuario(String login, String senha);
	
	@Query(value = "select id, nome, perfil from Pessoa where login = ?1 and senha = ?2 ", nativeQuery = false)
	Object[] findFiltroUsuario(String login, String senha);

}
