package cn.com.model;

import java.util.HashSet;
import java.util.Set;

public class Role {

	private Integer roleId;
	private String roleName;
	
	private Set<Ability> abilitys = new HashSet<Ability>();
	
	public Integer getRoleId() {
		return roleId;
	}
	public void setRoleId(Integer roleId) {
		this.roleId = roleId;
	}
	public String getRoleName() {
		return roleName;
	}
	public void setRoleName(String roleName) {
		this.roleName = roleName;
	}
	public Set<Ability> getAbilitys() {
		return abilitys;
	}
	public void setAbilitys(Set<Ability> abilitys) {
		this.abilitys = abilitys;
	}
	
	
	
}
