package br.com.integrador.resource;

import java.net.URI;
import java.util.List;
import java.util.Optional;

import javax.servlet.http.HttpServletResponse;

import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;

import br.com.integrador.model.TipoServico;
import br.com.integrador.repository.TipoServicoRepository;

@CrossOrigin(origins = "http://localhost:4200")
@RestController
@RequestMapping("/tipo")
public class TipoServicoResource {

	@Autowired
	private TipoServicoRepository tiposervicorepository;
	
	@GetMapping
	public List<TipoServico> list() {
		return tiposervicorepository.findAll();
	}
	
	@GetMapping("/{id}")
	public Optional<TipoServico> findById(@PathVariable Long id) {
		return tiposervicorepository.findById(id);
	}
	
	@PostMapping
	public ResponseEntity<TipoServico> create(@RequestBody TipoServico TipoServico, HttpServletResponse response) {
		TipoServico save = tiposervicorepository.save(TipoServico);
		URI uri = ServletUriComponentsBuilder.fromCurrentRequestUri().path("/{id}").buildAndExpand(save.getId()).toUri();
		return ResponseEntity.created(uri).body(save);
	}
	
	@DeleteMapping("/{id}")
	@ResponseStatus(HttpStatus.NO_CONTENT)
	public void delete(@PathVariable Long id) {
		tiposervicorepository.deleteById(id);
	}
	
	@PutMapping("/{id}")
	public ResponseEntity<TipoServico> update(@PathVariable Long id,  @RequestBody TipoServico TipoServico) {
		Optional<TipoServico> TipoServicoBanco = tiposervicorepository.findById(id);
		BeanUtils.copyProperties(TipoServico, TipoServicoBanco.get(), "id");
		tiposervicorepository.save(TipoServicoBanco.get());
		return ResponseEntity.ok(TipoServico);
	}
}
