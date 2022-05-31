package hs.aalen.Familienmitglied;


	import javax.persistence.Entity;
	import javax.persistence.Id;

	@Entity
	public class Familienmitglied {
		@Id
		private String name;
		private String id;
		private String bday;


		public Familienmitglied() {
		}

		public Familienmitglied(String name, String id, String bday) {
			super();
			this.name = name;
			this.id = id;
			this.bday = bday;

		}

		public String getName() {
			return name;
		}

		public void setName(String name) {
			this.name = name;
		}

		public String getId() {
			return id;
		}

		public void setId(String id) {
			this.id = id;
		}

		public String getBday() {
			return bday;
		}

		public void setBday(String bday) {
			this.bday = bday;


		}
	}


