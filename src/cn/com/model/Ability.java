package cn.com.model;

public class Ability {

	private Integer abilityId;
	private String abilityName;
	private String abilityURL;
	private Ability parentAbility;
	private Integer abilityLevel;
	public Integer getAbilityId() {
		return abilityId;
	}
	public void setAbilityId(Integer abilityId) {
		this.abilityId = abilityId;
	}
	public String getAbilityName() {
		return abilityName;
	}
	public void setAbilityName(String abilityName) {
		this.abilityName = abilityName;
	}
	
	public Ability getParentAbility() {
		return parentAbility;
	}
	public void setParentAbility(Ability parentAbility) {
		this.parentAbility = parentAbility;
	}
	public Integer getAbilityLevel() {
		return abilityLevel;
	}
	public void setAbilityLevel(Integer abilityLevel) {
		this.abilityLevel = abilityLevel;
	}
	public String getAbilityURL() {
		return abilityURL;
	}
	public void setAbilityURL(String abilityURL) {
		this.abilityURL = abilityURL;
	}
	
	
}
