package hs.aalen.Holiday;
import javax.persistence.Entity;
import javax.persistence.Id;


@Entity
public class Holiday {

      @Id
        private String titel;
        private String time;
        private String id;


        public Holiday() {
        }

        public Holiday(String titel, String time, String id) {
            super();
            this.titel = titel;
            this.id = id;
            this.time = time;

        }

        public String getTitel() {
            return titel;
        }

        public void setTitel(String titel) {
            this.titel = titel;
        }

        public String getId() {
            return id;
        }

        public void setId(String id) {
            this.id = id;
        }

        public String getTime() {
            return time;
        }

        public void setTime(String zeitraum) {
            this.time = time;
        }}