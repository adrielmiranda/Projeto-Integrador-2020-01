package br.com.integrador.model;

import java.util.Date;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

import com.sun.istack.NotNull;

@Entity
@Table(name = "historico")
public class Historico {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "his_id")
	private Long id;
	
	@ManyToOne
	@JoinColumn(name = "ose_id")
	@NotNull
	private OrdemServico ordem;
	
	@ManyToOne
	@JoinColumn(name = "pes_id")
	@NotNull
	private  Pessoa pessoafun;
	
	@Column(name = "his_data")
	private Date data;
	
	@Column(name = "his_status")
	private String status;

	public Historico() {
		super();
	}

	public Historico(Long id, OrdemServico ordem, Pessoa pessoafun, Date data, String status) {
		super();
		this.id = id;
		this.ordem = ordem;
		this.pessoafun = pessoafun;
		this.data = data;
		this.status = status;
	}

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public OrdemServico getOrdem() {
		return ordem;
	}

	public void setOrdem(OrdemServico ordem) {
		this.ordem = ordem;
	}

	public Pessoa getPessoafun() {
		return pessoafun;
	}

	public void setPessoafun(Pessoa pessoafun) {
		this.pessoafun = pessoafun;
	}

	public Date getData() {
		return data;
	}

	public void setData(Date data) {
		this.data = data;
	}

	public String getStatus() {
		return status;
	}

	public void setStatus(String status) {
		this.status = status;
	}
	
	
}
