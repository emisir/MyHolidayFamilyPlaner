package hs.aalen.Holiday;
import java.util.Optional;

import org.springframework.data.repository.CrudRepository;

public interface HolidayRepository extends CrudRepository<Holiday,String > {
    Optional<Holiday> findById(long id);

    void deleteById(long id);

}


