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

import br.com.integrador.model.OrdemServico;
import br.com.integrador.repository.OrdemServicoRepository;


@CrossOrigin(origins = "http://localhost:4200")
@RestController
@RequestMapping("/ordem")
public class OrdemServicoResource {

	@Autowired
	private OrdemServicoRepository ordemservecorepository;
	
	@GetMapping
	public List<OrdemServico> list() {
		return ordemservecorepository.findAll();
	}
	@GetMapping("/{id}")
	public Optional<OrdemServico> findById(@PathVariable Long id) {
		return ordemservecorepository.findById(id);
	}
	
	@PostMapping
	public ResponseEntity<OrdemServico> create( @RequestBody OrdemServico OrdemServico, HttpServletResponse response) {
		OrdemServico save = ordemservecorepository.save(OrdemServico);
		URI uri = ServletUriComponentsBuilder.fromCurrentRequestUri().path("/{id}").buildAndExpand(save.getId()).toUri();
		return ResponseEntity.created(uri).body(save);
	}
	@DeleteMapping("/{id}")
	@ResponseStatus(HttpStatus.NO_CONTENT)
	public void delete(@PathVariable Long id) {
		ordemservecorepository.deleteById(id);
	}

	@PutMapping("/{id}")
	public ResponseEntity<OrdemServico> update(@PathVariable Long id,  @RequestBody OrdemServico OrdemServico) {
		Optional<OrdemServico> OrdemServicoBanco = ordemservecorepository.findById(id);
		BeanUtils.copyProperties(OrdemServico, OrdemServicoBanco.get(), "id");
		ordemservecorepository.save(OrdemServicoBanco.get());
		return ResponseEntity.ok(OrdemServico);
	}
}
