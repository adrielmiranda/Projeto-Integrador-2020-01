package br.com.integrador.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "laboratorio_sala")
public class LaboratorioSala {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "lab_id")
	private Long id;
	
	@Column(name = "lab_nome")//limitar em 40 caracteres.
	//@Size( max = 40)
	private String nome;

	public LaboratorioSala() {
		super();
	}

	public LaboratorioSala(Long id, String nome) {
		super();
		this.id = id;
		this.nome = nome;
	}

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public String getNome() {
		return nome;
	}

	public void setNome(String nome) {
		this.nome = nome;
	}
	
	
}
