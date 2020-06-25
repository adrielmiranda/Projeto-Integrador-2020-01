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

import br.com.integrador.model.Historico;
import br.com.integrador.repository.HistoricoRepository;


@CrossOrigin(origins = "http://localhost:4200")
@RestController
@RequestMapping("/historico")
public class HistoricoResource {

	@Autowired
	private HistoricoRepository historicorepository;
	
	@GetMapping
	public List<Historico> list() {
		return historicorepository.findAll();
	}
	@GetMapping("/{id}")
	public Optional<Historico> findById(@PathVariable Long id) {
		return historicorepository.findById(id);
	}
	
	@PostMapping
	public ResponseEntity<Historico> create( @RequestBody Historico Historico, HttpServletResponse response) {
		Historico save = historicorepository.save(Historico);
		URI uri = ServletUriComponentsBuilder.fromCurrentRequestUri().path("/{id}").buildAndExpand(save.getId()).toUri();
		return ResponseEntity.created(uri).body(save);
	}
	@DeleteMapping("/{id}")
	@ResponseStatus(HttpStatus.NO_CONTENT)
	public void delete(@PathVariable Long id) {
		historicorepository.deleteById(id);
	}
	
	@PutMapping("/{id}")
	public ResponseEntity<Historico> update(@PathVariable Long id, @RequestBody Historico Historico) {
		Optional<Historico> HistoricoBanco = historicorepository.findById(id);
		BeanUtils.copyProperties(Historico, HistoricoBanco.get(), "id");
		historicorepository.save(HistoricoBanco.get());
		return ResponseEntity.ok(Historico);
	}
}
