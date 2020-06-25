package br.com.integrador.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "tipo_servico")
public class TipoServico {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "tps_id")
	private Long id;
	
	@Column(name = "tps_descricao")//limitar em 60 caracteres.
	//@Size( max = 60)
	private String descricao;
	
	public TipoServico(Long id, String descricao) {
		super();
		this.id = id;
		this.descricao = descricao;
	}

	public TipoServico() {
		super();
	}

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public String getdescricao() {
		return descricao;
	}

	public void setdescricao(String descricao) {
		this.descricao = descricao;
	}
	
	
}
