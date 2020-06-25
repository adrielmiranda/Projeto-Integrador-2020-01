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
@Table(name = "ordem_servico")
public class OrdemServico {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "ose_id")
	private Long id;
	
	@ManyToOne
	@JoinColumn(name = "tps_id")
	@NotNull
	private TipoServico tiposervico;
	
	@ManyToOne
	@JoinColumn(name = "lab_id")
	@NotNull
	private LaboratorioSala laboratoriosala;
	
	@ManyToOne
	@JoinColumn(name = "pes_id_func")
	private Pessoa pessoafunc;
	
	@ManyToOne
	@JoinColumn(name = "pes_id_cli")
	@NotNull
	private Pessoa pessoacli;
	
	@Column(name = "ose_data_emissao")
	private Date dataemissao;
	
	@Column(name = "ose_data_fechamento")
	private Date datafechamento;
	
	@Column(name = "ose_status")
	private String status;
	
	@Column(name = "ose_descricao")
	private String descricao;
	
	@Column(name = "ose_local")
	private String local;

	public OrdemServico() {
		super();
	}

	public OrdemServico(Long id, TipoServico tiposervico, LaboratorioSala laboratoriosala, Pessoa pessoafunc,
			Pessoa pessoacli, Date dataemissao, Date datafechamento, String status, String descricao, String local) {
		super();
		this.id = id;
		this.tiposervico = tiposervico;
		this.laboratoriosala = laboratoriosala;
		this.pessoafunc = pessoafunc;
		this.pessoacli = pessoacli;
		this.dataemissao = dataemissao;
		this.datafechamento = datafechamento;
		this.status = status;
		this.descricao = descricao;
		this.local = local;
	}

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public TipoServico getTiposervico() {
		return tiposervico;
	}

	public void setTiposervico(TipoServico tiposervico) {
		this.tiposervico = tiposervico;
	}

	public LaboratorioSala getLaboratoriosala() {
		return laboratoriosala;
	}

	public void setLaboratoriosala(LaboratorioSala laboratoriosala) {
		this.laboratoriosala = laboratoriosala;
	}

	public Pessoa getPessoafunc() {
		return pessoafunc;
	}

	public void setPessoafunc(Pessoa pessoafunc) {
		this.pessoafunc = pessoafunc;
	}

	public Pessoa getPessoacli() {
		return pessoacli;
	}

	public void setPessoacli(Pessoa pessoacli) {
		this.pessoacli = pessoacli;
	}

	public Date getDataemissao() {
		return dataemissao;
	}

	public void setDataemissao(Date dataemissao) {
		this.dataemissao = dataemissao;
	}

	public Date getDatafechamento() {
		return datafechamento;
	}

	public void setDatafechamento(Date datafechamento) {
		this.datafechamento = datafechamento;
	}

	public String getStatus() {
		return status;
	}

	public void setStatus(String status) {
		this.status = status;
	}

	public String getDescricao() {
		return descricao;
	}

	public void setDescricao(String descricao) {
		this.descricao = descricao;
	}

	public String getLocal() {
		return local;
	}

	public void setLocal(String local) {
		this.local = local;
	}
	
	
}
