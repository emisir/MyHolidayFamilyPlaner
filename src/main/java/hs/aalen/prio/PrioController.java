package hs.aalen.prio;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class PrioController {

	@Autowired
	PrioService prioService;

	// show all prios
	@RequestMapping("/prio")
	public List<Prio> getPrioList() {
		return prioService.getPrioList();
	}
	// add prio
	@RequestMapping(method = RequestMethod.POST, value = "/prio")
	public void addPrio(@RequestBody Prio prio) {
		prioService.addPrio(prio);
	}

}
